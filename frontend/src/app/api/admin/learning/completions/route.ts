import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status")?.toUpperCase() || "PENDING";

    const items = await prisma.courseCompletionRequest.findMany({
      where: {
        status: status as "PENDING" | "APPROVED" | "REJECTED",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            department: true,
          },
        },
        course: {
          select: {
            id: true,
            title: true,
            xpReward: true,
            badgeSlug: true,
            pathway: {
              select: {
                title: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ items });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}