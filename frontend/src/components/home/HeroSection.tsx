'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-mixed text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative px-6 py-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h1 className="text-3xl font-bold text-primary">ICASS</h1>
            <p className="text-xs text-center text-gray-600">2026</p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-3"
        >
          <h2 className="text-2xl font-bold leading-tight">
            International Conference on<br />
            Intelligent Computing and Automation<br />
            for Sustainable Solutions
          </h2>
          
          <p className="text-lg font-semibold text-accent-yellow">
            Harnessing AI for a Digital Future
          </p>

          {/* Event Details */}
          <div className="flex flex-col gap-2 items-center justify-center pt-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">February 12-13, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Manav Rachna University, Faridabad</span>
            </div>
          </div>

          {/* Organizer Badge */}
          <div className="pt-4 pb-2">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <p className="text-xs text-white/80">Organized by</p>
              <p className="text-sm font-bold">School of Engineering, MRU</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V0s-187.5 48-720 48S0 0 0 0v48z" fill="#fff"/>
        </svg>
      </div>
    </div>
  )
}
