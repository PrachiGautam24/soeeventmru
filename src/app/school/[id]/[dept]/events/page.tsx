'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
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
      <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col">

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
              {t === 'upcoming' ? 'Upcoming' : 'Events Organised'}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-neutral-50">
          <div className="px-4 py-4">
            <AnimatePresence mode="wait">
              {tab === 'upcoming' ? (
                <motion.div key="upcoming" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
                  {upcoming.length === 0 ? (
                    <p className="text-sm text-neutral-400 text-center py-12">No upcoming events.</p>
                  ) : (
                    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden divide-y divide-neutral-100">
                      {upcoming.map((ev, i) => (
                        <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                            <p className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {ev.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div key="completed" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.2 }}
                  className="space-y-3">
                  {completed.length === 0 ? (
                    <p className="text-sm text-neutral-400 text-center py-12">No events organised yet.</p>
                  ) : (
                    completed.map((ev, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                        className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                        {/* Image area */}
                        <div className="relative bg-neutral-50 flex items-center justify-center border-b border-neutral-100" style={{ minHeight: 160 }}>
                          {ev.slug === 'icass-2026' ? (
                            <Image src="/images/logo.png" alt={ev.title} width={140} height={100} className="object-contain py-6" />
                          ) : ev.slug === 'ece-workshop-apr2026' ? (
                            <div className="relative w-full h-48">
                              <Image src="/images/ece/workshop-apr2026.jpg" alt={ev.title} fill className="object-cover" />
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center my-6">
                              <span className="text-3xl">📅</span>
                            </div>
                          )}
                          {/* Completed badge — top right */}
                          <span className="absolute top-3 right-3 bg-neutral-700 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                            Completed
                          </span>
                        </div>
                        {/* Details */}
                        <div className="px-4 py-4">
                          <p className="text-sm font-bold text-gray-900">{ev.title}</p>
                          {ev.description && (
                            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{ev.description}</p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-neutral-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {ev.date}
                            </p>
                            {ev.slug === 'icass-2026' && (
                              <button onClick={() => router.push('/icass-2026/loading')}
                                className="text-xs font-semibold text-secondary flex items-center gap-1">
                                View Details ↗
                              </button>
                            )}
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
