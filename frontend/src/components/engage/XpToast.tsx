'use client'

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, Trophy, Coins, Flame } from 'lucide-react'

type ToastKind = 'xp' | 'levelup' | 'coins' | 'streak'

export type Toast = {
  id: string
  kind: ToastKind
  title: string
  detail?: string
}

type Ctx = {
  showReward: (r: { xp?: number; coins?: number; leveledUp?: boolean; level?: number; reason?: string }) => void
  push: (t: Omit<Toast, 'id'>) => void
}

const ToastCtx = createContext<Ctx | null>(null)

export function useXpToast() {
  const ctx = useContext(ToastCtx)
  if (!ctx) throw new Error('useXpToast must be used inside <XpToastProvider>')
  return ctx
}

export function XpToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { ...t, id }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id))
    }, 2800)
  }, [])

  const showReward = useCallback(
    (r: { xp?: number; coins?: number; leveledUp?: boolean; level?: number; reason?: string }) => {
      if (r.leveledUp && r.level) {
        push({ kind: 'levelup', title: `Level Up! You're now Level ${r.level}`, detail: r.reason })
      }
      if (r.xp && r.xp > 0) {
        push({ kind: 'xp', title: `+${r.xp} XP`, detail: r.reason })
      }
      if (r.coins && r.coins > 0) {
        push({ kind: 'coins', title: `+${r.coins} Coins` })
      }
    },
    [push]
  )

  return (
    <ToastCtx.Provider value={{ showReward, push }}>
      {children}
      <div className="fixed inset-x-0 top-0 z-[60] pointer-events-none flex flex-col items-center gap-2 pt-3 px-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastBubble key={t.id} toast={t} />
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  )
}

function ToastBubble({ toast }: { toast: Toast }) {
  const styles: Record<ToastKind, { icon: ReactNode; bg: string; text: string }> = {
    xp:      { icon: <Sparkles className="w-4 h-4" />,  bg: 'from-indigo-600 to-blue-500',   text: 'text-white' },
    levelup: { icon: <Trophy   className="w-4 h-4" />,  bg: 'from-amber-500 to-orange-500',  text: 'text-white' },
    coins:   { icon: <Coins    className="w-4 h-4" />,  bg: 'from-yellow-500 to-amber-500',  text: 'text-white' },
    streak:  { icon: <Flame    className="w-4 h-4" />,  bg: 'from-red-500 to-orange-500',    text: 'text-white' },
  }
  const s = styles[toast.kind]
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`pointer-events-auto max-w-sm w-full flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg bg-gradient-to-r ${s.bg} ${s.text}`}
    >
      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">{s.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm leading-tight">{toast.title}</p>
        {toast.detail && <p className="text-[11px] opacity-90 truncate">{toast.detail}</p>}
      </div>
    </motion.div>
  )
}

// Default reward shape returned by most API endpoints.
export type RewardLike = {
  xpDelta?: number
  coinsDelta?: number
  leveledUp?: boolean
  level?: number
} | null | undefined

export function useReward(reward: RewardLike, reason?: string) {
  const { showReward } = useXpToast()
  useEffect(() => {
    if (!reward) return
    showReward({
      xp: reward.xpDelta,
      coins: reward.coinsDelta,
      leveledUp: reward.leveledUp,
      level: reward.level,
      reason,
    })
  }, [reward, reason, showReward])
}
