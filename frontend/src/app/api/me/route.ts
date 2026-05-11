import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: "demo@mru.edu.in",
      },
    });

    if (!user) {
      return NextResponse.json({ me: null });
    }

    const users = await prisma.user.findMany({
      orderBy: { xp: "desc" },
    });

    const rank = users.findIndex((u) => u.id === user.id) + 1;

    const nextLevelXp = 100;
    const currentLevelXp = user.xp % nextLevelXp;

    return NextResponse.json({
      me: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        coins: user.coins ?? 0,
        xp: user.xp ?? 0,
        level: user.level ?? 1,
        streakCount: user.streakCount ?? 0,
        rank,
        progress: {
          percent: currentLevelXp,
          inLevel: currentLevelXp,
          forLevel: nextLevelXp,
        },
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ me: null });
  }
}