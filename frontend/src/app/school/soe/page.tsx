'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar, MapPin, LayoutGrid } from 'lucide-react'
import { useState, useRef } from 'react'
import AchievementsSection from '@/components/home/AchievementsSection'

const clubs = [
  { abbr: 'CC',  name: 'Coding Club' },
  { abbr: 'CS',  name: 'CyberSquad' },
  { abbr: 'IE',  name: 'IEEE' },
  { abbr: 'ICT', name: 'ICT Academy' },
  { abbr: 'RB',  name: 'Robotics' },
  { abbr: 'ECE', name: 'ECE' },
  { abbr: 'ME',  name: 'ME' },
]

interface EventItem {
  title: string
  slug: string
  description: string
  date: string
  location: string
  club: string | null
  isActive: boolean
  image?: string
}

const upcomingEvents: EventItem[] = [
  { title: 'Pre-Conference Workshop', slug: 'icass-2026/workshop', description: 'ICT Academy', date: 'April 8, 2026', location: 'Manav Rachna University', club: 'ICT', isActive: true },
  { title: 'IEEE Tech Talk', slug: 'icass-2026/workshop', description: 'Upcoming IEEE session on embedded systems.', date: 'April 15, 2026', location: 'Manav Rachna University', club: 'IE', isActive: false },
  { title: 'Coding Hackathon', slug: 'icass-2026/workshop', description: '24-hour hackathon organized by Coding Club.', date: 'April 20, 2026', location: 'Manav Rachna University', club: 'CC', isActive: false },
]

const completedEvents: EventItem[] = [
  { title: 'ICASS 2026', slug: 'icass-2026', description: 'International Conference on Intelligent Computing and Automation for Sustainable Solutions', date: 'February 12-13, 2026', location: 'Manav Rachna University', image: '/images/logo.png', club: null, isActive: true },
]

function ClubBar({ active, onSelect }: { active: string | null; onSelect: (abbr: string | null) => void }) {
  return (
    <div className="bg-secondary py-2 px-3">
      <div className="flex justify-around items-center">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }} onClick={() => onSelect(null)} className="shrink-0">
          <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow transition-all duration-200 ${active === null ? 'ring-2 ring-white ring-offset-1 ring-offset-secondary scale-105' : 'opacity-80'}`}>
            <LayoutGrid className="w-4 h-4" style={{ color: '#1e4ba9' }} />
          </div>
        </motion.button>
        {clubs.map((club) => {
          const isSelected = active === club.abbr
          return (
            <motion.button key={club.abbr} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }} onClick={() => onSelect(isSelected ? null : club.abbr)} className="shrink-0">
              <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow transition-all duration-200 ${isSelected ? 'ring-2 ring-white ring-offset-1 ring-offset-secondary scale-105' : 'opacity-80'}`}>
                <span className="font-bold text-xs bg-gradient-mixed bg-clip-text text-transparent">{club.abbr}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function EventCarousel({ events, onEventClick, isCompleted = false }: {
  events: EventItem[]
  onEventClick: (slug: string, isActive: boolean) => void
  isCompleted?: boolean
}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const dragStartX = useRef(0)

  const paginate = (dir: number) => {
    const next = index + dir
    if (next < 0 || next >= events.length) return
    setDirection(dir)
    setIndex(next)
  }

  if (events.length === 0) return <p className="text-sm text-neutral-400 text-center py-6">No events for this club.</p>

  const event = events[index]

  return (
    <div className="px-4">
      <div className="relative overflow-hidden"
        onTouchStart={e => { dragStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => { const diff = dragStartX.current - e.changedTouches[0].clientX; if (Math.abs(diff) > 40) paginate(diff > 0 ? 1 : -1) }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={event.title}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={() => onEventClick(event.slug, event.isActive)}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden ${event.isActive ? 'cursor-pointer' : 'opacity-60'}`}
          >
            {isCompleted && event.image && (
              <div className="relative h-48 bg-white">
                <Image src={event.image} alt={event.title} fill className="object-contain p-8" />
                <div className="absolute top-3 right-3 bg-neutral-700 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</div>
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700"><Calendar className="w-4 h-4 mr-2 text-primary" /><span className="text-sm">{event.date}</span></div>
                <div className="flex items-center text-gray-700"><MapPin className="w-4 h-4 mr-2 text-primary" /><span className="text-sm">{event.location}</span></div>
              </div>
              {event.isActive && (
                <div className="mt-4 text-center">
                  <span className="inline-block bg-gradient-mixed text-white px-6 py-2 rounded-lg font-semibold text-sm">
                    {isCompleted ? 'View Event Details' : 'View Details'}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {events.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {events.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
              className={`rounded-full transition-all duration-200 ${i === index ? 'w-4 h-2 bg-secondary' : 'w-2 h-2 bg-neutral-300'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function SOEPage() {
  const router = useRouter()
  const [activeClub, setActiveClub] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'events' | 'achievements'>('events')
  const [eventSubTab, setEventSubTab] = useState<'upcoming' | 'completed'>('upcoming')

  const filteredUpcoming = activeClub ? upcomingEvents.filter(e => e.club === activeClub) : upcomingEvents
  const filteredCompleted = completedEvents  // no club filter for completed

  const handleEventClick = (slug: string, isActive: boolean) => {
    if (isActive) router.push(`/${slug}/loading`)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl">

        {/* Header */}
        <div className="relative bg-white overflow-hidden">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="flex items-center justify-center py-8">
            <div className="flex items-center justify-center gap-4 px-6">
              <Image src="/images/soe-events-logo.jpg" alt="School of Engineering - Manav Rachna University" width={200} height={200} />
              <Image src="/images/GPTW.jpg" alt="Great Place to Work" width={30} height={30} />
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-6">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e" />
            </svg>
          </div>
        </div>

        {/* Main tabs */}
        <div className="flex border-b border-neutral-200 bg-white">
          <button onClick={() => setActiveTab('events')}
            className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'events' ? 'text-secondary border-b-2 border-secondary' : 'text-neutral-400'}`}>
            Event Updates
          </button>
          <button onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === 'achievements' ? 'text-secondary border-b-2 border-secondary' : 'text-neutral-400'}`}>
            Student Achievements
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'events' ? (
            <motion.div key="events" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>

              {/* Upcoming / Completed sub-tabs */}
              <div className="flex gap-2 px-4 pt-4 pb-2">
                {(['upcoming', 'completed'] as const).map(tab => (
                  <button key={tab} onClick={() => setEventSubTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${eventSubTab === tab ? 'bg-secondary text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                    {tab === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </button>
                ))}
              </div>

              {eventSubTab === 'upcoming' ? (
                <div className="py-3 bg-neutral-50">
                  <ClubBar active={activeClub} onSelect={setActiveClub} />
                  <div className="mt-4">
                    <EventCarousel key={activeClub + '-up'} events={filteredUpcoming} onEventClick={handleEventClick} />
                  </div>
                </div>
              ) : (
                <div className="py-5 bg-neutral-50">
                  <div className="mt-2">
                    <EventCarousel events={filteredCompleted} onEventClick={handleEventClick} isCompleted />
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="achievements" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
              <AchievementsSection />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
