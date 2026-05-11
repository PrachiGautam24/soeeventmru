import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        xp: 'desc',
      },
      take: 20,
    })

    const leaderboard = users.map((user, index) => ({
      id: user.id,
      name: user.name,
      xp: user.xp ?? 0,
      level: user.level ?? 1,
      rank: index + 1,
    }))

    return NextResponse.json({
      leaderboard,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json({
      leaderboard: [],
    })
  }
}