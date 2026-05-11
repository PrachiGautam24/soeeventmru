'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Pathway = {
  id: string
  slug: string
  title: string
  description: string | null
  totalCourses?: number
  approvedCount?: number
  progressPercent?: number
}

export default function LearningPage() {
  const router = useRouter()
  const [pathways, setPathways] = useState<Pathway[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/learning/pathways', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setPathways(data.pathways ?? []))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        <div className="relative bg-secondary px-5 pt-10 pb-6 rounded-b-3xl shadow-lg">
          <button
            onClick={() => router.push('/engage')}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>

          <div className="text-center">
            <h1 className="text-white text-xl font-bold">Learning Pathways</h1>
            <p className="text-white/70 text-xs mt-1">
              Complete courses, submit proof, earn XP and badges
            </p>
          </div>
        </div>

        <div className="mx-4 mt-4 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 space-y-1">
          <p className="font-semibold">How to test this feature:</p>
          <p>1. Open any learning pathway</p>
          <p>2. Select a course and paste certificate proof</p>
          <p>3. Click “Submit for Approval”</p>
          <p>4. Admin reviews and approves the submission</p>
          <p>5. XP, badges and progress update automatically</p>
        </div>

        <Link
          href="/admin/learning"
          className="mx-4 mt-3 flex items-center justify-center rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-md"
        >
          Admin Review Panel (Admin Login Required)
        </Link>

        <div className="px-4 mt-5 space-y-3">
          {loading && (
            <div className="text-sm text-neutral-500">Loading pathways...</div>
          )}

          {!loading && pathways.length === 0 && (
            <div className="bg-white rounded-2xl p-4 text-sm text-neutral-500">
              No pathways found. Run seed data first.
            </div>
          )}

          {pathways.map(pathway => (
            <Link
              key={pathway.id}
              href={`/engage/learning/${pathway.slug}`}
              className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 text-xl">
                🎓
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">
                  {pathway.title}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">
                  {pathway.description ?? 'Curated LinkedIn Learning pathway'}
                </p>

                <div className="mt-2 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-600"
                    style={{ width: `${pathway.progressPercent ?? 0}%` }}
                  />
                </div>

                <p className="text-[10px] text-neutral-400 mt-1">
                  {pathway.approvedCount ?? 0}/{pathway.totalCourses ?? 0} courses approved
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}