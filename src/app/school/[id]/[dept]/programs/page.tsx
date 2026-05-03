'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schools } from '@/lib/schools'

// ─── ECE Programs Data ────────────────────────────────────────────────────────
const ecePrograms = {
  ug: [
    {
      title: 'B.Tech — Electronics & Communication Engineering',
      duration: '4 Years',
      level: 'Undergraduate',
      badge: '📡',
      highlights: [
        'Core ECE fundamentals: Communication, VLSI, Embedded Systems',
        'Electives across 3 verticals: Computer/IT, Communication Engineering, Embedded/VLSI',
        'Covers latest programming languages and IT-related courses',
        'Eligible for GATE under both ECE and CSE streams',
        'Employable in Automotive, IoT, Smart Devices, Software-enabled Services, Process-controlled Industries',
      ],
      careers: ['Intel', 'Qualcomm', 'AMD', 'STMicroelectronics', 'Cadence', 'TCS', 'Accenture', 'HCL', 'Wipro'],
    },
    {
      title: 'B.Tech — ECE (VLSI Design & Verification)',
      duration: '4 Years',
      level: 'Undergraduate',
      badge: '🔬',
      partner: 'In association with TrueChip',
      highlights: [
        'Guaranteed placement in core VLSI industry',
        'Multiple growth in package compared to IT',
        'TrueChip: leading provider of Design & Verification solutions',
        '20 modules designed by TrueChip & Futurewiz based on current industrial requirements',
        'Hands-on training on Mentor Graphics / Cadence / Synopsys tools',
        'Training in HVL, HDL, System Verilog (OVM, VMM, UVM), Verilog, VHDL, Perl, C, C++, Unix scripting',
        'Front-end EDA tools: Cadence, Synopsys, Mentor FPGA Synthesis',
        'Back-end EDA tools for Physical Design: Cadence and Synopsys',
        'Letter of Intent at time of admission',
      ],
      careers: ['ST MicroElectronics', 'Freescale', 'Cadence', 'TrueChip', 'Mentor Graphics'],
    },
    {
      title: 'B.Tech — ECE (Healthcare Technology)',
      duration: '4 Years',
      level: 'Undergraduate',
      badge: '🏥',
      partner: 'In association with Sahai Research Labs',
      highlights: [
        'Specialization in developing medical electronic devices using AI/ML',
        'Entrepreneurship support through Patent & Startup (6 patents already acquired)',
        'Stipend starting from ₹9,000/- during prototype development',
        'Certified industry internship',
        'Industry-driven curriculum',
        'Multidisciplinary project takeaways',
      ],
      careers: ['Healthcare Technology', 'Medical Devices', 'AI/ML in Healthcare', 'Startups'],
    },
  ],
  pg: [
    {
      title: 'M.Tech — VLSI Design',
      duration: '2 Years',
      level: 'Postgraduate',
      badge: '🎓',
      highlights: [
        'Advanced VLSI design and verification techniques',
        'Industry-aligned curriculum with EDA tools',
        'Research opportunities in semiconductor design',
      ],
      careers: ['VLSI Design Engineer', 'Verification Engineer', 'FPGA Developer'],
    },
    {
      title: 'M.Tech — Communication Engineering',
      duration: '2 Years',
      level: 'Postgraduate',
      badge: '📶',
      highlights: [
        'Advanced wireless and wired communication systems',
        'Signal processing and antenna design',
        'Research in 5G and next-gen communication',
      ],
      careers: ['RF Engineer', 'Telecom Engineer', 'Signal Processing Specialist'],
    },
    {
      title: 'M.Tech — Embedded Systems',
      duration: '2 Years',
      level: 'Postgraduate',
      badge: '⚙️',
      highlights: [
        'Real-time operating systems and microcontroller programming',
        'IoT and smart systems design',
        'Industry projects with embedded solutions companies',
      ],
      careers: ['Embedded Systems Engineer', 'IoT Developer', 'Firmware Engineer'],
    },
  ],
  phd: {
    title: 'Ph.D — Electronics & Communication Engineering',
    duration: '3–5 Years',
    badge: '🔭',
    highlights: [
      'Research in VLSI, Communication, Embedded Systems, Signal Processing',
      'Active research labs in microelectronics and IoT',
      'Collaboration with Truechip and CISCO',
      'Publication support in Scopus/SCI indexed journals',
    ],
  },
}

function ProgramCard({ program, index }: { program: typeof ecePrograms.ug[0]; index: number }) {
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

export default function ProgramsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)
  const isEce = dept === 'ece'

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Programs Offered</h1>
            <p className="text-white/70 text-xs mt-1">{department?.name ?? 'Department'} · {school?.name ?? 'MRU'}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        {isEce ? (
          <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-5">

            {/* UG */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Undergraduate Programs</p>
              <div className="space-y-3">
                {ecePrograms.ug.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
              </div>
            </div>

            {/* PG */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Postgraduate Programs</p>
              <div className="space-y-3">
                {ecePrograms.pg.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
              </div>
            </div>

            {/* PhD */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Doctoral Program</p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{ecePrograms.phd.badge}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800">{ecePrograms.phd.title}</p>
                    <span className="inline-block text-[10px] font-semibold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full mt-1">{ecePrograms.phd.duration}</span>
                    <ul className="mt-3 space-y-1.5">
                      {ecePrograms.phd.highlights.map((h, i) => (
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
        ) : (
          <div className="flex-1 bg-neutral-50 flex items-center justify-center">
            <div className="text-center py-16 px-8">
              <span className="text-4xl">📖</span>
              <p className="text-sm text-neutral-400 mt-3">Programs information coming soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
