import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminUser } from '@/lib/session'

type Ctx = { params: { id: string } }

const schema = z.object({
  notes: z.string().min(2).max(500),
})

export async function POST(req: Request, ctx: Ctx) {
  const admin = await requireAdminUser().catch((error: Error & { status?: number }) =>
    NextResponse.json({ error: error.message }, { status: error.status ?? 403 })
  )
  if (admin instanceof NextResponse) return admin

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Rejection note is required' }, { status: 400 })
  }

  const request = await prisma.courseCompletionRequest.findUnique({
    where: { id: ctx.params.id },
    select: { id: true, status: true },
  })
  if (!request) return NextResponse.json({ error: 'Request not found' }, { status: 404 })
  if (request.status === 'APPROVED') {
    return NextResponse.json({ error: 'Approved requests cannot be rejected' }, { status: 409 })
  }

  const updated = await prisma.courseCompletionRequest.update({
    where: { id: request.id },
    data: {
      status: 'REJECTED',
      notes: parsed.data.notes,
      reviewedBy: admin.id,
      reviewedAt: new Date(),
      approvedAt: null,
    },
  })

  return NextResponse.json({
    ok: true,
    completion: {
      id: updated.id,
      status: updated.status,
      notes: updated.notes,
      reviewedAt: updated.reviewedAt,
    },
  })
}

