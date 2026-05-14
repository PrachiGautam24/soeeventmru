import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { challengeId } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: "demo@mru.edu.in",
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const progress = await prisma.challengeProgress.findUnique({
      where: {
        userId_challengeId: {
          userId: user.id,
          challengeId,
        },
      },
      include: {
        challenge: true,
      },
    });

    if (!progress) {
      return NextResponse.json({ error: "Progress not found" }, { status: 404 });
    }

    if (progress.status !== "COMPLETED") {
      return NextResponse.json({ error: "Quest not completed yet" }, { status: 400 });
    }

    const newXp = user.xp + progress.challenge.xpReward;
    const newLevel = Math.floor(newXp / 100) + 1;

    await prisma.challengeProgress.update({
      where: {
        userId_challengeId: {
          userId: user.id,
          challengeId,
        },
      },
      data: {
        status: "CLAIMED",
        claimedAt: new Date(),
      },
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        xp: newXp,
        level: newLevel,
        coins: {
          increment: progress.challenge.coinReward,
        },
      },
    });

    await prisma.xpEvent.create({
      data: {
        userId: user.id,
        amount: progress.challenge.xpReward,
        coins: progress.challenge.coinReward,
        source: "CHALLENGE",
        reason: `Claimed quest: ${progress.challenge.title}`,
      },
    });

    return NextResponse.json({
      success: true,
      reward: {
        xpDelta: progress.challenge.xpReward,
        coinsDelta: progress.challenge.coinReward,
        leveledUp: newLevel > user.level,
        level: newLevel,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}