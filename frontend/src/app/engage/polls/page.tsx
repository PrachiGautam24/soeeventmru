'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Vote, Users } from 'lucide-react'

import { useMe } from '@/components/engage/MeProvider'
import { useXpToast } from '@/components/engage/XpToast'

type Option = {
  id: string
  label: string
  emoji: string | null
  votes: number
}

type Poll = {
  id: string
  question: string
  description: string | null
  emoji: string
  xpReward: number
  closesAt: string | null
  totalVotes: number
  myVote: string | null
  options: Option[]
}

type Reward = {
  xpDelta: number
  coinsDelta: number
  leveledUp: boolean
  level: number
}

type VoteResult = {
  id: string
  votes: number
}

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([])
  const [loading, setLoading] = useState(true)

  const { refresh } = useMe()
  const { showReward, push } = useXpToast()

  useEffect(() => {
    fetch('/api/polls', {
      cache: 'no-store',
    })
      .then((r) => r.json())
      .then((d: { polls?: Poll[] }) => setPolls(d.polls ?? []))
      .finally(() => setLoading(false))
  }, [])

  async function vote(poll: Poll, optionId: string) {
    if (poll.myVote === optionId) return

    const previousPoll = polls.find((p) => p.id === poll.id)
    if (!previousPoll) return

    setPolls((prev) =>
      prev.map((p) => {
        if (p.id !== poll.id) return p

        const prevVote = p.myVote

        const newOptions = p.options.map((o) => {
          let v = o.votes

          if (o.id === optionId) v += 1
          if (o.id === prevVote) v -= 1

          return {
            ...o,
            votes: v,
          }
        })

        return {
          ...p,
          myVote: optionId,
          totalVotes: prevVote ? p.totalVotes : p.totalVotes + 1,
          options: newOptions,
        }
      })
    )

    const res = await fetch('/api/polls/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pollId: poll.id,
        optionId,
      }),
    })

    if (!res.ok) {
      setPolls((prev) =>
        prev.map((p) =>
          p.id === previousPoll.id ? previousPoll : p
        )
      )

      push({
        kind: 'xp',
        title: 'Sign in to vote',
        detail: 'Votes earn XP.',
      })

      return
    }

    const d: {
      totalVotes: number
      results: VoteResult[]
      reward?: Reward
    } = await res.json()

    await fetch('/api/challenges/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'POLL_VOTE',
      }),
    })

    setPolls((prev) =>
      prev.map((p) =>
        p.id === poll.id
          ? {
              ...p,
              totalVotes: d.totalVotes,
              options: p.options.map((o) => ({
                ...o,
                votes:
                  d.results.find((r) => r.id === o.id)?.votes ??
                  o.votes,
              })),
            }
          : p
      )
    )

    if (d.reward) {
      await refresh()

      showReward({
        xp: d.reward.xpDelta,
        coins: d.reward.coinsDelta,
        leveledUp: d.reward.leveledUp,
        level: d.reward.level,
        reason: 'Voted in a poll',
      })
    }
  }

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link
          href="/engage"
          className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>

        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">
            Campus Polls
          </h1>

          <p className="text-[11px] text-neutral-500">
            Your voice, live results, instant XP.
          </p>
        </div>

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
          <Vote className="w-5 h-5 text-white" />
        </div>
      </header>

      <section className="mx-4 mt-2 flex flex-col gap-3">
        {loading &&
          Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-2xl bg-white border border-neutral-100 animate-pulse"
            />
          ))}

        {!loading && polls.length === 0 && (
          <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No polls open right now. Check back soon!
          </div>
        )}

        {polls.map((p) => (
          <PollCard
            key={p.id}
            poll={p}
            onVote={(opt) => vote(p, opt)}
          />
        ))}
      </section>
    </>
  )
}

function PollCard({
  poll,
  onVote,
}: {
  poll: Poll
  onVote: (optionId: string) => void
}) {
  const closed = poll.closesAt
    ? new Date(poll.closesAt) < new Date()
    : false

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-xl shrink-0">
          {poll.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-neutral-900">
            {poll.question}
          </p>

          {poll.description && (
            <p className="text-[11px] text-neutral-500 mt-0.5">
              {poll.description}
            </p>
          )}
        </div>

        <span className="text-[10px] font-bold text-primary shrink-0">
          +{poll.xpReward} XP
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {poll.options.map((o) => {
          const pct =
            poll.totalVotes > 0
              ? Math.round((o.votes / poll.totalVotes) * 100)
              : 0

          const selected = poll.myVote === o.id
          const voted = Boolean(poll.myVote)

          return (
            <button
              key={o.id}
              disabled={closed}
              onClick={() => onVote(o.id)}
              className={`relative w-full text-left rounded-xl border overflow-hidden active:scale-[0.99] transition ${
                selected
                  ? 'border-sky-400 bg-sky-50'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              {voted && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-y-0 left-0 ${
                    selected
                      ? 'bg-sky-200/60'
                      : 'bg-neutral-100'
                  }`}
                />
              )}

              <div className="relative flex items-center gap-2 px-3 py-2.5">
                {o.emoji && (
                  <span className="text-base">{o.emoji}</span>
                )}

                <span
                  className={`flex-1 text-sm font-semibold ${
                    selected ? 'text-sky-700' : 'text-neutral-800'
                  }`}
                >
                  {o.label}
                </span>

                {voted && (
                  <span className="text-[11px] font-black text-neutral-700">
                    {pct}%
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between mt-3 text-[10px] text-neutral-500">
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {poll.totalVotes} votes
        </span>

        {closed && (
          <span className="text-rose-500 font-bold">Closed</span>
        )}

        {!closed && poll.myVote && (
          <span className="text-emerald-600 font-bold">
            Vote recorded ✓
          </span>
        )}
      </div>
    </motion.div>
  )
}