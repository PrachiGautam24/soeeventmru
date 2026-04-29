import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp, progressChallengesByTag } from '@/lib/gamification'

const schema = z.object({
  pollId: z.string().cuid(),
  optionId: z.string().cuid(),
})

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const poll = await prisma.poll.findUnique({
    where: { id: parsed.data.pollId },
    include: { options: { select: { id: true } } },
  })
  if (!poll) return NextResponse.json({ error: 'Poll not found' }, { status: 404 })
  if (poll.closesAt && poll.closesAt < new Date()) {
    return NextResponse.json({ error: 'Poll closed' }, { status: 400 })
  }
  if (!poll.options.some((o) => o.id === parsed.data.optionId)) {
    return NextResponse.json({ error: 'Invalid option' }, { status: 400 })
  }

  const existing = await prisma.pollVote.findUnique({
    where: { pollId_userId: { pollId: poll.id, userId: user.id } },
  })

  let reward: Awaited<ReturnType<typeof awardXp>> | null = null
  if (existing) {
    // Allow switching vote once (no extra XP).
    await prisma.pollVote.update({
      where: { id: existing.id },
      data: { optionId: parsed.data.optionId },
    })
  } else {
    await prisma.pollVote.create({
      data: { pollId: poll.id, optionId: parsed.data.optionId, userId: user.id },
    })
    reward = await awardXp({
      userId: user.id,
      xp: poll.xpReward,
      coins: 2,
      source: 'POLL_VOTE',
      reason: 'Voted in a poll',
    })
    await progressChallengesByTag(user.id, 'poll')
  }

  // Return fresh results for instant UI feedback.
  const counts = await prisma.pollVote.groupBy({
    by: ['optionId'],
    where: { pollId: poll.id },
    _count: { _all: true },
  })
  const byOption = new Map(counts.map((c) => [c.optionId, c._count._all]))
  const total = counts.reduce((s, c) => s + c._count._all, 0)

  return NextResponse.json({
    ok: true,
    reward,
    totalVotes: total,
    myVote: parsed.data.optionId,
    results: poll.options.map((o) => ({
      id: o.id,
      votes: byOption.get(o.id) ?? 0,
    })),
  })
}
