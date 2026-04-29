import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp, progressChallengesByTag } from '@/lib/gamification'

const schema = z.object({
  eventId: z.string().cuid().optional(),
  code: z.string().min(3).max(40).optional(),
}).refine((v) => v.eventId || v.code, { message: 'eventId or code required' })

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const event = parsed.data.eventId
    ? await prisma.campusEvent.findUnique({ where: { id: parsed.data.eventId } })
    : await prisma.campusEvent.findUnique({ where: { checkinCode: parsed.data.code } })

  if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 })

  const existing = await prisma.eventCheckin.findUnique({
    where: { userId_eventId: { userId: user.id, eventId: event.id } },
  })
  if (existing) {
    return NextResponse.json({ ok: true, alreadyCheckedIn: true })
  }

  await prisma.eventCheckin.create({ data: { userId: user.id, eventId: event.id } })

  const reward = await awardXp({
    userId: user.id,
    xp: event.xpReward,
    coins: event.coinReward,
    source: 'EVENT_CHECKIN',
    reason: `Check-in: ${event.title}`,
  })

  await progressChallengesByTag(user.id, 'checkin')

  return NextResponse.json({ ok: true, alreadyCheckedIn: false, reward, event: { id: event.id, title: event.title } })
}
