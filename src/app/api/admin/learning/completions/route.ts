import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdminUser } from '@/lib/session'

export async function GET(req: Request) {
  const admin = await requireAdminUser().catch((error: Error & { status?: number }) =>
    NextResponse.json({ error: error.message }, { status: error.status ?? 403 })
  )
  if (admin instanceof NextResponse) return admin

  const { searchParams } = new URL(req.url)
  const status = (searchParams.get('status') ?? 'PENDING').toUpperCase()
  const allowed = new Set(['PENDING', 'APPROVED', 'REJECTED'])
  const normalizedStatus = allowed.has(status) ? (status as 'PENDING' | 'APPROVED' | 'REJECTED') : 'PENDING'

  const items = await prisma.courseCompletionRequest.findMany({
    where: { status: normalizedStatus },
    include: {
      user: { select: { id: true, name: true, email: true, department: true } },
      reviewer: { select: { id: true, name: true, email: true } },
      course: {
        select: {
          id: true,
          title: true,
          xpReward: true,
          badgeSlug: true,
          pathway: { select: { id: true, title: true, slug: true } },
        },
      },
    },
    orderBy: [{ createdAt: 'asc' }],
    take: 200,
  })

  return NextResponse.json({
    items: items.map((item) => ({
      id: item.id,
      status: item.status,
      proofType: item.proofType,
      proofUrl: item.proofUrl,
      proofText: item.proofText,
      notes: item.notes,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      reviewedAt: item.reviewedAt,
      approvedAt: item.approvedAt,
      user: item.user,
      reviewer: item.reviewer,
      course: item.course,
    })),
  })
}

