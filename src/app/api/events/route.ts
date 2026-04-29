import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET() {
  const user = await getCurrentUser()

  const events = await prisma.campusEvent.findMany({
    orderBy: { startsAt: 'asc' },
    include: {
      _count: { select: { checkins: true } },
      checkins: user ? { where: { userId: user.id }, select: { id: true } } : false,
    },
  })

  return NextResponse.json({
    events: events.map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      description: e.description,
      location: e.location,
      imageUrl: e.imageUrl,
      startsAt: e.startsAt,
      endsAt: e.endsAt,
      xpReward: e.xpReward,
      coinReward: e.coinReward,
      attendeeCount: e._count.checkins,
      checkedIn: Array.isArray(e.checkins) ? e.checkins.length > 0 : false,
    })),
  })
}
