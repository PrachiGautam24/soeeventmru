'use client'

import { useState } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import {
  Search, Bell, ChevronRight, LogIn, LogOut,
  Building2, Users, CalendarDays, BookOpen,
  Star, X, Mail, PhoneCall, MapPin
} from 'lucide-react'
import { schools } from '@/lib/schools'

// ─── Data ─────────────────────────────────────────────────────────────────────

const fresherItems = [
  { icon: Building2,    label: 'Hostel Information', desc: 'Rooms, facilities & rules', href: '/fresher/hostel' },
  { icon: Users,        label: 'Clans',              desc: 'Find your community',        href: '/fresher/clans' },
  { icon: CalendarDays, label: 'Academic Calendar',  desc: 'Dates, exams & holidays',   href: '/fresher/academic-calendar' },
  { icon: BookOpen,     label: 'First Day',          desc: 'What to do on day one',      href: '/fresher/first-day' },
]

const schoolColors: Record<string, string> = {
  soe: '#1e4ba9', law: '#b45309', education: '#16a34a', business: '#b12a2e', science: '#7c3aed',
}

const schoolSVGs: Record<string, React.ReactNode> = {
  soe: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M32 10 C20 10 14 20 14 28 L50 28 C50 20 44 10 32 10Z"/>
      <rect x="27" y="7" width="10" height="7" rx="1.5"/>
      <path d="M10 28 L54 28 L54 32 Q54 34 52 34 L12 34 Q10 34 10 32 Z"/>
      <circle cx="32" cy="46" r="7" strokeWidth={2.5}/>
    </svg>
  ),
  law: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3v18M3 9l4-4 5 2 5-2 4 4M6 20h12"/>
      <path d="M5 9l-2 5c0 1.66 1.34 3 3 3s3-1.34 3-3L7 9M17 9l-2 5c0 1.66 1.34 3 3 3s3-1.34 3-3L19 9"/>
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 10l10-6 10 6-10 6-10-6z"/>
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
    </svg>
  ),
  business: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>
  ),
  science: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6v10l3 8H6l3-8V3z"/>
      <path d="M6 19h12"/>
    </svg>
  ),
}

const upcomingEvents = [
  { title: 'Ideate. Build. Deploy.', subtitle: 'Build App in a Day · GUVI HCL', date: '18 May 2026', image: '/images/events/event-ideate.jpeg' },
  { title: 'Ethical Hacking Workshop', subtitle: 'Learn. Explore. Protect. · Quick Heal', date: '19–20 May 2026', image: '/images/events/event-ehacking.jpeg' },
  { title: 'Workshop on Robotics', subtitle: 'Design. Build. Program. · WRO India', date: '21–22 May 2026', image: '/images/events/event-robotics.jpeg' },
]

const placementPhotos = [
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements1.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements2.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements3.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements4.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements5.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements6.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements7.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements8.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements9.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements10.webp',
  'https://manavrachna.edu.in/assets/campus/mru/images/mruTopPlacements11.webp',
]

const recruiterLogos = [
  { name: 'ABEC', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/abec.webp' },
  { name: 'ADG', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/adg.webp' },
  { name: 'BFC', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/bfc.webp' },
  { name: 'Birlasoft', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/birla-soft.webp' },
  { name: 'Citi Bank', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/CitiBank.webp' },
  { name: 'Cox & Kings', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/Cox&Kings.webp' },
  { name: 'Damco', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/Damco.webp' },
  { name: 'Eicher', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/Eicher.webp' },
  { name: 'Federal Mogul', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/top-placement-logo/FederalMog.webp' },
  { name: 'HCL', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/hcl.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo3.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo4.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo5.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo6.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo7.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo8.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo9.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo10.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo11.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo13.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo14.webp' },
  { name: 'Recruiter', logo: 'https://manavrachna.edu.in/assets/campus/mriirs/images/major-recruiters-logo15.webp' },
]

const topFunctionaries = [
  { name: 'Prof. (Dr.) Deependra Kumar Jha', title: 'Vice Chancellor', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Jha.jpg' },
  { name: 'Prof. (Dr.) Sangita Banga', title: 'Pro Vice Chancellor & Dean Education', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Sangita.jpg' },
  { name: 'Mr. Ramesh Nair', title: 'Registrar', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Ramesh-Nair.jpg' },
  { name: 'Prof. (Dr.) Shruti Vashist', title: 'Dean Academics & HOD-ECE', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Shruti-Vashist.jpg' },
  { name: 'Prof. (Dr.) Dipali Bansal', title: 'Dean Engineering', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Dipali.jpg' },
  { name: 'Prof. (Dr.) Meena Kapahi', title: 'Director International Relations', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Meena-Kapahi.jpg' },
]

const visibleSchools = schools.filter(s => s.id !== 'media')

// ─── CountUp component ────────────────────────────────────────────────────────
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = React.useRef<HTMLSpanElement>(null)
  const started = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 50
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── Category tabs config ──────────────────────────────────────────────────────
type TabId = 'departments' | 'functionaries' | 'placements' | 'campus' | 'events'

const tabs: { id: TabId; label: string; emoji: string; color: string; bg: string }[] = [
  { id: 'departments',    label: 'Departments',    emoji: '🏫', color: '#1e4ba9', bg: '#e8edf8' },
  { id: 'functionaries',  label: 'Functionaries',  emoji: '👥', color: '#16a34a', bg: '#e8f5ee' },
  { id: 'placements',     label: 'Placements',     emoji: '🏆', color: '#b45309', bg: '#fef3e2' },
  { id: 'campus',         label: 'Campus Life',    emoji: '🎓', color: '#7c3aed', bg: '#f3eeff' },
  { id: 'events',         label: 'Events',         emoji: '📅', color: '#b12a2e', bg: '#fde8e8' },
]

// ─── Placement Slideshow — 2 photos at a time ─────────────────────────────────
function PlacementSlideshow({ photos }: { photos: string[] }) {
  const [idx, setIdx] = useState(0)
  const total = Math.ceil(photos.length / 2)

  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % total), 3000)
    return () => clearInterval(t)
  }, [total])

  const pair = photos.slice(idx * 2, idx * 2 + 2)

  return (
    <div className="space-y-2">
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 gap-3">
          {pair.map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
              <Image src={src} alt={`Placement ${idx * 2 + i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 pt-1">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`rounded-full transition-all duration-200 ${i === idx ? 'w-5 h-2 bg-amber-500' : 'w-2 h-2 bg-neutral-300'}`} />
        ))}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState<TabId>('departments')
  const [search, setSearch] = useState('')
  const [floatingOpen, setFloatingOpen] = useState(false)

  const userName = session?.user?.name?.split(' ')[0] ?? 'Guest'

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        {/* ── Header ── */}
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/70 text-xs font-medium">Welcome back 👋</p>
              <h1 className="text-white text-xl font-bold">{userName}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-white" />
              </button>
              {session ? (
                <button onClick={() => signOut({ callbackUrl: '/home' })}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  {session.user?.image
                    ? <Image src={session.user.image} alt="avatar" width={36} height={36} className="rounded-full" />
                    : <LogOut className="w-4 h-4 text-white" />}
                </button>
              ) : (
                <motion.button whileTap={{ scale: 0.93 }} onClick={() => router.push('/login')}
                  className="flex items-center gap-1.5 bg-white text-secondary text-xs font-bold px-3 py-2 rounded-full shadow">
                  <LogIn className="w-3.5 h-3.5" /> Login
                </motion.button>
              )}
            </div>
          </div>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search departments, events..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-sm text-gray-700 placeholder-neutral-400 focus:outline-none shadow-sm" />
          </div>
        </div>

        {/* ── Hero campus image ── */}
        <div className="relative w-full overflow-hidden" style={{ height: 200 }}>
          <Image
            src="https://manavrachna.edu.in/uploads/campus/65715f28889b31701928744.webp"
            alt="Manav Rachna Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Study at Manav Rachna</p>
            <h2 className="text-white text-base font-bold leading-snug">Learning, Creativity &amp; Access to the latest research.</h2>
          </div>
        </div>

        {/* ── Horizontal Scrollable Category Tabs ── */}
        <div className="px-4 mt-5">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.93 }}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 flex flex-col items-center gap-2 rounded-2xl px-5 py-3.5 shadow-sm transition-all duration-200 border-2 ${
                  activeTab === tab.id
                    ? 'border-transparent shadow-md scale-105'
                    : 'bg-white border-transparent'
                }`}
                style={activeTab === tab.id ? { backgroundColor: tab.bg, borderColor: tab.color + '40' } : {}}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                  style={{ backgroundColor: activeTab === tab.id ? tab.color + '20' : '#f3f4f6' }}>
                  {tab.emoji}
                </div>
                <span className="text-xs font-bold whitespace-nowrap"
                  style={{ color: activeTab === tab.id ? tab.color : '#6b7280' }}>
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Tab Content ── */}
        <div className="px-4 mt-4">
          <AnimatePresence mode="wait">

            {/* DEPARTMENTS */}
            {activeTab === 'departments' && (
              <motion.div key="departments"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }} className="space-y-2.5">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">Explore Schools</p>
                {visibleSchools.map((school) => (
                  <motion.button key={school.id} whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/school/${school.id}`)}
                    className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: schoolColors[school.id] + '18', color: schoolColors[school.id] }}>
                      {schoolSVGs[school.id]}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-800">{school.name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{school.tagline}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* FUNCTIONARIES */}
            {activeTab === 'functionaries' && (
              <motion.div key="functionaries"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }} className="space-y-2.5">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">Leadership Team</p>
                {topFunctionaries.map((person) => (
                  <div key={person.name}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-neutral-100">
                      <Image src={person.photo} alt={person.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{person.name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{person.title}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* PLACEMENTS */}
            {activeTab === 'placements' && (
              <motion.div key="placements"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }} className="space-y-4">
                {/* Stats banner */}
                <div className="bg-secondary rounded-2xl p-4 shadow-md">
                  <p className="text-white font-bold text-sm mb-3">Placement Highlights</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { stat: '120+', label: 'Total Recruiters', icon: '🏢' },
                      { stat: '600+', label: 'Placement Offers', icon: '📋' },
                      { stat: '94%', label: 'Placement Rate', icon: '🎯' },
                    ].map(({ stat, label, icon }) => (
                      <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
                        <p className="text-lg">{icon}</p>
                        <p className="text-white font-bold text-base mt-1">{stat}</p>
                        <p className="text-white/70 text-[10px] mt-0.5 leading-tight">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Placement photos — 2 at a time */}
                <PlacementSlideshow photos={placementPhotos} />
                {/* Top Recruiters */}
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Top Recruiters</p>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {recruiterLogos.map((r, i) => (
                    <div key={i} className="shrink-0 bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center justify-center gap-2 py-4 px-3 w-28">
                      <div className="relative w-full h-12">
                        <Image src={r.logo} alt={r.name} fill className="object-contain" />
                      </div>
                      {r.name !== 'Recruiter' && (
                        <p className="text-[10px] font-semibold text-neutral-500 text-center leading-tight">{r.name}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CAMPUS LIFE */}
            {activeTab === 'campus' && (
              <motion.div key="campus"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }} className="space-y-4">
                {/* Fresher Guide */}
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Fresher Guide</p>
                <div className="space-y-2.5">
                  {fresherItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <motion.button key={item.label} whileTap={{ scale: 0.98 }}
                        onClick={() => router.push(item.href)}
                        className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                        <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                          <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* EVENTS */}
            {activeTab === 'events' && (
              <motion.div key="events"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }} className="space-y-3">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Upcoming Events</p>
                {upcomingEvents.map((ev, i) => (
                  <motion.div key={ev.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex">
                    <div className="relative w-24 shrink-0">
                      <Image src={ev.image} alt={ev.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1 px-3 py-3">
                      <span className="inline-block bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">{ev.date}</span>
                      <p className="text-sm font-bold text-gray-800 leading-tight">{ev.title}</p>
                      <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{ev.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => router.push('/events')}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-2xl py-3 text-sm font-semibold text-secondary shadow-sm">
                  View All Events <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── MRU at a Glance + Contact (departments tab only) ── */}
        {activeTab === 'departments' && (
        <div className="px-4 mt-6 space-y-4">
          {/* MRU Stats */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">MRU at a Glance</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { target: 43000, suffix: '+', label: 'Alumni Globally' },
              { target: 135,   suffix: '+', label: 'Collaborations' },
              { target: 5900,  suffix: '+', label: 'Research Papers' },
              { target: 600,   suffix: '+', label: 'Recruiting MNCs' },
              { target: 250,   suffix: '+', label: 'Patents' },
              { target: 60,    suffix: 'L', label: 'Highest CTC' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="bg-white rounded-2xl p-3.5 shadow-sm border border-neutral-100 text-center">
                <p className="text-lg font-extrabold text-secondary">
                  <CountUp target={target} suffix={suffix} />
                </p>
                <p className="text-[10px] text-neutral-500 mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Contact Us</p>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
            <a href="tel:+911294268500" className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4 text-secondary" />
              </div>
              +91-129-426-8500 (General)
            </a>
            <a href="mailto:admissions@manavrachna.edu.in" className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              admissions@manavrachna.edu.in
            </a>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-xs leading-relaxed">Sector 43, Aravalli Hills, Delhi–Surajkund Road, Faridabad, Haryana 121004</span>
            </div>
          </div>
        </div>
        )}

      </div>

      {/* ── Floating Fresher Guide button ── */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {floatingOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }} transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-3 w-52 space-y-1 mb-1">
              {fresherItems.map((item) => {
                const Icon = item.icon
                return (
                  <button key={item.label} onClick={() => { router.push(item.href); setFloatingOpen(false) }}
                    className="flex items-center gap-3 w-full px-2 py-2 rounded-xl hover:bg-neutral-50 text-left">
                    <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{item.label}</span>
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileTap={{ scale: 0.92 }} onClick={() => setFloatingOpen(o => !o)}
          className="w-14 h-14 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center">
          {floatingOpen ? <X className="w-6 h-6" /> : <Star className="w-6 h-6 fill-white" />}
        </motion.button>
      </div>
    </div>
  )
}