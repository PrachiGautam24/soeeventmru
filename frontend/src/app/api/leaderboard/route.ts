import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        xp: "desc",
      },
      take: 20,
    });

    const leaderboard = users.map((user, index) => ({
      id: user.id,
      name: user.name,
      xp: user.xp,
      level: user.level,
      rank: index + 1,
    }));

    return NextResponse.json({ leaderboard });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ leaderboard: [] });
  }
}