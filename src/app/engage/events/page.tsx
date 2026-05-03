'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, CalendarCheck, MapPin, Users, Check, QrCode } from 'lucide-react'
import { useMe } from '@/components/engage/MeProvider'
import { useXpToast } from '@/components/engage/XpToast'

type EventRow = {
  id: string
  slug: string
  title: string
  description: string | null
  location: string | null
  imageUrl: string | null
  startsAt: string
  endsAt: string | null
  xpReward: number
  coinReward: number
  attendeeCount: number
  checkedIn: boolean
}

export default function EventsCheckinPage() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [loading, setLoading] = useState(true)
  const [codeInput, setCodeInput] = useState('')
  const [codeOpen, setCodeOpen] = useState(false)
  const { applyReward } = useMe()
  const { showReward, push } = useXpToast()

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    const res = await fetch('/api/events', { cache: 'no-store' })
    const d = await res.json()
    setEvents(d.events ?? [])
    setLoading(false)
  }

  async function checkin({ eventId, code }: { eventId?: string; code?: string }) {
    const res = await fetch('/api/events/checkin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventId ? { eventId } : { code }),
    })
    if (!res.ok) {
      push({ kind: 'xp', title: code ? 'Invalid code' : 'Sign in to check in' })
      return
    }
    const d = await res.json()
    if (d.alreadyCheckedIn) {
      push({ kind: 'xp', title: 'Already checked in here' })
    } else if (d.reward) {
      applyReward(d.reward)
      showReward({ xp: d.reward.xpDelta, coins: d.reward.coinsDelta, leveledUp: d.reward.leveledUp, level: d.reward.level, reason: `Checked in: ${d.event.title}` })
    }
    setCodeInput('')
    setCodeOpen(false)
    load()
  }

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">Events & Check-ins</h1>
          <p className="text-[11px] text-neutral-500">Show up. Earn XP. Unlock badges.</p>
        </div>
        <button
          onClick={() => setCodeOpen(true)}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md"
        >
          <QrCode className="w-5 h-5 text-white" />
        </button>
      </header>

      <section className="mx-4 mt-2 flex flex-col gap-3 pb-4">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-white border border-neutral-100 animate-pulse" />
        ))}

        {!loading && events.length === 0 && (
          <div className="rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No upcoming events yet.
          </div>
        )}

        {events.map((e, i) => {
          const starts = new Date(e.startsAt)
          return (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-3 flex items-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-indigo-600 uppercase">
                  {starts.toLocaleDateString(undefined, { month: 'short' })}
                </span>
                <span className="text-lg font-black text-indigo-700 leading-none">{starts.getDate()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-neutral-900 truncate">{e.title}</p>
                {e.location && (
                  <p className="text-[10px] text-neutral-500 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3" /> {e.location}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                  <span className="flex items-center gap-0.5 text-neutral-500">
                    <Users className="w-3 h-3" />{e.attendeeCount}
                  </span>
                  <span className="text-primary font-bold">+{e.xpReward} XP</span>
                  <span className="text-amber-600 font-bold">+{e.coinReward} coins</span>
                </div>
              </div>
              {e.checkedIn ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  <Check className="w-3 h-3" /> In
                </span>
              ) : (
                <button
                  onClick={() => checkin({ eventId: e.id })}
                  className="text-[10px] font-black px-3 py-1.5 rounded-full bg-indigo-500 text-white shadow-sm active:scale-95"
                >
                  <CalendarCheck className="w-3 h-3 inline mr-0.5" /> Check in
                </button>
              )}
            </motion.div>
          )
        })}
      </section>

      <AnimatePresence>
        {codeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center"
            onClick={() => setCodeOpen(false)}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white rounded-t-3xl p-5 pb-8"
            >
              <div className="w-10 h-1 bg-neutral-200 rounded-full mx-auto mb-4" />
              <p className="text-base font-black">Enter check-in code</p>
              <p className="text-[11px] text-neutral-500">Ask the event host for the code.</p>
              <input
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                placeholder="ABC123"
                className="mt-4 w-full px-4 py-3 rounded-2xl bg-neutral-100 text-lg font-mono font-black tracking-widest text-center focus:outline-none"
              />
              <button
                onClick={() => checkin({ code: codeInput.trim() })}
                disabled={!codeInput.trim()}
                className="mt-4 w-full py-3 rounded-2xl bg-indigo-500 text-white text-sm font-bold disabled:opacity-40"
              >
                Check in
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
