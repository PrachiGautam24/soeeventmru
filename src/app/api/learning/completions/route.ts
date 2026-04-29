import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireUser } from '@/lib/session'

const schema = z
  .object({
    courseId: z.string().cuid(),
    proofType: z.enum(['CERTIFICATE_URL', 'PROFILE_URL', 'TEXT_NOTE']).default('CERTIFICATE_URL'),
    proofUrl: z.string().url().max(500).optional(),
    proofText: z.string().max(1000).optional(),
  })
  .refine((v) => (v.proofType === 'TEXT_NOTE' ? Boolean(v.proofText?.trim()) : Boolean(v.proofUrl?.trim())), {
    message: 'Proof value is required for selected proof type',
  })

export async function POST(req: Request) {
  const user = await requireUser().catch((error: Error & { status?: number }) =>
    NextResponse.json({ error: error.message }, { status: error.status ?? 401 })
  )
  if (user instanceof NextResponse) return user

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })

  const course = await prisma.learningCourse.findUnique({
    where: { id: parsed.data.courseId },
    include: { pathway: true },
  })
  if (!course || !course.active || !course.pathway.active) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 })
  }

  const completion = await prisma.courseCompletionRequest.upsert({
    where: { userId_courseId: { userId: user.id, courseId: course.id } },
    update: {
      proofType: parsed.data.proofType,
      proofUrl: parsed.data.proofUrl ?? null,
      proofText: parsed.data.proofText ?? null,
      status: 'PENDING',
      notes: null,
      reviewedBy: null,
      reviewedAt: null,
      approvedAt: null,
    },
    create: {
      userId: user.id,
      courseId: course.id,
      proofType: parsed.data.proofType,
      proofUrl: parsed.data.proofUrl ?? null,
      proofText: parsed.data.proofText ?? null,
      status: 'PENDING',
    },
  })

  return NextResponse.json({
    ok: true,
    completion: {
      id: completion.id,
      status: completion.status,
      proofType: completion.proofType,
      proofUrl: completion.proofUrl,
      proofText: completion.proofText,
      updatedAt: completion.updatedAt,
    },
  })
}

