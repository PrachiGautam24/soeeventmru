'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@manavrachnauniversity',
    url: 'https://www.instagram.com/manavrachnauniversity/',
    color: 'bg-gradient-to-br from-pink-500 to-orange-400',
    emoji: '📸',
  },
  {
    name: 'LinkedIn',
    handle: 'Manav Rachna University',
    url: 'https://www.linkedin.com/school/manav-rachna-university/',
    color: 'bg-blue-600',
    emoji: '💼',
  },
  {
    name: 'YouTube',
    handle: 'Manav Rachna University',
    url: 'https://www.youtube.com/@ManavRachnaUniversity',
    color: 'bg-red-600',
    emoji: '▶️',
  },
  {
    name: 'Facebook',
    handle: 'Manav Rachna University',
    url: 'https://www.facebook.com/ManavRachnaUniversity/',
    color: 'bg-blue-700',
    emoji: '📘',
  },
  {
    name: 'Twitter / X',
    handle: '@ManavRachnaUniv',
    url: 'https://twitter.com/ManavRachnaUniv',
    color: 'bg-neutral-900',
    emoji: '🐦',
  },
]

const quickLinks = [
  { name: 'Official Website', url: 'https://manavrachna.edu.in/mru', desc: 'Main MRU website' },
  { name: 'Admissions Portal', url: 'https://apply.manavrachna.edu.in/mru', desc: 'Apply for 2026–27' },
  { name: 'Student Portal', url: 'https://learn.manavrachna.edu.in', desc: 'E-learning platform' },
  { name: 'Academic Circulars', url: 'https://manavrachna.edu.in/mru/academics/circular', desc: 'Exams & notices' },
  { name: 'Hostel Info', url: 'https://manavrachna.edu.in/mru/life/hostel', desc: 'Rooms & fees 2026–27' },
  { name: 'Clans', url: 'https://manavrachna.edu.in/mru/life/clan', desc: 'Student community' },
  { name: 'E-Resources', url: 'https://idp.manavrachna.edu.in', desc: 'Library & journals' },
]

export default function QuickLinksPage() {
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <h1 className="text-white text-xl font-bold">Quick Links</h1>
          <p className="text-white/70 text-xs mt-1">Social media & important MRU links</p>
        </div>

        <div className="px-4 mt-5 space-y-5">

          {/* Social Media */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Follow MRU</p>
          <div className="space-y-2.5">
            {socialLinks.map((s, i) => (
              <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center shrink-0 text-xl`}>
                  {s.emoji}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-800">{s.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{s.handle}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-300 shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-2">Important Links</p>
          <div className="space-y-2.5">
            {quickLinks.map((l, i) => (
              <motion.a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.06 }}
                className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold text-xs text-center leading-tight px-1">{l.name[0]}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-800">{l.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{l.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-300 shrink-0" />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
