'use client'

import { useState } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import SlideUp from '@/components/SlideUp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import {
  ChevronDown, Star, X, Building2, Users,
  CalendarDays, BookOpen,
  Mail, PhoneCall, MapPin, ChevronLeft, ChevronRight, Trophy,
  LogIn, LogOut, User
} from 'lucide-react'
import { schools } from '@/lib/schools'

const fresherItems = [
  { icon: Building2,    label: 'Hostel Information',     desc: 'Rooms, facilities & rules',  href: '/fresher/hostel' },
  { icon: Users,        label: 'Clans',                  desc: 'Find your community',         href: '/fresher/clans' },
  { icon: CalendarDays, label: 'Academic Calendar',      desc: 'Dates, exams & holidays',     href: '/fresher/academic-calendar' },
  { icon: BookOpen,     label: 'First Day Instructions', desc: 'What to do on day one',       href: '/fresher/first-day' },
]

const schoolColors: Record<string, string> = {
  soe:       '#1e4ba9',
  law:       '#b45309',
  education: '#16a34a',
  business:  '#b12a2e',
  science:   '#7c3aed',
}

const schoolSVGs: Record<string, React.ReactNode> = {
  soe: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <path d="M32 10 C20 10 14 20 14 28 L50 28 C50 20 44 10 32 10Z"/>
      <rect x="27" y="7" width="10" height="7" rx="1.5"/>
      <path d="M10 28 L54 28 L54 32 Q54 34 52 34 L12 34 Q10 34 10 32 Z"/>
      <circle cx="32" cy="46" r="7" strokeWidth={2.5}/>
      <path d="M32 36 L32 33 M32 59 L32 56 M42 39 L44 37 M20 55 L22 53 M45 46 L48 46 M16 46 L19 46 M42 53 L44 55 M20 37 L22 39" strokeWidth={3}/>
    </svg>
  ),
  law: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <path d="M12 3v18M3 9l4-4 5 2 5-2 4 4M6 20h12"/>
      <path d="M5 9l-2 5c0 1.66 1.34 3 3 3s3-1.34 3-3L7 9M17 9l-2 5c0 1.66 1.34 3 3 3s3-1.34 3-3L19 9"/>
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <path d="M2 10l10-6 10 6-10 6-10-6z"/>
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
      <path d="M22 10v6"/>
    </svg>
  ),
  business: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
      <line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  science: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <path d="M9 3h6v10l3 8H6l3-8V3z"/>
      <path d="M6 19h12"/>
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="15" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
}

const upcomingEvents = [
  {
    title: 'Ideate. Build. Deploy.',
    subtitle: 'Build App in a Day · Win Cash Prizes · GUVI HCL',
    date: '18 May 2026',
    image: '/images/events/event-ideate.jpeg',
  },
  {
    title: 'Ethical Hacking Workshop',
    subtitle: 'Learn. Explore. Protect. · Quick Heal',
    date: '19–20 May 2026',
    image: '/images/events/event-ehacking.jpeg',
  },
  {
    title: 'Workshop on Robotics',
    subtitle: 'Design. Build. Program. · WRO India',
    date: '21–22 May 2026',
    image: '/images/events/event-robotics.jpeg',
  },
]

// Real placement photos from MRU website
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

// Real recruiter logos from MRU website
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
  {
    name: 'Prof. (Dr.) Deependra Kumar Jha',
    title: 'Vice Chancellor',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Jha.jpg',
  },
  {
    name: 'Prof. (Dr.) Sangita Banga',
    title: 'Pro Vice Chancellor & Dean Education',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Sangita.jpg',
  },
  {
    name: 'Mr. Ramesh Nair',
    title: 'Registrar',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Ramesh-Nair.jpg',
  },
  {
    name: 'Prof. (Dr.) Shruti Vashist',
    title: 'Dean Academics, Dean Research & HOD-ECE',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Shruti-Vashist.jpg',
  },
  {
    name: 'Prof. (Dr.) Dipali Bansal',
    title: 'Dean Engineering',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Dipali.jpg',
  },
  {
    name: 'Prof. (Dr.) Meena Kapahi',
    title: 'Director International Relations',
    photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Meena-Kapahi.jpg',
  },
]

const visibleSchools = schools.filter(s => s.id !== 'media')

function DiamondPlacements({ photos }: { photos: string[] }) {
  const [active, setActive] = useState(0)
  const total = photos.length

  React.useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % total), 3000)
    return () => clearInterval(t)
  }, [total])

  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  return (
    <div className="bg-white border-t border-neutral-100">
      {/* Section header */}
      <div className="flex items-center gap-2 px-5 pt-5 pb-3">
        <Trophy className="w-4 h-4 text-amber-500" />
        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">Diamond Placement Moments</p>
      </div>

      {/* Full-width cover card */}
      <div className="relative mx-4 rounded-2xl overflow-hidden shadow-lg" style={{ height: 260 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={photos[active]}
              alt={`Placement ${active + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Counter badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {active + 1} / {total}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 py-3">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${i === active ? 'w-5 h-2 bg-amber-500' : 'w-2 h-2 bg-neutral-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

function RecruiterSlideshow({ logos }: { logos: { name: string; logo: string }[] }) {
  const [active, setActive] = useState(0)
  const total = logos.length

  // Show 2 larger logos per slide for more impact
  const perSlide = 2
  const totalSlides = Math.ceil(total / perSlide)

  React.useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % totalSlides), 2800)
    return () => clearInterval(t)
  }, [totalSlides])

  const prev = () => setActive(i => (i - 1 + totalSlides) % totalSlides)
  const next = () => setActive(i => (i + 1) % totalSlides)

  const slideLogos = logos.slice(active * perSlide, active * perSlide + perSlide)

  return (
    <div className="bg-neutral-50 border-t border-neutral-100">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">Top Recruiters</p>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="w-7 h-7 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
            <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
          </button>
          <button onClick={next} className="w-7 h-7 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Slide */}
      <div className="px-4 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-3"
          >
            {slideLogos.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center gap-3 py-5 px-4"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={r.logo}
                    alt={r.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {r.name !== 'Recruiter' && (
                  <p className="text-[11px] font-semibold text-neutral-600 text-center leading-tight">{r.name}</p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 pb-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${i === active ? 'w-5 h-2 bg-neutral-500' : 'w-2 h-2 bg-neutral-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [aboutOpen, setAboutOpen] = useState(false)
  const [fresherOpen, setFresherOpen] = useState(false)
  const [floatingOpen, setFloatingOpen] = useState(false)

  return (
    <PageTransition>
    <div className="min-h-screen bg-neutral-100">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl flex flex-col">

        {/* ── Header: centered MRU logo + login on the side ── */}
        <div className="relative bg-white overflow-hidden">
          <div className="relative px-4 py-3 flex justify-center">
            <div className="flex justify-center items-center gap-3 flex-1">
              <Image
                src="https://manavrachna.edu.in/assets/images/mru-logo.png"
                alt="NAAC A++ Accredited"
                width={200}
                height={128}
                priority
                className="object-contain"
              />
              <div className="w-px h-10 bg-neutral-200" />
              <Image
                src="/images/GPTW.jpg"
                alt="Great Place To Work"
                width={44}
                height={56}
                priority
                className="object-contain rounded-sm"
              />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {session ? (
                <div className="flex items-center gap-1.5">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? 'User'}
                      width={30}
                      height={30}
                      className="rounded-full border border-neutral-200"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                  <button
                    onClick={() => signOut({ callbackUrl: '/home' })}
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center"
                    aria-label="Sign out"
                  >
                    <LogOut className="w-3.5 h-3.5 text-neutral-500" />
                  </button>
                </div>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.93 }}
                  onClick={() => router.push('/login')}
                  className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Login
                </motion.button>
              )}
            </div>
          </div>
          <div className="h-6">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e" />
            </svg>
          </div>
        </div>

        {/* ── Hero campus image ── */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src="https://manavrachna.edu.in/uploads/campus/65715f28889b31701928744.webp"
            alt="Manav Rachna Campus"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-0.5">Study at Manav Rachna</p>
            <h2 className="text-white text-base font-bold leading-snug">Learning, Creativity &amp; Access to the latest research.</h2>
          </div>
        </div>

        {/* ── About Manav Rachna (right after hero) ── */}
        <SlideUp>
        <div className="mx-4 mt-4 rounded-2xl overflow-hidden shadow-sm">
          <button onClick={() => setAboutOpen(o => !o)}
            className={`w-full flex items-center justify-between px-5 py-4 bg-red-600 ${aboutOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}>
            <span className="text-sm font-semibold text-white">About Manav Rachna University</span>
            <motion.div animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 text-white/80" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {aboutOpen && (
              <motion.div key="about-mru" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden bg-white rounded-b-2xl border border-t-0 border-neutral-100">
                <div className="px-5 pb-5 pt-3 space-y-3">
                  {[
                    `Manav Rachna University (MRU) was established under the Haryana State Legislature Act No. 26 of 2014 and is one of the leading private state universities in Haryana, India.`,
                    `Recognised by UGC under Section 2(f), awarded NAAC A++ accreditation, and NBA accredited for B.Tech CSE (2023–2026).`,
                    `MRU became the first university in India to be accredited by the International Baccalaureate (IB), underscoring its alignment with international educational standards.`,
                  ].map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </SlideUp>

        {/* ── MREI Stats Overview ── */}
        <SlideUp delay={0.05}>
        <div className="px-5 pt-5 pb-4 bg-white border-t border-neutral-100">
          <p className="text-[11px] font-semibold text-red-600 uppercase tracking-widest mb-1">Overview</p>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Manav Rachna Educational Institutions (MREI) founded in 1997, are a visible symbol of knowledge &amp; experience providing high-quality education in various fields.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { stat: '43000+', label: 'Alumni Imprints Globally' },
              { stat: '135+',   label: 'Global Academic Collaborations' },
              { stat: '5900+',  label: 'Research Papers in National/International Journals & Conferences' },
              { stat: '600+',   label: 'Reputed MNCs & Indian Corporates Patronizing MREI' },
              { stat: '900+',   label: 'Institutions Trust us' },
              { stat: '250+',   label: 'Filed/Granted Patents' },
              { stat: '80+',    label: 'Alumni & In campus Startups' },
              { stat: '60Lakh', label: 'Highest CTC' },
            ].map(({ stat, label }) => (
              <div key={stat + label} className="rounded-3xl bg-neutral-50 p-4 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{stat}</p>
                <p className="text-xs text-gray-500 leading-tight mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
        </SlideUp>

        {/* ── Schools grid ── */}
        <SlideUp delay={0.05}>
        <div className="px-5 py-6 bg-neutral-50">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-4">Explore Schools</p>
          <div className="flex justify-center gap-5 flex-wrap">
            {visibleSchools.map((school, i) => (
              <motion.button key={school.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/school/${school.id}`)} className="flex flex-col items-center gap-3 w-28 bg-white rounded-3xl p-4 shadow-sm border border-neutral-200">
                <div className="w-20 h-20 rounded-[26px] bg-white flex items-center justify-center shadow-sm" style={{ color: schoolColors[school.id] }}>
                  {schoolSVGs[school.id]}
                </div>
                <span className="text-[12px] text-center text-gray-800 font-semibold leading-tight">{school.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
        </SlideUp>

        {/* ── Fresher Guide ── */}
        <SlideUp>
        <div className="bg-white border-t border-neutral-100">
          <button onClick={() => setFresherOpen(o => !o)} className="w-full flex items-center justify-between px-5 py-4">
            <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
              Fresher Guide <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </span>
            <motion.div animate={{ rotate: fresherOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {fresherOpen && (
              <motion.div key="fresher" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <div className="px-5 pb-5 grid grid-cols-2 gap-3">
                  {fresherItems.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.button key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                        onClick={() => item.href && router.push(item.href)}
                        className={`flex items-start gap-3 bg-neutral-50 rounded-xl p-3 border border-neutral-100 text-left ${item.href ? 'active:scale-95 transition-transform' : 'opacity-70'}`}>
                        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800 leading-tight">{item.label}</p>
                          <p className="text-[10px] text-neutral-400 mt-0.5">{item.desc}</p>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </SlideUp>

        {/* ── Upcoming Events compact list ── */}
        <SlideUp>
        <div className="px-4 pt-5 pb-4 bg-neutral-50 border-t border-neutral-100">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-3">Upcoming Events</p>
          <div className="space-y-2">
            {upcomingEvents.map((ev, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 bg-white rounded-2xl px-3 py-3 border border-neutral-100 shadow-sm">
                {/* Thumbnail */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <Image src={ev.image} alt={ev.title} fill className="object-cover" unoptimized />
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-800 leading-snug truncate">{ev.title}</p>
                  <p className="text-[10px] text-neutral-400 mt-0.5 truncate">{ev.subtitle}</p>
                </div>
                {/* Date + link on right */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[10px] font-semibold text-white bg-secondary px-2 py-0.5 rounded-full">{ev.date}</span>
                  <a href="https://manavrachna.edu.in/mru" target="_blank" rel="noopener noreferrer"
                    className="text-[10px] font-semibold text-red-600 underline underline-offset-2">
                    Details →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </SlideUp>

        {/* ── Diamond Moments / Top Placements ── */}
        <SlideUp>
        <DiamondPlacements photos={placementPhotos} />
        </SlideUp>

        {/* ── Top Functionaries ── */}
        <SlideUp>
        <div className="bg-neutral-50 px-5 py-5 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">Top Functionaries</p>
              <p className="text-sm font-semibold text-gray-800">Meet the MRU leadership team</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {topFunctionaries.map((person) => (
              <div key={person.name} className="rounded-3xl bg-white overflow-hidden shadow-sm">
                <div className="relative h-32 bg-neutral-100">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{person.name}</p>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-tight">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </SlideUp>

        {/* ── Top Recruiters slideshow ── */}
        <SlideUp>
        <RecruiterSlideshow logos={recruiterLogos} />
        </SlideUp>

        {/* ── Footer ── */}
        <SlideUp>
        <div className="bg-white border-t border-neutral-100 py-4 space-y-4">
          <div className="px-5 space-y-3">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">Follow Us</p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/manavrachnauniversity/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.linkedin.com/school/manav-rachna-university/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Us — same style as social links */}
          <div className="px-5 space-y-3 border-t border-neutral-100 pt-4">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest">Contact Us</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+911294268500" className="flex items-center gap-2 text-sm text-neutral-600">
                <PhoneCall className="w-5 h-5 text-neutral-500" />
                +91-129-426-8500 (General)
              </a>
              <a href="tel:+911294259000" className="flex items-center gap-2 text-sm text-neutral-600">
                <PhoneCall className="w-5 h-5 text-neutral-500" />
                +91-129-425-9000 (Admissions)
              </a>
              <a href="mailto:admissions@manavrachna.edu.in" className="flex items-center gap-2 text-sm text-neutral-600">
                <Mail className="w-5 h-5 text-neutral-500" />
                admissions@manavrachna.edu.in
              </a>
              <div className="flex items-start gap-2 text-sm text-neutral-600">
                <MapPin className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                <span>Sector 43, Aravalli Hills, Delhi–Surajkund Road, Faridabad, Haryana 121004</span>
              </div>
            </div>
          </div>
        </div>
        </SlideUp>

      </div>

      {/* ── Floating Fresher Guide button ── */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {floatingOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85, y: 10 }} transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-3 w-56 space-y-1 mb-1">
              {fresherItems.map((item) => {
                const Icon = item.icon
                return (
                  <button key={item.label} className="flex items-center gap-3 w-full px-2 py-2 rounded-xl hover:bg-neutral-50 text-left">
                    <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-red-600" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{item.label}</span>
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileTap={{ scale: 0.92 }} onClick={() => setFloatingOpen(o => !o)}
          className="w-14 h-14 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center">
          {floatingOpen ? <X className="w-6 h-6" /> : <Star className="w-6 h-6 fill-white" />}
        </motion.button>
      </div>
    </div>
    </PageTransition>
  )
}
