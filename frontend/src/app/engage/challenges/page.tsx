'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Target, Check } from 'lucide-react'
import StatBar from '@/components/engage/StatBar'
import { useMe } from '@/components/engage/MeProvider'
import { useXpToast } from '@/components/engage/XpToast'

type Challenge = {
  id: string
  title: string
  description: string
  emoji: string
  type: 'DAILY' | 'WEEKLY' | 'SPECIAL'
  goal: number
  xpReward: number
  coinReward: number
  progress: number
  status: 'IN_PROGRESS' | 'COMPLETED' | 'CLAIMED'
}

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'ALL' | 'DAILY' | 'WEEKLY' | 'SPECIAL'>('ALL')
  const { applyReward } = useMe()
  const { showReward } = useXpToast()

  useEffect(() => {
    fetch('/api/challenges', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setChallenges(d.challenges ?? []))
      .finally(() => setLoading(false))
  }, [])

  async function claim(id: string) {
    const res = await fetch('/api/challenges/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ challengeId: id }),
    })
    if (!res.ok) return
    const data = await res.json()
    setChallenges((prev) => prev.map((c) => (c.id === id ? { ...c, status: 'CLAIMED' } : c)))
    if (data.reward) {
      applyReward(data.reward)
      showReward({ xp: data.reward.xpDelta, coins: data.reward.coinsDelta, leveledUp: data.reward.leveledUp, level: data.reward.level, reason: 'Challenge claimed' })
    }
  }

  const visible = filter === 'ALL' ? challenges : challenges.filter((c) => c.type === filter)
  const completedCount = challenges.filter((c) => c.status !== 'IN_PROGRESS').length

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">Quests</h1>
          <p className="text-[11px] text-neutral-500">
            {completedCount}/{challenges.length} completed today
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
          <Target className="w-5 h-5 text-white" />
        </div>
      </header>

      <StatBar />

      <div className="px-4 mt-4 flex gap-2 overflow-x-auto scrollbar-hide">
        {(['ALL', 'DAILY', 'WEEKLY', 'SPECIAL'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition ${
              filter === f ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-500 border border-neutral-200'
            }`}
          >
            {f.charAt(0) + f.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <section className="mx-4 mt-3 flex flex-col gap-2">
        {loading && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-white border border-neutral-100 animate-pulse" />
        ))}

        {!loading && visible.length === 0 && (
          <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No quests in this category yet.
          </div>
        )}

        {visible.map((c) => {
          const pct = Math.min(100, Math.round((c.progress / c.goal) * 100))
          const claimable = c.status === 'COMPLETED'
          const claimed = c.status === 'CLAIMED'
          return (
            <motion.div
              key={c.id}
              whileTap={{ scale: 0.99 }}
              className={`rounded-2xl bg-white border ${claimable ? 'border-emerald-300 ring-1 ring-emerald-100' : 'border-neutral-100'} p-3.5 shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 ${claimed ? 'bg-emerald-50' : 'bg-neutral-100'}`}>
                  {claimed ? <Check className="w-5 h-5 text-emerald-500" /> : c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-sm text-neutral-900">{c.title}</p>
                    <span className="px-1.5 py-0.5 rounded-md bg-neutral-100 text-[9px] font-bold text-neutral-600 uppercase">
                      {c.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{c.description}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6 }}
                      className={`h-full rounded-full ${claimable ? 'bg-emerald-500' : 'bg-primary'}`}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                      <span>{c.progress}/{c.goal}</span>
                      <span>•</span>
                      <span className="text-primary font-bold">+{c.xpReward} XP</span>
                      <span className="text-amber-600 font-bold">+{c.coinReward} coins</span>
                    </div>
                    {claimable && (
                      <button
                        onClick={() => claim(c.id)}
                        className="text-[10px] font-black px-3.5 py-1.5 rounded-full bg-emerald-500 text-white shadow-sm active:scale-95"
                      >
                        Claim
                      </button>
                    )}
                    {claimed && <span className="text-[10px] font-bold text-emerald-600">Claimed ✓</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </section>
    </>
  )
}
