'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { schools } from '@/lib/schools'

const schoolColors: Record<string, string> = {
  soe: '#1e4ba9', law: '#b45309', education: '#16a34a', business: '#b12a2e', science: '#7c3aed',
}

const visibleSchools = schools.filter(s => s.id !== 'media')

export default function DepartmentsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">
        <div className="bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <h1 className="text-white text-xl font-bold">Departments</h1>
          <p className="text-white/70 text-xs mt-1">Explore all schools & departments</p>
        </div>
        <div className="px-4 mt-5 space-y-2.5">
          {visibleSchools.map((school, i) => (
            <motion.button key={school.id}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(`/school/${school.id}`)}
              className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: schoolColors[school.id] + '18', color: schoolColors[school.id] }}>
                <span className="text-lg font-bold">{school.name[0]}</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-gray-800">{school.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{school.tagline}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
