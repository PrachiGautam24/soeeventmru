'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const events = [
  { date: '23 Apr 2026', title: 'Mental Health Awareness Talk', emoji: '🧠', tag: 'Wellness' },
  { date: '23 Apr 2026', title: 'Sampling Steps', emoji: '💃', tag: 'Dance' },
  { date: '23 Apr 2026', title: 'Culture Couture', emoji: '🎭', tag: 'Cultural' },
  { date: '30 Apr 2026', title: 'Anti-Ragging Week', emoji: '🤝', tag: 'Awareness' },
  { date: '30 Apr 2026', title: 'Digital Doodlers', emoji: '🎨', tag: 'Art & Tech' },
  { date: '30 Apr 2026', title: 'Riyaaz-E-Mehfil', emoji: '🎵', tag: 'Music' },
  { date: '30 Apr 2026', title: 'Cyber Crime Awareness Camp', emoji: '🔐', tag: 'Tech' },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  Wellness:  { bg: '#fce7f3', text: '#db2777' },
  Dance:     { bg: '#f3eeff', text: '#7c3aed' },
  Cultural:  { bg: '#fef3e2', text: '#b45309' },
  Awareness: { bg: '#e8f5ee', text: '#16a34a' },
  'Art & Tech': { bg: '#e8edf8', text: '#1e4ba9' },
  Music:     { bg: '#fdf2f8', text: '#db2777' },
  Tech:      { bg: '#e8edf8', text: '#1e4ba9' },
}

export default function DSWEventsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#b45309' }}>
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h1 className="font-bold text-white text-2xl leading-tight">DSW Events</h1>
            <p className="text-white/80 text-sm mt-1 font-medium">Something&apos;s always happening.</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">Upcoming Events</p>

          {events.map((ev, i) => {
            const colors = tagColors[ev.tag] ?? { bg: '#f3f4f6', text: '#6b7280' }
            return (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100"
              >
                {/* Emoji icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ backgroundColor: colors.bg }}>
                  {ev.emoji}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{ev.title}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{ev.date}</p>
                </div>
                {/* Tag badge */}
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                  style={{ backgroundColor: colors.bg, color: colors.text }}>
                  {ev.tag}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
