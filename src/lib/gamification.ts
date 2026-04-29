import { prisma } from '@/lib/prisma'
import type { Prisma, XpSource } from '@prisma/client'

/**
 * Level curve: level N requires N * 100 XP cumulative (simple, predictable).
 * Level 1 = 0 XP, Level 2 = 100 XP, Level 3 = 300 XP, Level 4 = 600 XP, ...
 * formula: xpNeededFor(level) = level*(level-1)/2 * 100
 */
export function xpNeededFor(level: number) {
  return (level * (level - 1)) / 2 * 100
}

export function levelFromXp(xp: number) {
  let lvl = 1
  while (xpNeededFor(lvl + 1) <= xp) lvl++
  return lvl
}

export function levelProgress(xp: number) {
  const level = levelFromXp(xp)
  const curr = xpNeededFor(level)
  const next = xpNeededFor(level + 1)
  return {
    level,
    xp,
    currentFloor: curr,
    nextFloor: next,
    inLevel: xp - curr,
    forLevel: next - curr,
    percent: Math.min(100, Math.round(((xp - curr) / (next - curr)) * 100)),
  }
}

function sameLocalDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isYesterday(prev: Date, today: Date) {
  const y = new Date(today)
  y.setDate(today.getDate() - 1)
  return sameLocalDay(prev, y)
}

/**
 * Award XP + coins to a user atomically, creating an XpEvent for the ledger
 * and updating cached xp/level/coins on the user row.
 *
 * Returns the new totals so UIs can show instant feedback ("+50 XP, Lvl up!").
 */
export async function awardXp(params: {
  userId: string
  xp: number
  coins?: number
  source: XpSource
  reason?: string
  tx?: Prisma.TransactionClient
}) {
  const { userId, xp, coins = 0, source, reason, tx } = params
  const db = tx ?? prisma

  if (tx) {
    const user = await db.user.findUnique({ where: { id: userId } })
    if (!user) throw new Error('User not found')

    const newXp = user.xp + xp
    const newCoins = user.coins + coins
    const prevLevel = user.level
    const newLevel = levelFromXp(newXp)

    await db.xpEvent.create({
      data: { userId, amount: xp, coins, source, reason },
    })

    const updated = await db.user.update({
      where: { id: userId },
      data: { xp: newXp, coins: newCoins, level: newLevel },
    })

    return {
      xpDelta: xp,
      coinsDelta: coins,
      xp: updated.xp,
      coins: updated.coins,
      level: updated.level,
      leveledUp: newLevel > prevLevel,
    }
  }

  return prisma.$transaction(async (transactionClient) => {
    const user = await transactionClient.user.findUnique({ where: { id: userId } })
    if (!user) throw new Error('User not found')

    const newXp = user.xp + xp
    const newCoins = user.coins + coins
    const prevLevel = user.level
    const newLevel = levelFromXp(newXp)

    await transactionClient.xpEvent.create({
      data: { userId, amount: xp, coins, source, reason },
    })

    const updated = await transactionClient.user.update({
      where: { id: userId },
      data: { xp: newXp, coins: newCoins, level: newLevel },
    })

    return {
      xpDelta: xp,
      coinsDelta: coins,
      xp: updated.xp,
      coins: updated.coins,
      level: updated.level,
      leveledUp: newLevel > prevLevel,
    }
  })
}

/**
 * Register a daily "touch" for the user. Extends streak if yesterday,
 * resets to 1 if missed a day, leaves unchanged if already counted today.
 * Awards daily-login XP on first touch of the day.
 */
export async function touchDailyStreak(userId: string) {
  const now = new Date()
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error('User not found')

  // Already logged in today — no double dipping.
  if (user.lastActiveDay && sameLocalDay(user.lastActiveDay, now)) {
    return {
      streak: user.streakCount,
      awarded: false,
      xpDelta: 0,
      coinsDelta: 0,
    }
  }

  const continued = user.lastActiveDay && isYesterday(user.lastActiveDay, now)
  const newStreak = continued ? user.streakCount + 1 : 1

  // Base daily XP + streak bonus every 5 days.
  const baseXp = 10
  const streakBonus = newStreak % 5 === 0 ? 50 : 0
  const coins = 5 + (streakBonus > 0 ? 10 : 0)

  await prisma.user.update({
    where: { id: userId },
    data: { streakCount: newStreak, lastActiveDay: now },
  })

  await awardXp({
    userId,
    xp: baseXp,
    coins,
    source: 'DAILY_LOGIN',
    reason: `Daily login (day ${newStreak})`,
  })

  if (streakBonus > 0) {
    await awardXp({
      userId,
      xp: streakBonus,
      coins: 0,
      source: 'STREAK_BONUS',
      reason: `${newStreak}-day streak bonus`,
    })
  }

  return {
    streak: newStreak,
    awarded: true,
    xpDelta: baseXp + streakBonus,
    coinsDelta: coins,
  }
}

/**
 * Bump progress on every active challenge matching a given tag.
 * Called from action endpoints (post created, poll voted, etc.).
 * Marks COMPLETED once goal is reached; XP is claimed via /api/challenges/claim.
 */
export async function progressChallengesByTag(userId: string, tag: string, amount = 1) {
  const active = await prisma.challenge.findMany({
    where: {
      OR: [{ activeUntil: null }, { activeUntil: { gte: new Date() } }],
      activeFrom: { lte: new Date() },
      description: { contains: `#${tag}` },
    },
  })

  for (const c of active) {
    const existing = await prisma.challengeProgress.findUnique({
      where: { userId_challengeId: { userId, challengeId: c.id } },
    })
    if (existing?.status === 'CLAIMED') continue

    const newProgress = (existing?.progress ?? 0) + amount
    const completed = newProgress >= c.goal

    await prisma.challengeProgress.upsert({
      where: { userId_challengeId: { userId, challengeId: c.id } },
      create: {
        userId,
        challengeId: c.id,
        progress: Math.min(newProgress, c.goal),
        status: completed ? 'COMPLETED' : 'IN_PROGRESS',
        completedAt: completed ? new Date() : null,
      },
      update: {
        progress: Math.min(newProgress, c.goal),
        status: completed ? 'COMPLETED' : 'IN_PROGRESS',
        completedAt: completed && !existing?.completedAt ? new Date() : existing?.completedAt,
      },
    })
  }
}

export async function grantBadgeIfMissing(params: {
  userId: string
  badgeSlug: string
  tx?: Prisma.TransactionClient
}) {
  const db = params.tx ?? prisma
  const badge = await db.badge.findUnique({ where: { slug: params.badgeSlug } })
  if (!badge) return { granted: false, badge: null }

  const existing = await db.userBadge.findFirst({
    where: { userId: params.userId, badgeId: badge.id },
    select: { id: true },
  })
  if (existing) return { granted: false, badge }

  await db.userBadge.create({
    data: { userId: params.userId, badgeId: badge.id },
  })
  return { granted: true, badge }
}
