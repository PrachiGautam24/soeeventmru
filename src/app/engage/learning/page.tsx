'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ChevronLeft, ExternalLink, Search, Sparkles } from 'lucide-react'

type Pathway = {
  id: string
  slug: string
  title: string
  description: string | null
  department: string | null
  semester: string | null
  tags: string[]
  totalCourses: number
  completedCourses: number
  progressPercent: number
  totalXp: number
}

const tagFilters = ['all', 'cse', 'ai', 'ml', 'cloud', 'data', 'devops']

export default function LearningPathwaysPage() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('all')
  const [pathways, setPathways] = useState<Pathway[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams()
    if (search.trim()) params.set('search', search.trim())
    if (tag !== 'all') params.set('tag', tag)
    setLoading(true)
    fetch(`/api/learning/pathways?${params.toString()}`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setPathways(d.pathways ?? []))
      .finally(() => setLoading(false))
  }, [search, tag])

  const highlighted = useMemo(() => pathways.slice(0, 3), [pathways])

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">E-Learning Pathways</h1>
          <p className="text-[11px] text-neutral-500">Curated LinkedIn Learning tracks for MRU students.</p>
        </div>
      </header>

      <section className="mx-4 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 border border-sky-200 p-4">
        <p className="text-sm font-bold text-sky-900">LinkedIn Learning access via MRU email</p>
        <p className="text-xs text-sky-700 mt-1">Open courses directly with your `@mru.edu.in` account and submit completion proof to earn XP and badges.</p>
      </section>

      <section className="mx-4 mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pathways, skills, topics"
            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm"
          />
        </div>
        <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1">
          {tagFilters.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                tag === t ? 'bg-sky-100 text-sky-700 border-sky-300' : 'bg-white text-neutral-500 border-neutral-200'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-4 mt-4 grid gap-3 md:grid-cols-3">
        {highlighted.map((p) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white border border-neutral-200 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-neutral-800">{p.title}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 line-clamp-2">{p.description ?? 'Curated learning track.'}</p>
              </div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-neutral-100 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500" style={{ width: `${p.progressPercent}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
              <span>{p.completedCourses}/{p.totalCourses} done</span>
              <span className="font-semibold text-neutral-700">{p.totalXp} XP</span>
            </div>
            <Link href={`/engage/learning/${p.slug}`} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
              View Pathway <ExternalLink className="w-3 h-3" />
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="mx-4 mt-4 mb-3 rounded-2xl bg-white border border-neutral-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">All pathways</p>
          <span className="text-[11px] text-neutral-400">{pathways.length} tracks</span>
        </div>
        <div className="divide-y divide-neutral-100">
          {loading && <div className="p-4 text-xs text-neutral-400">Loading pathways...</div>}
          {!loading && pathways.length === 0 && <div className="p-4 text-xs text-neutral-500">No pathways found for this filter.</div>}
          {pathways.map((p) => (
            <Link key={p.id} href={`/engage/learning/${p.slug}`} className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-neutral-800 truncate">{p.title}</p>
                <p className="text-[11px] text-neutral-500">{p.totalCourses} courses · {p.department ?? 'All'} · Sem {p.semester ?? '-'}</p>
              </div>
              <span className="text-xs font-bold text-neutral-700">{p.progressPercent}%</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

