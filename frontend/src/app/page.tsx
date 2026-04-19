'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">

      {/* Hero image — top half */}
      <div className="relative w-full h-[58vh] shrink-0">
        <Image
          src="https://manavrachna.edu.in/assets/campus/mru/images/overview-banner-mid1.webp"
          alt="Manav Rachna Campus"
          fill
          priority
          className="object-cover"
        />
        {/* dark-to-white gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white" />

        {/* Logos + title over image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-5">

          {/* Both logos side by side */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <Image
              src="https://manavrachna.edu.in/assets/images/mru-logo.png"
              alt="MRU Logo"
              width={160}
              height={72}
              priority
              className="object-contain drop-shadow-lg"
            />
            <div className="w-px h-12 bg-white/40" />
            <Image
              src="/images/GPTW.jpg"
              alt="Great Place To Work Certified"
              width={56}
              height={72}
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
            <h1 className="text-2xl font-extrabold text-white drop-shadow-md leading-snug">
              Manav Rachna University
            </h1>
            <p className="text-white/80 text-xs mt-1 font-medium tracking-wide">
              Your First Step into University Life
            </p>
            <p className="text-white/70 text-[11px] mt-2 leading-relaxed px-2">
              Shape Your Future at Manav Rachna University —{'\n'}Where Innovation Meets Excellence
            </p>
          </motion.div>

        </div>
      </div>

      {/* White bottom section */}
      <div className="flex-1 flex flex-col items-center justify-between px-6 pb-10 pt-4 bg-white">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-neutral-500 leading-relaxed"
        >
          Empowering Minds. Building Futures.{'\n'}At Manav Rachna University
        </motion.p>

        {/* Get Started button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mt-8"
        >
          <button
            onClick={() => router.push('/home')}
            className="w-full flex items-center justify-center gap-3 bg-red-600 rounded-2xl py-4 text-base font-bold text-white shadow-lg active:scale-95 transition-transform"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </div>
  )
}
