'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  {
    name: 'Prof. (Dr.) Sudhish Kumar Shukla',
    role: 'Professor · Chemistry',
    badge: '🏆',
    category: 'Global Ranking',
    title: 'Stanford Top 2% Researcher — 4 Consecutive Years (2022–2025)',
    desc: 'Listed among top 2% researchers globally by Stanford University (annual & lifetime). Ranked top 0.05% in hydrochloric acid research by ScholarGPS (2024 & 2025). Academic Editor, Scientific Reports (Nature Portfolio, SCIE Q1).',
  },
  {
    name: 'Dr. Aparna Vyas',
    role: 'Associate Professor & Cluster Head · Mathematics',
    badge: '🥇',
    category: 'Award',
    title: 'Best Paper Presentation — RACMAS-2026',
    desc: 'Awarded Best Paper at International Conference on Recent Advances in Computational Mathematics and Allied Sciences (RACMAS-2026), Shri Mata Vaishno Devi University, J&K.',
  },
  {
    name: 'Prof. (Dr.) Mohammad Javed Idrisi',
    role: 'Professor · Mathematics',
    badge: '🌍',
    category: 'Research Excellence',
    title: 'Top Cited Article 2025 (Wiley) · 70+ Publications',
    desc: '70+ research papers including 50+ SCIE-indexed (Springer, Elsevier, IEEE, MDPI). "Top Cited Article 2025" by Wiley. "Incredible Young Researcher of India 2022" Award. Academic Editor, Scientific Reports (Nature Portfolio).',
  },
  {
    name: 'Dr. Jitendra Pal Singh',
    role: 'Ramanujan Fellow · Physics',
    badge: '⚛️',
    category: 'Grant + Award',
    title: 'Ramanujan Fellowship ₹1.19 Cr · Stanford Top 2% (2024)',
    desc: 'Ramanujan Fellowship from DST (₹1.19 Cr, 2022). Best Researcher Award, MRU (2025). Top 2% globally — Stanford/Elsevier (2024). Editor-in-Chief: Prabha Materials Science Letters. Associate Editor: Scientific Reports. Guest Editor: J. Alloys & Compounds, J. Magnetism (Elsevier), RSC Advances.',
  },
  {
    name: 'Prof. (Dr.) Arpit Sand',
    role: 'Professor · Chemistry',
    badge: '💰',
    category: 'Grant',
    title: '3 Conference Grants — DST, DRDO, IOCL, ACS',
    desc: 'Convener, GSCC-2022 (DST/DRDO/NHPC grant) & GSCC-2025 (IOCL/ACS grant). Coordinator, National Seminar on Language in Teaching Chemistry (Ministry of Higher Education grant, Jan 2025).',
  },
  {
    name: 'Dr. D.K. Sharma',
    role: 'Professor · School of Sciences',
    badge: '🔬',
    category: 'Fellowship',
    title: 'CSIR Senior Research Fellowship · TIFR Visiting Scientist',
    desc: 'Awarded CSIR Senior Research Fellowship. Served as Visiting Scientist at TIFR and held research position at ISRO-related facilities.',
  },
  {
    name: 'Dr. Haider Abbass, Dr. Sandeep Kumar, Dr. Jai Parkash & Dr. Deepti Maikhuri',
    role: 'Faculty · Physics',
    badge: '💰',
    category: 'Grant',
    title: 'DST-SERB + DRDO Grants for ICFM-2022',
    desc: '₹1,00,000 from DST-SERB and ₹30,000 from DRDO for organizing International Conference on Futuristic Materials (ICFM-2022).',
  },
  {
    name: 'Dr. Deepti Maikhuri & Dr. Anshuman Sahai',
    role: 'Faculty · Physics',
    badge: '💰',
    category: 'Grant',
    title: 'NASI Grant for National Workshop MFQM-2022',
    desc: '₹16,114 from NASI, New Delhi for organizing National Workshop on "Multiple Facets of Quantum Mechanics: Quantum Computing, Quantum Optics & Quantum Communication".',
  },
  {
    name: 'Dr. Deepti Maikhuri',
    role: 'Faculty · Physics',
    badge: '📝',
    category: 'Reviewer',
    title: 'Reviewer — Applied Surface Sciences & Optical & Quantum Electronics (Springer)',
    desc: 'Peer reviewer for two SCI-indexed Springer journals: Applied Surface Sciences and Optical & Quantum Electronics.',
  },
  {
    name: 'Dr. Shiv Kumar Dixit',
    role: 'Assistant Professor · Physics',
    badge: '💰',
    category: 'Grant',
    title: 'DST Funded Project — ₹18,00,000',
    desc: 'Received DST-funded research project worth ₹18,00,000.',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Global Ranking':     { bg: '#fef3e2', text: '#b45309' },
  'Award':              { bg: '#fde8e8', text: '#b12a2e' },
  'Research Excellence':{ bg: '#e8edf8', text: '#1e4ba9' },
  'Grant + Award':      { bg: '#fde8e8', text: '#b12a2e' },
  'Grant':              { bg: '#e8f5ee', text: '#16a34a' },
  'Fellowship':         { bg: '#f3eeff', text: '#7c3aed' },
  'Reviewer':           { bg: '#e8edf8', text: '#1e4ba9' },
}

export default function ScienceFacultyAchievementsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#b12a2e' }}>
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">👨‍🏫</div>
            <h1 className="font-bold text-white text-xl leading-tight">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Science · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
            {achievements.length} Achievements
          </p>

          {achievements.map((a, i) => {
            const color = categoryColors[a.category] ?? { bg: '#f3f4f6', text: '#6b7280' }
            return (
              <motion.div
                key={i}
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
