'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Track } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, Target } from 'lucide-react'
import Link from 'next/link'

export default function TracksPage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null)

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchTracks()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchTracks = async () => {
    const client = supabase()
    if (!client) {
      console.warn('Supabase not configured - using mock data')
      setTracks([])
      setLoading(false)
      return
    }

    try {
      const { data, error } = await client
        .from('tracks')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setTracks(data || [])
    } catch (error) {
      console.error('Error fetching tracks:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Conference Tracks</h1>
        </div>
      </div>

      {/* Tracks List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-28">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : tracks.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No tracks available
            </div>
          ) : (
            tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedTrack(
                    expandedTrack === track.id ? null : track.id
                  )}
                  className="w-full p-5 flex items-start gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: track.color || '#1E3A8A' }}
                  >
                    <Target className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="text-sm text-neutral-500 mb-1">{track.code}</div>
                    <h3 className="font-semibold text-neutral-800 mb-1">
                      {track.name}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {track.description}
                    </p>
                  </div>
                  
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                      expandedTrack === track.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedTrack === track.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 pt-2 border-t border-neutral-100"
                  >
                    <h4 className="font-semibold text-neutral-700 mb-3">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {track.topics?.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))
          )}
        </div>
    </AppLayout>
  )
}
