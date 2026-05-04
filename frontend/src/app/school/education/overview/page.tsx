'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'

const gridItems = [
  { label: 'Faculty\nAchievements', icon: '🎓', route: 'faculty-achievements' },
  { label: 'Student\nAchievements', icon: '🏆', route: 'student-corner' },
  { label: 'Programs\nOffered',     icon: '📖', route: 'programs' },
  { label: 'Events',                icon: '📅', route: 'events' },
  { label: 'Social Media\n& Magazine', icon: '📱', route: 'social-media' },
]

const upcomingEvents = [
  { title: '5-Day FDP on "Digital Pedagogy: Reimagining Teaching and Learning in Higher Education"', date: 'Upcoming' },
]

export default function EducationOverviewPage() {
  const router = useRouter()
  const [eventsOpen, setEventsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl leading-tight">School of Education & Humanities</h1>
            <p className="text-white/70 text-xs mt-1">Teaching & Pedagogy · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto">
          <div className="px-4 py-4 space-y-5">

            {/* Upcoming Events accordion */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              <button onClick={() => setEventsOpen(o => !o)} className="w-full flex items-center justify-between px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-800">Upcoming Events</span>
                  <span className="w-5 h-5 rounded-full bg-secondary text-white text-[10px] flex items-center justify-center font-bold">{upcomingEvents.length}</span>
                </div>
                <motion.div animate={{ rotate: eventsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {eventsOpen && (
                  <motion.div key="ev" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
                    className="overflow-hidden border-t border-neutral-100">
                    <div className="divide-y divide-neutral-100">
                      {upcomingEvents.map((ev, i) => (
                        <div key={i} className="flex items-start gap-3 px-4 py-3.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{ev.title}</p>
                            <p className="text-xs text-neutral-400 mt-0.5">{ev.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                1st Indian University to offer Nationally (NCTE) and Internationally (IB) Recognised Teacher Education Programmes. SoEH nurtures future-ready educators with 21st-century skills, inclusive mindsets, and a passion for lifelong learning.
              </p>
            </div>

            {/* Explore More — 3+2 grid */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-3 px-1">Explore More</p>
              {/* Row 1: 3 items */}
              <div className="grid grid-cols-3 gap-2 mb-2">
                {gridItems.slice(0, 3).map((item, i) => (
                  <motion.button key={item.label}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/school/education/overview/${item.route}`)}
                    className="flex flex-col items-center gap-1.5 bg-white rounded-2xl px-2 py-3 shadow-sm border border-neutral-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-center text-gray-700 font-semibold leading-tight whitespace-pre-line">{item.label}</span>
                  </motion.button>
                ))}
              </div>
              {/* Row 2: 2 items centered */}
              <div className="flex justify-center gap-2">
                {gridItems.slice(3).map((item, i) => (
                  <motion.button key={item.label}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i + 3) * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/school/education/overview/${item.route}`)}
                    className="flex flex-col items-center gap-1.5 bg-white rounded-2xl px-2 py-3 shadow-sm border border-neutral-100 w-[31%]">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-center text-gray-700 font-semibold leading-tight whitespace-pre-line">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* About accordion */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setAboutOpen(o => !o)}
                className={`w-full flex items-center justify-between px-4 py-4 bg-red-600 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
                <span className="font-bold text-white text-sm">About School of Education & Humanities</span>
                <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {aboutOpen && (
                  <motion.div key="about" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                    className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100">
                    <div className="px-4 pb-5 pt-3 space-y-3">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The School of Education and Humanities at Manav Rachna University is committed to nurturing future-ready educators and thought leaders who embody pedagogical excellence with a deep sense of empathy and social responsibility.
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The programs of SoEH are nationally (NCTE) and internationally recognised (International Baccalaureate Organization) and empower students to become dynamic professionals equipped with 21st-century skills, inclusive and global mindsets, and a passion for lifelong learning.
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The IBEC certification across all programs underscores SoEH&apos;s alignment with international educational standards and its strategic commitment to shaping a globally competent teaching workforce.
                      </p>
                      <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Salient Features of IB Recognition</p>
                        {['Global Recognition', 'In-Depth Understanding of IB Philosophy', 'Enhanced Teaching Skills', 'Interdisciplinary Approach', 'Commitment to Professional Development', 'Networking Opportunities', 'Increased Career Opportunities', 'Alignment with IB Standards and Practices'].map((f, i) => (
                          <div key={i} className="flex items-center gap-2 py-1">
                            <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                            <p className="text-xs text-gray-600">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
