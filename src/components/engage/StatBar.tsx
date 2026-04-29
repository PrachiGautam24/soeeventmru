'use client'

import { motion } from 'framer-motion'
import { Flame, Coins, Trophy, User as UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMe } from './MeProvider'

/**
 * The sticky top "identity + stats" strip shown on every Engage page.
 * Renders avatar, level, XP progress bar, streak, coins and live rank.
 */
export default function StatBar() {
  const { me, loading } = useMe()

  if (loading) {
    return (
      <div className="mx-4 mt-4 h-24 rounded-2xl bg-white border border-neutral-100 shadow-sm animate-pulse" />
    )
  }

  if (!me) {
    return (
      <Link
        href="/login"
        className="mx-4 mt-4 block rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white px-4 py-4 shadow-md"
      >
        <p className="text-sm font-bold">Sign in to start earning XP</p>
        <p className="text-[11px] opacity-80">Join challenges, climb the leaderboard.</p>
      </Link>
    )
  }

  return (
    <div className="mx-4 mt-3 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white px-4 py-3 shadow-lg relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

      <div className="flex items-center gap-3 relative">
        <Link href="/engage/profile" className="shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-white/60 bg-white/10 overflow-hidden flex items-center justify-center">
            {me.image ? (
              <Image src={me.image} alt={me.name ?? 'me'} width={48} height={48} className="object-cover" />
            ) : (
              <UserIcon className="w-6 h-6 text-white/80" />
            )}
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm truncate">{me.name ?? 'Student'}</p>
            <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-bold">LVL {me.level}</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${me.progress.percent}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-400"
            />
          </div>
          <p className="text-[10px] opacity-80 mt-1">
            {me.progress.inLevel} / {me.progress.forLevel} XP to Level {me.level + 1}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 relative">
        <Stat icon={<Flame className="w-3.5 h-3.5" />} label="Streak" value={`${me.streakCount}d`} />
        <Stat icon={<Coins className="w-3.5 h-3.5" />} label="Coins" value={me.coins} />
        <Stat icon={<Trophy className="w-3.5 h-3.5" />} label="Rank" value={`#${me.rank}`} />
      </div>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-xl px-2.5 py-1.5 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">{icon}</div>
      <div className="min-w-0">
        <p className="text-[9px] uppercase tracking-wider opacity-80 leading-none">{label}</p>
        <p className="text-xs font-bold leading-tight">{value}</p>
      </div>
    </div>
  )
}
