'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const events = [
  {
    title: 'ICEMRB-2026',
    subtitle: 'International Conference on Energy Materials and Rechargeable Batteries',
    date: 'Oct 14–17, 2026',
    emoji: '🔋',
    tag: 'Conference',
    tagColor: { bg: '#e8edf8', text: '#1e4ba9' },
  },
]

export default function ScienceEventsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#b12a2e' }}>
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">🎉</div>
            <h1 className="font-bold text-white text-xl leading-tight">Events</h1>
            <p className="text-white/70 text-xs mt-1">School of Science · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Upcoming Events</p>

          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-neutral-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: ev.tagColor.bg }}>
                  {ev.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-bold text-gray-800">{ev.title}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: ev.tagColor.bg, color: ev.tagColor.text }}>
                      {ev.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">{ev.subtitle}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-xs">📅</span>
                    <p className="text-xs font-semibold" style={{ color: '#b12a2e' }}>{ev.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
