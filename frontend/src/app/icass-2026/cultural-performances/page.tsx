'use client'

import AppLayout from '@/components/AppLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, Music } from 'lucide-react'
import Image from 'next/image'

export default function CulturalPerformancesPage() {
  const performance = {
    title: "SITAYANA",
    subtitle: "A Classical Dance Drama",
    date: "February 12, 2026",
    time: "6:00 PM - 7:00 PM",
    venue: "Mandala Auditorium, G Block, Manav Rachna University",
    description: `SITAYANA is a classical dance drama that reimagines the ancient Indian epic through the lens of Sita's journey, highlighting its resonance in the modern day. While the Ramayana has traditionally centered on Shri Rama, this production brings forth Sita's unyielding courage and inner strength—her endurance through exile, abduction, imprisonment in a foreign land, public humiliation, the Agni Pariksha, and ultimately, abandonment during pregnancy.

Presented by acclaimed Bharatanatyam artists Bhadra Sinha (as Rama) and Gayathri Sharma (as Sita), SITAYANA draws inspiration from Chitra Banerjee Divakaruni's Forest of Enchantment. The production weaves together English monologues with the evocative expressions, hand gestures, and grammar of Bharatanatyam to retell this epic with fresh sensitivity.

At its heart, SITAYANA honours the spirit of women as reflections of divine energy—an artistic tribute to resilience, dignity, and the timeless relevance of Sita's story.`,
    image: "/images/sita.jpg"
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-secondary-dark text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <Link href="/icass-2026/home" className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Cultural Performances</h1>
        </Link>
      </div>

      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-28">
        {/* Performance Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src={performance.image}
              alt={performance.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-3">
            <Music className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-1">{performance.title}</h2>
              <p className="text-white/90 text-lg">{performance.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Event Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-5 shadow-md space-y-4"
        >
          <h3 className="font-bold text-neutral-800 text-lg mb-3">Event Details</h3>
          
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-xs text-neutral-500">Date</p>
              <p className="font-semibold text-neutral-800">{performance.date}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-xs text-neutral-500">Time</p>
              <p className="font-semibold text-neutral-800">{performance.time}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-xs text-neutral-500">Venue</p>
              <p className="font-semibold text-neutral-800">{performance.venue}</p>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-5 shadow-md"
        >
          <h3 className="font-bold text-neutral-800 mb-4 text-lg">About the Performance</h3>
          <div className="text-sm text-neutral-700 leading-relaxed space-y-3">
            {performance.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Inspiration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 shadow-md"
        >
          <p className="text-sm text-neutral-700 italic">
            <span className="font-semibold text-secondary">Inspired by:</span> Chitra Banerjee Divakaruni's <em>Forest of Enchantment</em>
          </p>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="pb-6"></div>
      </div>
    </AppLayout>
  )
}
