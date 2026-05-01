'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const programs = [
  { level: 'Undergraduate', items: [{ title: 'BBA', desc: 'Bachelor of Business Administration', url: 'https://manavrachna.edu.in/mru/academics/bba' }, { title: 'B.Com', desc: 'Bachelor of Commerce', url: 'https://manavrachna.edu.in/mru/academics/bcom' }] },
  { level: 'Postgraduate', items: [{ title: 'MBA – Business Analytics', desc: '2-year programme with specialisation in Business Analytics', url: 'https://manavrachna.edu.in/mru/academics/mba' }, { title: 'MBA – Finance', desc: '2-year programme with Finance specialisation', url: 'https://manavrachna.edu.in/mru/academics/mba' }, { title: 'MBA – Marketing', desc: '2-year programme with Marketing specialisation', url: 'https://manavrachna.edu.in/mru/academics/mba' }, { title: 'MBA – HR', desc: '2-year programme with Human Resources specialisation', url: 'https://manavrachna.edu.in/mru/academics/mba' }] },
  { level: 'Doctoral', items: [{ title: 'Ph.D. in Management', desc: 'Doctoral programme in Management and allied disciplines', url: 'https://manavrachna.edu.in/mru/academics/phd' }] },
]

export default function ProgramsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Programs Offered</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-4">
          {programs.map((group) => (
            <div key={group.level} className="space-y-2">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-1">{group.level}</p>
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden divide-y divide-neutral-100">
                {group.items.map((p) => (
                  <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3.5">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{p.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
