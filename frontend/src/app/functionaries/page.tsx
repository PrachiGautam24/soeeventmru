'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const functionaries = [
  // University Leadership
  { section: 'University Leadership', name: 'Dr. Prashant Bhalla', title: 'Chancellor', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Prashant-Bhalla.jpg' },
  { section: 'University Leadership', name: 'Dr. Amit Bhalla', title: 'Vice President', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Amit-Bhalla.jpg' },
  { section: 'University Leadership', name: 'Prof. (Dr.) Deependra Kumar Jha', title: 'Vice Chancellor', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Jha.jpg' },
  { section: 'University Leadership', name: 'Prof. (Dr.) Sangita Banga', title: 'Pro Vice Chancellor & Dean Education', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Sangita.jpg' },
  { section: 'University Leadership', name: 'Mr. Ramesh Nair', title: 'Registrar', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Ramesh-Nair.jpg' },
  // Academic Leadership
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Shruti Vashist', title: 'Dean Academics & Dean Research', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Shruti-Vashist.jpg' },
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Dipali Bansal', title: 'Dean Engineering', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Dipali.jpg' },
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Meena Kapahi', title: 'Director International Relations', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Meena-Kapahi.jpg' },
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Asha Verma', title: 'Dean, School of Law', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Asha-Verma.jpg' },
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Rashee Singh', title: 'Dean, School of Education & Humanities', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Rashee-Singh.jpg' },
  { section: 'Academic Leadership', name: 'Prof. (Dr.) Yogita Sharma', title: 'Dean Students Welfare', photo: 'https://manavrachna.edu.in/assets/campus/mru/images/Dr.-Yogita-Sharma.jpg' },
]

const sections = [...new Set(functionaries.map(f => f.section))]

export default function FunctionariesPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Key Functionaries</h1>
            <p className="text-white/70 text-xs mt-1">Leadership Team · Manav Rachna University</p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-5">
          {sections.map(section => (
            <div key={section}>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">{section}</p>
              <div className="space-y-2.5">
                {functionaries.filter(f => f.section === section).map((person, i) => (
                  <motion.div key={person.name}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-neutral-100 bg-secondary/10 flex items-center justify-center">
                      <Image src={person.photo} alt={person.name} fill className="object-cover" unoptimized />
                      <span className="absolute text-lg font-bold text-secondary/30">{person.name.split(' ').pop()?.[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{person.name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{person.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Link to official page */}
          <a href="https://manavrachna.edu.in/mru/about/key-functionaries" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-2xl py-3 text-sm font-semibold text-secondary shadow-sm">
            View on Official Website ↗
          </a>
        </div>
      </div>
    </div>
  )
}
