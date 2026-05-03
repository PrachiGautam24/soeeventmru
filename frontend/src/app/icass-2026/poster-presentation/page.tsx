'use client'

import AppLayout from '@/components/AppLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function PosterPresentationPage() {
  const schedule = [
    { time: '7:15 - 8:15 AM', activity: 'Poster Mounting Time' },
    { time: '8:15 - 9:15 AM', activity: 'Regis. & Welcome tea' },
    { time: '9:30 - 11:20 AM', activity: 'Inaugural Session' },
    { time: '11:20 - 11:20 AM', activity: 'High Tea' },
    { time: '11:50 - 1:20 PM', activity: 'Poster Presentation', highlight: true },
    { time: '1:20 - 2:20 PM', activity: 'Lunch Break' },
    { time: '5:10 - 5:30 PM', activity: 'Tea Break' },
    { time: '5:30 - 6:00 PM', activity: 'Talk By Industry Experts' },
    { time: '6:00 Onwards', activity: 'Cultural Night followed by Gala Dinner' },
  ]

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <Link href="/icass-2026/home" className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <div>
            <h1 className="text-2xl font-bold">Poster Presentation</h1>
            <p className="text-sm text-white/80">ICASS 2026 Schedule</p>
          </div>
        </Link>
      </div>

      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-6 pt-28">
        {/* Poster Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white overflow-hidden shadow-lg"
        >
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/images/poster-presentation.jpg"
              alt="Poster Presentation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Event Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-5 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">Day 1 Schedule</h2>
              <p className="text-white/90 text-sm">February 12, 2026 (Thursday)</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">
            Join us for an exciting poster presentation session showcasing innovative research and projects from participants worldwide.
          </p>
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-primary text-white px-5 py-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Event Timeline
            </h3>
          </div>
          
          <div className="divide-y divide-neutral-200">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`flex items-stretch ${
                  item.highlight 
                    ? 'bg-gradient-to-r from-primary/10 to-secondary/10' 
                    : 'bg-white hover:bg-neutral-50'
                } transition-colors`}
              >
                {/* Time Column */}
                <div className={`flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 ${
                  item.highlight ? 'border-primary' : 'border-neutral-200'
                }`}>
                  <p className={`font-bold text-sm ${
                    item.highlight ? 'text-primary' : 'text-neutral-700'
                  }`}>
                    {item.time}
                  </p>
                </div>
                
                {/* Activity Column */}
                <div className="flex-1 px-4 py-4 flex items-center">
                  <p className={`font-semibold text-sm ${
                    item.highlight ? 'text-primary' : 'text-neutral-800'
                  }`}>
                    {item.activity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5"
        >
          <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            Important Information
          </h3>
          <ul className="space-y-2 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Please mount your posters between 7:15 AM - 8:15 AM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Poster presentation session: 11:50 AM - 1:20 PM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Authors must be present at their posters during the session</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Poster boards and mounting materials will be provided</span>
            </li>
          </ul>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="pb-6"></div>
      </div>
    </AppLayout>
  )
}
