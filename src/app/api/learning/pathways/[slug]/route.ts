import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

type Ctx = { params: { slug: string } }

export async function GET(_req: Request, ctx: Ctx) {
  const user = await getCurrentUser()
  const pathway = await prisma.learningPathway.findUnique({
    where: { slug: ctx.params.slug },
    include: {
      courses: {
        where: { active: true },
        orderBy: { order: 'asc' },
        include: {
          completions: user
            ? {
                where: { userId: user.id },
                orderBy: { updatedAt: 'desc' },
                take: 1,
              }
            : false,
        },
      },
    },
  })

  if (!pathway || !pathway.active) {
    return NextResponse.json({ error: 'Pathway not found' }, { status: 404 })
  }

  const courses = pathway.courses.map((course) => {
    const latest = Array.isArray(course.completions) ? course.completions[0] : null
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      provider: course.provider,
      url: course.url,
      duration: course.duration,
      difficulty: course.difficulty,
      order: course.order,
      xpReward: course.xpReward,
      badgeSlug: course.badgeSlug,
      completion: latest
        ? {
            id: latest.id,
            status: latest.status,
            proofType: latest.proofType,
            proofUrl: latest.proofUrl,
            proofText: latest.proofText,
            notes: latest.notes,
            reviewedAt: latest.reviewedAt,
            approvedAt: latest.approvedAt,
            updatedAt: latest.updatedAt,
          }
        : null,
    }
  })

  const approvedCount = courses.filter((c) => c.completion?.status === 'APPROVED').length

  return NextResponse.json({
    pathway: {
      id: pathway.id,
      slug: pathway.slug,
      title: pathway.title,
      description: pathway.description,
      department: pathway.department,
      semester: pathway.semester,
      tags: pathway.tags,
      totalCourses: courses.length,
      approvedCount,
      progressPercent: courses.length > 0 ? Math.round((approvedCount / courses.length) * 100) : 0,
      courses,
    },
  })
}

