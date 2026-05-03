'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const visits = [
  { name: 'Coca Cola', photos: ['/images/business/industrial-visits/coca-cola/Coca Cola (1).jpeg', '/images/business/industrial-visits/coca-cola/Coca Cola (2).jpeg'] },
  { name: 'Thomson Press', photos: ['/images/business/industrial-visits/thomson-press/Thomson Press (2).jpg', '/images/business/industrial-visits/thomson-press/Thomson Press 2.jpeg'] },
  { name: 'Simply Logistics', photos: ['/images/business/industrial-visits/simply-logistics/simply logistic 1.jpg', '/images/business/industrial-visits/simply-logistics/Simply logistics 2.jpeg'] },
  { name: 'Jai Bharat Maruti', photos: ['/images/business/industrial-visits/jai-bharat-maruti/JBM (1).jpeg', '/images/business/industrial-visits/jai-bharat-maruti/JBM (2).jpeg'] },
  { name: 'Industry–Academia Interface: A Learning Experience', photos: [] },
]

function VisitCard({ v }: { v: typeof visits[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-4 py-3.5 text-left">
        <p className="text-sm font-semibold text-gray-800">{v.name}</p>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="d" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-100">
            <div className="px-4 py-3">
              {v.photos.length === 0
                ? <p className="text-xs text-neutral-400 py-2">Photos coming soon.</p>
                : <div className="grid grid-cols-2 gap-2">
                    {v.photos.map((src, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden bg-neutral-100" style={{ aspectRatio: '4/3' }}>
                        <Image src={src} alt={`${v.name} ${i + 1}`} fill className="object-cover" unoptimized />
                      </div>
                    ))}
                  </div>
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function IndustrialVisitsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Industrial Visits</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {visits.map(v => <VisitCard key={v.name} v={v} />)}
        </div>
      </div>
    </div>
  )
}
