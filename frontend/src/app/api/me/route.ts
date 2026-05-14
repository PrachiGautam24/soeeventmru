import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ me: null })
    }

    const isUdita =
      session.user.email === "udita@mru.edu.in"

    const me = {
      id: isUdita ? "2" : "1",
      name:
        session.user.name ??
        (isUdita ? "Udita Kalra" : "Demo Student"),
      email: session.user.email,
      image: session.user.image ?? null,
      coins: isUdita ? 120 : 95,
      xp: isUdita ? 280 : 265,
      level: isUdita ? 56 : 52,
      streakCount: isUdita ? 3 : 1,
      rank: isUdita ? 2 : 1,
    }

    const nextLevelXp = 100
    const currentLevelXp = me.xp % nextLevelXp

    return NextResponse.json({
      me: {
        ...me,
        progress: {
          percent: currentLevelXp,
          inLevel: currentLevelXp,
          forLevel: nextLevelXp,
        },
      },
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json({
      me: null,
    })
  }
}