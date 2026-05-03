'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = {
  ug: [
    {
      title: 'BA LLB (Hons.) Integrated',
      duration: '5 Years', level: 'Undergraduate', badge: '⚖️',
      highlights: [
        'Integrated dual-degree combining Arts and Law',
        'Covers Constitutional Law, Criminal Law, Corporate Law, and more',
        'Moot court practice and legal aid clinics',
        'Internships with top law firms and courts',
        'Accredited by Bar Council of India (BCI)',
      ],
      careers: ['Advocate', 'Legal Advisor', 'Judicial Services', 'Corporate Counsel', 'Legal Researcher'],
    },
    {
      title: 'BBA LLB (Hons.) Integrated',
      duration: '5 Years', level: 'Undergraduate', badge: '🏛️',
      highlights: [
        'Integrated dual-degree combining Business Administration and Law',
        'Focus on Corporate Law, Business Regulations, and Commercial Litigation',
        'Moot court and negotiation skills training',
        'Industry exposure through internships with law firms and corporates',
        'Accredited by Bar Council of India (BCI)',
      ],
      careers: ['Corporate Lawyer', 'Legal Consultant', 'Compliance Officer', 'Business Analyst', 'In-house Counsel'],
    },
    {
      title: 'LLB (3 Years)',
      duration: '3 Years', level: 'Undergraduate', badge: '📜',
      highlights: [
        'Professional law degree for graduates',
        'Comprehensive coverage of civil, criminal, and constitutional law',
        'Practical training through moot courts and legal aid',
        'Accredited by Bar Council of India (BCI)',
        'NAAC A++ accredited institution',
      ],
      careers: ['Advocate', 'Legal Advisor', 'Judicial Services', 'Government Legal Officer'],
    },
  ],
  pg: [
    {
      title: 'LLM (1 Year)',
      duration: '1 Year', level: 'Postgraduate', badge: '🎓',
      highlights: [
        'Advanced specialization in chosen area of law',
        'Research-oriented curriculum',
        'Access to MRU legal research resources and journals',
        'Mentorship from experienced faculty and legal practitioners',
      ],
      careers: ['Senior Advocate', 'Legal Academic', 'Policy Researcher', 'International Law Specialist'],
    },
  ],
  phd: {
    title: 'Ph.D. in Law',
    duration: '3–5 Years', badge: '🔬',
    highlights: [
      'Original research in any area of law',
      'Ranked 51st among law schools in India (India Today 2025)',
      'Ranked 4th in Haryana',
      'Publication support in Scopus/SCI indexed journals',
      'Collaboration with courts, law firms, and policy bodies',
    ],
  },
}

function ProgramCard({ program, index }: { program: typeof programs.ug[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start gap-3 px-4 py-4 text-left">
        <span className="text-2xl shrink-0">{program.badge}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800 leading-snug">{program.title}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{program.level}</span>
            <span className="text-[10px] font-semibold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">{program.duration}</span>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="d" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-neutral-100">
            <div className="px-4 py-4 space-y-3">
              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-2">Highlights</p>
                <ul className="space-y-1.5">
                  {program.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-secondary mt-0.5 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              {'careers' in program && program.careers && (
                <div>
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-2">Career Opportunities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {program.careers.map((c, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-neutral-100 text-neutral-600 px-2 py-1 rounded-lg">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function LawProgramsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Programs Offered</h1>
            <p className="text-white/70 text-xs mt-1">School of Law · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-5">

          {/* UG */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Undergraduate Programs</p>
            <div className="space-y-3">
              {programs.ug.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
            </div>
          </div>

          {/* PG */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Postgraduate Programs</p>
            <div className="space-y-3">
              {programs.pg.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
            </div>
          </div>

          {/* PhD */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Doctoral Program</p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm px-4 py-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{programs.phd.badge}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{programs.phd.title}</p>
                  <span className="inline-block text-[10px] font-semibold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full mt-1">{programs.phd.duration}</span>
                  <ul className="mt-3 space-y-1.5">
                    {programs.phd.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-secondary mt-0.5 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
