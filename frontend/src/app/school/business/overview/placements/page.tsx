'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const globalPlacements = [
  { name: 'Ashwat Gupta', program: 'BBA', batch: '2016–2019', role: 'Sales Consultant', company: 'Bell, Ontario, Canada', photo: '/images/business/placements/Global/Ashwat Gupta.jpg' },
  { name: 'Bikas Kansariya', program: 'BBA', batch: '2016–2019', role: 'Sr. Sales Associate', company: 'Coach, Oxford, England, UK', photo: '/images/business/placements/Global/Bikash Kansaria.jpg' },
  { name: 'Purnima Kapoor', program: 'BBA', batch: '2017–2020', role: 'Senior Content Associate', company: 'Edisol', photo: '/images/business/placements/UG placements/Purnima K.jpg' },
  { name: 'Ishita Khanna', program: 'BBA', batch: '2018–2021', role: 'Customer Data Analyst', company: 'Comprara, Melbourne, Australia', photo: '/images/business/placements/Global/Ishita Khanna.jpg' },
]

const ugPlacements = [
  { name: 'Ujjawal Bhalla', program: 'BBA', batch: '2021–2024', role: '', company: 'PlanetSpark', photo: '/images/business/placements/UG placements/UJJAWAL BHALLA.jpg' },
  { name: 'Ekta Bhatia', program: 'BBA', batch: '2021–2024', role: '', company: 'Zomato', photo: '/images/business/placements/UG placements/Ekta.jpeg' },
  { name: 'Tuhin Garg', program: 'BBA', batch: '2017–2020', role: '', company: 'Infosys', photo: '/images/business/placements/UG placements/Tuhin Garg.jpg' },
  { name: 'Shruti Singh', program: 'BBA', batch: '2018–2021', role: 'HR Executive (Central Onboarding)', company: 'Axis Max Life Insurance, Gurugram', photo: '/images/business/placements/UG placements/Shruti SIngh.jpg' },
  { name: 'Jishnu Kopparapu', program: 'BBA', batch: '2018–2021', role: 'Team Leader', company: 'Final Mile Techies LLP', photo: '/images/business/placements/UG placements/Jishnu.jpg' },
  { name: 'Deepsi Batra', program: 'BBA', batch: '2018–2021', role: 'Sales Coordinator', company: 'Röhlig Logistics', photo: '/images/business/placements/Global/Deepsi.jpg' },
  { name: 'Vansh Mittal', program: 'BBA', batch: '2018–2021', role: 'Credit Risk Analyst', company: 'JP Morgan', photo: '/images/business/placements/UG placements/Vansh Mittal.jpg' },
]

const mbaPlacements = [
  { name: 'Ashutosh Singh', program: 'MBA – Business Analytics', batch: '2023–2025', role: 'Business Analyst', company: 'InsightGeeks', photo: '/images/business/placements/PG placements/Ashutosh.jpeg' },
  { name: 'Kriti Ranjan', program: 'MBA – Business Analytics', batch: '2024–2026', role: 'Project Management Consultant', company: 'ADP', photo: '/images/business/placements/PG placements/Kriti.jpeg' },
  { name: 'Supriya Arora', program: 'MBA – Business Analytics', batch: '2024–2026', role: '', company: 'AXA (XL India Business Services)', photo: '/images/business/placements/PG placements/Supriya.jpeg' },
  { name: 'Dipanshu Sapra', program: 'MBA – Business Analytics', batch: '2022–2024', role: 'CPM', company: '', photo: '/images/business/placements/PG placements/Dipanshu Sapra.jfif' },
  { name: 'Soumya Jha', program: 'MBA – Business Analytics', batch: '2022–2024', role: 'Business Development', company: 'COSENTUS, Dubai, UAE', photo: '/images/business/placements/PG placements/SOUMYA JHA MBA 2024 PASSOUT.jpg' },
  { name: 'Sachin Rawat', program: 'MBA – Business Analytics', batch: '2022–2024', role: 'Business Analyst', company: 'PW (PhysicsWallah)', photo: '/images/business/placements/PG placements/Sachin.jpg' },
  { name: 'Janhavi Sharma', program: 'MBA – Business Analytics', batch: '2023–2025', role: 'Relationship Manager', company: 'Prosperr.io', photo: '/images/business/placements/PG placements/Janhavi.jpg' },
  { name: 'Pranjal Jain', program: 'MBA – Business Analytics', batch: '2024–2026', role: 'Associate Analyst II', company: 'AML Rightsource', photo: '/images/business/placements/PG placements/Pranjal.jpeg' },
  { name: 'Simardeep Kaur', program: 'MBA – Business Analytics', batch: '2024–2026', role: 'F&A', company: 'Shahi Exports', photo: '/images/business/placements/PG placements/Simarpreet.jpeg' },
]

function PlacementSection({ title, data }: { title: string; data: typeof ugPlacements }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-4 py-3.5">
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400">{data.length} alumni</span>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4 text-neutral-400" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="d" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neutral-100">
            <div className="divide-y divide-neutral-100">
              {data.map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100 shrink-0">
                    <Image src={p.photo} alt={p.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                    <p className="text-xs text-neutral-500">{p.program} · {p.batch}</p>
                    {(p.role || p.company) && (
                      <p className="text-xs text-secondary mt-0.5">{[p.role, p.company].filter(Boolean).join(' · ')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PlacementsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <div className="relative bg-secondary">
          <button onClick={() => router.back()} className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-white" /></button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl">Campus to Corporate</h1>
            <p className="text-white/70 text-xs mt-1">Placement Highlights · School of Business</p>
          </div>
          <div className="h-8"><svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none"><path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" /></svg></div>
        </div>
        <div className="flex-1 bg-neutral-50 overflow-y-auto px-4 py-4 space-y-3">
          <PlacementSection title="🌍 Global Placements — BBA" data={globalPlacements} />
          <PlacementSection title="🎓 BBA Placements" data={ugPlacements} />
          <PlacementSection title="📊 MBA — Business Analytics" data={mbaPlacements} />
        </div>
      </div>
    </div>
  )
}
