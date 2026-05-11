import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { type } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: "demo@mru.edu.in",
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }

    // 🔥 HANDLE TYPES

    if (type === "FEED_VIEW") {
      const challenge = await prisma.challenge.findFirst({
        where: {
          title: "Check the feed",
        },
      });

      if (challenge) {
        await prisma.challengeProgress.upsert({
          where: {
            userId_challengeId: {
              userId: user.id,
              challengeId: challenge.id,
            },
          },
          update: {
            progress: 1,
            status: "COMPLETED",
            completedAt: new Date(),
          },
          create: {
            userId: user.id,
            challengeId: challenge.id,
            progress: 1,
            status: "COMPLETED",
            completedAt: new Date(),
          },
        });
      }
    }

    if (type === "POLL_VOTE") {
      const challenge = await prisma.challenge.findFirst({
        where: {
          title: "Vote in a poll",
        },
      });

      if (challenge) {
        await prisma.challengeProgress.upsert({
          where: {
            userId_challengeId: {
              userId: user.id,
              challengeId: challenge.id,
            },
          },
          update: {
            progress: 1,
            status: "COMPLETED",
            completedAt: new Date(),
          },
          create: {
            userId: user.id,
            challengeId: challenge.id,
            progress: 1,
            status: "COMPLETED",
            completedAt: new Date(),
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" });
  }
}