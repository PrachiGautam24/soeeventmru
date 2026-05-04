'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = {
  ug: [
    {
      title: 'ITEP B.A. B.Ed.',
      duration: '4 Years', level: 'Undergraduate', badge: '📚',
      highlights: ['Dual-major NCTE-approved program integrating Arts with Teacher Education', 'Prepares for secondary school teaching', 'International Baccalaureate Educator Certificate (IBEC)'],
      eligibility: '10+2 with min. 50% aggregate marks.',
      url: 'https://manavrachna.edu.in/mru/academics/itep-ba-bed',
      applyUrl: 'https://manavrachna.edu.in/mru/academics/itep-ba-bed#howToAply',
      careers: ['School Teacher', 'Curriculum Developer', 'Education Counsellor'],
    },
    {
      title: 'ITEP B.Sc. B.Ed.',
      duration: '4 Years', level: 'Undergraduate', badge: '🔭',
      highlights: ['Dual-major NCTE-approved program integrating Science with Teacher Education', 'Prepares for secondary school science teaching', 'International Baccalaureate Educator Certificate (IBEC)'],
      eligibility: '10+2 with min. 50% aggregate marks.',
      url: 'https://manavrachna.edu.in/mru/academics/itep-bsc-bed',
      applyUrl: 'https://manavrachna.edu.in/mru/academics/itep-bsc-bed#howToAply',
      careers: ['Science Teacher', 'Lab Instructor', 'Education Researcher'],
    },
    {
      title: 'B.Ed.',
      duration: '2 Years', level: 'Undergraduate', badge: '🎓',
      highlights: ['NCTE-approved with prestigious IBEC certification', 'Integrates theory with intensive practicum', 'Nationally and internationally recognised'],
      eligibility: "50%+ in Bachelor's/Master's in Sciences/Social Sciences/Humanities OR 55%+ in B.E./B.Tech.",
      url: 'https://manavrachna.edu.in/mru/academics/bachelor-of-education-bed',
      applyUrl: 'https://manavrachna.edu.in/mru/academics/bachelor-of-education-bed#howToAply',
      careers: ['School Teacher', 'Education Administrator', 'Academic Coordinator'],
    },
  ],
  pg: [
    {
      title: 'M.A. Education',
      duration: '2 Years', level: 'Postgraduate', badge: '🏫',
      highlights: [
        'Prepares educators for IB demands',
        'Flexible: full Master\'s in 2 years OR exit after Year 1 with PG Diploma + IB Certificate',
        'Specialisations: International Education or Educational Leadership & Development',
      ],
      eligibility: "Bachelor's/Master's in Science/Social Sciences/Humanities with 50%+. Min. 3 years teaching experience for Leadership specialisation.",
      url: 'https://manavrachna.edu.in/mru/academics/ma-in-education-guidance-counselling',
      applyUrl: 'https://manavrachna.edu.in/mru/academics/ma-in-education-guidance-counselling#howToAply',
      careers: ['Education Leader', 'IB Coordinator', 'Academic Researcher', 'Policy Advisor'],
    },
  ],
  phd: {
    title: 'Ph.D. in Education',
    duration: 'Min. 3 Years', badge: '🔬',
    highlights: [
      'Ph.D. in Education and allied disciplines: Economics, English, Political Science, History',
      'Research areas: Assessment & Evaluation, E-learning, Curriculum Development, Innovative Pedagogies',
      'NCTE and IB recognised institution',
      'Publication support in Scopus/SCI indexed journals',
    ],
    url: 'https://manavrachna.edu.in/mru/academics/phd-in-education-humanities',
  },
}

type Program = {
  title: string
  duration: string
  level: string
  badge: string
  partner?: string
  highlights: string[]
  eligibility?: string
  url?: string
  applyUrl?: string
  careers?: string[]
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
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
              <div className="bg-neutral-50 rounded-xl px-3 py-2.5 border border-neutral-100">
                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1">Eligibility</p>
                <p className="text-xs text-gray-700">{program.eligibility}</p>
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
              <a href={program.applyUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-secondary/5 border border-secondary/20 rounded-xl px-3 py-2.5">
                <p className="text-xs font-semibold text-secondary">How to Apply</p>
                <ExternalLink className="w-3.5 h-3.5 text-secondary" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function EducationProgramsPage() {
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
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
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
                  <a href={programs.phd.url} target="_blank" rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    More Details <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
