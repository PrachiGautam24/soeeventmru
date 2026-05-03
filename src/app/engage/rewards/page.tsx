'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Coins, Lock, CheckCircle2 } from 'lucide-react'
import StatBar from '@/components/engage/StatBar'
import { useMe } from '@/components/engage/MeProvider'

type Reward = {
  id: string
  title: string
  description: string
  emoji: string
  cost: number
  stock: number | null
  imageUrl: string | null
  active: boolean
}

export default function RewardsPage() {
  const [rewards, setRewards] = useState<Reward[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<{ reward: Reward; code: string } | null>(null)
  const { me, refresh } = useMe()

  useEffect(() => {
    fetch('/api/rewards', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setRewards(d.rewards ?? []))
      .finally(() => setLoading(false))
  }, [])

  async function redeem(r: Reward) {
    const res = await fetch('/api/rewards/redeem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rewardId: r.id }),
    })
    const d = await res.json()
    if (!res.ok) {
      alert(
        d.error === 'INSUFFICIENT_COINS' ? 'Not enough coins.' :
        d.error === 'OUT_OF_STOCK' ? 'Out of stock.' :
        'Could not redeem.'
      )
      return
    }
    setModal({ reward: r, code: d.code })
    refresh()
  }

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">Rewards Shop</h1>
          <p className="text-[11px] text-neutral-500">Spend coins on perks & swag.</p>
        </div>
        <div className="h-10 px-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-white flex items-center gap-1.5 shadow-md">
          <Coins className="w-4 h-4" />
          <span className="text-sm font-black">{me?.coins ?? 0}</span>
        </div>
      </header>

      <StatBar />

      <section className="mx-4 mt-4 grid grid-cols-2 gap-3">
        {loading && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-44 rounded-2xl bg-white border border-neutral-100 animate-pulse" />
        ))}

        {!loading && rewards.length === 0 && (
          <div className="col-span-2 rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No rewards available yet.
          </div>
        )}

        {rewards.map((r, i) => {
          const affordable = (me?.coins ?? 0) >= r.cost
          const outOfStock = r.stock !== null && r.stock <= 0
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl bg-white border border-neutral-100 shadow-sm p-3 flex flex-col"
            >
              <div className="h-20 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center text-4xl">
                {r.emoji}
              </div>
              <p className="mt-2 font-bold text-sm text-neutral-900 leading-tight">{r.title}</p>
              <p className="text-[10px] text-neutral-500 line-clamp-2 leading-snug">{r.description}</p>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-xs font-black text-amber-600 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5" /> {r.cost}
                </span>
                <button
                  disabled={!affordable || outOfStock || !me}
                  onClick={() => redeem(r)}
                  className={`text-[10px] font-black px-3 py-1.5 rounded-full transition ${
                    affordable && !outOfStock
                      ? 'bg-amber-500 text-white active:scale-95'
                      : 'bg-neutral-100 text-neutral-400'
                  }`}
                >
                  {outOfStock ? 'Sold out' : !affordable ? <><Lock className="w-3 h-3 inline mr-0.5" />Locked</> : 'Redeem'}
                </button>
              </div>
              {r.stock !== null && !outOfStock && (
                <p className="text-[9px] text-neutral-400 mt-1">{r.stock} left</p>
              )}
            </motion.div>
          )
        })}
      </section>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white rounded-3xl p-6 text-center shadow-2xl"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="mt-3 text-base font-black text-neutral-900">Redeemed!</p>
              <p className="text-xs text-neutral-500">{modal.reward.emoji} {modal.reward.title}</p>
              <div className="mt-4 bg-neutral-900 text-white rounded-2xl p-3">
                <p className="text-[10px] uppercase tracking-wider opacity-70">Your code</p>
                <p className="text-lg font-mono font-black tracking-wide">{modal.code.slice(0, 12).toUpperCase()}</p>
              </div>
              <p className="text-[10px] text-neutral-400 mt-2">Show this to the event desk to claim.</p>
              <button
                onClick={() => setModal(null)}
                className="mt-4 w-full py-3 rounded-2xl bg-primary text-white text-sm font-bold"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
