import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { pollId, optionId } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: "demo@mru.edu.in" },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.pollVote.deleteMany({
      where: {
        userId: user.id,
        pollId,
      },
    });

    await prisma.pollVote.create({
      data: {
        userId: user.id,
        pollId,
        optionId,
      },
    });

    const options = await prisma.pollOption.findMany({
      where: { pollId },
      include: { votes: true },
      orderBy: { order: "asc" },
    });

    const totalVotes = options.reduce(
      (sum, option) => sum + option.votes.length,
      0
    );

    const challenge = await prisma.challenge.findFirst({
      where: { title: "Vote in a poll" },
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

    return NextResponse.json({
      totalVotes,
      results: options.map((option) => ({
        id: option.id,
        votes: option.votes.length,
      })),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}