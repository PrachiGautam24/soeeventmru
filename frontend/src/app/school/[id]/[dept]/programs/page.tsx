'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { schools } from '@/lib/schools'

// ─── CSE Programs Data ────────────────────────────────────────────────────────
const csePrograms = {
  ug: [
    {
      title: 'B.Tech Computer Science Engineering (CSE)',
      duration: '4 Years', level: 'Undergraduate', badge: '💻',
      highlights: ['Core CS fundamentals: Algorithms, OS, DBMS, Networks', 'Industry-aligned curriculum with latest technologies', 'NBA & NAAC accredited program'],
      careers: ['Software Engineer', 'Full Stack Developer', 'Data Analyst', 'System Architect'],
    },
    {
      title: 'B.Tech CSE (Hons.) — Generative AI',
      duration: '4 Years', level: 'Undergraduate', badge: '🤖',
      partner: 'In association with Google Cloud',
      highlights: ['Specialization in Generative AI and LLMs', 'Google Cloud certified curriculum', 'Hands-on with cutting-edge AI tools and platforms'],
      careers: ['AI Engineer', 'ML Engineer', 'Prompt Engineer', 'AI Product Manager'],
    },
    {
      title: 'B.Tech (Lateral Entry) CSE',
      duration: '3 Years', level: 'Undergraduate', badge: '🔁',
      highlights: ['Direct entry to 2nd year for diploma holders', 'Full B.Tech CSE curriculum', 'Industry exposure from day one'],
      careers: ['Software Engineer', 'Developer', 'IT Consultant'],
    },
    {
      title: 'B.Tech CSE (Hons.) (Lateral Entry) — AI & ML',
      duration: '3 Years', level: 'Undergraduate', badge: '🧠',
      partner: 'In association with Xebia',
      highlights: ['Lateral entry with AI/ML specialization', 'Xebia industry-driven curriculum', 'Real-world AI/ML project experience'],
      careers: ['ML Engineer', 'Data Scientist', 'AI Developer'],
    },
    {
      title: 'B.Tech CSE (Hons.) (Lateral Entry) — Cyber Security & Threat Intelligence',
      duration: '3 Years', level: 'Undergraduate', badge: '🔐',
      partner: 'In association with CISCO',
      highlights: ['Lateral entry with cybersecurity specialization', 'CISCO-certified curriculum', 'Threat intelligence and ethical hacking training'],
      careers: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Consultant'],
    },
    {
      title: 'B.Tech Robotics and Artificial Intelligence Engineering',
      duration: '4 Years', level: 'Undergraduate', badge: '🦾',
      partner: 'In association with L&T Edutech',
      highlights: ['Robotics + AI integrated curriculum', 'L&T Edutech industry partnership', 'Hands-on robotics lab and AI projects'],
      careers: ['Robotics Engineer', 'AI Engineer', 'Automation Specialist'],
    },
    {
      title: 'B.Tech (Lateral Entry) Robotics and AI Engineering',
      duration: '3 Years', level: 'Undergraduate', badge: '🤖',
      partner: 'In association with L&T Edutech',
      highlights: ['Lateral entry into Robotics & AI program', 'L&T Edutech curriculum', 'Industry-ready robotics training'],
      careers: ['Robotics Engineer', 'AI Developer', 'Automation Engineer'],
    },
    {
      title: 'B.Tech CSE — Cyber Security & Threat Intelligence',
      duration: '4 Years', level: 'Undergraduate', badge: '🛡️',
      partner: 'In association with CISCO',
      highlights: ['CISCO-certified cybersecurity curriculum', 'Threat intelligence and network security', 'Ethical hacking and penetration testing'],
      careers: ['Cybersecurity Engineer', 'Network Security Analyst', 'Penetration Tester'],
    },
    {
      title: 'BCA — FinTech',
      duration: '3 Years', level: 'Undergraduate', badge: '💳',
      partner: 'In association with KPMG',
      highlights: ['Financial technology and digital banking', 'KPMG industry-aligned curriculum', 'Blockchain, payments, and RegTech'],
      careers: ['FinTech Analyst', 'Digital Banking Specialist', 'Blockchain Developer'],
    },
    {
      title: 'BCA — Cloud Computing',
      duration: '3 Years', level: 'Undergraduate', badge: '☁️',
      partner: 'In association with Google Cloud',
      highlights: ['Google Cloud certified curriculum', 'Cloud architecture and DevOps', 'Hands-on with GCP, AWS, Azure'],
      careers: ['Cloud Engineer', 'DevOps Engineer', 'Cloud Architect'],
    },
    {
      title: 'B.Tech CSE (Hons.) — AI & ML',
      duration: '4 Years', level: 'Undergraduate', badge: '🧬',
      partner: 'In association with HCL GUVI',
      highlights: ['AI/ML specialization with HCL GUVI', 'Industry projects and mentorship', 'Placement support from HCL network'],
      careers: ['ML Engineer', 'Data Scientist', 'AI Researcher'],
    },
    {
      title: 'B.Tech CSE (Hons.) — Quantum Computing',
      duration: '4 Years', level: 'Undergraduate', badge: '⚛️',
      partner: 'In association with CDAC',
      highlights: ['Quantum algorithms and quantum hardware', 'CDAC collaboration for research', 'Cutting-edge quantum programming (Qiskit, Cirq)'],
      careers: ['Quantum Software Engineer', 'Research Scientist', 'Quantum Algorithm Developer'],
    },
  ],
  pg: [
    {
      title: 'M.Tech in Computer Engineering',
      duration: '2 Years', level: 'Postgraduate', badge: '🎓',
      highlights: ['Advanced algorithms, AI, and distributed systems', 'Research-oriented curriculum', 'Industry and academic collaborations'],
      careers: ['Senior Software Engineer', 'Research Engineer', 'Tech Lead', 'Academic Researcher'],
    },
  ],
  phd: {
    title: 'Ph.D Program in Computer Science Engineering (CSE)',
    duration: '3–5 Years', badge: '🔬',
    highlights: [
      'Research in AI/ML, Cybersecurity, Cloud Computing, Quantum Computing',
      'Active research labs and publication support',
      'Collaboration with Google Cloud, CISCO, CDAC, Xebia',
      'Publication support in Scopus/SCI indexed journals',
    ],
  },
}

// ─── ME Programs Data ─────────────────────────────────────────────────────────
const mePrograms = {
  ug: [
    {
      title: 'B.Tech M.E (Hons.) — Smart Manufacturing & Automation',
      duration: '4 Years', level: 'Undergraduate', badge: '🏭',
      partner: 'In association with L&T EduTech',
      highlights: ['Smart manufacturing and Industry 4.0 technologies', 'L&T EduTech industry-driven curriculum', 'Automation, robotics, and CNC machining'],
      careers: ['Manufacturing Engineer', 'Automation Engineer', 'Production Manager'],
    },
    {
      title: 'B.Tech M.E (Hons.) — Electric Vehicle Technology',
      duration: '4 Years', level: 'Undergraduate', badge: '⚡',
      partner: 'In association with L&T EduTech',
      highlights: ['EV powertrain, battery systems, and charging infrastructure', 'L&T EduTech collaboration', 'Hands-on EV design and simulation projects'],
      careers: ['EV Engineer', 'Battery Systems Engineer', 'Automotive Design Engineer'],
    },
    {
      title: 'B.Tech (Lateral Entry) M.E (Hons.) — Smart Manufacturing & Automation',
      duration: '3 Years', level: 'Undergraduate', badge: '🔁',
      partner: 'In association with L&T EduTech',
      highlights: ['Lateral entry for diploma holders', 'Smart manufacturing specialization', 'Industry 4.0 and automation focus'],
      careers: ['Manufacturing Engineer', 'Automation Specialist', 'Process Engineer'],
    },
    {
      title: 'B.Tech ME — Electric Vehicle Technology (Lateral Entry)',
      duration: '3 Years', level: 'Undergraduate', badge: '🔋',
      partner: 'In association with L&T EduTech',
      highlights: ['Lateral entry into EV specialization', 'L&T EduTech curriculum', 'EV design, testing, and integration'],
      careers: ['EV Design Engineer', 'Automotive Engineer', 'EV Systems Analyst'],
    },
    {
      title: 'B.Tech (Lateral Entry) M.E (Hons.) — Electric Vehicle Technology',
      duration: '3 Years', level: 'Undergraduate', badge: '⚡',
      partner: 'In association with L&T EduTech',
      highlights: ['Lateral entry with EV technology focus', 'Hands-on EV lab projects', 'Industry mentorship from L&T EduTech'],
      careers: ['EV Engineer', 'Battery Engineer', 'Automotive Systems Engineer'],
    },
  ],
  pg: [
    {
      title: 'M.Tech in Mechanical Engineering',
      duration: '2 Years', level: 'Postgraduate', badge: '🎓',
      highlights: ['Advanced manufacturing, thermal, and design engineering', 'Research-oriented curriculum', 'Industry and academic collaborations'],
      careers: ['Senior Mechanical Engineer', 'Research Engineer', 'Design Engineer', 'Academic Researcher'],
    },
  ],
  phd: {
    title: 'Ph.D. in Mechanical Engineering',
    duration: '3–5 Years', badge: '🔬',
    highlights: [
      'Research in Smart Manufacturing, EV Technology, Thermal Engineering',
      'Active research labs and publication support',
      'Collaboration with L&T EduTech and industry partners',
      'Publication support in Scopus/SCI indexed journals',
    ],
  },
}

// ─── RA Programs Data ─────────────────────────────────────────────────────────
const raPrograms = {
  ug: [
    {
      title: 'B.Tech Robotics and Artificial Intelligence Engineering',
      duration: '4 Years', level: 'Undergraduate', badge: '🦾',
      partner: 'In association with L&T Edutech',
      highlights: ['Robotics + AI integrated curriculum', 'L&T Edutech industry partnership', 'Hands-on robotics lab and AI projects', 'Autonomous systems, drone technology, and industrial automation'],
      careers: ['Robotics Engineer', 'AI Engineer', 'Automation Specialist', 'Drone Systems Engineer'],
    },
    {
      title: 'B.Tech (Lateral Entry) Robotics and AI Engineering',
      duration: '3 Years', level: 'Undergraduate', badge: '🤖',
      partner: 'In association with L&T Edutech',
      highlights: ['Lateral entry into Robotics & AI program', 'L&T Edutech curriculum', 'Industry-ready robotics training'],
      careers: ['Robotics Engineer', 'AI Developer', 'Automation Engineer'],
    },
  ],
  pg: [] as typeof ecePrograms.pg,
  phd: {
    title: 'Ph.D. in Robotics & Automation',
    duration: '3–5 Years', badge: '🔬',
    highlights: [
      'Research in autonomous systems, AI, and industrial robotics',
      'Dedicated robotics labs with collaborative robots and drone simulators',
      'Partnerships with ABB and Fanuc',
      'Publication support in Scopus/SCI indexed journals',
    ],
  },
}

// ─── ECE Programs Data ────────────────────────────────────────────────────────
const ecePrograms = {
  ug: [
    {
      title: 'B.Tech — Electronics & Communication Engineering',
      duration: '4 Years', level: 'Undergraduate', badge: '📡',
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
      duration: '4 Years', level: 'Undergraduate', badge: '🔬',
      partner: 'In association with TrueChip',
      highlights: [
        'Guaranteed placement in core VLSI industry',
        'Multiple growth in package compared to IT',
        'TrueChip: leading provider of Design & Verification solutions',
        '20 modules designed by TrueChip & Futurewiz based on current industrial requirements',
        'Hands-on training on Mentor Graphics / Cadence / Synopsys tools',
        'Training in HVL, HDL, System Verilog (OVM, VMM, UVM), Verilog, VHDL, Perl, C, C++, Unix scripting',
        'Letter of Intent at time of admission',
      ],
      careers: ['ST MicroElectronics', 'Freescale', 'Cadence', 'TrueChip', 'Mentor Graphics'],
    },
    {
      title: 'B.Tech — ECE (Healthcare Technology)',
      duration: '4 Years', level: 'Undergraduate', badge: '🏥',
      partner: 'In association with Sahai Research Labs',
      highlights: [
        'Specialization in developing medical electronic devices using AI/ML',
        'Entrepreneurship support through Patent & Startup (6 patents already acquired)',
        'Stipend starting from ₹9,000/- during prototype development',
        'Certified industry internship',
        'Industry-driven curriculum',
      ],
      careers: ['Healthcare Technology', 'Medical Devices', 'AI/ML in Healthcare', 'Startups'],
    },
  ],
  pg: [
    {
      title: 'M.Tech — VLSI Design',
      duration: '2 Years', level: 'Postgraduate', badge: '🎓',
      highlights: ['Advanced VLSI design and verification techniques', 'Industry-aligned curriculum with EDA tools', 'Research opportunities in semiconductor design'],
      careers: ['VLSI Design Engineer', 'Verification Engineer', 'FPGA Developer'],
    },
    {
      title: 'M.Tech — Communication Engineering',
      duration: '2 Years', level: 'Postgraduate', badge: '📶',
      highlights: ['Advanced wireless and wired communication systems', 'Signal processing and antenna design', 'Research in 5G and next-gen communication'],
      careers: ['RF Engineer', 'Telecom Engineer', 'Signal Processing Specialist'],
    },
    {
      title: 'M.Tech — Embedded Systems',
      duration: '2 Years', level: 'Postgraduate', badge: '⚙️',
      highlights: ['Real-time operating systems and microcontroller programming', 'IoT and smart systems design', 'Industry projects with embedded solutions companies'],
      careers: ['Embedded Systems Engineer', 'IoT Developer', 'Firmware Engineer'],
    },
  ],
  phd: {
    title: 'Ph.D — Electronics & Communication Engineering',
    duration: '3–5 Years', badge: '🔭',
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
  const isCse = dept === 'cse'
  const isMe = dept === 'me'
  const isRa = dept === 'ra'
  const hasPrograms = isEce || isCse || isMe || isRa
  const programs = isEce ? ecePrograms : isCse ? csePrograms : isMe ? mePrograms : raPrograms

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

        {hasPrograms ? (
          <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-5">

            {/* UG */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Undergraduate Programs</p>
              <div className="space-y-3">
                {programs.ug.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
              </div>
            </div>

            {/* PG */}
            {programs.pg.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Postgraduate Programs</p>
              <div className="space-y-3">
                {programs.pg.map((p, i) => <ProgramCard key={i} program={p} index={i} />)}
              </div>
            </div>
            )}

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
