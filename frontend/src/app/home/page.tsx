'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { schools } from '@/lib/schools'

// Gradient pairs per school for the app-icon style buttons
const schoolGradients: Record<string, string> = {
  soe:        'from-primary to-primary-light',
  law:        'from-amber-500 to-amber-400',
  education:  'from-green-600 to-green-400',
  business:   'from-secondary to-secondary-light',
  science:    'from-purple-600 to-purple-400',
}

export default function HomePage() {
  const router = useRouter()
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* ── SOE-style header (logo bar + red wave) ── */}
        <div className="relative bg-white overflow-hidden">
          <div className="flex items-center justify-center gap-4 px-6 py-5">
            <Image
              src="/images/soe-events-logo.jpg"
              alt="School of Engineering – Manav Rachna University"
              width={210}
              height={70}
              priority
            />
            <Image src="/images/GPTW.jpg" alt="Great Place to Work" width={32} height={32} />
          </div>
          {/* red wave */}
          <div className="h-6">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e" />
            </svg>
          </div>
        </div>

        {/* ── Hero campus image with quote ── */}
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
            <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">
              Study at Manav Rachna
            </p>
            <h2 className="text-white text-base font-bold leading-snug">
              Learning, Creativity &amp; Access to the latest research.
            </h2>
          </div>
        </div>

        {/* ── Schools grid (app-icon style) ── */}
        <div className="px-5 py-5 bg-neutral-50">
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-4">
            Explore Schools
          </p>

          <div className="grid grid-cols-3 gap-4">
            {schools.map((school, i) => (
              <motion.button
                key={school.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => router.push(`/school/${school.id}`)}
                className="flex flex-col items-center gap-2"
              >
                {/* icon tile */}
                <div className={`w-16 h-16 rounded-[22px] bg-gradient-to-br ${schoolGradients[school.id]} flex items-center justify-center text-3xl shadow-md`}>
                  {school.icon}
                </div>
                {/* label */}
                <span className="text-[11px] text-center text-gray-700 font-medium leading-tight px-1">
                  {school.name.replace('School of ', '')}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Footer links ── */}
        <div className="bg-white border-t border-neutral-100 mt-auto">

          {/* About Manav Rachna — collapsible accordion */}
          <div className="border-b border-neutral-100">
            <button
              onClick={() => setAboutOpen(o => !o)}
              className="w-full flex items-center justify-between px-5 py-4"
            >
              <span className="text-sm font-semibold text-gray-800">About Manav Rachna University</span>
              <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {aboutOpen && (
                <motion.div
                  key="about-mru"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 space-y-3">
                    {[
                      `Manav Rachna University (MRU) was established under the Haryana State Legislature Act No. 26 of 2014 and is one of the leading private state universities in Haryana, India.`,
                      `It is recognised by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956, and is dedicated to providing world-class education with a global outlook.`,
                      `The university has been awarded NAAC A++ accreditation and its B.Tech Computer Science & Engineering programme has received NBA accreditation (2023–2026).`,
                      `In a landmark achievement, MRU became the first university in India to be accredited by the International Baccalaureate (IB), underscoring its alignment with international educational standards.`,
                    ].map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social links */}
          <div className="px-5 py-4 space-y-3">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">Follow Us</p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/manavrachnauniversity/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.linkedin.com/school/manav-rachna-university/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
