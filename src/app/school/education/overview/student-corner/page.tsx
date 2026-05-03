'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Student Corner</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">

          {/* Student Achievements */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-4">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Student Achievements</p>
            <p className="text-sm text-neutral-400">Coming soon — achievements will be added here.</p>
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
