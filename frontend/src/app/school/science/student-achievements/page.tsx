'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  {
    name: 'Aastha Sharma',
    program: 'M.Sc. Physics (Final Year)',
    badge: '🔬',
    category: 'Internship',
    title: '6-Month Internship at NPL, New Delhi',
    desc: 'Working under Dr. S.K. Mishra on uncertainty budget estimation of the Light-Weight Scattering Coefficient Counter (LWSCC).',
  },
  {
    name: 'Anjali Sharma',
    program: 'Research Scholar · Physics',
    badge: '✈️',
    category: 'Travel Grant',
    title: 'CSIR Travel Fellowship 2025',
    desc: 'International Travel Support by CSIR, RRCAT (2024), and ANRF-SERB (2024). Best Presentation Award at NCEMSTI-2024, SRM University.',
  },
  {
    name: 'Osheen Sharma',
    program: 'Research Scholar · Physics',
    badge: '🏆',
    category: 'Award + Grant',
    title: 'Best Presentation — ICASS-2026',
    desc: 'Best Presentation at ICASS-2026, MRU (Feb 2026). Travel grants from UGC-DAE Indore (2025, 2026) & ANRF for JEMS 2025, Frankfurt.',
  },
  {
    name: 'Neha',
    program: 'Research Scholar · Physics',
    badge: '🌏',
    category: 'Travel Grant + Award',
    title: 'POSTECH Synchrotron Access & Best Poster',
    desc: 'Travel support from POSTECH, South Korea & RRCAT (2024). Best Poster (II) at ICRAAST-2024, UPES Dehradun.',
  },
  {
    name: 'Vinod Kumar',
    program: 'Research Scholar · Physics',
    badge: '⚗️',
    category: 'Travel Grant',
    title: 'POSTECH & UGC-DAE Synchrotron Access',
    desc: 'Travel support from POSTECH (2025) and UGC-DAE Indore (Apr 2026) for synchrotron experiments.',
  },
  {
    name: 'Sakshi & Shivani Singh',
    program: 'M.Sc. Physics (Final Year)',
    badge: '🌌',
    category: 'Internship',
    title: '3-Month Internship at ARIES, Nainital',
    desc: 'Hands-on astrophysical research exposure at Aryabhatta Research Institute of Observational Sciences.',
  },
  {
    name: 'Research Scholar (Physics)',
    program: 'Ph.D. · Physics',
    badge: '🇯🇵',
    category: 'Travel Grant',
    title: 'ANRF Grant for ISSP2024, Japan',
    desc: 'Financial assistance (~₹60,000) for 17th International Symposium on Sputtering & Plasma Processes, Japan (Jul 2–5, 2024).',
  },
  {
    name: 'Shruti Gulihar',
    program: 'M.Sc. Physics (2020–22)',
    badge: '🎓',
    category: 'PhD Admission',
    title: 'Fully Funded PhD — University of Nevada, USA',
    desc: 'Selected for fully funded doctoral program at University of Nevada, Reno, USA ($2000/month).',
  },
  {
    name: 'Himanshu Kashyap',
    program: 'M.Sc. Physics (2019–21)',
    badge: '🎓',
    category: 'PhD Admission',
    title: 'Fully Funded PhD — Chungnam National University, South Korea',
    desc: 'Selected for fully funded doctoral program ($1500/month).',
  },
  {
    name: 'Himani',
    program: 'M.Sc. Physics (2018–20)',
    badge: '🎓',
    category: 'PhD Admission',
    title: 'Fully Funded PhD — University of Iowa, USA',
    desc: 'Selected for fully funded doctoral program ($2000/month).',
  },
  {
    name: 'Surekha',
    program: 'M.Sc. Physics (2018–20)',
    badge: '🎓',
    category: 'PhD Admission',
    title: 'Fully Funded PhD — GIST, South Korea',
    desc: 'Selected for fully funded doctoral program at Gwangju Institute of Science and Technology ($2000/month).',
  },
  {
    name: 'Anju Sharma',
    program: 'Research Scholar · Chemistry',
    badge: '🏅',
    category: 'Award',
    title: 'Best Oral Presentation — RSC, VBCB 2025',
    desc: 'Won Best Oral Presentation Award from Royal Society of Chemistry at VBCB Conference, SRM University (Feb 18–20, 2025).',
  },
  {
    name: 'Priya Garg',
    program: 'Research Scholar · Chemistry',
    badge: '📄',
    category: 'Publication',
    title: '2 Papers Published — Zn-Air Battery & Corrosion',
    desc: 'Published in J. Turkish Chemical Society & Rasayan Journal of Chemistry under Prof. Sudhish Kumar Shukla.',
  },
  {
    name: 'Neha',
    program: 'Research Scholar · Physics',
    badge: '📄',
    category: 'Publication',
    title: 'Paper in ChemistrySelect (Wiley)',
    desc: '"Study of Ferrites Using X-ray Photoelectron Spectroscopy" under Dr. Sandeep Kumar & Dr. Jitendra Pal Singh.',
  },
  {
    name: 'Pankaj Kumar',
    program: 'Research Scholar · Physics',
    badge: '📄',
    category: 'Publication',
    title: 'Paper in ChemistrySelect (Wiley) — Feb 2026',
    desc: '"Structural and Up-conversion Luminescence Properties of LiGa5-x(YbRCr)xO8" under Dr. Sandeep Kumar.',
  },
  {
    name: 'Komal Jain',
    program: 'Research Scholar · Physics',
    badge: '📄',
    category: 'Publication',
    title: 'Paper in Indian Journal of Physics — Feb 2026',
    desc: '"THG enhancement in CdSe Quantum Dots" under Dr. Deepti Maikhuri & Dr. Anshuman Sahai.',
  },
  {
    name: 'Priyanka',
    program: 'Research Scholar · Mathematics',
    badge: '📐',
    category: 'Conference',
    title: 'Paper Presented at Jamia Millia Islamia, Feb 2026',
    desc: '"Weight Residual Bernoulli Wavelet Galerkin Framework" at International Conference on Recent Trends in Mathematics & Computing.',
  },
  {
    name: 'Srishti Jagota & Shashank Pandey',
    program: 'Research Scholar · Chemistry',
    badge: '📄',
    category: 'Publication',
    title: 'Paper in ChemistrySelect (Wiley) — Aug 2025',
    desc: '"Superabsorbent Polymers: Synthesis, Applications and Challenges" (IF-2) under Prof. Arpit Sand.',
  },
  {
    name: 'Anju Sharma',
    program: 'Research Scholar · Chemistry',
    badge: '📄',
    category: 'Publication',
    title: 'Paper in Discover Chemistry — Jul 2025',
    desc: '"Eco-Friendly Superabsorbent Polymer using Diatomaceous Earth" under Prof. Arpit Sand.',
  },
  {
    name: 'Eksha Guliani',
    program: 'Ph.D. · Chemistry',
    badge: '🏆',
    category: 'Award',
    title: 'Certificate of Merit — ACS Fall 2025, Washington DC',
    desc: 'Best Oral Presentation by American Chemical Society (Division of Environmental Chemistry) at ACS Fall 2025.',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Internship':       { bg: '#e8edf8', text: '#1e4ba9' },
  'Travel Grant':     { bg: '#fef3e2', text: '#b45309' },
  'Award':            { bg: '#fde8e8', text: '#b12a2e' },
  'Award + Grant':    { bg: '#fde8e8', text: '#b12a2e' },
  'Travel Grant + Award': { bg: '#fde8e8', text: '#b12a2e' },
  'PhD Admission':    { bg: '#e8f5ee', text: '#16a34a' },
  'Publication':      { bg: '#f3eeff', text: '#7c3aed' },
  'Conference':       { bg: '#f3eeff', text: '#7c3aed' },
}

export default function ScienceStudentAchievementsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))]
  const filtered = activeFilter === 'All' ? achievements : achievements.filter(a => a.category === activeFilter)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header — matches other schools */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl leading-tight">Student Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Science · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
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
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 22 }}
                className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100"
              >
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
                    <p className="text-[11px] text-neutral-400 mt-0.5">{a.program}</p>
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
