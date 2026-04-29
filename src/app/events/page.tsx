'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const upcomingEvents = [
  { title: 'Ideate. Build. Deploy.', subtitle: 'Build App in a Day · Win Cash Prizes · GUVI HCL', date: '18 May 2026', location: 'Manav Rachna University', image: '/images/events/event-ideate.jpeg' },
  { title: 'Ethical Hacking Workshop', subtitle: 'Learn. Explore. Protect. · Quick Heal', date: '19–20 May 2026', location: 'Manav Rachna University', image: '/images/events/event-ehacking.jpeg' },
  { title: 'Workshop on Robotics', subtitle: 'Design. Build. Program. · WRO India', date: '21–22 May 2026', location: 'Manav Rachna University', image: '/images/events/event-robotics.jpeg' },
]

const completedEvents = [
  { title: 'ICASS 2026', subtitle: 'International Conference on Intelligent Computing & Automation', date: 'Feb 12–13, 2026', location: 'MRU Auditorium', image: '/images/logo.png', slug: '/icass-2026/home' },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-neutral-100 pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-md md:max-w-5xl">

        {/* Header */}
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <h1 className="text-white text-xl font-bold">Events</h1>
          <p className="text-white/70 text-xs mt-1">Upcoming & past events at MRU</p>
        </div>

        <div className="px-4 mt-5 space-y-5">

          {/* Upcoming */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Upcoming Events</p>
          <div className="space-y-3">
            {upcomingEvents.map((ev, i) => (
              <motion.div key={ev.title}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
                <div className="relative w-full h-36">
                  <Image src={ev.image} alt={ev.title} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{ev.date}</span>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  <p className="text-sm font-bold text-gray-800">{ev.title}</p>
                  <p className="text-xs text-neutral-400">{ev.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <MapPin className="w-3 h-3" /> {ev.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Completed */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Past Events</p>
          <div className="space-y-3">
            {completedEvents.map((ev, i) => (
              <motion.div key={ev.title}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
                <div className="relative w-full h-28 bg-neutral-50 flex items-center justify-center">
                  <Image src={ev.image} alt={ev.title} width={100} height={100} className="object-contain" />
                  <span className="absolute top-3 right-3 bg-neutral-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Completed</span>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  <p className="text-sm font-bold text-gray-800">{ev.title}</p>
                  <p className="text-xs text-neutral-400">{ev.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Calendar className="w-3 h-3" /> {ev.date}
                    </div>
                    {ev.slug && (
                      <a href={ev.slug} className="text-xs font-semibold text-secondary flex items-center gap-1">
                        View Details <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
