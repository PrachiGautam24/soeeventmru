'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const mdps = [
  { no: 1, title: 'Building Resilience: Adapting to Crisis and Emerging Stronger', date: 'January 17–18, 2025', photos: ['/images/business/mdp/mdp1-1.jpeg', '/images/business/mdp/MDP1-2.jpg'] },
  { no: 2, title: 'Navigating the Future: Industry 4.0 Transformations in the BFSI Sector', date: 'April 11–12, 2025', photos: ['/images/business/mdp/MDP2-2.jpg'] },
  { no: 3, title: 'Stress Management for Personal and Professional Effectiveness', date: 'May 2, 2025', photos: ['/images/business/mdp/MDP3-1 (1).JPG', '/images/business/mdp/MDP3-2.JPG'] },
  { no: 4, title: 'IT for ESG: Sustainable Impact through Technology', collab: 'In collaboration with NHPC', date: 'June 17, 2025', photos: ['/images/business/mdp/MDP4-1.JPG', '/images/business/mdp/MDP4-2.JPG'] },
  { no: 5, title: 'Talent-Based Leadership', collab: 'In collaboration with HappyPlus Consultancy', date: 'August 22, 2025', photos: ['/images/business/mdp/MDP 5-1JPG.JPG', '/images/business/mdp/MDP5-2.JPG'] },
  { no: 6, title: 'Managerial Decision Making', date: 'November 22, 2025', photos: ['/images/business/mdp/MDP6-1.jpeg', '/images/business/mdp/MDP 6-2.JPG'] },
  { no: 7, title: 'Startup and MSME: Success Made Simple', collab: 'In collaboration with ICAI, Faridabad Chapter', date: 'December 24, 2025', photos: ['/images/business/mdp/MDP7-1.jpeg', '/images/business/mdp/MDP 7 - 2.JPG'] },
]

function MDPCard({ m }: { m: typeof mdps[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start gap-3 px-4 py-3.5 text-left">
        <span className="text-xs font-bold text-secondary shrink-0 w-6 mt-0.5">MDP {m.no}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-800 leading-snug">{m.title}</p>
          {'collab' in m && m.collab && <p className="text-xs text-secondary mt-0.5">{m.collab}</p>}
          <p className="text-xs text-neutral-400 mt-0.5">{m.date}</p>
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
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {m.photos.map((src, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden bg-neutral-100" style={{ aspectRatio: '4/3' }}>
                  <Image src={src} alt={`${m.title} ${i + 1}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function MDPPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">MDP — Bridging Academia & Industry</h1>
            <p className="text-white/70 text-xs mt-1">Management Development Programmes · School of Business</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {mdps.map(m => <MDPCard key={m.no} m={m} />)}
        </div>
      </div>
    </div>
  )
}
