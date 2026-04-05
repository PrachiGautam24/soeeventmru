'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Calendar, ChevronDown } from 'lucide-react'
import { schools } from '@/lib/schools'

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
  const [showEvents, setShowEvents] = useState(false)
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

        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-5 pb-4 border-b border-neutral-100 bg-white">
          <button onClick={() => router.back()}
            className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
            <ArrowLeft className="w-4 h-4 text-neutral-700" />
          </button>

          {/* Title + upcoming events hover button */}
          <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <h1 className="font-bold text-gray-900 text-base leading-tight truncate">{department.name}</h1>
              <p className="text-xs text-neutral-400">{school.name} — {department.code}</p>
            </div>

            {/* Upcoming events pill with hover popover */}
            <div className="relative shrink-0"
              onMouseEnter={() => setShowEvents(true)}
              onMouseLeave={() => setShowEvents(false)}
              onTouchStart={() => setShowEvents(v => !v)}
            >
              <button className="flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-full px-3 py-1.5">
                <Calendar className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary">Events</span>
                {department.upcomingEvents.length > 0 && (
                  <span className="w-4 h-4 rounded-full bg-secondary text-white text-[10px] flex items-center justify-center font-bold">
                    {department.upcomingEvents.length}
                  </span>
                )}
              </button>

              {/* Popover */}
              <AnimatePresence>
                {showEvents && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-2.5 bg-red-50 border-b border-red-100">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wide">Upcoming Events</p>
                    </div>
                    {department.upcomingEvents.length === 0 ? (
                      <p className="text-xs text-neutral-400 text-center py-4">No upcoming events.</p>
                    ) : (
                      <div className="divide-y divide-neutral-50">
                        {department.upcomingEvents.map((ev, i) => (
                          <div key={i} className="flex items-start gap-3 px-4 py-3">
                            <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800 leading-snug">{ev.title}</p>
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
          </div>
        </div>

        <div className="flex-1 px-4 py-4 space-y-5 overflow-y-auto bg-neutral-50">

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
