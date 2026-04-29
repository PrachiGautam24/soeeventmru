'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronLeft, CalendarDays, FileText, ExternalLink } from 'lucide-react'

const circulars = [
  {
    title: 'Examination Calendar 2025–26 (Even Semester)',
    tag: 'Current',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Mid Sem Exam Datesheet March 2026 (Even Semester)',
    tag: 'Exam',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'End Term Practical Examination Dec 2025',
    tag: 'Exam',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'End Term & Supplementary Datesheet Dec 2025',
    tag: 'Exam',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Mid Term Datesheet – Odd Semester',
    tag: 'Exam',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Examination Calendar – Odd Semester (2024–25)',
    tag: 'Archive',
    tagColor: 'bg-neutral-100 text-neutral-500',
  },
  {
    title: 'Extra Classes for Supplementary Exam Preparation',
    tag: 'Notice',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'Final Mid Term Datesheet March 2025',
    tag: 'Archive',
    tagColor: 'bg-neutral-100 text-neutral-500',
  },
  {
    title: 'Office Order – Guidelines for Registration to Courses AY 2024–25',
    tag: 'Order',
    tagColor: 'bg-red-100 text-red-600',
  },
  {
    title: 'Open Hour Notice',
    tag: 'Notice',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    title: 'MRU Fee Notice – April 2024 with Last Date',
    tag: 'Fee',
    tagColor: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'MRU Brochure 2024–25',
    tag: 'Info',
    tagColor: 'bg-purple-100 text-purple-600',
  },
]

const semesterInfo = [
  { label: 'Odd Semester', months: 'July – November' },
  { label: 'Even Semester', months: 'January – May' },
  { label: 'Mid-Term Exams', months: 'September & March' },
  { label: 'End-Term Exams', months: 'November & May' },
  { label: 'Supplementary Exams', months: 'December & June' },
]

export default function AcademicCalendarPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="bg-red-600 px-6 pt-12 pb-6">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-4">
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-white text-xl md:text-3xl font-bold">Academic Calendar</h1>
            <p className="text-white/70 text-xs md:text-sm mt-1">Dates, exams & important circulars</p>
          </div>
        </div>

        <div className="flex-1 pb-24 max-w-5xl mx-auto w-full">

          {/* Semester Overview */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">Semester Overview</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {semesterInfo.map((s) => (
                <div key={s.label} className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-semibold text-gray-800">{s.label}</p>
                  </div>
                  <p className="text-xs text-neutral-500">{s.months}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Circulars */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Circulars & Notices</p>
              <a href="https://manavrachna.edu.in/mru/academics/circular" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-red-600 font-semibold">
                View All <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {circulars.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 leading-snug">{c.title}</p>
                    <span className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="px-5 md:px-6 py-5">
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-red-700 mb-1">Stay Updated</p>
              <p className="text-[11px] text-red-500 leading-relaxed">
                For the latest circulars, datesheets, and academic notices, visit the official MRU circulars page regularly.
              </p>
              <a href="https://manavrachna.edu.in/mru/academics/circular" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-red-600">
                manavrachna.edu.in/mru/academics/circular <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
