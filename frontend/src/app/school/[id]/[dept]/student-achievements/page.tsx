'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ChevronLeft, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { schools } from '@/lib/schools'

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Competition': { bg: '#fde8e8', text: '#b12a2e' },
  'Award':       { bg: '#fef3e2', text: '#b45309' },
  'Publication': { bg: '#f3eeff', text: '#7c3aed' },
  'Internship':  { bg: '#e8edf8', text: '#1e4ba9' },
  'NPTEL':       { bg: '#e8f5ee', text: '#16a34a' },
  'Academic':    { bg: '#fef3e2', text: '#b45309' },
  'Hackathon':   { bg: '#fde8e8', text: '#b12a2e' },
  'Research':    { bg: '#f3eeff', text: '#7c3aed' },
  'Best Paper':  { bg: '#e8f5ee', text: '#16a34a' },
  'Social':      { bg: '#e8edf8', text: '#1e4ba9' },
  'Sports':      { bg: '#e8f5ee', text: '#16a34a' },
  'Cultural':    { bg: '#f3eeff', text: '#7c3aed' },
  'Grant':       { bg: '#e8edf8', text: '#1e4ba9' },
  'MUN':         { bg: '#f3eeff', text: '#7c3aed' },
}

export default function StudentAchievementsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const [activeFilter, setActiveFilter] = useState('All')

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)
  const achievements = department?.studentAchievements ?? []

  // Build filter list from available categories
  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))]
  const filtered = activeFilter === 'All' ? achievements : achievements.filter(a => a.category === activeFilter)

  if (!school || !department) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">Department not found.</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">🏅</div>
            <h1 className="font-bold text-white text-xl leading-tight">Student Achievements</h1>
            <p className="text-white/70 text-xs mt-1">{department.name} · {school.name}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          {achievements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl mb-3">🏆</p>
              <p className="text-neutral-400 text-sm">Achievements coming soon</p>
            </div>
          ) : (
            <>
              {/* Filter chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveFilter(cat)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeFilter === cat
                        ? 'bg-neutral-800 text-white'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                {filtered.length} {activeFilter === 'All' ? 'Total' : activeFilter}
              </p>
              {filtered.map((a, i) => {
                const color = categoryColors[a.category] ?? { bg: '#f3f4f6', text: '#6b7280' }
                return (
                  <motion.div key={i}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 22 }}
                    className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: color.bg }}>
                        {a.badge}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-bold text-gray-800">{a.name}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: color.bg, color: color.text }}>
                            {a.category}
                          </span>
                        </div>
                        {a.program && <p className="text-[11px] text-neutral-400 mt-0.5">{a.program}</p>}
                        <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
