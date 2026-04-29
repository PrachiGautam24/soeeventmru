import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET() {
  const user = await getCurrentUser()

  const polls = await prisma.poll.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: {
      options: { orderBy: { order: 'asc' } },
      _count: { select: { votes: true } },
      votes: user ? { where: { userId: user.id }, select: { optionId: true } } : false,
    },
  })

  // Attach per-option vote counts in a single query.
  const optionCounts = await prisma.pollVote.groupBy({
    by: ['optionId'],
    _count: { _all: true },
  })
  const byOption = new Map(optionCounts.map((c) => [c.optionId, c._count._all]))

  return NextResponse.json({
    polls: polls.map((p) => {
      const myVote = Array.isArray(p.votes) ? p.votes[0]?.optionId ?? null : null
      return {
        id: p.id,
        question: p.question,
        description: p.description,
        emoji: p.emoji,
        xpReward: p.xpReward,
        closesAt: p.closesAt,
        totalVotes: p._count.votes,
        myVote,
        options: p.options.map((o) => ({
          id: o.id,
          label: o.label,
          emoji: o.emoji,
          votes: byOption.get(o.id) ?? 0,
        })),
      }
    }),
  })
}
