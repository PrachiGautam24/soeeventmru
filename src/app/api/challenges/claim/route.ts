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

  const progress = await prisma.challengeProgress.findUnique({
    where: { userId_challengeId: { userId: user.id, challengeId: parsed.data.challengeId } },
    include: { challenge: true },
  })
  if (!progress) return NextResponse.json({ error: 'No progress' }, { status: 404 })
  if (progress.status !== 'COMPLETED') {
    return NextResponse.json({ error: 'Challenge not complete yet' }, { status: 400 })
  }

  const result = await awardXp({
    userId: user.id,
    xp: progress.challenge.xpReward,
    coins: progress.challenge.coinReward,
    source: 'CHALLENGE',
    reason: progress.challenge.title,
  })

  await prisma.challengeProgress.update({
    where: { id: progress.id },
    data: { status: 'CLAIMED', claimedAt: new Date() },
  })

  return NextResponse.json({ ok: true, reward: result })
}
