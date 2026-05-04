'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  {
    name: 'Dr. Animesh Singh',
    role: 'Faculty · School of Business',
    badge: '🏆',
    category: 'Best Paper',
    title: 'Best Paper Presentation — Virtual Conference, Oct 2020',
    desc: 'Presented "Effect of Human Resource Development Climate Practices on Employee Service Behaviour: An Empirical Investigation" on 17 October 2020. Received Certificate of Best Paper Presentation.',
  },
  {
    name: 'Dr. Animesh Singh & Dr. Rashi Banerji',
    role: 'Faculty · School of Business',
    badge: '📄',
    category: 'Publication',
    title: 'Most Downloaded Paper — Emerald Journals (SCOPUS, ESCI)',
    desc: '"Happiness at Work, Organization Citizenship Behaviour and Workplace Diversity: A Study on Indian Private Sector Banks Employees", Industrial and Commercial Training, Vol. 54, No. 3, Emerald. SCOPUS CiteScore 3.2. Listed as Most Downloaded Paper on Emerald official site. DOI: 10.1108/ICT-05-2021-0037.',
  },
  {
    name: 'Dr. Rashi Banerji & Hitesh Kakar',
    role: 'Faculty · School of Business',
    badge: '🥇',
    category: 'Best Paper',
    title: 'Best Paper Award — BITS 2023, SMC, MRU',
    desc: 'Received Best Paper Award at BITS 2023 organized by SMC, MRU.',
  },
  {
    name: 'Dr. Rashi Banerji',
    role: 'Faculty · School of Business',
    badge: '📜',
    category: 'Award',
    title: 'Certificate of Excellence in Peer Reviewing — Journal of Economics and Trade',
    desc: 'Awarded Certificate of Excellence in Peer Reviewing in recognition of outstanding contribution to the quality of the Journal of Economics and Trade.',
  },
  {
    name: 'Dr. Rashi Banerji & Dr. Animesh Singh',
    role: 'Faculty · School of Business',
    badge: '📄',
    category: 'Publication',
    title: 'Most Downloaded Paper — Emerald Journals (SCOPUS, ESCI)',
    desc: '"Happiness at Work, Organization Citizenship Behaviour and Workplace Diversity: A Study on Indian Private Sector Banks Employees", Industrial and Commercial Training, Vol. 54, No. 3, Emerald. SCOPUS CiteScore 3.2. Listed as Most Downloaded Paper on Emerald official site. DOI: 10.1108/ICT-05-2021-0037.',
  },
  {
    name: 'Dr. Pragati Chauhan',
    role: 'Faculty · School of Business',
    badge: '🌐',
    category: 'Award',
    title: 'Letter of Appreciation — Start me-UP Awards, NEN Wadhwani Foundation (Jun 2021)',
    desc: 'Received appreciation at the Start me-UP Awards Global Felicitation Ceremony (25 June 2021) organized by NEN, a Wadhwani Foundation initiative, for evaluating promising student ventures across the globe as a Global Jury member.',
  },
  {
    name: 'Dr. Maharaj Kaul',
    role: 'Faculty · School of Business',
    badge: '🔏',
    category: 'Patent',
    title: 'Patent Published — Supply Chain Carbon Emission Mitigation (May 2023)',
    desc: '"Effective Transformation Technique and Solution with Supply Chain to Mitigate Carbon Emission" published on 19 May 2023 in the Patent Office Journal.',
  },
  {
    name: 'Ms. Srishti Batla',
    role: 'Faculty · School of Business',
    badge: '🥇',
    category: 'Best Paper',
    title: 'Best Paper Award — 4th International Conference on Global Business Strategies, Amity University',
    desc: 'Presented "A Systematic Review to Study the Factors Affecting Low Female Representation at Top Level in Corporate Sector" and received Best Paper Award.',
  },
  {
    name: 'Dr. Yogita Sharma',
    role: 'Faculty · School of Business',
    badge: '🏅',
    category: 'Award',
    title: 'Dr. Kalam Educator Excellence Award — DKIF Education Summit 2022–23',
    desc: 'Awarded "Dr. Kalam Educator Excellence Award" at DKIF Education Summit and Awards 2022–2023 by Dr. Kalam International Foundation.',
  },
  {
    name: 'Dr. Yogita Sharma',
    role: 'Faculty · School of Business',
    badge: '🏆',
    category: 'Award',
    title: 'Professor of the Year — Education Icon Awards 2022',
    desc: 'Awarded "Professor of the Year" at Education Icon Awards 2022 at the International Conference on Innovative Technology Driving Education.',
  },
  {
    name: 'Dr. Pooja Kapoor',
    role: 'Faculty · School of Business',
    badge: '⭐',
    category: 'Award',
    title: 'Employee of the Year 2019 — MRU Management',
    desc: 'Awarded Employee of the Year 2019 for outstanding performance, service, and dedication by MRU Management.',
  },
  {
    name: 'Dr. Gurbir Singh Khera',
    role: 'Faculty · School of Business',
    badge: '🌍',
    category: 'Award',
    title: 'Global Distinguished Educators Award — Maldives National University · 12 Patents Filed',
    desc: 'Received confirmation and invitation to receive the Global Distinguished Educators Award at The Maldives National University. 12 patents filed, 3 published.',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Best Paper':  { bg: '#fde8e8', text: '#b12a2e' },
  'Publication': { bg: '#f3eeff', text: '#7c3aed' },
  'Award':       { bg: '#fef3e2', text: '#b45309' },
  'Patent':      { bg: '#e8f5ee', text: '#16a34a' },
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
            <h1 className="font-bold text-white text-xl">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">

          {/* Filter chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
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
                    <p className="text-[11px] text-neutral-400 mt-0.5">{a.role}</p>
                    <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
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
