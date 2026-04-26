'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const societies = [
  {
    category: 'Cultural & Performing Arts',
    emoji: '🎭',
    color: '#db2777',
    bg: '#fdf2f8',
    items: [
      { name: 'The Dramatics Society', desc: 'Theatre, street plays & storytelling', emoji: '🎬' },
      { name: 'The Music & Dance Society', desc: 'Classical, western & fusion performances', emoji: '💃' },
      { name: 'The Cultural Society', desc: 'Festivals, traditions & cultural showcases', emoji: '🎊' },
    ],
  },
  {
    category: 'Technical & Media',
    emoji: '⚙️',
    color: '#1e4ba9',
    bg: '#e8edf8',
    items: [
      { name: 'The Technical Society', desc: 'Innovation, projects & tech competitions', emoji: '💻' },
      { name: 'The Media Society', desc: 'Journalism, photography & digital media', emoji: '📸' },
      { name: 'The Gaming Society', desc: 'Esports, game design & tournaments', emoji: '🎮' },
    ],
  },
  {
    category: 'Sports & Adventure',
    emoji: '🏆',
    color: '#16a34a',
    bg: '#e8f5ee',
    items: [
      { name: 'The Sports Society', desc: 'Inter-college & intra-college tournaments', emoji: '⚽' },
      { name: 'The Adventure Society', desc: 'Trekking, outdoor & adventure activities', emoji: '🧗' },
    ],
  },
  {
    category: 'Social & Literary',
    emoji: '📚',
    color: '#b45309',
    bg: '#fef3e2',
    items: [
      { name: 'The Literary Society', desc: 'Debates, quizzes & creative writing', emoji: '✍️' },
      { name: 'CSR Society', desc: 'Community service & social responsibility', emoji: '🤝' },
    ],
  },
]

export default function SocietiesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative" style={{ background: '#7c3aed' }}>
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <div className="text-4xl mb-2">🎭</div>
            <h1 className="font-bold text-white text-2xl leading-tight">Societies & Clubs</h1>
            <p className="text-white/80 text-sm mt-1 font-medium">Find your passion. Build your tribe.</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 space-y-5">

          {/* Hero intro */}
          <div className="rounded-2xl p-5 text-center shadow-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}>
            <p className="text-white text-lg font-extrabold leading-tight">Pick Your Passion</p>
            <p className="text-white/80 text-sm mt-1 font-medium">Where Passion Meets Platform</p>
          </div>

          {/* About */}
          <div className="rounded-2xl p-4 border border-purple-100 shadow-sm" style={{ background: '#f5f3ff' }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              Student societies function as specialized platforms that nurture talent and interest across multiple domains. MRU&apos;s societies and clubs are student-led communities where you explore interests, build skills, and create memories.
            </p>
          </div>

          {/* What's Happening */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#7c3aed' }}>
              <span className="text-lg">⚡</span>
              <p className="text-white font-bold text-sm uppercase tracking-wide">What&apos;s Happening</p>
            </div>
            <div className="px-4 py-4 bg-white">
              <div className="flex flex-wrap gap-2">
                {['Workshops', 'Competitions', 'Campaigns', 'Fests', 'Performances', 'Showcases'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: '#f5f3ff', color: '#7c3aed', border: '1px solid #e9d5ff' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed font-medium">
                Something&apos;s always happening. You just have to show up.
              </p>
            </div>
          </div>

          {/* DSW Societies visual map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-100">
            <Image
              src="/images/dsw/dsw-societies.png"
              alt="DSW Societies — Creativity | Leadership | Expression"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Society categories */}
          {societies.map((cat, ci) => (
            <div key={cat.category} className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
              {/* Category header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100"
                style={{ backgroundColor: cat.bg }}>
                <span className="text-lg">{cat.emoji}</span>
                <p className="text-sm font-bold" style={{ color: cat.color }}>{cat.category}</p>
              </div>
              {/* Items */}
              <div className="divide-y divide-neutral-100">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: ci * 0.05 + i * 0.06, type: 'spring', stiffness: 260, damping: 22 }}
                    className="flex items-center gap-3 px-4 py-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ backgroundColor: cat.bg }}>
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="rounded-2xl p-4 text-center" style={{ background: '#f5f3ff', border: '1px solid #e9d5ff' }}>
            <p className="text-sm font-bold text-purple-700 mb-1">Want to join a society?</p>
            <p className="text-xs text-purple-400 leading-relaxed">Visit the DSW office or reach out to the respective society coordinator during orientation week.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
