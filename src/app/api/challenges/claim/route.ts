import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp } from '@/lib/gamification'

const schema = z.object({ challengeId: z.string().cuid() })

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const reward = await prisma.$transaction(async (tx) => {
    const progress = await tx.challengeProgress.findUnique({
      where: { userId_challengeId: { userId: user.id, challengeId: parsed.data.challengeId } },
      include: { challenge: true },
    })
    if (!progress) {
      throw new Error('NO_PROGRESS')
    }
    if (progress.status !== 'COMPLETED') {
      throw new Error('NOT_COMPLETED')
    }

    const claimed = await tx.challengeProgress.updateMany({
      where: { id: progress.id, status: 'COMPLETED' },
      data: { status: 'CLAIMED', claimedAt: new Date() },
    })
    if (claimed.count === 0) {
      throw new Error('ALREADY_CLAIMED')
    }

    return awardXp({
      userId: user.id,
      xp: progress.challenge.xpReward,
      coins: progress.challenge.coinReward,
      source: 'CHALLENGE',
      reason: progress.challenge.title,
      tx,
    })
  }).catch((error: unknown) => {
    const code = error instanceof Error ? error.message : 'UNKNOWN'
    if (code === 'NO_PROGRESS') {
      return NextResponse.json({ error: 'No progress' }, { status: 404 })
    }
    if (code === 'NOT_COMPLETED') {
      return NextResponse.json({ error: 'Challenge not complete yet' }, { status: 400 })
    }
    if (code === 'ALREADY_CLAIMED') {
      return NextResponse.json({ error: 'Challenge already claimed' }, { status: 409 })
    }
    throw error
  })

  if (reward instanceof NextResponse) return reward

  return NextResponse.json({ ok: true, reward })
}
