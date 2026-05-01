'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, ChevronDown, Calendar } from 'lucide-react'
import Image from 'next/image'
import { schools } from '@/lib/schools'
import PageTransition from '@/components/PageTransition'

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

  // Schools with no sub-departments — redirect to dedicated pages
  useEffect(() => {
    if (id === 'law') router.replace('/school/law/overview')
    if (id === 'education') router.replace('/school/education/overview')
    if (id === 'business') router.replace('/school/business/overview')
  }, [id, router])

  if (!school) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">School not found.</p>
    </div>
  )

  if (id === 'law' || id === 'education' || id === 'business') return null

  // Collect all upcoming events across all departments
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
            <p className="text-white/70 text-xs mt-1">{school.departments.length} Departments</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto pb-24">
          <div className="px-4 py-4 space-y-4">

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
                      <div className="divide-y divide-neutral-100 border-t border-neutral-100">
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

            {/* Departments list */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Departments</p>
              <div className="space-y-2.5">
                {school.departments.map((dept, i) => (
                  <motion.button key={dept.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} whileTap={{ scale: 0.97 }}
                    onClick={() => router.push(`/school/${school.id}/${dept.id}`)}
                    className="w-full flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl px-4 py-3.5 shadow-sm text-left">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${deptGradients[i % deptGradients.length]} flex items-center justify-center shadow shrink-0`}>
                      <span className="text-white font-bold text-xs text-center leading-tight px-1">{dept.code}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-snug">{dept.name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{dept.description.slice(0, 50)}…</p>
                    </div>
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
