'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #c0392b 0%, #e74c3c 55%, #c0392b 100%)' }}>

      {/* Decorative glow blobs */}
      <div className="absolute top-1/3 right-8 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,180,100,0.25) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 left-4 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,120,120,0.2) 0%, transparent 70%)' }} />

      {/* Bottom wave decorations */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 390 120" fill="none" preserveAspectRatio="none">
        <path d="M0,60 Q100,100 195,60 Q290,20 390,60 L390,120 L0,120 Z" fill="rgba(0,0,0,0.08)" />
        <path d="M0,80 Q100,50 195,80 Q290,110 390,80 L390,120 L0,120 Z" fill="rgba(0,0,0,0.06)" />
      </svg>

      {/* Main content — centered on red bg */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 gap-8 z-10 py-16">

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <Image
            src="https://manavrachna.edu.in/assets/images/mru-logo.png"
            alt="MRU Logo"
            width={180}
            height={80}
            priority
            className="object-contain drop-shadow-lg brightness-0 invert"
          />
          <div className="w-px h-14 bg-white/40" />
          <Image
            src="/images/GPTW.jpg"
            alt="Great Place To Work Certified"
            width={60}
            height={78}
            priority
            className="object-contain drop-shadow-lg rounded-sm"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl font-extrabold text-white drop-shadow-md leading-snug">
            Manav Rachna University
          </h1>
          <p className="text-white/80 text-sm mt-2 font-medium tracking-wide">
            Your First Step into University Life
          </p>
          <p className="text-white/70 text-xs mt-3 leading-relaxed px-4">
            Shape Your Future at Manav Rachna University —{'\n'}Where Innovation Meets Excellence
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-white/90 leading-relaxed font-medium"
        >
          Empowering Minds. Building Futures.{'\n'}At Manav Rachna University
        </motion.p>

        {/* Get Started button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <button
            onClick={() => router.push('/home')}
            className="w-full flex items-center justify-center gap-3 bg-white rounded-2xl py-4 text-base font-bold text-red-600 shadow-lg active:scale-95 transition-transform"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </div>
  )
}
