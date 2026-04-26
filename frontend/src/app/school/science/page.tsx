'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { schools } from '@/lib/schools'
import PageTransition from '@/components/PageTransition'

const quickActions = [
  { label: 'Student\nAchievements', emoji: '🏅', color: '#7c3aed', bg: '#f3eeff', href: '/school/science/student-achievements' },
  { label: 'Faculty\nAchievements', emoji: '👨‍🏫', color: '#1e4ba9', bg: '#e8edf8', href: '/school/science/faculty-achievements' },
  { label: 'VAC', emoji: '📖', color: '#16a34a', bg: '#e8f5ee', href: '/school/science/vac' },
  { label: 'Events', emoji: '🎉', color: '#b12a2e', bg: '#fde8e8', href: '/school/science/events' },
  { label: 'Podcast', emoji: '🎙️', color: '#b45309', bg: '#fef3e2', href: '/school/science/podcast' },
  { label: 'Curriculum', emoji: '📋', color: '#0891b2', bg: '#e0f7fa', href: '/school/science/curriculum' },
]

export default function SciencePage() {
  const router = useRouter()
  const [aboutOpen, setAboutOpen] = useState(false)

  const school = schools.find(s => s.id === 'science')
  if (!school) return null

  const allUpcoming = school.departments.flatMap(d =>
    d.upcomingEvents.map(e => ({ ...e, dept: d.name }))
  )

  return (
    <PageTransition>
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#b12a2e' }}>
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">🔬</div>
            <h1 className="font-bold text-white text-xl leading-tight">{school.name}</h1>
            <p className="text-white/70 text-xs mt-1">{school.tagline}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto pb-24">
          <div className="px-4 py-4 space-y-4">

            {/* Quick action icons */}
            <div className="grid grid-cols-3 gap-3">
              {quickActions.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => router.push(item.href)}
                  className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-neutral-100"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: item.bg }}>
                    {item.emoji}
                  </div>
                  <p className="text-[11px] font-bold text-gray-700 text-center leading-tight whitespace-pre-line">{item.label}</p>
                </motion.button>
              ))}
            </div>

            {/* Upcoming Events */}
            {allUpcoming.length > 0 && (
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3.5 border-b border-neutral-100">
                  <p className="text-sm font-bold text-gray-800">Upcoming Events</p>
                  <span className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-bold" style={{ background: '#b12a2e' }}>{allUpcoming.length}</span>
                </div>
                <div className="divide-y divide-neutral-100">
                  {allUpcoming.map((ev, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0 mt-1" style={{ background: '#b12a2e' }} />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{ev.dept} · {ev.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About accordion */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setAboutOpen(o => !o)}
                className={`w-full flex items-center justify-between px-4 py-4 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}
                style={{ background: '#b12a2e' }}>
                <span className="font-bold text-white text-sm">About {school.name}</span>
                <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {aboutOpen && (
                  <motion.div key="about" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100">
                    <div className="px-4 pb-5 pt-3 space-y-3">
                      {school.about.split('\n\n').map((para, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Academic Partners */}
            {school.academicPartners.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Academic Partners</p>
                <div className="grid grid-cols-2 gap-3">
                  {school.academicPartners.map((partner, i) => (
                    <div key={i} className="bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm flex items-center justify-center h-24">
                      <Image src={partner.image} alt={partner.name} width={120} height={70} className="object-contain max-h-16" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}
