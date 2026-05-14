'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { motion } from 'framer-motion'

import {
  ChevronLeft,
  User as UserIcon,
  Flame,
  Coins,
  Trophy,
  Sparkles,
  LogOut,
  Medal,
  Rss,
  CalendarCheck,
  BrainCircuit,
  Settings,
  GraduationCap,
} from 'lucide-react'

import { useMe } from '@/components/engage/MeProvider'

export default function ProfilePage() {
  const { me, loading } = useMe()

  if (loading) {
    return (
      <div className="p-10 text-xs text-neutral-400">
        Loading…
      </div>
    )
  }

  if (!me) {
    return (
      <>
        <div className="px-4 pt-10 pb-3 flex items-center gap-3">
          <Link
            href="/engage"
            className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-700" />
          </Link>

          <h1 className="text-lg font-black text-neutral-900">
            Profile
          </h1>
        </div>

        <div className="mx-4 mt-10 rounded-2xl bg-white border border-neutral-100 p-6 text-center shadow-sm">
          <UserIcon className="w-10 h-10 mx-auto text-neutral-300" />

          <p className="mt-2 text-sm font-bold">
            Sign in to build your profile
          </p>

          <Link
            href="/login"
            className="inline-block mt-4 px-4 py-2 rounded-full bg-primary text-white text-xs font-bold"
          >
            Sign in
          </Link>
        </div>
      </>
    )
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
            My Profile
          </h1>
        </div>

        <Link
          href="/profile"
          className="w-9 h-9 rounded-full bg-white border border-neutral-100 flex items-center justify-center"
        >
          <Settings className="w-4 h-4 text-neutral-500" />
        </Link>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white p-5 shadow-lg relative overflow-hidden"
      >
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

        <div className="flex items-center gap-4 relative">
          <div className="w-20 h-20 rounded-full border-[3px] border-white bg-white/10 overflow-hidden flex items-center justify-center">
            {me.image ? (
              <Image
                src={me.image}
                alt={me.name ?? ''}
                width={80}
                height={80}
                className="object-cover"
              />
            ) : (
              <UserIcon className="w-10 h-10 text-white/70" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xl font-black truncate">
              {me.name ?? 'Student'}
            </p>

            <p className="text-[11px] opacity-80 truncate">
              {me.email}
            </p>

            <div className="flex items-center gap-2 mt-1.5">
              <span className="px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-black">
                LEVEL {me.level}
              </span>

              <span className="text-[10px] opacity-80">
                Rank #{me.rank}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-4">
          <div className="h-2.5 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${me.progress.percent}%`,
              }}
              transition={{ duration: 0.6 }}
              className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
            />
          </div>

          <p className="text-[10px] opacity-80 mt-1">
            {me.progress.inLevel} / {me.progress.forLevel} XP to Level{' '}
            {me.level + 1}
          </p>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-2">
          <StatTile
            icon={<Flame className="w-4 h-4" />}
            value={`${me.streakCount}d`}
            label="Streak"
          />

          <StatTile
            icon={<Coins className="w-4 h-4" />}
            value={me.coins ?? 0}
            label="Coins"
          />

          <StatTile
            icon={<Sparkles className="w-4 h-4" />}
            value={(me.xp ?? 0).toLocaleString()}
            label="XP"
          />
        </div>
      </motion.section>

      <section className="mx-4 mt-4 grid grid-cols-2 gap-2">
        <SmallStat
          icon={<Rss className="w-4 h-4 text-rose-500" />}
          label="Posts"
          value={0}
        />

        <SmallStat
          icon={<BrainCircuit className="w-4 h-4 text-fuchsia-500" />}
          label="Quizzes"
          value={0}
        />

        <SmallStat
          icon={<CalendarCheck className="w-4 h-4 text-indigo-500" />}
          label="Events"
          value={0}
        />

        <SmallStat
          icon={<GraduationCap className="w-4 h-4 text-sky-500" />}
          label="Learning"
          value={0}
        />
      </section>

      <section className="mx-4 mt-5">
        <div className="rounded-2xl bg-white border border-neutral-100 p-5 text-center">
          <Medal className="w-6 h-6 mx-auto text-neutral-300" />

          <p className="text-[11px] text-neutral-500 mt-1">
            Badges will appear here soon.
          </p>
        </div>
      </section>

      <section className="mx-4 mt-5 flex flex-col gap-2">
        <Link
          href="/engage/leaderboard"
          className="flex items-center gap-3 rounded-2xl bg-white border border-neutral-100 p-3 shadow-sm"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
            <Trophy className="w-4 h-4 text-amber-600" />
          </div>

          <span className="flex-1 text-sm font-bold text-neutral-800">
            See full leaderboard
          </span>
        </Link>

        <button
          onClick={() =>
            signOut({
              callbackUrl: '/engage',
            })
          }
          className="flex items-center gap-3 rounded-2xl bg-rose-50 border border-rose-100 p-3 active:scale-98"
        >
          <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center">
            <LogOut className="w-4 h-4 text-rose-600" />
          </div>

          <span className="flex-1 text-left text-sm font-bold text-rose-700">
            Sign out
          </span>
        </button>
      </section>
    </>
  )
}

function StatTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string | number
  label: string
}) {
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur px-2.5 py-2">
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          {icon}
        </div>

        <p className="text-xs font-black">{value}</p>
      </div>

      <p className="text-[9px] uppercase tracking-wider opacity-80 mt-0.5">
        {label}
      </p>
    </div>
  )
}

function SmallStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number | string
}) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-100 p-3 flex flex-col items-center">
      <div className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center">
        {icon}
      </div>

      <p className="text-sm font-black mt-1 text-neutral-900">
        {value}
      </p>

      <p className="text-[9px] uppercase tracking-wider text-neutral-400">
        {label}
      </p>
    </div>
  )
}