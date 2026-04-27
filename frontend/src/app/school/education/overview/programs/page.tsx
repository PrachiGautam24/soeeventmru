'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react'

const programs = [
  { level: 'Undergraduate', items: [
    { title: 'ITEP B.A. B.Ed.', duration: '4 Years', fee: '₹1,49,000/year', desc: 'Dual-major NCTE-approved program integrating Arts with Teacher Education for secondary school teaching.', url: 'https://manavrachna.edu.in/mru/academics/itep-ba-bed', eligibility: '10+2 with min. 50% aggregate marks.', applyUrl: 'https://manavrachna.edu.in/mru/academics/itep-ba-bed#howToAply', faqUrl: 'https://manavrachna.edu.in/mru/academics/itep-ba-bed#faq' },
    { title: 'ITEP B.Sc. B.Ed.', duration: '4 Years', fee: '₹1,49,000/year', desc: 'Dual-major NCTE-approved program integrating Science with Teacher Education for secondary school teaching.', url: 'https://manavrachna.edu.in/mru/academics/itep-bsc-bed', eligibility: '10+2 with min. 50% aggregate marks.', applyUrl: 'https://manavrachna.edu.in/mru/academics/itep-bsc-bed#howToAply', faqUrl: 'https://manavrachna.edu.in/mru/academics/itep-bsc-bed#faq' },
    { title: 'B.Ed.', duration: '2 Years', fee: '₹1,49,000/year', desc: 'NCTE-approved program offering the prestigious International Baccalaureate Educator Certificate (IBEC). Integrates theory with intensive practicum.', url: 'https://manavrachna.edu.in/mru/academics/bachelor-of-education-bed', eligibility: "50%+ in Bachelor's/Master's in Sciences/Social Sciences/Humanities OR 55%+ in B.E./B.Tech.", applyUrl: 'https://manavrachna.edu.in/mru/academics/bachelor-of-education-bed#howToAply', faqUrl: 'https://manavrachna.edu.in/mru/academics/bachelor-of-education-bed#faq' },
  ]},
  { level: 'Postgraduate', items: [
    { title: 'M.A. Education', duration: '2 Years', fee: '₹1,85,000', desc: "Prepares educators for IB demands. Flexible: full Master's in 2 years OR exit after Year 1 with PG Diploma + IB Certificate. Specialisations: International Education or Educational Leadership & Development.", url: 'https://manavrachna.edu.in/mru/academics/ma-in-education-guidance-counselling', eligibility: "Bachelor's/Master's in Science/Social Sciences/Humanities with 50%+. Min. 3 years teaching experience for Leadership specialisation.", applyUrl: 'https://manavrachna.edu.in/mru/academics/ma-in-education-guidance-counselling#howToAply', faqUrl: 'https://manavrachna.edu.in/mru/academics/ma-in-education-guidance-counselling#faq' },
  ]},
  { level: 'Doctoral', items: [
    { title: 'Ph.D.', duration: 'Min. 3 Years', fee: 'See website', desc: 'Ph.D. in Education and allied disciplines including Economics, English, Political Science, and History. Research areas: Assessment & Evaluation, E-learning, Curriculum Development, Innovative Pedagogies, and more.', url: 'https://manavrachna.edu.in/mru/academics/phd-in-education-humanities', eligibility: 'Visit the official programme page.', applyUrl: 'https://manavrachna.edu.in/mru/academics/phd-in-education-humanities', faqUrl: 'https://manavrachna.edu.in/mru/academics/phd-in-education-humanities' },
  ]},
]

function ProgramCard({ p }: { p: typeof programs[0]['items'][0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start justify-between px-4 py-3.5 text-left">
        <div>
          <p className="text-sm font-bold text-gray-800">{p.title}</p>
          <p className="text-xs text-neutral-500 mt-0.5">⏱ {p.duration} · {p.fee}</p>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="pc" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden border-t border-neutral-100">
            <div className="px-4 py-3 space-y-3">
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              <div className="divide-y divide-neutral-100 rounded-xl border border-neutral-100 overflow-hidden">
                <div className="px-3 py-2.5 bg-neutral-50">
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1">Eligibility</p>
                  <p className="text-xs text-gray-700">{p.eligibility}</p>
                </div>
                <a href={p.applyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2.5 bg-white">
                  <p className="text-xs font-semibold text-gray-800">How to Apply</p><ExternalLink className="w-3.5 h-3.5 text-secondary" />
                </a>
                <a href={p.faqUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2.5 bg-white">
                  <p className="text-xs font-semibold text-gray-800">FAQs</p><ExternalLink className="w-3.5 h-3.5 text-secondary" />
                </a>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2.5 bg-white">
                  <p className="text-xs font-semibold text-secondary">More Details</p><ExternalLink className="w-3.5 h-3.5 text-secondary" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProgramsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Programs Offered</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">
          {programs.map((group) => (
            <div key={group.level} className="space-y-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-1">{group.level}</p>
              {group.items.map(p => <ProgramCard key={p.title} p={p} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
