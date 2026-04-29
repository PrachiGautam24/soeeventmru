import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const comments = await prisma.comment.findMany({
    where: { postId: params.id },
    orderBy: { createdAt: 'asc' },
    take: 100,
    include: { author: { select: { id: true, name: true, image: true, level: true } } },
  })
  return NextResponse.json({ comments })
}

const schema = z.object({ content: z.string().min(1).max(280) })

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const comment = await prisma.comment.create({
    data: { postId: params.id, authorId: user.id, content: parsed.data.content },
    include: { author: { select: { id: true, name: true, image: true, level: true } } },
  })
  return NextResponse.json({ comment })
}
