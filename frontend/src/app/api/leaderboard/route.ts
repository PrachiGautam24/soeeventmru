import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const leaderboard = [
      {
        id: "1",
        name: "Demo Student",
        xp: 5165,
        level: 52,
        rank: 1,
      },
      {
        id: "2",
        name: "Udita Kalra",
        xp: 2800,
        level: 56,
        rank: 2,
      },
      {
        id: "3",
        name: "Aarav Sharma",
        xp: 2450,
        level: 8,
        rank: 3,
      },
      {
        id: "4",
        name: "Isha Verma",
        xp: 2100,
        level: 7,
        rank: 4,
      },
      {
        id: "5",
        name: "Kabir Singh",
        xp: 1780,
        level: 6,
        rank: 5,
      },
      {
        id: "6",
        name: "Maya Iyer",
        xp: 1450,
        level: 6,
        rank: 6,
      },
    ]

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