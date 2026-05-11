'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type MeType = {
  id: string
  name: string
  email?: string
  image?: string | null
  coins: number
  xp?: number
  level: number
  streakCount: number
  rank: string | number
  progress: {
    percent: number
    inLevel: number
    forLevel: number
  }
} | null

const MeContext = createContext<{
  me: MeType
  loading: boolean
  refresh: () => Promise<void>
}>({
  me: null,
  loading: true,
  refresh: async () => {},
})

export function MeProvider({ children }: { children: React.ReactNode }) {
  const [me, setMe] = useState<MeType>(null)
  const [loading, setLoading] = useState(true)

  const refresh = async () => {
    try {
      const res = await fetch('/api/me', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })

      const data = await res.json()
      setMe(data.me ?? null)
    } catch (err) {
      console.error(err)
      setMe(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <MeContext.Provider value={{ me, loading, refresh }}>
      {children}
    </MeContext.Provider>
  )
}

export function useMe() {
  return useContext(MeContext)
}