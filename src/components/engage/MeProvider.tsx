'use client'

import { createContext, useContext, useCallback, useEffect, useState, ReactNode } from 'react'

export type MeData = {
  id: string
  name: string | null
  email: string
  image: string | null
  department: string | null
  year: string | null
  bio: string | null
  xp: number
  level: number
  coins: number
  streakCount: number
  rank: number
  progress: { level: number; inLevel: number; forLevel: number; percent: number }
  badges: { id: string; name: string; emoji: string; color: string; rarity: string }[]
  stats: { posts: number; quizAttempts: number; eventCheckins: number }
}

type Ctx = {
  me: MeData | null
  loading: boolean
  refresh: () => Promise<void>
  applyReward: (r: { xpDelta?: number; coinsDelta?: number; xp?: number; coins?: number; level?: number }) => void
}

const MeCtx = createContext<Ctx | null>(null)

export function useMe() {
  const ctx = useContext(MeCtx)
  if (!ctx) throw new Error('useMe must be used inside <MeProvider>')
  return ctx
}

export function MeProvider({ children }: { children: ReactNode }) {
  const [me, setMe] = useState<MeData | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/me', { cache: 'no-store' })
      if (!res.ok) throw new Error('fail')
      const data = await res.json()
      setMe(data.user ?? null)
    } catch {
      setMe(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const applyReward: Ctx['applyReward'] = useCallback((r) => {
    setMe((prev) => {
      if (!prev) return prev
      const xp = typeof r.xp === 'number' ? r.xp : prev.xp + (r.xpDelta ?? 0)
      const coins = typeof r.coins === 'number' ? r.coins : prev.coins + (r.coinsDelta ?? 0)
      const level = r.level ?? prev.level
      const nextFloor = (level * (level + 1)) / 2 * 100
      const currFloor = (level * (level - 1)) / 2 * 100
      const inLevel = xp - currFloor
      const forLevel = nextFloor - currFloor
      return {
        ...prev,
        xp,
        coins,
        level,
        progress: {
          level,
          inLevel,
          forLevel,
          percent: Math.max(0, Math.min(100, Math.round((inLevel / forLevel) * 100))),
        },
      }
    })
  }, [])

  return <MeCtx.Provider value={{ me, loading, refresh, applyReward }}>{children}</MeCtx.Provider>
}
