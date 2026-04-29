import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

function parseLimit(raw: string | null, fallback: number, max: number) {
  const parsed = Number.parseInt(raw ?? '', 10)
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback
  return Math.min(parsed, max)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = (searchParams.get('search') ?? '').trim()
  const department = (searchParams.get('department') ?? '').trim()
  const semester = (searchParams.get('semester') ?? '').trim()
  const tag = (searchParams.get('tag') ?? '').trim()
  const limit = parseLimit(searchParams.get('limit'), 30, 100)
  const user = await getCurrentUser()

  const pathways = await prisma.learningPathway.findMany({
    where: {
      active: true,
      ...(department ? { department: { equals: department, mode: 'insensitive' } } : {}),
      ...(semester ? { semester: { equals: semester, mode: 'insensitive' } } : {}),
      ...(tag ? { tags: { has: tag.toLowerCase() } } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
    },
    include: {
      courses: {
        where: { active: true },
        orderBy: { order: 'asc' },
        select: {
          id: true,
          title: true,
          duration: true,
          difficulty: true,
          xpReward: true,
          completions: user
            ? {
                where: { userId: user.id, status: 'APPROVED' },
                select: { id: true },
              }
            : false,
        },
      },
    },
    orderBy: [{ department: 'asc' }, { title: 'asc' }],
    take: limit,
  })

  return NextResponse.json({
    pathways: pathways.map((p) => {
      const totalCourses = p.courses.length
      const completedCourses = p.courses.filter((c) => Array.isArray(c.completions) && c.completions.length > 0).length
      const totalXp = p.courses.reduce((sum, c) => sum + c.xpReward, 0)
      return {
        id: p.id,
        slug: p.slug,
        title: p.title,
        description: p.description,
        department: p.department,
        semester: p.semester,
        tags: p.tags,
        totalCourses,
        completedCourses,
        progressPercent: totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0,
        totalXp,
      }
    }),
  })
}

