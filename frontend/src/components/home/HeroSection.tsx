'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Conference Poster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="relative w-full max-w-md aspect-[390/420] shadow-2xl overflow-hidden">
          <Image
            src="/images/conference-poster1.jpg"
            alt="ICASS 2026 Conference Poster"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#DC2626"/>
        </svg>
      </div>
    </div>
  )
}
