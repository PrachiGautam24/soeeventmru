'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'

const semesterInfo = [
  { label: 'Odd Semester', months: 'July – November' },
  { label: 'Even Semester', months: 'January – May' },
  { label: 'Mid-Term Exams', months: 'September & March' },
  { label: 'End-Term Exams', months: 'November & May' },
  { label: 'Supplementary Exams', months: 'December & June' },
]

const circulars = [
  { title: 'Examination Calendar 2025–26 (Even Semester)', tag: 'Current' },
  { title: 'Mid Sem Exam Datesheet March 2026 (Even Semester)', tag: 'Exam' },
  { title: 'End Term Practical Examination Dec 2025', tag: 'Exam' },
  { title: 'End Term & Supplementary Datesheet Dec 2025', tag: 'Exam' },
  { title: 'Mid Term Datesheet – Odd Semester', tag: 'Exam' },
  { title: 'Examination Calendar – Odd Semester (2024–25)', tag: 'Archive' },
  { title: 'Extra Classes for Supplementary Exam Preparation', tag: 'Notice' },
  { title: 'Final Mid Term Datesheet March 2025', tag: 'Archive' },
  { title: 'Office Order – Guidelines for Registration to Courses AY 2024–25', tag: 'Order' },
  { title: 'Open Hour Notice', tag: 'Notice' },
  { title: 'MRU Fee Notice – April 2024 with Last Date', tag: 'Fee' },
  { title: 'MRU Brochure 2024–25', tag: 'Info' },
]

export default function AcademicCalendarPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-3"><ChevronLeft className="w-4 h-4" /> Back</button>
          <h1 className="text-white text-xl font-bold">Academic Calendar</h1>
          <p className="text-white/70 text-xs mt-1">Dates, exams & important circulars</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

          {/* Semester Overview */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Semester Overview</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {semesterInfo.map((s) => (
                <div key={s.label} className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-sm font-semibold text-gray-800">{s.label}</p>
                  <p className="text-xs text-neutral-500">{s.months}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Circulars */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Circulars & Notices</p>
              <a href="https://manavrachna.edu.in/mru/academics/circular" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] text-secondary font-semibold">
                View All <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {circulars.map((c, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 leading-snug">{c.title}</p>
                    <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">{c.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-4">
            <p className="text-xs font-semibold text-red-700 mb-1">Stay Updated</p>
            <p className="text-xs text-red-500 leading-relaxed">Visit the official MRU circulars page regularly for the latest datesheets and notices.</p>
            <a href="https://manavrachna.edu.in/mru/academics/circular" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-secondary">
              manavrachna.edu.in/mru/academics/circular <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
