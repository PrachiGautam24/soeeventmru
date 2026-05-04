'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ArrowLeft, ChevronRight, LogIn } from 'lucide-react'
import { motion } from 'framer-motion'

const engageItems = [
  { icon: '🎯', label: 'Quests & Challenges', desc: 'Daily & weekly challenges to earn XP',   href: '/engage/challenges' },
  { icon: '🏆', label: 'Leaderboard',         desc: 'See where you rank among students',       href: '/engage/leaderboard' },
  { icon: '🧠', label: 'Quiz',                desc: 'Play daily trivia and earn up to 100 XP', href: '/engage/quiz' },
  { icon: '🗳️', label: 'Polls',               desc: 'Vote on campus topics',                   href: '/engage/polls' },
  { icon: '📡', label: 'Feed',                desc: 'Student activity feed',                   href: '/engage/feed' },
  { icon: '📅', label: 'Event Check-in',      desc: 'Check in to events for XP',              href: '/engage/events' },
  { icon: '🎁', label: 'Rewards',             desc: 'Redeem coins for rewards',                href: '/engage/rewards' },
]

export default function ELearningPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="relative bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="text-center">
            <h1 className="text-white text-xl font-bold">E-Learning</h1>
            <p className="text-white/70 text-xs mt-1">SOE Engage Platform</p>
          </div>
        </div>

        <div className="px-4 mt-5 space-y-2.5">

          {loading ? (
            /* Loading skeleton */
            <div className="space-y-2.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-white rounded-2xl border border-neutral-100 animate-pulse" />
              ))}
            </div>

          ) : !session ? (
            /* Not signed in — gate */
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="flex flex-col items-center text-center pt-10 pb-6 px-4 space-y-5"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-4xl">🔒</span>
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900">Sign in to access E-Learning</p>
                <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                  Join challenges, climb the leaderboard, earn XP and unlock all SOE Engage features.
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push('/login')}
                className="flex items-center gap-2 bg-secondary text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md"
              >
                <LogIn className="w-4 h-4" /> Sign In to Continue
              </motion.button>
              <p className="text-xs text-neutral-400">Use your MRU credentials to log in</p>
            </motion.div>

          ) : (
            /* Signed in — show platform links */
            <>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">SOE Engage Platform</p>

              {engageItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={item.href}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
                  </Link>
                </motion.div>
              ))}

              <Link href="/engage"
                className="flex items-center justify-center gap-2 bg-cyan-600 rounded-2xl py-3.5 text-sm font-bold text-white shadow-md active:scale-[0.98] transition-transform mt-2">
                Open Engage Hub 🚀
              </Link>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
