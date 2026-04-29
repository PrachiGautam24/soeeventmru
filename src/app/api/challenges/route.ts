import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET() {
  const user = await getCurrentUser()
  const now = new Date()

  const challenges = await prisma.challenge.findMany({
    where: {
      activeFrom: { lte: now },
      OR: [{ activeUntil: null }, { activeUntil: { gte: now } }],
    },
    orderBy: [{ type: 'asc' }, { createdAt: 'desc' }],
    include: user
      ? {
          progress: { where: { userId: user.id } },
        }
      : undefined,
  })

  const shaped = challenges.map((c) => {
    const p = (c as typeof c & { progress?: Array<{ progress: number; status: string }> }).progress?.[0]
    return {
      id: c.id,
      title: c.title,
      description: c.description,
      emoji: c.emoji,
      type: c.type,
      goal: c.goal,
      xpReward: c.xpReward,
      coinReward: c.coinReward,
      progress: p?.progress ?? 0,
      status: p?.status ?? 'IN_PROGRESS',
    }
  })

  return NextResponse.json({ challenges: shaped })
}
