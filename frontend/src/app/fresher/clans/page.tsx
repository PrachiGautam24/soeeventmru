'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Users, Star, Trophy, Heart } from 'lucide-react'

const clans = [
  {
    name: 'Air Falcons',
    emoji: '🦅',
    chief: 'Mr. Sharv (Education)',
    viceChief: 'Ms. Shweta Goel (Management)',
    color: '#1e4ba9',
    bg: '#e8edf8',
  },
  {
    name: 'Water Sharks',
    emoji: '🦈',
    chief: 'Dr. Chhavi Kulshreshtha (Education)',
    viceChief: 'Ms. Vani Kataria (Law)',
    color: '#0369a1',
    bg: '#e0f2fe',
  },
  {
    name: 'Forest Rhinos',
    emoji: '🦏',
    chief: 'Mr. Pradeep Mourya (Mechanical Eng)',
    viceChief: 'Ms. Meena Choudhary (CSE)',
    color: '#15803d',
    bg: '#dcfce7',
  },
  {
    name: 'Wild Cats',
    emoji: '🐆',
    chief: 'Ms. Meena Choudhary (Mathematics)',
    viceChief: 'Dr. Priti Gupta (Chemistry)',
    color: '#b45309',
    bg: '#fef3c7',
  },
]

const roles = [
  { icon: Star, label: 'Cultural', person: 'Ms. Sampriti Phukan (Law)' },
  { icon: Trophy, label: 'Sports', person: 'Mr. Sherawat (Sports)' },
  { icon: Heart, label: 'ISR', person: 'Mr. Mandeep Bhadana (Mechanical Eng)' },
]

const whyClans = [
  'Develop communication, planning, and organizational management skills.',
  'Take responsibility for large projects and demonstrate leadership.',
  'Foster healthy rivalry that sets performance benchmarks.',
  'Build connections across physical infrastructures and departments.',
  'Promote friendship, respect, and tolerance among students.',
  'Harness talent and arrive at a consensus from a larger student base.',
]

const lifeSkills = [
  'Purposeful living and values',
  'Career skills & problem-solving',
  'Leadership & communication',
  'Sustainability & social sensitivity',
  'Entrepreneurship & innovation',
  'CSR activities',
]

export default function ClansPage() {
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
            <h1 className="text-white text-xl md:text-3xl font-bold">Clans</h1>
            <p className="text-white/70 text-xs md:text-sm mt-1">MRU&apos;s unique student community structure</p>
          </div>
        </div>

        <div className="flex-1 pb-24 max-w-5xl mx-auto w-full">

          {/* Why Clans */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">Why the Clans?</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              MRU&apos;s Clan structure provides students with opportunities to engage with teachers and management, developing practical skills through structured partnerships and healthy competition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {whyClans.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clan Cards */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-4">The Four Clans</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {clans.map((clan, i) => (
                <motion.div key={clan.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border overflow-hidden" style={{ borderColor: clan.color + '30' }}>
                  <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: clan.bg }}>
                    <span className="text-3xl">{clan.emoji}</span>
                    <p className="text-sm font-bold" style={{ color: clan.color }}>{clan.name}</p>
                  </div>
                  <div className="px-4 py-3 bg-white space-y-1.5">
                    <div className="flex items-start gap-2">
                      <p className="text-[10px] font-semibold text-neutral-400 w-16 shrink-0 pt-0.5">CHIEF</p>
                      <p className="text-xs text-gray-700">{clan.chief}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <p className="text-[10px] font-semibold text-neutral-400 w-16 shrink-0 pt-0.5">VICE</p>
                      <p className="text-xs text-gray-700">{clan.viceChief}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cross-Clan Roles */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">Cross-Clan Coordinators</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {roles.map((r) => {
                const Icon = r.icon
                return (
                  <div key={r.label} className="flex items-center gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{r.label}</p>
                      <p className="text-[11px] text-neutral-400">{r.person}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Life Skills Programme */}
          <div className="px-5 md:px-6 py-5 border-b border-neutral-100">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-2">Manav Rachna Life Skills Programme</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The Clan-based Life Skills Program uses an experiential approach to education. Students earn activity points across extra-curricular, co-curricular, entrepreneurship, and CSR activities. A minimum of 25 points per year is required to earn a degree.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {lifeSkills.map((skill) => (
                <div key={skill} className="bg-red-50 rounded-xl px-3 py-2.5 border border-red-100">
                  <p className="text-xs text-red-700 font-medium leading-tight">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Students Welfare */}
          <div className="px-5 md:px-6 py-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-red-600" />
              <p className="text-xs font-semibold text-red-600 uppercase tracking-widest">Students Welfare</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              The Department of Students Welfare acts as a liaison between students and administration, providing leadership, social, extracurricular, and academic counseling. It organizes the annual Cultural Fest &quot;RESURRECTION&quot; and collaborates with AICTE, UGC, and other bodies for programs like Unnat Bharat Abhiyan and Swacch Bharat Abhiyan.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
