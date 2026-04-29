import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: params.id },
    include: { questions: { orderBy: { order: 'asc' } } },
  })
  if (!quiz) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json({
    quiz: {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      emoji: quiz.emoji,
      timeLimit: quiz.timeLimit,
      xpPerQ: quiz.xpPerQ,
      questions: quiz.questions.map((q) => ({
        id: q.id,
        prompt: q.prompt,
        choices: q.choices,
      })),
    },
  })
}
