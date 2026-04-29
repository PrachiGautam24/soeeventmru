import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'
import { awardXp, progressChallengesByTag } from '@/lib/gamification'

const schema = z.object({
  answers: z.array(z.object({ questionId: z.string().cuid(), choiceIdx: z.number().int().min(0).max(20) })).max(50),
})

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 })

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 })

  const quiz = await prisma.quiz.findUnique({
    where: { id: params.id },
    include: { questions: true },
  })
  if (!quiz) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const answerMap = new Map(quiz.questions.map((q) => [q.id, q.answerIdx]))
  let correct = 0
  const perQuestion = parsed.data.answers.map((a) => {
    const truth = answerMap.get(a.questionId)
    const isRight = truth !== undefined && truth === a.choiceIdx
    if (isRight) correct++
    return { questionId: a.questionId, correct: isRight, correctIdx: truth ?? -1 }
  })

  const xpEarned = correct * quiz.xpPerQ

  await prisma.quizAttempt.create({
    data: {
      userId: user.id,
      quizId: quiz.id,
      score: correct,
      totalQs: quiz.questions.length,
      xpEarned,
    },
  })

  const reward = xpEarned > 0
    ? await awardXp({
        userId: user.id,
        xp: xpEarned,
        coins: Math.floor(xpEarned / 10),
        source: 'QUIZ',
        reason: `Quiz: ${quiz.title} (${correct}/${quiz.questions.length})`,
      })
    : null

  await progressChallengesByTag(user.id, 'quiz')

  return NextResponse.json({
    ok: true,
    score: correct,
    total: quiz.questions.length,
    xpEarned,
    reward,
    perQuestion,
  })
}
