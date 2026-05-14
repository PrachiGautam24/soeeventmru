'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Check, X, ArrowLeft } from 'lucide-react'

type CompletionData = {
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  proofUrl?: string
  proofText?: string
}

type AdminItem = {
  id: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  proofUrl: string | null
  proofText: string | null

  user: {
    name: string
    email: string
  }

  course: {
    title: string
    xpReward: number

    pathway: {
      title: string
    }
  }
}

const STORAGE_KEY = 'learning_pending_submissions'

export default function AdminLearningPage() {
  const [items, setItems] = useState<AdminItem[]>([])
  const [note, setNote] = useState<Record<string, string>>({})

  useEffect(() => {
    const saved: Record<string, CompletionData> = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{}'
    )

    const formattedItems: AdminItem[] = Object.entries(saved).map(
      ([courseId, completion], index) => ({
        id: courseId,

        status: completion.status,

        proofUrl: completion.proofUrl || null,
        proofText: completion.proofText || null,

        user: {
          name: 'Student',
          email: 'student@mru.edu.in',
        },

        course: {
          title: `Course ${index + 1}`,
          xpReward: 120,

          pathway: {
            title: 'AI / ML Track',
          },
        },
      })
    )

    setItems(formattedItems)
  }, [])

  function approve(id: string) {
    const saved: Record<string, CompletionData> = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{}'
    )

    if (saved[id]) {
      saved[id].status = 'APPROVED'

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(saved)
      )
    }

    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  function reject(id: string) {
    const saved: Record<string, CompletionData> = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{}'
    )

    if (saved[id]) {
      saved[id].status = 'REJECTED'

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(saved)
      )
    }

    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 pb-32">

        <Link
          href="/engage/learning"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Learning Pathways
        </Link>

        <h1 className="text-2xl font-black text-neutral-900">
          Admin Review Panel
        </h1>

        <p className="text-sm text-neutral-500 mt-1">
          Review student course completion proofs and approve valid submissions.
        </p>

        {items.length === 0 && (
          <div className="mt-6 rounded-2xl bg-white border border-neutral-200 p-4 text-sm text-neutral-500">
            No pending completion requests.
          </div>
        )}

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-neutral-200 p-4"
            >
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm font-bold text-neutral-800">
                    {item.course.title}
                  </p>

                  <p className="text-xs text-neutral-500">
                    {item.course.pathway.title}
                  </p>

                  <p className="text-xs text-neutral-600 mt-1">
                    Student: {item.user.name}
                  </p>
                </div>

                <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold">
                  {item.status}
                </span>
              </div>

              <div className="mt-3 text-xs text-neutral-700 space-y-1">

                {item.proofUrl && (
                  <p>
                    Proof URL:{' '}
                    <a
                      href={item.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline break-all"
                    >
                      {item.proofUrl}
                    </a>
                  </p>
                )}

                {item.proofText && (
                  <p>
                    Proof Note: {item.proofText}
                  </p>
                )}
              </div>

              <div className="mt-3 flex flex-col gap-2">

                <textarea
                  value={note[item.id] ?? ''}
                  onChange={(e) =>
                    setNote((prev) => ({
                      ...prev,
                      [item.id]: e.target.value,
                    }))
                  }
                  placeholder="Optional note"
                  className="w-full min-h-20 rounded-xl border border-neutral-200 p-2 text-sm"
                />

                <div className="flex items-center gap-2">

                  <button
                    onClick={() => approve(item.id)}
                    className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Approve
                  </button>

                  <button
                    onClick={() => reject(item.id)}
                    className="px-3 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold inline-flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    Reject
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}