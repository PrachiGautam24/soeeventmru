import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { touchDailyStreak, levelProgress } from '@/lib/gamification'

export async function GET() {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ user: null }, { status: 200 })

  // Every load of "me" registers a daily touch — instant XP reward + streak.
  await touchDailyStreak(user.id)

  const fresh = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      earnedBadges: { include: { badge: true }, orderBy: { earnedAt: 'desc' }, take: 10 },
      _count: {
        select: { posts: true, quizAttempts: true, eventCheckins: true, learningCompletions: true },
      },
    },
  })
  if (!fresh) return NextResponse.json({ user: null }, { status: 200 })

  // Global rank — simple count-of-better-users calc.
  const higher = await prisma.user.count({ where: { xp: { gt: fresh.xp } } })
  const rank = higher + 1

  return NextResponse.json({
    user: {
      id: fresh.id,
      email: fresh.email,
      name: fresh.name,
      image: fresh.image,
      department: fresh.department,
      year: fresh.year,
      bio: fresh.bio,
      xp: fresh.xp,
      level: fresh.level,
      coins: fresh.coins,
      streakCount: fresh.streakCount,
      lastActiveDay: fresh.lastActiveDay,
      rank,
      progress: levelProgress(fresh.xp),
      badges: fresh.earnedBadges.map((ub) => ub.badge),
      stats: fresh._count,
    },
  })
}

export async function PATCH(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const body = await req.json().catch(() => ({}))
  const { name, bio, department, year, image } = body ?? {}

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: typeof name === 'string' ? name.slice(0, 80) : undefined,
      bio: typeof bio === 'string' ? bio.slice(0, 280) : undefined,
      department: typeof department === 'string' ? department.slice(0, 80) : undefined,
      year: typeof year === 'string' ? year.slice(0, 16) : undefined,
      image: typeof image === 'string' ? image.slice(0, 500) : undefined,
    },
  })
  return NextResponse.json({ user: updated })
}
