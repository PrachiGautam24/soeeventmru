'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flame, Target, Trophy, BrainCircuit,
  Vote, Gift, CalendarCheck, Sparkles, ChevronRight, Rss
} from 'lucide-react'
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

const quickActions = [
  { icon: Target,        label: 'Quests',       href: '/engage/challenges',  color: 'from-emerald-500 to-teal-500' },
  { icon: Trophy,        label: 'Leaderboard',  href: '/engage/leaderboard', color: 'from-amber-500 to-orange-500' },
  { icon: BrainCircuit,  label: 'Quiz',         href: '/engage/quiz',        color: 'from-fuchsia-500 to-purple-600' },
  { icon: Vote,          label: 'Polls',        href: '/engage/polls',       color: 'from-sky-500 to-blue-600' },
  { icon: Rss,           label: 'Feed',         href: '/engage/feed',        color: 'from-rose-500 to-pink-600' },
  { icon: CalendarCheck, label: 'Check-in',     href: '/engage/events',      color: 'from-indigo-500 to-violet-600' },
  { icon: Gift,          label: 'Rewards',      href: '/engage/rewards',     color: 'from-yellow-500 to-amber-500' },
  { icon: Sparkles,      label: 'Profile',      href: '/engage/profile',     color: 'from-slate-600 to-slate-800' },
]

export default function EngageHubPage() {
  const { me, applyReward } = useMe()
  const { showReward } = useXpToast()
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)

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
      showReward({
        xp: data.reward.xpDelta,
        coins: data.reward.coinsDelta,
        leveledUp: data.reward.leveledUp,
        level: data.reward.level,
        reason: 'Challenge claimed',
      })
    }
  }

  const daily = challenges.filter((c) => c.type === 'DAILY')
  const weekly = challenges.filter((c) => c.type === 'WEEKLY')

  return (
    <>
      <header className="px-5 pt-10 pb-1 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">SOE Engage</p>
          <h1 className="text-xl font-black text-neutral-900">
            Hey{me?.name ? `, ${me.name.split(' ')[0]}` : ''} 👋
          </h1>
        </div>
        <Link
          href="/engage/leaderboard"
          className="h-10 px-3 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center gap-1.5 text-xs font-bold text-neutral-700"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          Rank #{me?.rank ?? '—'}
        </Link>
      </header>

      <StatBar />

      {/* Streak banner */}
      {me && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-3 flex items-center gap-3 shadow-md"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold leading-tight">
              {me.streakCount}-day streak — keep it alive!
            </p>
            <p className="text-[11px] opacity-90">
              Log in daily for bonus XP every 5 days.
            </p>
          </div>
        </motion.div>
      )}

      {/* Quick actions grid */}
      <section className="mx-4 mt-4">
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  href={a.href}
                  className="flex flex-col items-center gap-1.5 py-2.5 rounded-2xl bg-white border border-neutral-100 shadow-sm active:scale-95 transition-transform"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-700">{a.label}</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Daily challenges */}
      <section className="mx-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Daily Quests</h2>
          <Link href="/engage/challenges" className="text-[11px] font-semibold text-primary flex items-center gap-0.5">
            All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {loading && <div className="h-24 rounded-2xl bg-white border border-neutral-100 animate-pulse" />}

        <div className="flex flex-col gap-2">
          {daily.slice(0, 3).map((c) => (
            <ChallengeCard key={c.id} challenge={c} onClaim={() => claim(c.id)} />
          ))}
          {!loading && daily.length === 0 && (
            <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-4 text-center text-xs text-neutral-500">
              No daily quests yet. Check back tomorrow.
            </div>
          )}
        </div>
      </section>

      {/* Weekly */}
      {weekly.length > 0 && (
        <section className="mx-4 mt-5">
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Weekly Missions</h2>
          <div className="flex flex-col gap-2">
            {weekly.slice(0, 2).map((c) => (
              <ChallengeCard key={c.id} challenge={c} onClaim={() => claim(c.id)} />
            ))}
          </div>
        </section>
      )}

      {/* Trending CTA */}
      <section className="mx-4 mt-5 mb-2">
        <Link
          href="/engage/quiz"
          className="block rounded-2xl bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 text-white p-4 shadow-md active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Daily Trivia is live</p>
              <p className="text-[11px] opacity-80">Play now to earn up to 100 XP.</p>
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
        </Link>
      </section>
    </>
  )
}

function ChallengeCard({
  challenge: c,
  onClaim,
}: {
  challenge: Challenge
  onClaim: () => void
}) {
  const pct = Math.min(100, Math.round((c.progress / c.goal) * 100))
  const claimable = c.status === 'COMPLETED'
  const claimed = c.status === 'CLAIMED'
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl bg-white border ${claimable ? 'border-emerald-300' : 'border-neutral-100'} p-3 shadow-sm`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-xl shrink-0">
          {c.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-bold text-sm text-neutral-900 truncate">{c.title}</p>
            <span className="text-[10px] font-bold text-primary">+{c.xpReward} XP</span>
          </div>
          <p className="text-[11px] text-neutral-500 line-clamp-1">{c.description}</p>
          <div className="mt-1.5 h-1.5 rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5 }}
              className={`h-full rounded-full ${claimable ? 'bg-emerald-500' : 'bg-primary'}`}
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[10px] text-neutral-500">
              {c.progress}/{c.goal}
            </span>
            {claimable && (
              <button
                onClick={onClaim}
                className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500 text-white shadow-sm active:scale-95"
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
}
