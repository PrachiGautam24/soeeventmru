'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Check, X, Trophy, Sparkles } from 'lucide-react'

import { useMe } from '@/components/engage/MeProvider'
import { useXpToast } from '@/components/engage/XpToast'

type Question = {
  id: string
  prompt: string
  choices: string[]
}

type Quiz = {
  id: string
  title: string
  description: string | null
  emoji: string
  timeLimit: number
  xpPerQ: number
  questions: Question[]
}

type FeedbackMap = Record<
  string,
  {
    correct: boolean
    correctIdx: number
  }
>

type Reward = {
  xpDelta: number
  coinsDelta: number
  leveledUp: boolean
  level: number
}

type SubmitResponse = {
  score: number
  total: number
  xpEarned: number
  perQuestion: Array<{
    questionId: string
    correct: boolean
    correctIdx: number
  }>
  reward?: Reward
}

export default function QuizPlayPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  const { refresh } = useMe()
  const { showReward } = useXpToast()

  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [submitting, setSubmitting] = useState(false)

  const [result, setResult] = useState<{
    score: number
    total: number
    xpEarned: number
    feedback: FeedbackMap
  } | null>(null)

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    fetch(`/api/quizzes/${params.id}`, {
      cache: 'no-store',
    })
      .then((r) => r.json())
      .then((d: { quiz?: Quiz }) => {
        setQuiz(d.quiz ?? null)

        if (d.quiz) {
          setTimeLeft(d.quiz.timeLimit)
        }
      })
  }, [params.id])

  useEffect(() => {
    if (!quiz || result) return

    if (tickRef.current) {
      clearInterval(tickRef.current)
    }

    setTimeLeft(quiz.timeLimit)

    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (tickRef.current) {
            clearInterval(tickRef.current)
          }

          advance()

          return 0
        }

        return t - 1
      })
    }, 1000)

    return () => {
      if (tickRef.current) {
        clearInterval(tickRef.current)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, quiz, result])

  function answer(choiceIdx: number) {
    if (!quiz) return

    const q = quiz.questions[idx]

    setAnswers((prev) => ({
      ...prev,
      [q.id]: choiceIdx,
    }))

    setTimeout(advance, 250)
  }

  function advance() {
    if (!quiz) return

    if (idx + 1 < quiz.questions.length) {
      setIdx((i) => i + 1)
    } else {
      submit()
    }
  }

  async function submit() {
    if (!quiz || submitting) return

    setSubmitting(true)

    const body = {
      answers: Object.entries(answers).map(
        ([questionId, choiceIdx]) => ({
          questionId,
          choiceIdx,
        })
      ),
    }

    const res = await fetch(`/api/quizzes/${quiz.id}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    setSubmitting(false)

    if (!res.ok) {
      router.push('/login')
      return
    }

    const d: SubmitResponse = await res.json()

    const feedback: FeedbackMap = {}

    for (const f of d.perQuestion) {
      feedback[f.questionId] = {
        correct: f.correct,
        correctIdx: f.correctIdx,
      }
    }

    setResult({
      score: d.score,
      total: d.total,
      xpEarned: d.xpEarned,
      feedback,
    })

    if (d.reward) {
      await refresh()

      showReward({
        xp: d.reward.xpDelta,
        coins: d.reward.coinsDelta,
        leveledUp: d.reward.leveledUp,
        level: d.reward.level,
        reason: 'Quiz completed',
      })
    }
  }

  if (!quiz) {
    return (
      <div className="h-screen flex items-center justify-center text-xs text-neutral-400">
        Loading quiz…
      </div>
    )
  }

  if (result) {
    const pct = Math.round((result.score / result.total) * 100)

    return (
      <>
        <header className="px-4 pt-10 pb-3">
          <Link
            href="/engage/quiz"
            className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-700" />
          </Link>
        </header>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-4 mt-4 rounded-3xl bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 text-white p-6 text-center shadow-lg"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/20 mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>

          <p className="text-[11px] uppercase tracking-wider opacity-80 mt-3">
            Quiz Complete
          </p>

          <p className="text-4xl font-black mt-1">
            {result.score}/{result.total}
          </p>

          <p className="text-sm opacity-90">{pct}% accuracy</p>

          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5">
            <Sparkles className="w-4 h-4" />

            <span className="font-bold text-sm">
              +{result.xpEarned} XP earned
            </span>
          </div>
        </motion.section>

        <section className="mx-4 mt-4 flex flex-col gap-2 pb-4">
          {quiz.questions.map((q, i) => {
            const given = answers[q.id]
            const fb = result.feedback[q.id]

            return (
              <div
                key={q.id}
                className="rounded-2xl bg-white border border-neutral-100 p-3"
              >
                <p className="text-[10px] font-bold text-neutral-400">
                  Q{i + 1}
                </p>

                <p className="text-sm font-bold text-neutral-900">
                  {q.prompt}
                </p>

                <div className="mt-2 flex flex-col gap-1">
                  {q.choices.map((c, ci) => {
                    const isCorrect = fb?.correctIdx === ci
                    const isChosen = given === ci

                    return (
                      <div
                        key={ci}
                        className={`text-[12px] px-3 py-1.5 rounded-lg flex items-center gap-2 ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-700'
                            : isChosen
                              ? 'bg-rose-50 text-rose-700'
                              : 'bg-neutral-50 text-neutral-600'
                        }`}
                      >
                        {isCorrect && (
                          <Check className="w-3.5 h-3.5" />
                        )}

                        {isChosen && !isCorrect && (
                          <X className="w-3.5 h-3.5" />
                        )}

                        {c}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>

        <div className="mx-4 pb-6 flex gap-2">
          <Link
            href="/engage/quiz"
            className="flex-1 text-center py-3 rounded-2xl bg-white border border-neutral-200 text-sm font-bold text-neutral-700"
          >
            Back
          </Link>

          <Link
            href="/engage/leaderboard"
            className="flex-1 text-center py-3 rounded-2xl bg-primary text-white text-sm font-bold"
          >
            See Leaderboard
          </Link>
        </div>
      </>
    )
  }

  const q = quiz.questions[idx]
  const progress = Math.round((idx / quiz.questions.length) * 100)
  const timerPct = Math.round((timeLeft / quiz.timeLimit) * 100)

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link
          href="/engage/quiz"
          className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>

        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-wider text-neutral-400">
            {quiz.emoji} {quiz.title}
          </p>

          <p className="text-sm font-bold text-neutral-900">
            Q {idx + 1} / {quiz.questions.length}
          </p>
        </div>

        <div
          className={`text-sm font-black ${
            timeLeft < 5 ? 'text-rose-500' : 'text-neutral-800'
          }`}
        >
          {timeLeft}s
        </div>
      </header>

      <div className="mx-4 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
          className="mx-4 mt-5 rounded-3xl bg-white border border-neutral-100 shadow-sm p-5"
        >
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
            Question {idx + 1}
          </p>

          <p className="mt-1 text-lg font-black text-neutral-900 leading-snug">
            {q.prompt}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {q.choices.map((c, ci) => (
              <motion.button
                key={ci}
                whileTap={{ scale: 0.98 }}
                onClick={() => answer(ci)}
                className={`text-left px-4 py-3 rounded-2xl border-2 text-sm font-semibold transition ${
                  answers[q.id] === ci
                    ? 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700'
                    : 'border-neutral-200 bg-white text-neutral-800 active:border-fuchsia-300'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          <div className="mt-4 h-1 rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              animate={{
                width: `${timerPct}%`,
              }}
              transition={{
                duration: 0.2,
                ease: 'linear',
              }}
              className={`h-full rounded-full ${
                timeLeft < 5 ? 'bg-rose-500' : 'bg-emerald-500'
              }`}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}