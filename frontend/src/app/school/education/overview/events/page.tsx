'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const legacyLives = [
  { caption: 'Insights from Ms. Nitika Yadav on her journey as a Special Educator', url: 'https://docs.google.com/document/d/1GJ2LPSHxNjxF3OxNymOrbLaofKxmeYBw/edit?usp=sharing' },
  { caption: 'Hear from Ms. Akanksha Lal, our alumni and now an HR Executive', url: 'https://docs.google.com/document/d/1melxpzzf5NODthiZCtqu1l71nIOSXxWg/edit?usp=sharing' },
  { caption: '"When Teachers Become Change-Makers" – Ms. Kavya Katyal shares her journey of transition', url: 'https://docs.google.com/document/d/1RT0h0GNj2rBA9cus10nernOvsIgJlCve/edit?usp=sharing' },
  { caption: 'How Ms. Shruti turned Passion into Profession – Teaching with Purpose', url: 'https://docs.google.com/document/d/1NG3q6c1Nf6DFbSWwoOMFY2nXOLTUyLgV/edit?usp=sharing' },
  { caption: 'Ms. Shatakshi, PGT Psychology unfolds the Changing Paradigms of Teaching', url: 'https://docs.google.com/document/d/1a9_Z1JhKfIWUF4vwDW6JJadfplu3KWLf/edit?usp=sharing' },
  { caption: 'Are you School Ready? Ms. Aishwarya, TGT School Science on empathy, lesson planning, and AI integration', url: 'https://drive.google.com/file/d/1XJQTAlfuXwu96MsOwLeaRPRyckcXkxzq/view?usp=sharing' },
]

export default function EventsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Events</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">

          {/* Legacy Lives */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Legacy Lives</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {legacyLives.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start justify-between px-4 py-3.5 gap-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 leading-snug">{l.caption}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* School Events */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">School Events</p>
            <div className="border-t border-neutral-100">
              <a href="https://docs.google.com/document/d/15kWlswm1C3zTPytpZzxkZgqLmDz6jluy/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="flex items-start justify-between px-4 py-3.5 gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">5-Day FDP on &quot;Leveraging AI for Educators and Researchers&quot; — 24–28 Nov 2025</p>
                </div>
                <ExternalLink className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              </a>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Upcoming Events</p>
            <div className="border-t border-neutral-100">
              <div className="flex items-start gap-3 px-4 py-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                <p className="text-sm text-gray-700">5-Day FDP on &quot;Digital Pedagogy: Reimagining Teaching and Learning in Higher Education&quot;</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
