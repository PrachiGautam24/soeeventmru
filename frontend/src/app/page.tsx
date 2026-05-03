'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative overflow-hidden"
      style={{ background: '#a50034' }}>

      {/* Animated mesh blobs — CSS keyframes */}
      <style>{`
        @keyframes blob1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(80px, -60px) scale(1.15); }
          66%  { transform: translate(-40px, 80px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-70px, 60px) scale(1.2); }
          66%  { transform: translate(60px, -80px) scale(0.85); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(50px, -70px) scale(1.1); }
          66%  { transform: translate(-80px, 40px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob4 {
          0%   { transform: translate(0px, 0px) scale(1); }
          50%  { transform: translate(-60px, -50px) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
      <div className="absolute pointer-events-none" style={{ width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,#ff0066 0%,transparent 65%)',top:'-100px',left:'-80px',filter:'blur(50px)',animation:'blob1 7s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width:380,height:380,borderRadius:'50%',background:'radial-gradient(circle,#e8005a 0%,transparent 65%)',top:'20%',right:'-100px',filter:'blur(55px)',animation:'blob2 9s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,#ff3377 0%,transparent 65%)',bottom:'-80px',left:'5%',filter:'blur(50px)',animation:'blob3 8s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width:320,height:320,borderRadius:'50%',background:'radial-gradient(circle,#cc0044 0%,transparent 65%)',top:'50%',left:'30%',filter:'blur(60px)',opacity:0.8,animation:'blob4 6s ease-in-out infinite' }} />

      {/* Main content */}

      {/* Bottom wave decorations */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 390 120" fill="none" preserveAspectRatio="none">
        <path d="M0,60 Q100,100 195,60 Q290,20 390,60 L390,120 L0,120 Z" fill="rgba(0,0,0,0.08)" />
        <path d="M0,80 Q100,50 195,80 Q290,110 390,80 L390,120 L0,120 Z" fill="rgba(0,0,0,0.06)" />
      </svg>

      {/* Main content — centered on red bg */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 gap-8 z-10 py-16">

        {/* Logos + title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Logos box — 2 rows */}
          <div className="bg-white/95 rounded-2xl px-6 py-5 shadow-lg flex flex-col items-center gap-4">
            {/* Row 1 — 30 Years logo (big, spinning) */}
            <motion.div
              initial={{ rotate: 0, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Image
                  src="/images/mru-30-years-logo.png"
                  alt="MRU 30 Years"
                  width={260}
                  height={100}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200" />

            {/* Row 2 — MRU logo + GPTW */}
            <div className="flex items-center gap-4">
              <Image
                src="https://manavrachna.edu.in/assets/images/mru-logo.png"
                alt="MRU Logo"
                width={160}
                height={60}
                priority
                className="object-contain"
              />
              <div className="w-px h-10 bg-neutral-200" />
              <Image
                src="/images/GPTW.jpg"
                alt="Great Place To Work Certified"
                width={56}
                height={72}
                priority
                className="object-contain rounded-sm"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white drop-shadow-md leading-snug">
              Manav Rachna University
            </h1>
            <p className="text-white/80 text-sm mt-2 font-medium tracking-wide">
              Your First Step into University Life
            </p>
            <p className="text-white/70 text-xs mt-3 leading-relaxed px-4">
              Shape Your Future at Manav Rachna University —{'\n'}Where Innovation Meets Excellence
            </p>
          </div>
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
