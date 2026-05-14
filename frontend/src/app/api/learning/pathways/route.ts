import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    const isUdita =
      session?.user?.email === "udita@mru.edu.in"

    const pathways = [
      {
        id: "1",
        slug: "ai-ml-track",
        title: "AI / ML Track",
        description:
          "Recommended AI/ML learning path using free access from MRU domain accounts.",
        totalCourses: 3,
        approvedCount: isUdita ? 0 : 3,
        progressPercent: isUdita ? 0 : 100,
      },
      {
        id: "2",
        slug: "cse-core-semester-4",
        title: "CSE Core — Semester 4",
        description:
          "Essential semester-4 LinkedIn Learning tracks for core CSE foundations.",
        totalCourses: 4,
        approvedCount: isUdita ? 0 : 1,
        progressPercent: isUdita ? 0 : 25,
      },
      {
        id: "3",
        slug: "cloud-foundations",
        title: "Cloud Foundations",
        description:
          "Cloud literacy and deployment basics for modern engineering roles.",
        totalCourses: 2,
        approvedCount: 0,
        progressPercent: 0,
      },
    ]

    return NextResponse.json({
      pathways,
    })
  } catch (err) {
    console.error(err)

    return NextResponse.json({
      pathways: [],
    })
  }
}