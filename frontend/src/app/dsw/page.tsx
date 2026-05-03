'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const hashtags = ['#FindYourVibe', '#LeadWithDSW', '#MRULife']

function VibeSection() {
  const [tagIdx, setTagIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = hashtags[tagIdx]
    let i = 0
    setDisplayed('')
    setTyping(true)

    const typeTimer = setInterval(() => {
      i++
      setDisplayed(current.slice(0, i))
      if (i >= current.length) {
        clearInterval(typeTimer)
        setTyping(false)
        // Wait 1.5s then move to next
        setTimeout(() => {
          setTagIdx(prev => (prev + 1) % hashtags.length)
        }, 1500)
      }
    }, 60)

    return () => clearInterval(typeTimer)
  }, [tagIdx])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{ background: 'linear-gradient(135deg, #db2777 0%, #9333ea 100%)' }}
    >
      <div className="px-5 py-6 text-center space-y-3">
        {/* Main tagline */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg font-extrabold leading-snug"
        >
          Don&apos;t just attend college.{' '}
          <span className="underline decoration-white/50">Live it.</span>
        </motion.p>

        {/* Animated hashtag typewriter */}
        <div className="flex items-center justify-center gap-1 h-8">
          <span className="text-white/90 text-base font-bold tracking-wide">
            {displayed}
          </span>
          <AnimatePresence>
            {typing && (
              <motion.span
                key="cursor"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="text-white font-bold text-base"
              >
                |
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {hashtags.map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full"
              animate={{
                width: i === tagIdx ? 20 : 6,
                backgroundColor: i === tagIdx ? '#ffffff' : 'rgba(255,255,255,0.4)',
              }}
              style={{ height: 6 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function DSWPage() {
  const router = useRouter()

  const quickLinks = [
    {
      label: 'Clans',
      emoji: '🦅',
      desc: 'Air Falcons, Water Sharks & more',
      href: '/fresher/clans',
      color: '#db2777',
      bg: '#fce7f3',
    },
    {
      label: 'Societies',
      emoji: '🎭',
      desc: 'Cultural, technical & sports clubs',
      href: '/dsw/societies',
      color: '#7c3aed',
      bg: '#f3eeff',
    },
    {
      label: 'Events',
      emoji: '🎉',
      desc: 'Fests, competitions & workshops',
      href: '/dsw/events',
      color: '#b45309',
      bg: '#fef3e2',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#db2777' }}>
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-4xl mb-2">🎵</div>
            <h1 className="font-bold text-white text-2xl leading-tight">DSW | MRU</h1>
            <p className="text-white/80 text-sm mt-1 font-medium">This is where campus comes alive.</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-5">

          {/* Animated tagline — top */}
          <VibeSection />

          {/* Quick action icons */}
          <div className="grid grid-cols-3 gap-3">
            {quickLinks.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 22 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => router.push(item.href)}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: item.bg }}>
                  {item.emoji}
                </div>
                <p className="text-xs font-bold text-gray-800">{item.label}</p>
                <p className="text-[10px] text-neutral-400 text-center leading-tight">{item.desc}</p>
              </motion.button>
            ))}
          </div>

          {/* About DSW */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="px-4 pt-4 pb-2 flex items-center gap-2">
              <span className="text-lg">🏛️</span>
              <p className="text-sm font-bold text-gray-800">About DSW</p>
            </div>
            <div className="px-4 pb-4 space-y-3">
              <p className="text-base font-extrabold text-gray-900 leading-snug">
                Beyond Classrooms. Into the Real World.{' '}
                <span style={{ color: '#db2777' }}>Welcome to MRU Life</span>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                At Manav Rachna University, your journey doesn&apos;t end at textbooks — it begins with real-world experiences that shape leaders, creators, and change-makers.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Here, every hallway, event, and initiative is a chance to discover yourself, lead boldly, and make a difference.
              </p>
              <div className="rounded-xl p-3 space-y-2" style={{ background: '#fdf2f8' }}>
                {[
                  { emoji: '💡', text: "You're not just a student. You're the spark behind the next big idea." },
                  { emoji: '🎭', text: 'A performer lighting up the stage.' },
                  { emoji: '🌍', text: 'A changemaker driving impact.' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2">
                    <span className="text-base shrink-0">{item.emoji}</span>
                    <p className="text-sm font-medium text-gray-700 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                DSW organizes the annual Cultural Fest <span className="font-semibold" style={{ color: '#db2777' }}>&quot;RESURRECTION&quot;</span> and collaborates with AICTE and UGC for programs like Unnat Bharat Abhiyan and Swacch Bharat Abhiyan.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Through the unique <span className="font-semibold" style={{ color: '#db2777' }}>Clan system</span> — Air Falcons, Water Sharks, Forest Rhinos, and Wild Cats — students develop leadership, teamwork, and life skills that go beyond the classroom.
              </p>
            </div>
          </div>

          {/* MR Points */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
            <Image
              src="/images/dsw/mrpoints.png"
              alt="MR Points"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Upcoming Events preview */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎉</span>
                <p className="text-sm font-bold text-gray-800">Upcoming Events</p>
              </div>
              <button onClick={() => router.push('/dsw/events')}
                className="text-xs font-semibold flex items-center gap-0.5" style={{ color: '#b45309' }}>
                View All <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="divide-y divide-neutral-100 border-t border-neutral-100">
              {[
                { date: '23 Apr 2026', title: 'Mental Health Awareness Talk', emoji: '🧠' },
                { date: '23 Apr 2026', title: 'Sampling Steps', emoji: '💃' },
                { date: '23 Apr 2026', title: 'Culture Couture', emoji: '🎭' },
                { date: '30 Apr 2026', title: 'Anti-Ragging Week', emoji: '🤝' },
                { date: '30 Apr 2026', title: 'Digital Doodlers', emoji: '🎨' },
                { date: '30 Apr 2026', title: 'Riyaaz-E-Mehfil', emoji: '🎵' },
                { date: '30 Apr 2026', title: 'Cyber Crime Awareness Camp', emoji: '🔐' },
              ].map((ev) => (
                <div key={ev.title} className="flex items-center gap-3 px-4 py-3">
                  <span className="text-lg shrink-0">{ev.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{ev.title}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigate to Clans */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/fresher/clans')}
            className="w-full flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl px-4 py-4 shadow-sm"
          >
            <span className="text-2xl">🦅</span>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold text-pink-700">Explore Clans</p>
              <p className="text-xs text-pink-400 mt-0.5">View all 4 clans, chiefs & coordinators</p>
            </div>
            <ChevronRight className="w-4 h-4 text-pink-300 shrink-0" />
          </motion.button>

        </div>
      </div>
    </div>
  )
}
