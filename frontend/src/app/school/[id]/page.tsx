'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, ChevronDown, Calendar } from 'lucide-react'
import Image from 'next/image'
import { schools } from '@/lib/schools'

const deptGradients = [
  'from-primary to-primary-light',
  'from-secondary to-secondary-light',
  'from-slate-600 to-slate-500',
  'from-purple-600 to-purple-400',
  'from-amber-500 to-amber-400',
  'from-teal-600 to-teal-400',
]

export default function SchoolPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [aboutOpen, setAboutOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)

  const school = schools.find(s => s.id === id)
  if (!school) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">School not found.</p>
    </div>
  )

  // Collect all upcoming events across all departments
  const allUpcoming = school.departments.flatMap(d =>
    d.upcomingEvents.map(e => ({ ...e, dept: d.name }))
  )

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="w-full min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl md:text-3xl leading-tight">{school.name}</h1>
            <p className="text-white/70 text-xs md:text-sm mt-1">{school.departments.length} Departments</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 space-y-4">

            {/* Upcoming Events accordion */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              <button onClick={() => setEventsOpen(o => !o)} className="w-full flex items-center justify-between px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span className="font-semibold text-sm text-gray-800">Upcoming Events</span>
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
                  <motion.div key="events" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                    {allUpcoming.length === 0 ? (
                      <p className="text-xs text-neutral-400 text-center py-4">No upcoming events.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:gap-2 md:p-3 divide-neutral-50 border-t border-neutral-100">
                        {allUpcoming.map((ev, i) => (
                          <div key={i} className="flex items-start gap-3 px-4 py-3 md:bg-neutral-50 md:rounded-xl">
                            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-800">{ev.title}</p>
                              <p className="text-[10px] text-neutral-400 mt-0.5">{ev.dept} · {ev.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Departments grid */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Departments</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {school.departments.map((dept, i) => (
                  <motion.button key={dept.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} whileTap={{ scale: 0.97 }}
                    onClick={() => router.push(`/school/${school.id}/${dept.id}`)}
                    className="flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl p-3 shadow-sm text-left">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${deptGradients[i % deptGradients.length]} flex items-center justify-center shadow shrink-0`}>
                      <span className="text-white font-bold text-xs text-center leading-tight px-1">{dept.code}</span>
                    </div>
                    <span className="text-xs text-gray-800 font-semibold leading-snug">{dept.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* About accordion */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setAboutOpen(o => !o)} className={`w-full flex items-center justify-between px-4 py-4 bg-red-600 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
                <span className="font-bold text-white text-sm">About {school.name}</span>
                <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {aboutOpen && (
                  <motion.div key="about" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100">
                    <div className="px-4 pb-5 pt-3 md:columns-2 md:gap-6 space-y-3">
                      {school.about.split('\n\n').map((para, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed break-inside-avoid">{para}</p>
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
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
                  {school.academicPartners.map((partner, i) => (
                    <div key={i} className="bg-white border border-neutral-100 rounded-2xl p-3 shadow-sm flex items-center justify-center h-20">
                      <Image src={partner.image} alt={partner.name} width={90} height={50} className="object-contain max-h-12" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
