'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Award, Filter } from 'lucide-react'
import { schools, Achievement } from '@/lib/schools'

type Category = 'All' | 'Research' | 'Competition' | 'Award' | 'Publication'

const categories: Category[] = ['All', 'Publication', 'Research', 'Award', 'Competition']

const categoryColors: Record<Category, string> = {
  All:         'bg-neutral-800 text-white',
  Publication: 'bg-blue-600 text-white',
  Research:    'bg-purple-600 text-white',
  Award:       'bg-red-600 text-white',
  Competition: 'bg-amber-500 text-white',
}

export default function FacultyAchievementsPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string; dept: string }>()
  const [active, setActive] = useState<Category>('All')

  const school = schools.find(s => s.id === id)
  const data: Achievement[] = school?.facultyAchievements ?? []

  const filtered = active === 'All' ? data : data.filter(a => a.category === active)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl leading-tight">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">{school?.name ?? 'School'}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Filter chips */}
        <div className="bg-white border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${active === cat ? categoryColors[cat] : 'bg-neutral-100 text-neutral-500'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 bg-neutral-50 overflow-y-auto">
          <div className="px-4 py-4">
            {data.length === 0 ? (
              <div className="text-center py-16">
                <Award className="w-10 h-10 text-neutral-200 mx-auto mb-3" />
                <p className="text-sm text-neutral-400">No faculty achievements added yet.</p>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <div className="space-y-3">
                  {filtered.map((item, i) => (
                    <motion.div key={i} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.03 }}
                      className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex">
                      <div className="w-14 bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-2xl">{item.badge}</span>
                      </div>
                      <div className="p-3 flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-gray-900 leading-snug flex-1 min-w-0">{item.name}</p>
                          <span className={`shrink-0 text-[9px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category as Category]}`}>{item.category}</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{item.title}</p>
                        <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
            {data.length > 0 && filtered.length === 0 && (
              <div className="text-center py-16">
                <Award className="w-10 h-10 text-neutral-200 mx-auto mb-3" />
                <p className="text-sm text-neutral-400">No achievements in this category.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
