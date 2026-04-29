import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { requireAdminUser } from '@/lib/session'
import { awardXp, grantBadgeIfMissing } from '@/lib/gamification'

type Ctx = { params: { id: string } }

const schema = z.object({
  notes: z.string().max(500).optional(),
})

export async function POST(req: Request, ctx: Ctx) {
  const admin = await requireAdminUser().catch((error: Error & { status?: number }) =>
    NextResponse.json({ error: error.message }, { status: error.status ?? 403 })
  )
  if (admin instanceof NextResponse) return admin

  const parsed = schema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const approved = await prisma.$transaction(async (tx) => {
    const request = await tx.courseCompletionRequest.findUnique({
      where: { id: ctx.params.id },
      include: { course: true },
    })
    if (!request) throw new Error('NOT_FOUND')
    if (request.status === 'APPROVED') throw new Error('ALREADY_APPROVED')
    if (request.status === 'REJECTED' || request.status === 'PENDING') {
      const updated = await tx.courseCompletionRequest.update({
        where: { id: request.id },
        data: {
          status: 'APPROVED',
          notes: parsed.data.notes ?? null,
          reviewedBy: admin.id,
          reviewedAt: new Date(),
          approvedAt: new Date(),
        },
      })

      const reward = await awardXp({
        userId: request.userId,
        xp: request.course.xpReward,
        coins: 5,
        source: 'MANUAL',
        reason: `Learning approved: ${request.course.title}`,
        tx,
      })

      let badgeResult: { granted: boolean; badge: { slug: string; name: string } | null } = {
        granted: false,
        badge: null,
      }
      if (request.course.badgeSlug) {
        const result = await grantBadgeIfMissing({
          userId: request.userId,
          badgeSlug: request.course.badgeSlug,
          tx,
        })
        badgeResult = {
          granted: result.granted,
          badge: result.badge ? { slug: result.badge.slug, name: result.badge.name } : null,
        }
      }

      return { updated, reward, badgeResult }
    }
    throw new Error('INVALID_STATE')
  }).catch((error: unknown) => {
    const code = error instanceof Error ? error.message : 'UNKNOWN'
    if (code === 'NOT_FOUND') return NextResponse.json({ error: 'Request not found' }, { status: 404 })
    if (code === 'ALREADY_APPROVED') return NextResponse.json({ error: 'Already approved' }, { status: 409 })
    if (code === 'INVALID_STATE') return NextResponse.json({ error: 'Invalid request state' }, { status: 400 })
    throw error
  })

  if (approved instanceof NextResponse) return approved

  return NextResponse.json({
    ok: true,
    completion: {
      id: approved.updated.id,
      status: approved.updated.status,
      notes: approved.updated.notes,
      reviewedAt: approved.updated.reviewedAt,
      approvedAt: approved.updated.approvedAt,
    },
    reward: approved.reward,
    badge: approved.badgeResult.badge,
    badgeGranted: approved.badgeResult.granted,
  })
}

