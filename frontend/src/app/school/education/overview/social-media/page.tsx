'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const links = [
  { label: 'Instagram', emoji: '📸', handle: '@soeh_manav_rachna', url: 'https://www.instagram.com/soeh_manav_rachna?igsh=cjYyM25sYTFqZWV0&utm_source=qr', desc: 'Follow SoEH on Instagram for updates, events, and student life.' },
  { label: 'LinkedIn', emoji: '💼', handle: 'School of Education & Humanities MRU', url: 'https://www.linkedin.com/showcase/school-of-education-and-humanities-mru/', desc: 'Connect with SoEH on LinkedIn for professional updates and alumni news.' },
  { label: 'Magazine — Becoming', emoji: '📖', handle: 'soehmru.com', url: 'https://www.soehmru.com', desc: 'Read the official SoEH magazine "Becoming" — stories, research, and insights from the school.' },
]

export default function SocialMediaPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Social Media & Magazine</h1>
            <p className="text-white/70 text-xs mt-1">School of Education & Humanities</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white rounded-2xl border border-neutral-100 shadow-sm px-4 py-4">
              <span className="text-3xl shrink-0">{l.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800">{l.label}</p>
                <p className="text-xs text-secondary font-semibold mt-0.5">{l.handle}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{l.desc}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-secondary shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
