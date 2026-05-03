'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = {
  ug: [
    {
      title: 'B.Sc. (Hons.) Forensic Science',
      duration: '3 Years', level: 'Undergraduate', badge: '🔍',
      highlights: [
        'Comprehensive study of forensic biology, chemistry, and toxicology',
        'Hands-on training in forensic labs',
        'Crime scene investigation and evidence analysis',
        'NAAC A++ accredited institution',
      ],
      careers: ['Forensic Scientist', 'Crime Scene Investigator', 'Forensic Analyst', 'Lab Technician'],
    },
  ],
  pg: [
    {
      title: 'M.Sc. Chemistry',
      duration: '2 Years', level: 'Postgraduate', badge: '⚗️',
      highlights: [
        'Advanced organic, inorganic, and physical chemistry',
        'Research-oriented curriculum with lab-intensive training',
        'Industry and academic collaborations',
      ],
      careers: ['Research Scientist', 'Chemical Analyst', 'Quality Control Officer', 'Academic Researcher'],
    },
    {
      title: 'M.Sc. Agrochemicals and Pest Management',
      duration: '2 Years', level: 'Postgraduate', badge: '🌿',
      highlights: [
        'Pesticide chemistry, formulation, and application',
        'Integrated pest management strategies',
        'Field and laboratory training',
        'Industry exposure with agrochemical companies',
      ],
      careers: ['Agrochemical Scientist', 'Pest Management Specialist', 'Agricultural Consultant', 'R&D Scientist'],
    },
    {
      title: 'M.Sc. Physics (Quantum Computing)',
      duration: '2 Years', level: 'Postgraduate', badge: '⚛️',
      partner: 'In association with C-DAC',
      highlights: [
        'Quantum mechanics, quantum algorithms, and quantum hardware',
        'C-DAC collaboration for cutting-edge quantum research',
        'Hands-on with Qiskit and quantum simulation tools',
        'Prepares for careers in quantum computing and research',
      ],
      careers: ['Quantum Researcher', 'Quantum Software Engineer', 'Research Scientist', 'Academic Researcher'],
    },
  ],
  phd: {
    title: 'Ph.D. in Sciences',
    duration: '3–5 Years', badge: '🔬',
    highlights: [
      'Research across Physics, Chemistry, Forensic Science, and allied disciplines',
      'Active research labs and publication support',
      'Collaboration with C-DAC and industry partners',
      'Publication support in Scopus/SCI indexed journals',
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
          {'partner' in program && program.partner && (
            <p className="text-[11px] text-amber-600 font-semibold mt-1">{program.partner}</p>
          )}
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

export default function ScienceProgramsPage() {
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
            <p className="text-white/70 text-xs mt-1">School of Sciences · MRU</p>
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
