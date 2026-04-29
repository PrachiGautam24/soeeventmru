import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp } from '@/lib/gamification'

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const post = await prisma.post.findUnique({ where: { id: params.id } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const existing = await prisma.postLike.findUnique({
    where: { postId_userId: { postId: post.id, userId: user.id } },
  })

  if (existing) {
    await prisma.postLike.delete({ where: { id: existing.id } })
    const count = await prisma.postLike.count({ where: { postId: post.id } })
    return NextResponse.json({ liked: false, likeCount: count })
  }

  await prisma.postLike.create({ data: { postId: post.id, userId: user.id } })
  const count = await prisma.postLike.count({ where: { postId: post.id } })

  // Tiny XP for engaging; the post author gets a larger boost.
  await awardXp({ userId: user.id, xp: 1, source: 'POST_LIKED', reason: 'Liked a post' })
  if (post.authorId !== user.id) {
    await awardXp({ userId: post.authorId, xp: 3, source: 'POST_LIKED', reason: 'Your post was liked' })
  }

  return NextResponse.json({ liked: true, likeCount: count })
}
