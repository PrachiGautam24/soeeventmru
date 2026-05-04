'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const studentAchievements = [
  { name: 'Priya Sharma', badge: '🥇', category: 'Competition', title: '1st Place — National Essay Writing Competition, NCERT', desc: 'Won first place among 500+ participants in the national-level essay competition on inclusive education, 2025.' },
  { name: 'Ananya Verma', badge: '🎤', category: 'Conference', title: 'Paper Presented — International Education Summit, New Delhi', desc: '"Role of Digital Pedagogy in Rural Schools" — presented at the National Education Summit, March 2026.' },
  { name: 'Rohit Nair', badge: '🏅', category: 'Award', title: 'Best Student Teacher Award — MRU Annual Day 2025', desc: 'Recognised for outstanding performance during school internship and innovative lesson planning.' },
  { name: 'Sneha Gupta & Team', badge: '🤝', category: 'Social', title: 'Community Outreach — Literacy Drive, Faridabad (2025)', desc: 'Led a 3-week literacy campaign reaching 200+ underprivileged children in collaboration with NGO partners.' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Competition': { bg: '#fde8e8', text: '#b12a2e' },
  'Conference':  { bg: '#e8edf8', text: '#1e4ba9' },
  'Award':       { bg: '#fef3e2', text: '#b45309' },
  'Social':      { bg: '#e8f5ee', text: '#16a34a' },
  'Publication': { bg: '#f3eeff', text: '#7c3aed' },
  'Sports':      { bg: '#e8f5ee', text: '#16a34a' },
}

const clubs = [
  { name: 'Mind Matters', emoji: '🧠', desc: 'Dedicated to nurturing mindfulness, emotional awareness, and mental well-being through guided meditation, mindful art, and reflective discussions.', activityLabel: 'Mind Maze Mania', activityUrl: 'https://drive.google.com/file/d/1B8vIv0Y698oui2sKNn0NhIrx3f9ciN0R/view?usp=share_link' },
  { name: 'Roots & Rhythms', emoji: '🎭', desc: "Celebrates India's rich heritage through art, music, dance, stories, and traditional practices.", activityLabel: 'Draped in Diversity', activityUrl: 'https://drive.google.com/file/d/1X2uBJ7iVKSmcu5v9INZdsKdRGRpMMwIV/view?usp=sharing' },
  { name: 'शब्दसंगम (Shabdsangam)', emoji: '📝', desc: 'Literary club celebrating the beauty and power of words through debates, poetry, storytelling, and creative expression.', activityLabel: null, activityUrl: null },
  { name: 'Tech Titans', emoji: '💻', desc: 'Dynamic club for innovation, technology, and creative problem-solving — coding, robotics, AI, and digital design.', activityLabel: null, activityUrl: null },
]

const visits = [
  { title: 'Academic Visit to Action for Autism', date: '19 Mar 2026', url: 'https://docs.google.com/document/d/11GJQ5WqlNRbljIZftXgw4jGDCuYkNVliOJe4VqBPW6M/edit?usp=sharing' },
  { title: 'Academic Visit to Dr. Ambedkar National Memorial', date: '24 Feb 2026', url: 'https://docs.google.com/document/d/14px6Ms1AUQ8bR28yEmDMmCDUZeyJh4y3/edit?usp=sharing' },
]

export default function StudentCornerPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', ...Array.from(new Set(studentAchievements.map(a => a.category)))]
  const filtered = activeFilter === 'All' ? studentAchievements : studentAchievements.filter(a => a.category === activeFilter)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-3xl mb-1">🏅</div>
            <h1 className="font-bold text-white text-xl">Student Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">

          {/* Student Achievements */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Student Achievements</p>

            {/* Filter chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide mb-3">
              <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === cat ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
              {filtered.length} {activeFilter === 'All' ? 'Total' : activeFilter}
            </p>

            <div className="space-y-3">
              {filtered.map((a, i) => {
                const color = categoryColors[a.category] ?? { bg: '#f3f4f6', text: '#6b7280' }
                return (
                  <motion.div key={i}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, type: 'spring', stiffness: 260, damping: 22 }}
                    className="bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ backgroundColor: color.bg }}>
                        {a.badge}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-bold text-gray-800">{a.name}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: color.bg, color: color.text }}>
                            {a.category}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-gray-700 mt-1.5 leading-snug">{a.title}</p>
                        <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Clubs */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Student Clubs</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {clubs.map((club) => (
                <div key={club.name} className="px-4 py-3.5">
                  <p className="text-sm font-bold text-gray-800">{club.emoji} {club.name}</p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{club.desc}</p>
                  {club.activityUrl && (
                    <a href={club.activityUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-secondary">
                      {club.activityLabel} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visits */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Visits</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {visits.map((v, i) => (
                <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start justify-between px-4 py-3.5 gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{v.title}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{v.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Placements */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-4">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Placements</p>
            <div className="flex gap-6 mt-2">
              <div className="text-center"><p className="text-2xl font-extrabold text-secondary">20+</p><p className="text-xs text-neutral-500 mt-1">Students Placed (2020–21)</p></div>
              <div className="text-center"><p className="text-2xl font-extrabold text-secondary">6 LPA</p><p className="text-xs text-neutral-500 mt-1">Highest Package</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
