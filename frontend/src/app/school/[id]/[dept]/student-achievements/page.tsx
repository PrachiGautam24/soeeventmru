'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Trophy, Filter } from 'lucide-react'
import { schools } from '@/lib/schools'

type Category = 'All' | 'Hackathon' | 'Research' | 'Sports' | 'Cultural' | 'Certification'

const achievements = [
  {
    name: 'Aryan Sharma',
    rollNo: '21CSE001',
    category: 'Hackathon' as Category,
    title: '1st Place — Smart India Hackathon 2025',
    desc: 'Built an AI-powered crop disease detection system using computer vision.',
    badge: '🥇',
    color: 'from-amber-500 to-amber-400',
  },
  {
    name: 'Priya Mehta',
    rollNo: '22CSE045',
    category: 'Research' as Category,
    title: 'Published in IEEE Xplore',
    desc: 'Paper on "Federated Learning for Privacy-Preserving Healthcare Data" accepted at IEEE ICACCI 2025.',
    badge: '📄',
    color: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Rohan Verma',
    rollNo: '21CSE078',
    category: 'Hackathon' as Category,
    title: '2nd Place — HackWithInfy 2025',
    desc: 'Developed a real-time traffic management system using IoT sensors and ML.',
    badge: '🥈',
    color: 'from-slate-500 to-slate-400',
  },
  {
    name: 'Sneha Kapoor',
    rollNo: '23CSE012',
    category: 'Certification' as Category,
    title: 'Google Cloud Professional Data Engineer',
    desc: 'Cleared the GCP Professional Data Engineer certification with distinction.',
    badge: '☁️',
    color: 'from-sky-500 to-sky-400',
  },
  {
    name: 'Karan Singh',
    rollNo: '21CSE033',
    category: 'Sports' as Category,
    title: 'National Level Chess Champion',
    desc: 'Represented MRU at the All India Inter-University Chess Championship 2025, securing 1st place.',
    badge: '♟️',
    color: 'from-green-600 to-green-400',
  },
  {
    name: 'Ananya Gupta',
    rollNo: '22CSE089',
    category: 'Cultural' as Category,
    title: 'Best Performer — Techno-Cultural Fest',
    desc: 'Won the best performer award at Spandan 2025 for classical dance fusion.',
    badge: '🎭',
    color: 'from-pink-500 to-pink-400',
  },
  {
    name: 'Dev Patel',
    rollNo: '21CSE056',
    category: 'Hackathon' as Category,
    title: 'Winner — Microsoft Imagine Cup India',
    desc: 'Created an accessibility app for visually impaired students using Azure AI services.',
    badge: '🏆',
    color: 'from-amber-500 to-amber-400',
  },
  {
    name: 'Riya Joshi',
    rollNo: '23CSE067',
    category: 'Research' as Category,
    title: 'Best Paper — ICASS 2026',
    desc: 'Awarded Best Paper for research on "Explainable AI in Medical Diagnostics".',
    badge: '🎖️',
    color: 'from-purple-600 to-purple-400',
  },
  {
    name: 'Aditya Kumar',
    rollNo: '22CSE021',
    category: 'Certification' as Category,
    title: 'AWS Solutions Architect — Associate',
    desc: 'Cleared AWS SAA-C03 certification, one of the youngest in the batch to do so.',
    badge: '🔶',
    color: 'from-orange-500 to-orange-400',
  },
  {
    name: 'Meera Nair',
    rollNo: '21CSE099',
    category: 'Sports' as Category,
    title: 'Gold — Inter-University Badminton',
    desc: 'Won gold at the North Zone Inter-University Badminton Championship 2025.',
    badge: '🏸',
    color: 'from-green-600 to-green-400',
  },
]

const categories: Category[] = ['All', 'Hackathon', 'Research', 'Sports', 'Cultural', 'Certification']

const categoryColors: Record<Category, string> = {
  All:           'bg-neutral-800 text-white',
  Hackathon:     'bg-amber-500 text-white',
  Research:      'bg-blue-600 text-white',
  Sports:        'bg-green-600 text-white',
  Cultural:      'bg-pink-500 text-white',
  Certification: 'bg-sky-500 text-white',
}

export default function StudentAchievementsPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()
  const [active, setActive] = useState<Category>('All')

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  const filtered = active === 'All' ? achievements : achievements.filter(a => a.category === active)

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="w-full min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl md:text-3xl leading-tight">Student Achievements</h1>
            <p className="text-white/70 text-xs md:text-sm mt-1">{department?.name ?? 'Department'}</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Filter chips */}
        <div className="bg-white border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-5xl mx-auto">
            <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${active === cat ? categoryColors[cat] : 'bg-neutral-100 text-neutral-500'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-4">
            <AnimatePresence mode="popLayout">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((item, i) => (
                  <motion.div key={item.rollNo} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.04 }}
                    className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex">
                    <div className={`w-14 bg-gradient-to-b ${item.color} flex items-center justify-center shrink-0`}>
                      <span className="text-2xl">{item.badge}</span>
                    </div>
                    <div className="p-4 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-bold text-gray-900">{item.name}</p>
                          <p className="text-[10px] text-neutral-400">{item.rollNo}</p>
                        </div>
                        <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>{item.category}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-700 mt-2 leading-snug">{item.title}</p>
                      <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Trophy className="w-10 h-10 text-neutral-200 mx-auto mb-3" />
                <p className="text-sm text-neutral-400">No achievements in this category yet.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
