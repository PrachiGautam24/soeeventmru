'use client'

import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Mic } from 'lucide-react'
import { schools } from '@/lib/schools'

export default function DeptPodcastPage() {
  const router = useRouter()
  const { id, dept } = useParams<{ id: string; dept: string }>()

  const school = schools.find(s => s.id === id)
  const department = school?.departments.find(d => d.id === dept)

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

        {/* Header */}
        <div className="relative bg-secondary overflow-hidden">
          <button onClick={() => router.back()}
            className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <div className="px-6 pt-10 pb-8 text-center">
            <h1 className="font-bold text-white text-xl leading-tight">Podcasts & Videos</h1>
            <p className="text-white/70 text-xs mt-1">
              {department ? `${department.name} · ${school?.name}` : 'Department'}
            </p>
          </div>
          <div className="h-8">
            <svg viewBox="0 0 390 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 Q195 32 390 0 L390 32 L0 32 Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Empty state */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-16">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
            <Mic className="w-7 h-7 text-secondary" />
          </div>
          <p className="text-base font-bold text-gray-800">Coming Soon</p>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            Podcasts and videos for this department will be added here.
          </p>
        </div>

      </div>
    </div>
  )
}
