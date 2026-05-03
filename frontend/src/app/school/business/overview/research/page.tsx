'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const papers = [
  { no: 1, title: 'The impact of digital banking service quality on customer loyalty', author: 'Dr. Rashi Banerji', journal: 'Asian Economic and Financial Review', year: 2024, index: 'Scopus', sdg: 'SDG 8', url: 'https://www.proquest.com/openview/1b6a08b7711ce04c706963d98c5f02c8/1?pq-origsite=gscholar&cbl=1786341', photo: '/images/business/research/Dr.Rashi.webp' },
  { no: 2, title: 'Transformation of National Ranking Score for Positioning Higher Education Institutions in International Ranking – A Case on India', author: 'Dr. Khushboo Gulati', journal: 'International Journal of Productivity and Performance Management', year: 2025, index: 'ESCI-Q1', sdg: 'SDG 1', url: 'https://doi.org/10.1108/IJPPM-10-2023-0576', photo: '/images/business/research/Dr Khusboo.jpg' },
  { no: 3, title: 'Gamified Mobile Learning Strategies in Corporate Training: A Review of Benefits and Risks', author: 'Dr. Sonal Trivedi', journal: 'International Journal of Interactive Mobile Technologies', year: 2025, index: 'Scopus-Q3', sdg: 'SDG 4', url: 'https://doi.org/10.3991/ijim.v19i14.56841', photo: '/images/business/research/Dr Sonal Trivedi.jpg' },
  { no: 4, title: 'Ranking of motives for posting fake reviews', author: 'Dr. Pooja Kapoor', journal: 'Spanish Journal of Marketing - ESIC', year: 2025, index: 'ESIC', sdg: 'SDG 12', url: 'https://doi.org/10.1108/SJME-07-2024-0188', photo: '/images/business/research/Dr Pooja Kapoor.jpg' },
  { no: 5, title: 'The role of organizational learning capabilities in mediating the impact of workplace happiness on organizational citizenship behavior', author: 'Dr. Animesh Singh', journal: 'Development & Learning in Organizations', year: 2025, index: 'Scopus', sdg: 'SDG 4', url: 'https://www.emerald.com/dlo', photo: '/images/business/research/Dr.Animesh.webp' },
  { no: 6, title: 'Microtek: Repositioning of Brand and Strategy in Saturated Market', author: 'Dr. Akanchha Singh', journal: 'Emerald Emerging Market Case Studies', year: 2025, index: 'SCOPUS', sdg: 'SDG 9', url: 'https://www.emerald.com/eemcs/article-abstract/doi/10.1108/EEMCS-02-2025-0063/1315463/', photo: '/images/business/research/Dr Akanchha Singh.jpg' },
  { no: 7, title: 'Towards sustainable retirement: The impact of digital financial literacy and behavioural mediators', author: 'Ms. Akanksha Kathuria', journal: 'Development and Sustainability in Economics and Finance', year: 2025, index: 'Scopus', sdg: 'SDG 4', url: 'https://doi.org/10.1016/j.dsef.2025.100100', photo: '/images/business/research/Akanksha Kathuria.jpeg' },
  { no: 8, title: 'Unlocking the Nexus: Exploring Happiness at Work, Workplace Spirituality, and Organisational Citizenship Behaviour in Indian Private Sector Banks', author: 'Dr. Rashi Banerji & Dr. Animesh Singh', journal: 'International Journal of Work Organisation and Emotion', year: 2026, index: 'SCOPUS', sdg: 'SDG 4', url: 'https://doi.org/10.1504/ijwoe.2026.10074738', photo: '/images/business/research/Dr.Rashi.webp' },
  { no: 9, title: 'Fake Reviews as Dark Patterns: A Nudge Theory Perspective Using the SOR Framework', author: 'Dr. Pooja Kapoor', journal: 'Interdisciplinary Journal of Information, Knowledge, and Management', year: 2026, index: 'SCOPUS', sdg: 'SDG 4', url: 'https://doi.org/10.28945/5653', photo: '/images/business/research/Dr Pooja Kapoor.jpg' },
  { no: 10, title: 'Unveiling The Triggers: An Exploration of Impulse Buying Behaviour in The Gadget Industry: A Qualitative Analysis', author: 'Gurpreet Kaur', journal: 'Advances in Consumer Research', year: 2025, index: 'SCOPUS', sdg: 'SDG 12', url: 'https://acr-journal.com/article/unveiling-the-triggers-an-exploration-of-impulse-buying-behaviour-in-the-gadget-industry-a-qualitative-analysis-915/', photo: '/images/business/research/Gurpreet Kaur.jpg' },
]

function PaperCard({ p }: { p: typeof papers[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start gap-3 px-4 py-3.5 text-left">
        <span className="text-xs font-bold text-secondary shrink-0 w-5 mt-0.5">{p.no}.</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">{p.title}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{p.author} · {p.year}</p>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="d" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-100">
            <div className="px-4 py-3 space-y-3">
              {/* Photo */}
              <div className="relative w-full rounded-xl overflow-hidden bg-neutral-100" style={{ height: 160 }}>
                <Image src={p.photo} alt={p.title} fill className="object-cover" unoptimized />
              </div>
              <div className="divide-y divide-neutral-100 rounded-xl border border-neutral-100 overflow-hidden text-xs">
                <div className="flex justify-between px-3 py-2"><span className="text-neutral-400">Journal</span><span className="font-semibold text-gray-700 text-right max-w-[60%]">{p.journal}</span></div>
                <div className="flex justify-between px-3 py-2"><span className="text-neutral-400">Index</span><span className="font-semibold text-gray-700">{p.index}</span></div>
                <div className="flex justify-between px-3 py-2"><span className="text-neutral-400">SDG</span><span className="font-semibold text-secondary">{p.sdg}</span></div>
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                View Paper <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ResearchPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Paper Publications</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {papers.map(p => <PaperCard key={p.no} p={p} />)}
        </div>
      </div>
    </div>
  )
}
