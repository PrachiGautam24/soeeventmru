import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  // Return quiz metadata without revealing answers.
  const quizzes = await prisma.quiz.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      questions: { select: { id: true } },
      _count: { select: { attempts: true } },
    },
  })

  return NextResponse.json({
    quizzes: quizzes.map((q) => ({
      id: q.id,
      title: q.title,
      description: q.description,
      emoji: q.emoji,
      xpPerQ: q.xpPerQ,
      timeLimit: q.timeLimit,
      questionCount: q.questions.length,
      attemptCount: q._count.attempts,
    })),
  })
}
