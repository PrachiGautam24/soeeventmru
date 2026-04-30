'use client'

import { useRouter, useParams } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { schools } from '@/lib/schools'

// ─── CSE specific faculty achievements ───────────────────────────────────────
const cseFacultyAchievements = [
  {
    name: '9 Faculty Members · CSE Dept',
    role: 'School of Engineering',
    badge: '🎓',
    category: 'Certification',
    title: 'Google Certified Educators — Level 2',
    desc: 'Nine faculty members earned globally recognized Google Certified Educator Level 2 certification, embracing digital transformation for interactive and inclusive classrooms.',
  },
  {
    name: 'Dr. Abhishek Saxena',
    role: 'Faculty · CSE',
    badge: '🏅',
    category: 'Fellowship',
    title: 'Fellow — SCRS · IANE · Research Fellow, Inti International University Malaysia',
    desc: '• Fellow, Soft Computing Research Society (SCRS)\n• Research Fellow, Inti International University, Malaysia\n• Senior Member, Indian National Academy of Engineering (IANE), DST Govt. of India\n• Fellow Member, Soft Computing Research Society',
  },
  {
    name: 'Ms. Gunjan Chandwani',
    role: 'Faculty · CSE',
    badge: '🏆',
    category: 'Award',
    title: 'Best Paper Award — ICCCT 2022–23 · Google Android Educator (2020–22)',
    desc: '• Best Paper, 5th International Conference on Communication & Computational Technologies (2022–23)\n• Certificate of Appreciation, Google Android Educator Program (2021–22 & 2020–21)',
  },
  {
    name: 'Dr. Mamta Arora',
    role: 'Faculty · CSE',
    badge: '🌟',
    category: 'Award',
    title: 'Young Researcher Award — STEM Research Society 2022',
    desc: 'Received Young Researcher Award 2022 from STEM Research Society.',
  },
  {
    name: 'Dr. Mrinal Pandey',
    role: 'Faculty · CSE',
    badge: '🏅',
    category: 'Award',
    title: 'Session Chair — SMART GENCON 2022 · AI Grand Challenge Mentor',
    desc: '• Certificate of Appreciation as Session Chair, SMART GENCON 2022, Bangalore\n• Appreciation Letter as Mentor for CDAC Kolkata team — Winners, AI Grand Challenge (Real-Time Price Prediction 2021), Telangana Govt & Nasscom',
  },
  {
    name: 'Ms. Chandni Magoo',
    role: 'Faculty · CSE',
    badge: '🌏',
    category: 'Award',
    title: 'Appreciation — MRU–Seikei University Japan Exchange Program (EAGLE)',
    desc: 'Recognized for mentoring students in international exchange program between MRU India & Seikei University Japan, Oracle Japan (2022–23).',
  },
  {
    name: 'Dr. Manpreet Kaur',
    role: 'Faculty · CSE',
    badge: '⚡',
    category: 'IEEE Award',
    title: 'IEEE Best Branch Counsellor · Women in Engineering · NPTEL SPOC',
    desc: '• Special Mention — Best IEEE Branch Counsellor, IEEE Delhi Section (2021–22)\n• Honorary Women in Engineering Recognition, IEEE Delhi Section (2021–22)\n• Certificate of Appreciation as SWAYAM-NPTEL SPOC (Jan–Dec 2021 & Jan–Apr 2020)',
  },
  {
    name: 'Ms. Anu Priya Sharma',
    role: 'Faculty · CSE',
    badge: '🏅',
    category: 'Award',
    title: 'I2OR National Elite Teacher Award 2022 · SIH Mentor 2020',
    desc: '• I2OR National Elite Teacher Award, 5 Sept 2022\n• Certificate of Mentor, Smart India Hackathon 2020, MHRD (1–3 Aug 2020)',
  },
  {
    name: 'Dr. Sanjay Singh',
    role: 'Faculty · CSE',
    badge: '🎓',
    category: 'Certification',
    title: 'Google Android Educator Program — Certificate of Appreciation (2020–21)',
    desc: 'Awarded Certificate of Appreciation for Leading Android Educator Program by Google Developers (2020–21).',
  },
]

// ─── R&A specific faculty achievements ───────────────────────────────────────
const raFacultyAchievements = [
  {
    name: 'Dr. Priyanka Bansal',
    role: 'Faculty · Robotics & AI',
    badge: '⚡',
    category: 'IEEE Senior Member',
    title: 'Conferred IEEE Senior Member Grade',
    desc: 'Awarded prestigious IEEE Senior Member grade by IEEE, New York — recognizing sustained contributions to research, academics, and the professional community.',
  },
  {
    name: 'Dr. Piyush Charan',
    role: 'Associate Professor · Robotics & AI',
    badge: '⭐',
    category: 'IEEE Senior Member | Award | Publication | Conference',
    title: 'IEEE Senior Member · Academic Excellence Award · Publication · Conference',
    desc: '• IEEE Senior Member grade conferred by IEEE, New York\n• Academic Excellence Award — 58th Engineers\' Day (15 Sep 2025)\n• Paper: "Automated segmentation of gastrointestinal organs using TATIMPA network" — Springer, 2026 (DOI: 10.1007/s13721-025-00693-0)\n• Presented at M-Nano 2025, Singapore (Nov 20–22, 2025)',
  },
  {
    name: 'Dr. Gianender Kajal',
    role: 'Faculty · Robotics & AI',
    badge: '🌏',
    category: 'Conference + Award',
    title: 'International Conference Malaysia · Karma Kaushalam Award',
    desc: '• Presented "Optimization of Process Parameters in Single Point Incremental Forming of Ti-6Al-4V Alloy using Taguchi Approach" at 17th ICMPC, Sarawak, Malaysia\n• Honored with Karma Kaushalam Award for outstanding leadership, academic excellence, and transformative contributions to education.',
  },
  {
    name: 'Dr. Gurpreet Singh Matharou',
    role: 'Faculty · Robotics & AI',
    badge: '📄',
    category: 'Publication',
    title: 'Paper Accepted — SADHANA Journal (Q1, Springer)',
    desc: '"Comparison of Metaheuristic Algorithms with FLC using STSMC Controller for Trajectory Tracking of Robot" — accepted in SADHANA Journal, Q1 (Ref: SADH-D-25-00479R1).',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Publication':            { bg: '#f3eeff', text: '#7c3aed' },
  'Award':                  { bg: '#fde8e8', text: '#b12a2e' },
  'Industry Collaboration': { bg: '#e8f5ee', text: '#16a34a' },
  'Grant':                  { bg: '#e8edf8', text: '#1e4ba9' },
  'IEEE Senior Member':     { bg: '#fef3e2', text: '#b45309' },
  'Conference':             { bg: '#e8edf8', text: '#1e4ba9' },
  'Conference + Award':     { bg: '#fde8e8', text: '#b12a2e' },
  'Multiple Achievements':  { bg: '#fef3e2', text: '#b45309' },
  'Certification':          { bg: '#e8f5ee', text: '#16a34a' },
  'Fellowship':             { bg: '#f3eeff', text: '#7c3aed' },
  'IEEE Award':             { bg: '#e8edf8', text: '#1e4ba9' },
}

export default function FacultyAchievementsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  const achievements = dept === 'ra' ? raFacultyAchievements : dept === 'cse' ? cseFacultyAchievements : []

  if (!school || !department) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-neutral-400">Department not found.</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">👨‍🏫</div>
            <h1 className="font-bold text-white text-xl leading-tight">Faculty Achievements</h1>
            <p className="text-white/70 text-xs mt-1">{department.name} · {school.name}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          {achievements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-4xl mb-3">🎓</p>
              <p className="text-neutral-400 text-sm">Achievements coming soon</p>
            </div>
          ) : (
            <>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                {achievements.length} Achievements
              </p>
              {achievements.map((a, i) => {
                const color = categoryColors[a.category] ?? { bg: '#f3f4f6', text: '#6b7280' }
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 260, damping: 22 }}
                    className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: color.bg }}>
                        {a.badge}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-bold text-gray-800">{a.name}</p>
                          {a.category.split(' | ').map((cat) => {
                            const c = categoryColors[cat.trim()] ?? { bg: '#f3f4f6', text: '#6b7280' }
                            return (
                              <span key={cat} className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: c.bg, color: c.text }}>
                                {cat.trim()}
                              </span>
                            )
                          })}
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-0.5">{a.role}</p>
                        <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
