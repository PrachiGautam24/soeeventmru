'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  { name: 'Ms. Aishwarya Sharma', badge: '🎤', title: 'Panelist — EdTech for Equity Conference, Infosys Science Foundation, Bengaluru', desc: '29 Oct – 1 Nov 2025.' },
  { name: 'Dr. Eram Aziz & Ms. Meenal Rawat', badge: '📄', title: 'Paper Presented — 2nd ADU International Conference on Education, Abu Dhabi University, UAE', desc: '"Integrating AI into Curriculum Design: A Study of AI-Assisted Design in Higher Education Institutions", 1–2 October 2025.' },
  { name: 'Dr. Lakshya Malhotra', badge: '🎓', title: 'Resource Person — PARAKH, NCERT, Delhi', desc: '"Item Review & Finalisation for Teacher Assessment Tools", 22–26 September 2025.' },
  { name: 'Prof. (Dr.) Rashee Singh & Ms. Prachya Prerna', badge: '📄', title: 'Paper Presented — AIEOU Conference, University of Oxford, UK', desc: '"Rethinking Educational Equity: The Impact of AI Integration in Public School Systems", 15–19 September 2025.' },
]

export default function FacultyAchievementsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex">
              <div className="w-12 bg-primary/10 flex items-center justify-center shrink-0"><span className="text-xl">{a.badge}</span></div>
              <div className="p-3 flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 leading-snug">{a.name}</p>
                <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
