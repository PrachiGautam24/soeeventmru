'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, BrainCircuit, Timer, Users, ChevronRight } from 'lucide-react'

type Quiz = {
  id: string
  title: string
  description: string | null
  emoji: string
  xpPerQ: number
  timeLimit: number
  questionCount: number
  attemptCount: number
}

export default function QuizListPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/quizzes', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setQuizzes(d.quizzes ?? []))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">Trivia & Quizzes</h1>
          <p className="text-[11px] text-neutral-500">Beat the clock, earn XP.</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-md">
          <BrainCircuit className="w-5 h-5 text-white" />
        </div>
      </header>

      <section className="mx-4 mt-2 flex flex-col gap-3">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-white border border-neutral-100 animate-pulse" />
        ))}

        {!loading && quizzes.length === 0 && (
          <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No quizzes yet.
          </div>
        )}

        {quizzes.map((q, i) => (
          <motion.div key={q.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <Link
              href={`/engage/quiz/${q.id}`}
              className="flex items-center gap-3 rounded-2xl bg-white border border-neutral-100 shadow-sm p-3 active:scale-[0.98] transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-100 to-purple-100 flex items-center justify-center text-2xl shrink-0">
                {q.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-neutral-900 truncate">{q.title}</p>
                {q.description && <p className="text-[11px] text-neutral-500 line-clamp-1">{q.description}</p>}
                <div className="flex items-center gap-2 mt-1 text-[10px] text-neutral-500">
                  <span>{q.questionCount} Qs</span>
                  <span className="flex items-center gap-0.5"><Timer className="w-3 h-3" />{q.timeLimit}s</span>
                  <span className="flex items-center gap-0.5"><Users className="w-3 h-3" />{q.attemptCount}</span>
                  <span className="text-primary font-bold">+{q.xpPerQ} XP/Q</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300" />
            </Link>
          </motion.div>
        ))}
      </section>
    </>
  )
}
