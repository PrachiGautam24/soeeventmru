'use client'

import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'

type AdminItem = {
  id: string
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
  proofType: string
  proofUrl: string | null
  proofText: string | null
  notes: string | null
  createdAt: string
  user: { id: string; name: string | null; email: string; department: string | null }
  course: { id: string; title: string; xpReward: number; badgeSlug: string | null; pathway: { title: string } }
}

export default function AdminLearningPage() {
  const [items, setItems] = useState<AdminItem[]>([])
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState<Record<string, string>>({})

  async function load() {
    setLoading(true)
    const res = await fetch('/api/admin/learning/completions?status=pending', { cache: 'no-store' })
    const data = await res.json().catch(() => ({}))
    setItems(data.items ?? [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function approve(id: string) {
    const res = await fetch(`/api/admin/learning/completions/${id}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes: note[id] ?? '' }),
    })
    if (!res.ok) return
    await load()
  }

  async function reject(id: string) {
    const msg = (note[id] ?? '').trim()
    if (!msg) return
    const res = await fetch(`/api/admin/learning/completions/${id}/reject`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes: msg }),
    })
    if (!res.ok) return
    await load()
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-black text-neutral-900">Learning Completion Review</h1>
        <p className="text-sm text-neutral-500 mt-1">Approve or reject student proofs for XP and badge awards.</p>

        {loading && <div className="mt-6 text-sm text-neutral-500">Loading pending requests...</div>}
        {!loading && items.length === 0 && <div className="mt-6 text-sm text-neutral-500">No pending completion requests.</div>}

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white border border-neutral-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-neutral-800">{item.course.title}</p>
                  <p className="text-xs text-neutral-500">{item.course.pathway.title} · +{item.course.xpReward} XP</p>
                  <p className="text-xs text-neutral-600 mt-1">Student: {item.user.name ?? 'Student'} ({item.user.email})</p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold">{item.status}</span>
              </div>

              <div className="mt-3 text-xs text-neutral-700 space-y-1">
                {item.proofUrl && (
                  <p>
                    Proof URL:{' '}
                    <a href={item.proofUrl} target="_blank" rel="noreferrer" className="text-primary underline break-all">
                      {item.proofUrl}
                    </a>
                  </p>
                )}
                {item.proofText && <p>Proof Note: {item.proofText}</p>}
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <textarea
                  value={note[item.id] ?? ''}
                  onChange={(e) => setNote((prev) => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Optional note for approval, required for rejection"
                  className="w-full min-h-20 rounded-xl border border-neutral-200 p-2 text-sm"
                />
                <div className="flex items-center gap-2">
                  <button onClick={() => approve(item.id)} className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold inline-flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Approve
                  </button>
                  <button onClick={() => reject(item.id)} className="px-3 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold inline-flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Reject
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

