'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const vacCourses = [
  { no: 1, code: 'VAC-MA504', title: 'Fundamentals of Mathematica' },
  { no: 2, code: 'VAC-CH307', title: 'Corrosion & its Control' },
  { no: 3, code: 'VAC-CH311', title: 'Introduction to Polymer Science' },
  { no: 4, code: 'VAC-PH303', title: 'Unveiling Complexity in Nonlinear Dynamical Systems' },
  { no: 5, code: 'VAC-CH308', title: 'WasteWise: Sustainable Solutions for Waste Management' },
  { no: 6, code: 'VAC-CH309', title: 'Soil Quality Assessment and Management' },
  { no: 7, code: 'VAC-MA502', title: 'Indian Female Mathematicians and Their Contributions' },
]

const subjectColors = [
  { bg: '#e8edf8', text: '#1e4ba9' }, // MA — blue
  { bg: '#fde8e8', text: '#b12a2e' }, // CH — red
  { bg: '#fde8e8', text: '#b12a2e' },
  { bg: '#e8f5ee', text: '#16a34a' }, // PH — green
  { bg: '#fde8e8', text: '#b12a2e' },
  { bg: '#fde8e8', text: '#b12a2e' },
  { bg: '#e8edf8', text: '#1e4ba9' }, // MA — blue
]

export default function ScienceVACPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#b12a2e' }}>
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">📖</div>
            <h1 className="font-bold text-white text-xl leading-tight">Value Added Courses</h1>
            <p className="text-white/70 text-xs mt-1">School of Science · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-3">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
            {vacCourses.length} Courses Available
          </p>

          {vacCourses.map((course, i) => {
            const color = subjectColors[i] ?? { bg: '#f3f4f6', text: '#6b7280' }
            return (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100"
              >
                {/* Number badge */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{ backgroundColor: color.bg, color: color.text }}>
                  {course.no}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 leading-snug">{course.title}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: color.text }}>{course.code}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
