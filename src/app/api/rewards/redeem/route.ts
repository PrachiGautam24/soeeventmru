import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

const schema = z.object({ rewardId: z.string().cuid() })

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const result = await prisma.$transaction(async (tx) => {
    const reward = await tx.reward.findUnique({ where: { id: parsed.data.rewardId } })
    if (!reward || !reward.active) throw new Error('REWARD_UNAVAILABLE')
    const me = await tx.user.findUnique({ where: { id: user.id } })
    if (!me) throw new Error('USER_NOT_FOUND')
    if (me.coins < reward.cost) throw new Error('INSUFFICIENT_COINS')
    if (reward.stock !== null && reward.stock <= 0) throw new Error('OUT_OF_STOCK')

    const redemption = await tx.rewardRedemption.create({
      data: { rewardId: reward.id, userId: user.id },
    })

    await tx.user.update({
      where: { id: user.id },
      data: { coins: me.coins - reward.cost },
    })

    if (reward.stock !== null) {
      await tx.reward.update({
        where: { id: reward.id },
        data: { stock: { decrement: 1 } },
      })
    }

    return { redemption, newBalance: me.coins - reward.cost, reward }
  }).catch((e: Error) => ({ error: e.message }))

  if ('error' in result) {
    const map: Record<string, number> = {
      REWARD_UNAVAILABLE: 404,
      USER_NOT_FOUND: 401,
      INSUFFICIENT_COINS: 400,
      OUT_OF_STOCK: 410,
    }
    return NextResponse.json({ error: result.error }, { status: map[result.error] ?? 400 })
  }

  return NextResponse.json({
    ok: true,
    code: result.redemption.code,
    newBalance: result.newBalance,
    reward: { id: result.reward.id, title: result.reward.title, emoji: result.reward.emoji },
  })
}
