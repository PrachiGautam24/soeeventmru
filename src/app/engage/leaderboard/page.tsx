'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Crown, Flame, User as UserIcon, Trophy } from 'lucide-react'

type Scope = 'day' | 'week' | 'all'

type Leader = {
  rank: number
  id: string
  name: string
  image: string | null
  xp: number
  level: number
  streak: number
  department: string | null
  isMe: boolean
}

export default function LeaderboardPage() {
  const [scope, setScope] = useState<Scope>('all')
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [myRank, setMyRank] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/leaderboard?scope=${scope}&limit=50`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        setLeaders(d.leaders ?? [])
        setMyRank(d.myRank ?? null)
      })
      .finally(() => setLoading(false))
  }, [scope])

  const top3 = leaders.slice(0, 3)
  const rest = leaders.slice(3)

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3 bg-gradient-to-br from-amber-500 to-orange-600 text-white sticky top-0 z-10">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-base font-black leading-tight">Leaderboard</h1>
          <p className="text-[11px] opacity-90">
            {scope === 'day' && 'Today’s top students'}
            {scope === 'week' && 'This week’s rising stars'}
            {scope === 'all' && 'All-time XP champions'}
          </p>
        </div>
        <div className="bg-white/20 rounded-full px-3 py-1.5 text-[11px] font-bold flex items-center gap-1">
          <Trophy className="w-3 h-3" /> Rank #{myRank ?? '—'}
        </div>
      </header>

      <div className="px-4 pt-3">
        <div className="flex p-1 bg-white rounded-full border border-neutral-100 shadow-sm">
          {(['day', 'week', 'all'] as Scope[]).map((s) => (
            <button
              key={s}
              onClick={() => setScope(s)}
              className={`flex-1 py-2 text-xs font-bold rounded-full transition ${
                scope === s ? 'bg-primary text-white shadow-sm' : 'text-neutral-500'
              }`}
            >
              {s === 'day' ? 'Today' : s === 'week' ? 'This Week' : 'All Time'}
            </button>
          ))}
        </div>
      </div>

      {/* Podium */}
      {top3.length > 0 && (
        <section className="mx-4 mt-4 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-4">
          <div className="flex items-end justify-around gap-3 h-40">
            <PodiumSlot leader={top3[1]} rank={2} height="h-24" />
            <PodiumSlot leader={top3[0]} rank={1} height="h-32" isFirst />
            <PodiumSlot leader={top3[2]} rank={3} height="h-20" />
          </div>
        </section>
      )}

      {/* Full list */}
      <section className="mx-4 mt-4">
        {loading && Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-14 rounded-2xl bg-white border border-neutral-100 mb-2 animate-pulse" />
        ))}

        <AnimatePresence initial={false}>
          {rest.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white border ${
                l.isMe ? 'border-primary ring-2 ring-primary/20' : 'border-neutral-100'
              } mb-2 shadow-sm`}
            >
              <span className="w-7 text-center text-xs font-black text-neutral-500">#{l.rank}</span>
              <div className="w-10 h-10 rounded-full bg-neutral-100 overflow-hidden flex items-center justify-center">
                {l.image ? (
                  <Image src={l.image} alt={l.name} width={40} height={40} className="object-cover" />
                ) : (
                  <UserIcon className="w-5 h-5 text-neutral-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-neutral-900 truncate">
                  {l.name} {l.isMe && <span className="text-[10px] text-primary">(you)</span>}
                </p>
                <p className="text-[10px] text-neutral-500 truncate">
                  Lvl {l.level}{l.department ? ` • ${l.department}` : ''}
                </p>
              </div>
              {l.streak > 0 && (
                <span className="text-[10px] font-bold text-orange-500 flex items-center gap-0.5">
                  <Flame className="w-3 h-3" /> {l.streak}
                </span>
              )}
              <span className="text-sm font-black text-primary">{l.xp.toLocaleString()}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {!loading && leaders.length === 0 && (
          <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No activity yet. Be the first to earn XP!
          </div>
        )}
      </section>
    </>
  )
}

function PodiumSlot({
  leader,
  rank,
  height,
  isFirst,
}: {
  leader?: Leader
  rank: 1 | 2 | 3
  height: string
  isFirst?: boolean
}) {
  const colors: Record<number, string> = {
    1: 'from-amber-400 to-yellow-500',
    2: 'from-neutral-300 to-neutral-400',
    3: 'from-amber-700 to-amber-900',
  }
  if (!leader) {
    return <div className="flex-1 flex items-end"><div className={`${height} w-full rounded-t-xl bg-neutral-200/60`} /></div>
  }
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      {isFirst && <Crown className="w-5 h-5 text-amber-500" />}
      <div className={`w-14 h-14 rounded-full border-[3px] ${isFirst ? 'border-amber-400' : 'border-white'} shadow-md overflow-hidden bg-neutral-100 flex items-center justify-center`}>
        {leader.image ? (
          <Image src={leader.image} alt={leader.name} width={56} height={56} className="object-cover" />
        ) : (
          <UserIcon className="w-7 h-7 text-neutral-400" />
        )}
      </div>
      <p className="text-[11px] font-bold text-neutral-800 truncate max-w-[80px]">{leader.name}</p>
      <p className="text-[10px] font-black text-neutral-700">{leader.xp.toLocaleString()} XP</p>
      <div className={`${height} w-full rounded-t-2xl bg-gradient-to-b ${colors[rank]} flex items-start justify-center pt-1`}>
        <span className="text-white font-black text-lg drop-shadow">{rank}</span>
      </div>
    </div>
  )
}
