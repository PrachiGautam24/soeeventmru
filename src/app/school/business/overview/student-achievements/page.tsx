'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const achievements = [
  { name: 'Kunal Garg', program: 'BBA FAA', batch: '2023–26', achievement: 'President, Student Council, OP Bhalla Foundation', photo: '/images/business/student-achievements/WhatsApp Image 2026-01-18 at 2.35.59 PM.jpeg' },
  { name: 'Kunal Gandhi', program: 'BBA FAA', batch: '2023–26', achievement: 'Vice President, Student Council, OP Bhalla Foundation', photo: '/images/business/student-achievements/Kunal Gandhi_dean_s list_photo_BBA FAA sem 6.jpeg' },
  { name: 'Kashish', program: 'BBA FAA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/Jigyanshu Garg_Dean_s list_pic_BBA FAA sem 6.jpeg' },
  { name: 'Rinki', program: 'BBA FAA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/Jigyanshu Garg_Dean_s list_pic_BBA FAA sem 6.jpeg' },
  { name: 'Jigyanshu Garg', program: 'BBA FAA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/Jigyanshu Garg_Dean_s list_pic_BBA FAA sem 6.jpeg' },
  { name: 'Yogita Jindal', program: 'BBA FAA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/Jigyanshu Garg_Dean_s list_pic_BBA FAA sem 6.jpeg' },
  { name: 'Jahanvi', program: 'BBA BA', batch: '2024–27', achievement: 'VC List and Dean List', photo: '/images/business/student-achievements/Jahanvi bba ba 2024.jpeg', url: 'https://drive.google.com/file/d/1ngPbQWy8DcZjJiebK5ao08B3rj06VFYO/view?usp=sharing' },
  { name: 'Jaya', program: 'BBA BA', batch: '2024–27', achievement: "Dean's List", photo: '/images/business/student-achievements/jaya bba ba 2024.jpeg', url: 'https://drive.google.com/file/d/1O7iRUe7XThFH5S4O5i-8yn9L4JjFGToM/view?usp=sharing' },
  { name: 'Tanvi Raghav', program: 'BBA BA', batch: '2024–27', achievement: 'VC List and Dean List', photo: '/images/business/student-achievements/tanvi bba ba 2024 1.jpeg', url: 'https://drive.google.com/file/d/1O7iRUe7XThFH5S4O5i-8yn9L4JjFGToM/view?usp=sharing' },
  { name: 'Khushi', program: 'BBA BA', batch: '2024–27', achievement: "Dean's List", photo: '/images/business/student-achievements/khushi bba ba 2024.jpeg', url: 'https://drive.google.com/file/d/1N4KtCVYQWFcP2n6cBTe2GLC2GKQ2Jluc/view?usp=sharing' },
  { name: 'Sartaj Nagpal', program: 'BBA BA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/Sartaj Nagpal BBA BA 2023.jpeg', url: 'https://drive.google.com/file/d/1Y1ShPR4LoqdFje8g7bODFWGUP-HESJby/view?usp=share_link' },
  { name: 'Rakshan Attri', program: 'BBA BA', batch: '2023–26', achievement: "Dean's List", photo: '/images/business/student-achievements/RakshaN Attri bba BA 2023.jpeg', url: 'https://drive.google.com/file/d/1LvvePm_r9bZzy0NLJuVJX9MplWvnzAPQ/view?usp=share_link' },
]

export default function StudentAchievementsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Student Achievements</h1>
            <p className="text-white/70 text-xs mt-1">School of Business · MRU</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden flex">
              <div className="relative w-20 shrink-0 bg-neutral-100">
                <Image src={a.photo} alt={a.name} fill className="object-cover" unoptimized />
              </div>
              <div className="p-3 flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900">{a.name}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{a.program} · {a.batch}</p>
                <p className="text-xs font-semibold text-secondary mt-1">{a.achievement}</p>
                {'url' in a && a.url && (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-secondary underline mt-1 inline-block">View Certificate ↗</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
