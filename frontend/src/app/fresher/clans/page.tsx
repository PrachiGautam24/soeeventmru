'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

const clans = [
  { name: 'Air Falcons', emoji: '🦅', chief: 'Mr. Sharv (Education)', viceChief: 'Ms. Shweta Goel (Management)' },
  { name: 'Water Sharks', emoji: '🦈', chief: 'Dr. Chhavi Kulshreshtha (Education)', viceChief: 'Ms. Vani Kataria (Law)' },
  { name: 'Forest Rhinos', emoji: '🦏', chief: 'Mr. Pradeep Mourya (Mechanical Eng)', viceChief: 'Ms. Meena Choudhary (CSE)' },
  { name: 'Wild Cats', emoji: '🐆', chief: 'Ms. Meena Choudhary (Mathematics)', viceChief: 'Dr. Priti Gupta (Chemistry)' },
]

const coordinators = [
  { label: 'Cultural', person: 'Ms. Sampriti Phukan (Law)' },
  { label: 'Sports', person: 'Mr. Sherawat (Sports)' },
  { label: 'ISR', person: 'Mr. Mandeep Bhadana (Mechanical Eng)' },
]

const whyClans = ['Develop communication, planning, and organizational management skills.', 'Take responsibility for large projects and demonstrate leadership.', 'Foster healthy rivalry that sets performance benchmarks.', 'Build connections across physical infrastructures and departments.', 'Promote friendship, respect, and tolerance among students.', 'Harness talent and arrive at a consensus from a larger student base.']

const lifeSkills = ['Purposeful living and values', 'Career skills & problem-solving', 'Leadership & communication', 'Sustainability & social sensitivity', 'Entrepreneurship & innovation', 'CSR activities']

export default function ClansPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="px-5 pt-10 pb-6 rounded-b-3xl shadow-lg" style={{ background: '#db2777' }}>
          <button onClick={() => router.back()} className="flex items-center gap-1.5 text-white/80 text-sm mb-3"><ChevronLeft className="w-4 h-4" /> Back</button>
          <h1 className="text-white text-2xl font-bold">Clans</h1>
          <p className="text-white/80 text-sm mt-1 font-medium">Your First Identity on Campus</p>
          <p className="text-white/60 text-xs mt-2 leading-relaxed">4 Elements. 1 Spirit. Infinite Possibilities.</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

          {/* Hero intro */}
          <div className="rounded-2xl p-4 border border-pink-100 shadow-sm" style={{ background: '#fdf2f8' }}>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Clans are structured student groups that promote community building, teamwork, and engagement. They serve as a foundation for participation through inter-clan competitions, collaborative activities, and continuous involvement throughout the academic year.
            </p>
            <div className="space-y-2">
              {['Inter-clan competitions', 'Team-based engagement', 'Leadership exposure'].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#db2777' }} />
                  <p className="text-sm font-medium text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-bold mt-3" style={{ color: '#db2777' }}>Every student belongs. Every voice matters.</p>
          </div>

          {/* What clans do */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-4 space-y-2">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">What Clans Do</p>
            <p className="text-sm text-gray-600 leading-relaxed">Clans organize high-energy events, competitions, and opportunities to grow in confidence and teamwork.</p>
            <p className="text-sm text-gray-600 leading-relaxed">At MRU, every student is part of a Clan — a spirited community that drives identity, leadership, and engagement.</p>
          </div>

          {/* Why Clans */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Why the Clans?</p>
            <p className="text-sm text-gray-600 leading-relaxed px-4 pb-3">MRU&apos;s Clan structure provides students with opportunities to engage with teachers and management, developing practical skills through structured partnerships and healthy competition.</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {whyClans.map((point, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Four Clans */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">The Four Clans</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {clans.map((clan) => (
                <div key={clan.name} className="px-4 py-3.5">
                  <p className="text-sm font-bold text-gray-800">{clan.emoji} {clan.name}</p>
                  <p className="text-xs text-neutral-500 mt-1">Chief: {clan.chief}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Vice Chief: {clan.viceChief}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinators */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-2">Cross-Clan Coordinators</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {coordinators.map((r) => (
                <div key={r.label} className="flex items-center justify-between px-4 py-3.5">
                  <p className="text-sm font-semibold text-gray-800">{r.label}</p>
                  <p className="text-xs text-neutral-500">{r.person}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Life Skills */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-4 pt-4 pb-1">Life Skills Programme</p>
            <p className="text-xs text-neutral-400 px-4 pb-3">Min. 25 activity points/year required to earn a degree.</p>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {lifeSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <p className="text-sm text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Students Welfare */}
          <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">Students Welfare</p>
            <p className="text-sm text-gray-600 leading-relaxed">The Department of Students Welfare organizes the annual Cultural Fest &quot;RESURRECTION&quot; and collaborates with AICTE, UGC for programs like Unnat Bharat Abhiyan and Swacch Bharat Abhiyan.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
