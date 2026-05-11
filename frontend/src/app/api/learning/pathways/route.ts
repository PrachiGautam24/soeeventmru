import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const pathways = await prisma.learningPathway.findMany({
      include: {
        courses: {
          include: {
            completions: true,
          },
        },
      },
      orderBy: { title: "asc" },
    });

    const result = pathways.map((p) => {
      const totalCourses = p.courses.length;

      const approvedCount = p.courses.filter((c) =>
        c.completions.some((comp) => comp.status === "APPROVED")
      ).length;

      return {
        ...p,
        totalCourses,
        approvedCount,
        progressPercent:
          totalCourses === 0
            ? 0
            : Math.round((approvedCount / totalCourses) * 100),
      };
    });

    return NextResponse.json({ pathways: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ pathways: [] });
  }
}