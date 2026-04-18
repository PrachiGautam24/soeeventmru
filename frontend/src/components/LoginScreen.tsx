'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* Top wave header */}
        <div className="relative bg-white overflow-hidden">
          <div className="flex items-center justify-center gap-4 px-6 py-6">
            <Image
              src="/images/soe-events-logo.jpg"
              alt="School of Engineering – Manav Rachna University"
              width={200}
              height={65}
              priority
              className="object-contain"
            />
            <Image
              src="https://manavrachna.edu.in/assets/images/mru-logo.png"
              alt="MRU Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="h-6">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e" />
            </svg>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src="https://manavrachna.edu.in/uploads/campus/65715f28889b31701928744.webp"
            alt="Manav Rachna Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Welcome to</p>
            <h2 className="text-white text-base font-bold leading-snug">SOE Events — Manav Rachna University</h2>
          </div>
        </div>

        {/* Login card */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">Sign in to continue</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Use your Google account to access events, schedules, and more.
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => signIn('google', { callbackUrl: '/home' })}
            className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Google "G" logo */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
          </motion.button>

          <p className="text-[11px] text-neutral-400 text-center leading-relaxed px-4">
            By signing in, you agree to the terms of use of this platform. Your data is only used for authentication.
          </p>
        </div>

        {/* Footer strip */}
        <div className="px-5 py-4 border-t border-neutral-100 text-center">
          <p className="text-[10px] text-neutral-400">
            © {new Date().getFullYear()} Manav Rachna University · School of Engineering
          </p>
        </div>
      </div>
    </div>
  )
}
