'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  { name: 'Ms. Aishwarya Sharma',                    badge: '🎤', category: 'Conference', title: 'Panelist — EdTech for Equity Conference, Infosys Science Foundation, Bengaluru',                                                                                    desc: '29 Oct – 1 Nov 2025.' },
  { name: 'Dr. Eram Aziz & Ms. Meenal Rawat',        badge: '📄', category: 'Publication', title: 'Paper Presented — 2nd ADU International Conference on Education, Abu Dhabi University, UAE',                                                                       desc: '"Integrating AI into Curriculum Design: A Study of AI-Assisted Design in Higher Education Institutions", 1–2 October 2025.' },
  { name: 'Dr. Lakshya Malhotra',                    badge: '🎓', category: 'Resource Person', title: 'Resource Person — PARAKH, NCERT, Delhi',                                                                                                                       desc: '"Item Review & Finalisation for Teacher Assessment Tools", 22–26 September 2025.' },
  { name: 'Prof. (Dr.) Rashee Singh & Ms. Prachya Prerna', badge: '📄', category: 'Publication', title: 'Paper Presented — AIEOU Conference, University of Oxford, UK',                                                                                              desc: '"Rethinking Educational Equity: The Impact of AI Integration in Public School Systems", 15–19 September 2025.' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Conference':     { bg: '#e8edf8', text: '#1e4ba9' },
  'Publication':    { bg: '#f3eeff', text: '#7c3aed' },
  'Resource Person':{ bg: '#e8f5ee', text: '#16a34a' },
  'Award':          { bg: '#fef3e2', text: '#b45309' },
}

export default function FacultyAchievementsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))]
  const filtered = activeFilter === 'All' ? achievements : achievements.filter(a => a.category === activeFilter)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">👨‍🏫</div>
            <h1 className="font-bold text-white text-xl">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">

          {/* Filter chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 260, damping: 22 }}
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
                    <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                    <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
