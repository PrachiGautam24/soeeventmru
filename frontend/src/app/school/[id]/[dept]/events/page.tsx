'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Calendar, CheckCircle2, Clock } from 'lucide-react'
import Image from 'next/image'
import { schools } from '@/lib/schools'

export default function DeptEventsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const [tab, setTab] = useState<'upcoming' | 'completed'>('upcoming')

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  if (!school || !department) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">Department not found.</p>
    </div>
  )

  const upcoming = department.upcomingEvents ?? []
  const completed = department.completedEvents ?? []

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="w-full min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl md:text-3xl leading-tight">Event Updates</h1>
            <p className="text-white/70 text-xs md:text-sm mt-1">{department.name}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200 bg-white">
          {(['upcoming', 'completed'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${tab === t ? 'text-secondary border-b-2 border-secondary' : 'text-neutral-400'}`}>
              {t === 'upcoming' ? 'Upcoming' : 'Completed'}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-4">
            <AnimatePresence mode="wait">
              {tab === 'upcoming' ? (
                <motion.div key="upcoming" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {upcoming.length === 0 ? (
                    <p className="text-sm text-neutral-400 text-center py-12 col-span-full">No upcoming events.</p>
                  ) : (
                    upcoming.map((ev, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                          <p className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {ev.date}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              ) : (
                <motion.div key="completed" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {completed.length === 0 ? (
                    <p className="text-sm text-neutral-400 text-center py-12 col-span-full">No completed events.</p>
                  ) : (
                    completed.map((ev, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        onClick={() => ev.slug && router.push(`/${ev.slug}/loading`)}
                        className={`bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden ${ev.slug ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''}`}>
                        {ev.slug === 'icass-2026' && (
                          <div className="relative h-36 bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
                            <Image src="/images/logo.png" alt={ev.title} width={120} height={120} className="object-contain" />
                            <span className="absolute top-3 right-3 bg-neutral-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">Completed</span>
                          </div>
                        )}
                        <div className="p-4 flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                            {ev.description && <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{ev.description}</p>}
                            <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {ev.date}</p>
                            {ev.slug && <span className="inline-block mt-2 text-xs font-semibold text-secondary">View Details →</span>}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}
