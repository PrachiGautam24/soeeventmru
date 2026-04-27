'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    title: 'Orientation July 2025',
    desc: 'Welcome orientation for new students joining the School of Business.',
    photoCount: 11,
    folder: 'orientation',
    photos: Array.from({ length: 11 }, (_, i) => `/images/business/events/orientation/${i + 1}.jpg`),
  },
  {
    title: 'Krishnotsav',
    desc: 'Cultural celebration organized by the School of Business.',
    photoCount: 5,
    folder: 'krishnotsav',
    photos: Array.from({ length: 5 }, (_, i) => `/images/business/events/krishnotsav/${i + 1}.jpg`),
  },
  {
    title: 'FDP on Impactful Research',
    desc: 'Faculty Development Programme focused on research methodologies and impactful academic writing.',
    photoCount: 4,
    folder: 'impactful-research',
    photos: Array.from({ length: 4 }, (_, i) => `/images/business/events/impactful-research/${i + 1}.jpg`),
  },
  {
    title: 'FDP on Digital Tools for Interactive and Experiential Learning',
    desc: 'Faculty Development Programme on leveraging digital tools for modern classroom experiences.',
    photoCount: 3,
    folder: 'fdp-digital-tools',
    photos: Array.from({ length: 3 }, (_, i) => `/images/business/events/fdp-digital-tools/${i + 1}.jpg`),
  },
  {
    title: 'One Day Workshop on SPSS',
    desc: 'Hands-on workshop on SPSS for data analysis and research.',
    photoCount: 2,
    folder: 'workshop-spss',
    photos: Array.from({ length: 2 }, (_, i) => `/images/business/events/workshop-spss/${i + 1}.jpg`),
  },
]

function EventCard({ ev }: { ev: typeof events[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start justify-between px-4 py-3.5 text-left">
        <div>
          <p className="text-sm font-bold text-gray-800">{ev.title}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{ev.photoCount} photos</p>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="photos" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neutral-100">
            <div className="px-4 py-3 space-y-3">
              <p className="text-xs text-gray-600">{ev.desc}</p>
              <div className="grid grid-cols-3 gap-2">
                {ev.photos.map((src, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden bg-neutral-100" style={{ aspectRatio: '1' }}>
                    <Image src={src} alt={`${ev.title} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function BusinessEventsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">School Events</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {events.map((ev) => <EventCard key={ev.title} ev={ev} />)}
        </div>
      </div>
    </div>
  )
}
