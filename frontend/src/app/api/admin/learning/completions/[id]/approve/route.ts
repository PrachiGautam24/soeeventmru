import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const completion = await prisma.courseCompletionRequest.findUnique({
      where: { id },
      include: {
        user: true,
        course: true,
      },
    });

    if (!completion) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (completion.status !== "PENDING") {
      return NextResponse.json({ error: "Already processed" }, { status: 400 });
    }

    const newXp = completion.user.xp + completion.course.xpReward;
    const newLevel = Math.floor(newXp / 100) + 1;

    await prisma.courseCompletionRequest.update({
      where: { id },
      data: {
        status: "APPROVED",
        approvedAt: new Date(),
      },
    });

    await prisma.user.update({
      where: { id: completion.userId },
      data: {
        xp: newXp,
        level: newLevel,
        coins: {
          increment: 10,
        },
      },
    });

    await prisma.xpEvent.create({
      data: {
        userId: completion.userId,
        amount: completion.course.xpReward,
        coins: 10,
        source: "MANUAL",
        reason: `Approved course completion: ${completion.course.title}`,
      },
    });

    // ✅ Auto-complete quest: Complete 1 Course
    const completeCourseChallenge = await prisma.challenge.findFirst({
      where: {
        title: "Complete 1 Course",
      },
    });

    if (completeCourseChallenge) {
      await prisma.challengeProgress.upsert({
        where: {
          userId_challengeId: {
            userId: completion.userId,
            challengeId: completeCourseChallenge.id,
          },
        },
        update: {
          progress: 1,
          status: "COMPLETED",
          completedAt: new Date(),
        },
        create: {
          userId: completion.userId,
          challengeId: completeCourseChallenge.id,
          progress: 1,
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });
    }

    // ✅ Auto-complete quest: Submit Proof
    const submitProofChallenge = await prisma.challenge.findFirst({
      where: {
        title: "Submit Proof",
      },
    });

    if (submitProofChallenge) {
      await prisma.challengeProgress.upsert({
        where: {
          userId_challengeId: {
            userId: completion.userId,
            challengeId: submitProofChallenge.id,
          },
        },
        update: {
          progress: 1,
          status: "COMPLETED",
          completedAt: new Date(),
        },
        create: {
          userId: completion.userId,
          challengeId: submitProofChallenge.id,
          progress: 1,
          status: "COMPLETED",
          completedAt: new Date(),
        },
      });
    }

    if (completion.course.badgeSlug) {
      const badge = await prisma.badge.findUnique({
        where: { slug: completion.course.badgeSlug },
      });

      if (badge) {
        await prisma.userBadge.upsert({
          where: {
            userId_badgeId: {
              userId: completion.userId,
              badgeId: badge.id,
            },
          },
          update: {},
          create: {
            userId: completion.userId,
            badgeId: badge.id,
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}