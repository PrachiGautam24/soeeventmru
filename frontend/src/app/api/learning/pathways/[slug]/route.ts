import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const dynamic = "force-dynamic"

const pathwayData = [
  {
    id: "1",
    slug: "ai-ml-track",
    title: "AI / ML Track",
    description:
      "Recommended AI/ML learning path using free access from MRU domain accounts.",
    courses: [
      {
        id: "1",
        title: "Machine Learning Foundations",
        description: "Understand supervised and unsupervised learning basics.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "2",
        title: "Deep Learning Basics",
        description: "Explore neural networks, CNNs, and model training.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "3",
        title: "AI Ethics and Responsible AI",
        description: "Learn fairness, bias, explainability, and responsible AI.",
        url: "https://www.linkedin.com/learning/",
      },
    ],
  },
  {
    id: "2",
    slug: "cse-core-semester-4",
    title: "CSE Core — Semester 4",
    description:
      "Essential semester-4 LinkedIn Learning tracks for core CSE foundations.",
    courses: [
      {
        id: "4",
        title: "Data Structures Refresher",
        description: "Revise arrays, stacks, queues, trees, and graphs.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "5",
        title: "Database Management Systems",
        description: "Learn SQL, relational models, joins, and transactions.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "6",
        title: "Operating System Concepts",
        description: "Understand processes, threads, scheduling, and memory.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "7",
        title: "Computer Networks Basics",
        description: "Learn protocols, layers, IP addressing, and routing.",
        url: "https://www.linkedin.com/learning/",
      },
    ],
  },
  {
    id: "3",
    slug: "cloud-foundations",
    title: "Cloud Foundations",
    description:
      "Cloud literacy and deployment basics for modern engineering roles.",
    courses: [
      {
        id: "8",
        title: "Cloud Computing Fundamentals",
        description: "Understand cloud models, regions, and basic services.",
        url: "https://www.linkedin.com/learning/",
      },
      {
        id: "9",
        title: "Deploying Apps on Cloud",
        description: "Learn basics of deployment and serverless workflows.",
        url: "https://www.linkedin.com/learning/",
      },
    ],
  },
]

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    const isUdita = session?.user?.email === "udita@mru.edu.in"

    const pathway = pathwayData.find((p) => p.slug === params.slug)

    if (!pathway) {
      return NextResponse.json({ pathway: null }, { status: 404 })
    }

    const courses = pathway.courses.map((course, index) => {
      const demoApproved =
        pathway.slug === "ai-ml-track" ||
        (pathway.slug === "cse-core-semester-4" && index === 0)

      return {
        ...course,
        order: index + 1,
        completion: isUdita
          ? null
          : demoApproved
            ? {
                id: `completion-${course.id}`,
                status: "APPROVED",
                proofUrl: course.url,
              }
            : null,
      }
    })

    const totalCourses = courses.length
    const approvedCount = courses.filter(
      (course) => course.completion?.status === "APPROVED"
    ).length

    return NextResponse.json({
      pathway: {
        ...pathway,
        courses,
        totalCourses,
        approvedCount,
        progressPercent:
          totalCourses === 0
            ? 0
            : Math.round((approvedCount / totalCourses) * 100),
      },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ pathway: null }, { status: 500 })
  }
}