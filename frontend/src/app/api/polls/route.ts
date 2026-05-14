import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const polls = await prisma.poll.findMany({
      where: {
        OR: [
          { closesAt: null },
          { closesAt: { gt: new Date() } },
        ],
      },
      include: {
        options: {
          orderBy: { order: "asc" },
          include: {
            votes: true,
          },
        },
        votes: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const result = polls.map((poll) => ({
      id: poll.id,
      question: poll.question,
      description: poll.description,
      emoji: poll.emoji,
      xpReward: poll.xpReward,
      closesAt: poll.closesAt,
      totalVotes: poll.votes.length,
      myVote: null,
      options: poll.options.map((option) => ({
        id: option.id,
        label: option.label,
        emoji: option.emoji,
        votes: option.votes.length,
      })),
    }));

    return NextResponse.json({ polls: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ polls: [] }, { status: 500 });
  }
}