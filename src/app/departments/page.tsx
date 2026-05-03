'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronRight, Search } from 'lucide-react'
import { schools } from '@/lib/schools'

// Flatten all departments across all schools
const allDepartments = schools.flatMap(school =>
  school.departments.map(dept => ({
    ...dept,
    schoolId: school.id,
    schoolName: school.name,
    schoolColor: school.id === 'soe' ? '#1e4ba9'
      : school.id === 'law' ? '#b45309'
      : school.id === 'education' ? '#16a34a'
      : school.id === 'business' ? '#b12a2e'
      : school.id === 'science' ? '#7c3aed'
      : '#e11d48',
  }))
)

function getRoute(schoolId: string, deptId: string) {
  if (schoolId === 'law') return '/school/law/overview'
  if (schoolId === 'business') return '/school/business/overview'
  if (schoolId === 'education') return '/school/education/overview'
  if (schoolId === 'science') return '/school/science'
  return `/school/${schoolId}/${deptId}`
}

export default function DepartmentsPage() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? allDepartments.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.code.toLowerCase().includes(query.toLowerCase()) ||
        d.schoolName.toLowerCase().includes(query.toLowerCase())
      )
    : allDepartments

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="bg-secondary px-5 pt-10 pb-5 rounded-b-3xl shadow-lg">
          <h1 className="text-white text-xl font-bold mb-3">Departments</h1>
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search departments, schools..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-sm text-gray-700 placeholder-neutral-400 focus:outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="px-4 mt-4 space-y-2.5">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-neutral-400 py-12">No departments found.</p>
          )}
          {filtered.map((dept, i) => (
            <motion.button key={`${dept.schoolId}-${dept.id}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(getRoute(dept.schoolId, dept.id))}
              className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-neutral-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ backgroundColor: dept.schoolColor + '18' }}>
                {dept.icon}
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{dept.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{dept.schoolName} · {dept.code}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
            </motion.button>
          ))}
        </div>

      </div>
    </div>
  )
}
