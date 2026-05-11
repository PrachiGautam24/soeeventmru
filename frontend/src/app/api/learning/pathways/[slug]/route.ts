import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const pathway = await prisma.learningPathway.findUnique({
      where: { slug: params.slug },
      include: {
        courses: {
          orderBy: { order: "asc" },
          include: {
            completions: true,
          },
        },
      },
    });

    if (!pathway) {
      return NextResponse.json({ pathway: null }, { status: 404 });
    }

    const courses = pathway.courses.map((course) => ({
      ...course,
      completion: course.completions[0] ?? null,
    }));

    const totalCourses = courses.length;
    const approvedCount = courses.filter(
      (course) => course.completion?.status === "APPROVED"
    ).length;

    return NextResponse.json({
      pathway: {
        ...pathway,
        courses,
        totalCourses,
        approvedCount,
        progressPercent:
          totalCourses === 0 ? 0 : Math.round((approvedCount / totalCourses) * 100),
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ pathway: null }, { status: 500 });
  }
}