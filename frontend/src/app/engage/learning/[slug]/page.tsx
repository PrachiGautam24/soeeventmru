'use client'

import Link from 'next/link'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ChevronLeft, ExternalLink, CheckCircle2, Clock3 } from 'lucide-react'
import { useXpToast } from '@/components/engage/XpToast'

type Completion = {
  id: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  proofType: 'CERTIFICATE_URL' | 'PROFILE_URL' | 'TEXT_NOTE'
  proofUrl: string | null
  proofText: string | null
  notes: string | null
}

type Course = {
  id: string
  title: string
  description: string | null
  url: string
  duration: string | null
  difficulty: string | null
  xpReward: number
  completion: Completion | null
}

type Pathway = {
  id: string
  title: string
  description: string | null
  totalCourses: number
  approvedCount: number
  progressPercent: number
  courses: Course[]
}

const STORAGE_KEY = 'learning_pending_submissions'

export default function LearningPathwayDetailPage() {
  const params = useParams<{ slug: string }>()
  const { showReward } = useXpToast()
  const [pathway, setPathway] = useState<Pathway | null>(null)
  const [loading, setLoading] = useState(true)
  const [submittingFor, setSubmittingFor] = useState<string | null>(null)
  const [proofValue, setProofValue] = useState<Record<string, string>>({})

  const applySavedSubmissions = (data: Pathway) => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as Record<string, Completion>

    const courses = data.courses.map((course) => ({
      ...course,
      completion: saved[course.id] ?? course.completion,
    }))

    const approvedCount = courses.filter(
      (course) => course.completion?.status === 'APPROVED'
    ).length

    return {
      ...data,
      courses,
      approvedCount,
      progressPercent:
        data.totalCourses === 0
          ? 0
          : Math.round((approvedCount / data.totalCourses) * 100),
    }
  }

  const load = useCallback(async () => {
    setLoading(true)

    const res = await fetch(`/api/learning/pathways/${params.slug}`, {
      cache: 'no-store',
    })

    const data = await res.json().catch(() => ({}))

    if (data.pathway) {
      setPathway(applySavedSubmissions(data.pathway))
    } else {
      setPathway(null)
    }

    setLoading(false)
  }, [params.slug])

  useEffect(() => {
    if (params.slug) load()
  }, [params.slug, load])

  async function submitProof(e: FormEvent, course: Course) {
    e.preventDefault()

    const value = proofValue[course.id]?.trim()
    if (!value || !pathway) return

    setSubmittingFor(course.id)

    const isUrl = /^https?:\/\//i.test(value)

    const pendingCompletion: Completion = {
      id: `pending-${course.id}`,
      status: 'PENDING',
      proofType: isUrl ? 'CERTIFICATE_URL' : 'TEXT_NOTE',
      proofUrl: isUrl ? value : null,
      proofText: isUrl ? null : value,
      notes: null,
    }

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as Record<string, Completion>
    saved[course.id] = pendingCompletion
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))

    const updatedCourses = pathway.courses.map((c) =>
      c.id === course.id
        ? { ...c, completion: pendingCompletion }
        : c
    )

    const approvedCount = updatedCourses.filter(
      (c) => c.completion?.status === 'APPROVED'
    ).length

    setPathway({
      ...pathway,
      courses: updatedCourses,
      approvedCount,
      progressPercent:
        pathway.totalCourses === 0
          ? 0
          : Math.round((approvedCount / pathway.totalCourses) * 100),
    })

    setProofValue((prev) => ({
      ...prev,
      [course.id]: '',
    }))

    setSubmittingFor(null)

    showReward({
      xp: 0,
      coins: 0,
      leveledUp: false,
      level: 0,
      reason: 'Completion submitted for review',
    })
  }

  if (loading) {
    return (
      <div className="px-4 pt-12 text-sm text-neutral-500">
        Loading pathway...
      </div>
    )
  }

  if (!pathway) {
    return (
      <div className="px-4 pt-12 text-sm text-neutral-500">
        Pathway not found.
      </div>
    )
  }

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link
          href="/engage/learning"
          className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>

        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-black text-neutral-900 truncate">
            {pathway.title}
          </h1>

          <p className="text-[11px] text-neutral-500">
            {pathway.approvedCount}/{pathway.totalCourses} approved ·{' '}
            {pathway.progressPercent}% complete
          </p>
        </div>
      </header>

      <section className="mx-4 rounded-2xl bg-white border border-neutral-200 p-4">
        <p className="text-sm text-neutral-700">
          {pathway.description ?? 'Curated LinkedIn learning pathway.'}
        </p>

        <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
            style={{ width: `${pathway.progressPercent}%` }}
          />
        </div>
      </section>

      <section className="mx-4 mt-3 mb-4 space-y-3">
        {pathway.courses.map((course, idx) => (
          <div
            key={course.id}
            className="rounded-2xl bg-white border border-neutral-200 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-700 text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-neutral-900">
                  {course.title}
                </p>

                {course.description && (
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {course.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-neutral-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="w-3 h-3" />
                    {course.duration ?? 'Self paced'}
                  </span>

                  <span>{course.difficulty ?? 'General'}</span>

                  <span className="font-bold text-primary">
                    +{course.xpReward} XP
                  </span>
                </div>
              </div>

              <a
                href={course.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-secondary inline-flex items-center gap-1"
              >
                Open <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-3">
              {course.completion?.status === 'APPROVED' ? (
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Approved and rewarded
                </div>
              ) : course.completion?.status === 'PENDING' ? (
                <div className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 inline-flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  Pending review
                </div>
              ) : (
                <form
                  onSubmit={(e) => submitProof(e, course)}
                  className="flex flex-col gap-2"
                >
                  <input
                    value={proofValue[course.id] ?? ''}
                    onChange={(e) =>
                      setProofValue((prev) => ({
                        ...prev,
                        [course.id]: e.target.value,
                      }))
                    }
                    placeholder="Paste certificate URL or add proof note"
                    className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                  />

                  <button
                    type="submit"
                    disabled={submittingFor === course.id}
                    className="w-fit px-3 py-1.5 rounded-lg bg-secondary text-white text-xs font-semibold disabled:opacity-60"
                  >
                    {submittingFor === course.id
                      ? 'Submitting...'
                      : course.completion?.status === 'REJECTED'
                        ? 'Resubmit Proof'
                        : 'Submit for Approval'}
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}