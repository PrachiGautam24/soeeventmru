'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Heart, MessageCircle, Send, User as UserIcon, Rss, Sparkles } from 'lucide-react'
import { useMe } from '@/components/engage/MeProvider'
import { useXpToast } from '@/components/engage/XpToast'

type Post = {
  id: string
  content: string
  imageUrl: string | null
  eventTag: string | null
  createdAt: string
  author: { id: string; name: string | null; image: string | null; level: number }
  likeCount: number
  commentCount: number
  likedByMe: boolean
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [posting, setPosting] = useState(false)
  const { me, applyReward } = useMe()
  const { showReward, push } = useXpToast()
  const [commentsFor, setCommentsFor] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/posts?limit=30', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setPosts(d.posts ?? []))
      .finally(() => setLoading(false))
  }, [])

  async function createPost() {
    const content = text.trim()
    if (!content) return
    setPosting(true)
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    setPosting(false)
    if (!res.ok) {
      push({ kind: 'xp', title: 'Sign in to post', detail: 'Your voice earns XP.' })
      return
    }
    const data = await res.json()
    setPosts((prev) => [data.post, ...prev])
    setText('')
    if (data.reward) {
      applyReward(data.reward)
      showReward({ xp: data.reward.xpDelta, coins: data.reward.coinsDelta, leveledUp: data.reward.leveledUp, level: data.reward.level, reason: 'New post' })
    }
  }

  async function toggleLike(post: Post) {
    // Optimistic update
    setPosts((prev) =>
      prev.map((p) =>
        p.id === post.id
          ? { ...p, likedByMe: !p.likedByMe, likeCount: p.likedByMe ? p.likeCount - 1 : p.likeCount + 1 }
          : p
      )
    )
    const res = await fetch(`/api/posts/${post.id}/like`, { method: 'POST' })
    if (!res.ok) {
      // Rollback if failed
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, likedByMe: post.likedByMe, likeCount: post.likeCount } : p
        )
      )
    } else {
      const d = await res.json()
      setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, likedByMe: d.liked, likeCount: d.likeCount } : p)))
    }
  }

  return (
    <>
      <header className="px-4 pt-10 pb-3 flex items-center gap-3 sticky top-0 bg-neutral-50/80 backdrop-blur z-10">
        <Link href="/engage" className="w-9 h-9 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-neutral-700" />
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-black text-neutral-900">Campus Feed</h1>
          <p className="text-[11px] text-neutral-500">Share a moment — earn XP for every post & like.</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-md">
          <Rss className="w-5 h-5 text-white" />
        </div>
      </header>

      {/* Composer */}
      <section className="mx-4 rounded-2xl bg-white border border-neutral-100 shadow-sm p-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-neutral-100 overflow-hidden flex items-center justify-center">
            {me?.image ? <Image src={me.image} alt="me" width={36} height={36} /> : <UserIcon className="w-4 h-4 text-neutral-400" />}
          </div>
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={500}
              rows={2}
              placeholder="What's happening on campus?"
              className="w-full resize-none text-sm placeholder:text-neutral-400 focus:outline-none"
            />
            <div className="flex items-center justify-between pt-1.5 border-t border-neutral-100">
              <span className="text-[10px] text-neutral-400">{text.length}/500 • +15 XP</span>
              <button
                onClick={createPost}
                disabled={!text.trim() || posting}
                className="px-3.5 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center gap-1 disabled:opacity-40 active:scale-95"
              >
                <Sparkles className="w-3 h-3" /> Post
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="mt-3 flex flex-col gap-3 pb-4">
        {loading && Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="mx-4 h-32 rounded-2xl bg-white border border-neutral-100 animate-pulse" />
        ))}

        {!loading && posts.length === 0 && (
          <div className="mx-4 rounded-2xl bg-white border border-dashed border-neutral-200 p-6 text-center text-xs text-neutral-500">
            No posts yet. Be the first!
          </div>
        )}

        {posts.map((p) => (
          <PostCard
            key={p.id}
            post={p}
            onLike={() => toggleLike(p)}
            onToggleComments={() => setCommentsFor(commentsFor === p.id ? null : p.id)}
            showComments={commentsFor === p.id}
          />
        ))}
      </section>
    </>
  )
}

function PostCard({
  post,
  onLike,
  onToggleComments,
  showComments,
}: {
  post: Post
  onLike: () => void
  onToggleComments: () => void
  showComments: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-4 rounded-2xl bg-white border border-neutral-100 shadow-sm p-3"
    >
      <header className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-neutral-100 overflow-hidden flex items-center justify-center">
          {post.author.image ? (
            <Image src={post.author.image} alt={post.author.name ?? ''} width={40} height={40} />
          ) : (
            <UserIcon className="w-5 h-5 text-neutral-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm truncate text-neutral-900">{post.author.name ?? 'Anonymous'}</p>
            <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[9px] font-bold">L{post.author.level}</span>
          </div>
          <p className="text-[10px] text-neutral-400">{timeAgo(post.createdAt)}</p>
        </div>
      </header>

      <p className="text-sm text-neutral-800 mt-2 whitespace-pre-wrap leading-relaxed">{post.content}</p>

      {post.eventTag && (
        <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-600">
          #{post.eventTag}
        </span>
      )}

      <div className="mt-3 flex items-center gap-5 border-t border-neutral-100 pt-2">
        <button
          onClick={onLike}
          className={`flex items-center gap-1.5 text-xs font-bold transition ${post.likedByMe ? 'text-rose-500' : 'text-neutral-500'}`}
        >
          <motion.span animate={{ scale: post.likedByMe ? [1, 1.3, 1] : 1 }}>
            <Heart className={`w-4 h-4 ${post.likedByMe ? 'fill-current' : ''}`} />
          </motion.span>
          {post.likeCount}
        </button>
        <button
          onClick={onToggleComments}
          className="flex items-center gap-1.5 text-xs font-bold text-neutral-500"
        >
          <MessageCircle className="w-4 h-4" />
          {post.commentCount}
        </button>
      </div>

      <AnimatePresence>
        {showComments && <CommentThread postId={post.id} />}
      </AnimatePresence>
    </motion.article>
  )
}

function CommentThread({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Array<{ id: string; content: string; createdAt: string; author: { name: string | null; image: string | null; level: number } }>>([])
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setComments(d.comments ?? []))
      .finally(() => setLoading(false))
  }, [postId])

  async function submit() {
    if (!text.trim()) return
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: text.trim() }),
    })
    if (!res.ok) return
    const d = await res.json()
    setComments((prev) => [...prev, d.comment])
    setText('')
    inputRef.current?.focus()
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden"
    >
      <div className="mt-2 border-t border-neutral-100 pt-2 space-y-2">
        {loading && <p className="text-[10px] text-neutral-400">Loading…</p>}
        {comments.map((c) => (
          <div key={c.id} className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-neutral-100 overflow-hidden flex items-center justify-center shrink-0">
              {c.author.image ? <Image src={c.author.image} alt="" width={24} height={24} /> : <UserIcon className="w-3 h-3 text-neutral-400" />}
            </div>
            <div className="flex-1 bg-neutral-50 rounded-xl px-2.5 py-1.5">
              <p className="text-[11px] font-bold text-neutral-800">{c.author.name ?? 'Anonymous'}</p>
              <p className="text-[11px] text-neutral-700 leading-snug">{c.content}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment…"
            maxLength={280}
            className="flex-1 px-3 py-1.5 rounded-full bg-neutral-100 text-xs placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            onClick={submit}
            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function timeAgo(iso: string) {
  const d = new Date(iso)
  const s = Math.floor((Date.now() - d.getTime()) / 1000)
  if (s < 60) return `${s}s ago`
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}
