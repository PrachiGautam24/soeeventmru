'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { communicatedPapers } from '@/lib/researchPublications'

export default function CommunicatedPapersPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <p className="text-white/70 text-xs mb-1 uppercase tracking-widest font-semibold">Research Publications · 2026</p>
            <h1 className="font-bold text-white text-xl">📤 Communicated Papers</h1>
            <p className="text-white/70 text-xs mt-1">{communicatedPapers.length} papers submitted & under review</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4">
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-neutral-50">
              {communicatedPapers.map((paper, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4) }}
                  className="px-4 py-3.5 flex items-start gap-3"
                >
                  <span className="text-xs font-bold text-neutral-300 w-6 shrink-0 mt-0.5 text-right">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-secondary leading-snug">{paper.faculty}</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{paper.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
