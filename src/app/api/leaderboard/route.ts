import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

function parseLimit(raw: string | null, fallback: number, max: number) {
  const parsed = Number.parseInt(raw ?? '', 10)
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback
  return Math.min(parsed, max)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const scope = searchParams.get('scope') ?? 'all' // all | week | day
  const limit = parseLimit(searchParams.get('limit'), 50, 100)

  let users: Array<{ id: string; name: string | null; image: string | null; xp: number; level: number; streakCount: number; department: string | null }>

  if (scope === 'week' || scope === 'day') {
    const since = new Date()
    if (scope === 'day') since.setHours(0, 0, 0, 0)
    else since.setDate(since.getDate() - 7)

    const grouped = await prisma.xpEvent.groupBy({
      by: ['userId'],
      where: { createdAt: { gte: since } },
      _sum: { amount: true },
      orderBy: { _sum: { amount: 'desc' } },
      take: limit,
    })

    const userMap = await prisma.user.findMany({
      where: { id: { in: grouped.map((g) => g.userId) } },
      select: { id: true, name: true, image: true, xp: true, level: true, streakCount: true, department: true },
    })
    const byId = new Map(userMap.map((u) => [u.id, u]))

    users = grouped
      .map((g) => {
        const u = byId.get(g.userId)
        if (!u) return null
        return { ...u, xp: g._sum.amount ?? 0 }
      })
      .filter(Boolean) as typeof users
  } else {
    users = await prisma.user.findMany({
      orderBy: [{ xp: 'desc' }, { level: 'desc' }],
      take: limit,
      select: { id: true, name: true, image: true, xp: true, level: true, streakCount: true, department: true },
    })
  }

  const me = await getCurrentUser()
  const myRank = me ? users.findIndex((u) => u.id === me.id) + 1 : 0

  return NextResponse.json({
    scope,
    leaders: users.map((u, i) => ({
      rank: i + 1,
      id: u.id,
      name: u.name ?? 'Anonymous',
      image: u.image,
      xp: u.xp,
      level: u.level,
      streak: u.streakCount,
      department: u.department,
      isMe: me?.id === u.id,
    })),
    myRank: myRank || null,
  })
}
