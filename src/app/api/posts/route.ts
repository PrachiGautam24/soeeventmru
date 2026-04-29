import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp, progressChallengesByTag } from '@/lib/gamification'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const limit = Math.min(Number(searchParams.get('limit') ?? 30), 50)
  const cursor = searchParams.get('cursor') ?? undefined

  const me = await getCurrentUser()

  const posts = await prisma.post.findMany({
    take: limit,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    orderBy: { createdAt: 'desc' },
    include: {
      author: { select: { id: true, name: true, image: true, level: true } },
      _count: { select: { comments: true, likes: true } },
      likes: me ? { where: { userId: me.id }, select: { id: true } } : false,
    },
  })

  return NextResponse.json({
    posts: posts.map((p) => ({
      id: p.id,
      content: p.content,
      imageUrl: p.imageUrl,
      eventTag: p.eventTag,
      createdAt: p.createdAt,
      author: p.author,
      likeCount: p._count.likes,
      commentCount: p._count.comments,
      likedByMe: Array.isArray(p.likes) ? p.likes.length > 0 : false,
    })),
    nextCursor: posts.length === limit ? posts[posts.length - 1].id : null,
  })
}

const createSchema = z.object({
  content: z.string().min(1).max(500),
  imageUrl: z.string().url().optional().nullable(),
  eventTag: z.string().max(40).optional().nullable(),
})

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = createSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const post = await prisma.post.create({
    data: {
      authorId: user.id,
      content: parsed.data.content,
      imageUrl: parsed.data.imageUrl ?? null,
      eventTag: parsed.data.eventTag ?? null,
    },
    include: { author: { select: { id: true, name: true, image: true, level: true } } },
  })

  const reward = await awardXp({
    userId: user.id,
    xp: 15,
    coins: 2,
    source: 'POST_CREATED',
    reason: 'New post',
  })

  await progressChallengesByTag(user.id, 'post')

  return NextResponse.json({
    post: {
      id: post.id,
      content: post.content,
      imageUrl: post.imageUrl,
      eventTag: post.eventTag,
      createdAt: post.createdAt,
      author: post.author,
      likeCount: 0,
      commentCount: 0,
      likedByMe: false,
    },
    reward,
  })
}
