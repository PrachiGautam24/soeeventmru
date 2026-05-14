import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // 👉 demo user
    const user = await prisma.user.findUnique({
      where: {
        email: "demo@mru.edu.in",
      },
    });

    if (!user) {
      return NextResponse.json({ challenges: [] });
    }

    // 👉 all challenges
    const challenges = await prisma.challenge.findMany({
      where: {},
      orderBy: { createdAt: "asc" },
    });

    // 👉 user progress
    const progress = await prisma.challengeProgress.findMany({
      where: {
        userId: user.id,
      },
    });

    const progressMap = new Map(
      progress.map((p) => [p.challengeId, p])
    );

    const result = challenges.map((c) => {
      const p = progressMap.get(c.id);

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
        status: p?.status ?? "IN_PROGRESS",
      };
    });

    return NextResponse.json({ challenges: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ challenges: [] });
  }
}