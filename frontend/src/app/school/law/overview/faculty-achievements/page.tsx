'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Filter, Award } from 'lucide-react'
import { schools } from '@/lib/schools'
import { useState } from 'react'
import { motion } from 'framer-motion'

const cats = ['All', 'Publication', 'Research', 'Award', 'Competition']
const catColor = (cat: string) => {
  const map: Record<string, string> = { All: 'bg-neutral-800 text-white', Publication: 'bg-blue-600 text-white', Research: 'bg-purple-600 text-white', Award: 'bg-red-600 text-white', Competition: 'bg-amber-500 text-white' }
  return map[cat] ?? 'bg-neutral-100 text-neutral-500'
}

export default function LawFacultyAchievements() {
  const router = useRouter()
  const school = schools.find(s => s.id === 'law')!
  const data = school.facultyAchievements ?? []
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? data : data.filter(a => a.category === active)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Law · MRU</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="bg-white border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            {cats.map(cat => <button key={cat} onClick={() => setActive(cat)} className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${active === cat ? catColor(cat) : 'bg-neutral-100 text-neutral-500'}`}>{cat}</button>)}
          </div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {filtered.length === 0 && <div className="text-center py-16"><Award className="w-10 h-10 text-neutral-200 mx-auto mb-3" /><p className="text-sm text-neutral-400">No achievements in this category.</p></div>}
          {filtered.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex">
              <div className="w-12 bg-primary/10 flex items-center justify-center shrink-0"><span className="text-xl">{item.badge}</span></div>
              <div className="p-3 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-gray-900 leading-snug flex-1 min-w-0">{item.name}</p>
                  <span className={`shrink-0 text-[9px] font-semibold px-2 py-0.5 rounded-full ${catColor(item.category)}`}>{item.category}</span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{item.title}</p>
                <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
