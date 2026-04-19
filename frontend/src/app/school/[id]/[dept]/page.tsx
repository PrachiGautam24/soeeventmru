'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { schools } from '@/lib/schools'
import PageTransition from '@/components/PageTransition'

const gridItems = [
  { label: 'Student\nAchievements', icon: '🏆', gradient: 'from-amber-500 to-amber-400',     route: 'student-achievements' },
  { label: 'Faculty\nAchievements', icon: '🎓', gradient: 'from-primary to-primary-light',   route: 'faculty-achievements' },
  { label: 'Curriculum\nUpdates',   icon: '📖', gradient: 'from-teal-600 to-teal-400',       route: 'curriculum' },
  { label: 'Event\nUpdates',        icon: '📅', gradient: 'from-secondary to-secondary-light', route: 'events' },
  { label: 'Webcast',               icon: '🎥', gradient: 'from-purple-600 to-purple-400',   route: 'webcast' },
  { label: 'Podcast',               icon: '🎧', gradient: 'from-slate-600 to-slate-500',     route: 'podcast' },
]

export default function DepartmentPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const [eventsOpen, setEventsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  if (!school || !department) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">Department not found.</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* Header - curved red banner */}
        <div className="relative bg-secondary overflow-hidden">
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl leading-tight">{department.name}</h1>
            <p className="text-white/70 text-xs mt-1">{school.name} · {department.code}</p>
          </div>
          {/* curved bottom */}
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-4 space-y-5 overflow-y-auto bg-neutral-50">

          {/* Upcoming Events accordion */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <button
              onClick={() => setEventsOpen(o => !o)}
              className="w-full flex items-center justify-between px-4 py-3.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">Upcoming Events</span>
                {department.upcomingEvents.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] flex items-center justify-center font-bold">
                    {department.upcomingEvents.length}
                  </span>
                )}
              </div>
              <motion.div animate={{ rotate: eventsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {eventsOpen && (
                <motion.div
                  key="events"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden border-t border-neutral-100"
                >
                  {department.upcomingEvents.length === 0 ? (
                    <p className="text-xs text-neutral-400 text-center py-4">No upcoming events.</p>
                  ) : (
                    <div className="divide-y divide-neutral-50">
                      {department.upcomingEvents.map((ev, i) => (
                        <div key={i} className="flex items-start gap-3 px-4 py-3">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-gray-800">{ev.title}</p>
                            <p className="text-[10px] text-neutral-400 mt-0.5">{ev.date}</p>
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
            <p className="text-sm text-gray-600 leading-relaxed">{department.description}</p>
          </div>

          {/* Explore More — app-icon grid */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-4 px-1">
              Explore More
            </p>
            <div className="grid grid-cols-3 gap-4">
              {gridItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.91 }}
                  onClick={() => router.push(`/school/${id}/${dept}/${item.route}`)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-16 h-16 rounded-[22px] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl shadow-md`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] text-center text-gray-700 font-medium leading-tight px-1 whitespace-pre-line">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* About accordion — at the bottom */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setAboutOpen(o => !o)}
              className={`w-full flex items-center justify-between px-4 py-4 bg-red-600 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}
            >
              <span className="font-bold text-white text-sm">About {department.name}</span>
              <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-white/80" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {aboutOpen && (
                <motion.div
                  key="about-dept"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100"
                >
                  <div className="px-4 pb-5 space-y-3 pt-3">
                    {department.about.split('\n\n').map((para, i) => (
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
  )
}
