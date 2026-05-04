'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { schools } from '@/lib/schools'
import PageTransition from '@/components/PageTransition'

const gridItems = [
  { label: 'Student\nAchievements', icon: '🏆', route: 'student-achievements' },
  { label: 'Faculty\nAchievements', icon: '🎓', route: 'faculty-achievements' },
  { label: 'VAC',                   icon: '📖', route: 'vac' },
  { label: 'Events',                icon: '📅', route: 'events' },
  { label: 'Podcast',               icon: '🎙️', route: 'podcast' },
  { label: 'Programs\nOffered',     icon: '📋', route: 'programs' },
]

export default function SciencePage() {
  const router = useRouter()
  const [eventsOpen, setEventsOpen] = useState(false)
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
          <div className="relative bg-secondary">
            <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <div className="px-6 pt-10 pb-8 text-center">
              <h1 className="font-bold text-white text-xl leading-tight">{school.name}</h1>
              <p className="text-white/70 text-xs mt-1">{school.tagline} · MRU</p>
            </div>
            <div className="h-8">
              <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="flex-1 bg-neutral-50 overflow-y-auto pb-24">
            <div className="px-4 py-4 space-y-5">

              {/* Upcoming Events accordion */}
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                <button onClick={() => setEventsOpen(o => !o)} className="w-full flex items-center justify-between px-4 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Upcoming Events</span>
                    {allUpcoming.length > 0 && (
                      <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] flex items-center justify-center font-bold">{allUpcoming.length}</span>
                    )}
                  </div>
                  <motion.div animate={{ rotate: eventsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {eventsOpen && (
                    <motion.div key="ev" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
                      className="overflow-hidden border-t border-neutral-100">
                      {allUpcoming.length === 0 ? (
                        <p className="text-xs text-neutral-400 text-center py-4">No upcoming events.</p>
                      ) : (
                        <div className="divide-y divide-neutral-100">
                          {allUpcoming.map((ev, i) => (
                            <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                              <div>
                                <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                                <p className="text-xs text-neutral-400 mt-0.5">{ev.dept} · {ev.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The School of Science at Manav Rachna University fosters curiosity-driven research, interdisciplinary collaboration, and scientific excellence across Physics, Chemistry, Mathematics, and Biotechnology.
                </p>
              </div>

              {/* Explore More — 3+3 grid */}
              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Explore More</p>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {gridItems.slice(0, 3).map((item, i) => (
                    <motion.button key={item.label}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push(`/school/science/${item.route}`)}
                      className="flex flex-col items-center gap-1.5 bg-white rounded-2xl px-2 py-3 shadow-sm border border-neutral-100">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[10px] text-center text-gray-700 font-semibold leading-tight whitespace-pre-line">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {gridItems.slice(3).map((item, i) => (
                    <motion.button key={item.label}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i + 3) * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push(`/school/science/${item.route}`)}
                      className="flex flex-col items-center gap-1.5 bg-white rounded-2xl px-2 py-3 shadow-sm border border-neutral-100">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[10px] text-center text-gray-700 font-semibold leading-tight whitespace-pre-line">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* About accordion */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setAboutOpen(o => !o)}
                  className={`w-full flex items-center justify-between px-4 py-4 bg-red-600 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
                  <span className="font-bold text-white text-sm">About {school.name}</span>
                  <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-white/80" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {aboutOpen && (
                    <motion.div key="about" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100">
                      <div className="px-4 pb-5 pt-3 space-y-3">
                        {school.about.split('\n\n').map((para, i) => (
                          <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
