'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Session } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, MapPin, User, Calendar, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function SessionTrackerPage() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchSessions()
    } else {
      setLoading(false)
    }

    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const fetchSessions = async () => {
    const client = supabase()
    if (!client) {
      console.warn('Supabase not configured - using mock data')
      setSessions([])
      setLoading(false)
      return
    }

    try {
      const { data, error } = await client
        .from('sessions')
        .select('*')
        .order('date', { ascending: true })
        .order('start_time', { ascending: true })

      if (error) throw error
      setSessions(data || [])
    } catch (error) {
      console.error('Error fetching sessions:', error)
    } finally {
      setLoading(false)
    }
  }

  const isSessionCompleted = (session: Session) => {
    const sessionDateTime = new Date(`${session.date}T${session.end_time}`)
    return currentTime > sessionDateTime
  }

  const isSessionUpcoming = (session: Session) => {
    const sessionDateTime = new Date(`${session.date}T${session.start_time}`)
    return currentTime < sessionDateTime
  }

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const upcomingSessions = sessions.filter(isSessionUpcoming)
  const completedSessions = sessions.filter(isSessionCompleted)

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Session Tracker</h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 pt-28 space-y-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            {/* Upcoming Sessions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-neutral-800">
                  Upcoming Sessions ({upcomingSessions.length})
                </h2>
              </div>
              
              {upcomingSessions.length === 0 ? (
                <div className="bg-white rounded-xl p-6 text-center text-neutral-500">
                  No upcoming sessions
                </div>
              ) : (
                <div className="space-y-3">
                  {upcomingSessions.map((session, index) => (
                    <SessionCard 
                      key={session.id} 
                      session={session} 
                      index={index}
                      completed={false}
                      formatTime={formatTime}
                      formatDate={formatDate}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Completed Sessions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold text-neutral-800">
                  Completed Sessions ({completedSessions.length})
                </h2>
              </div>
              
              {completedSessions.length === 0 ? (
                <div className="bg-white rounded-xl p-6 text-center text-neutral-500">
                  No completed sessions
                </div>
              ) : (
                <div className="space-y-3">
                  {completedSessions.map((session, index) => (
                    <SessionCard 
                      key={session.id} 
                      session={session} 
                      index={index}
                      completed={true}
                      formatTime={formatTime}
                      formatDate={formatDate}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </AppLayout>
  )
}

interface SessionCardProps {
  session: Session
  index: number
  completed: boolean
  formatTime: (time: string) => string
  formatDate: (date: string) => string
}

function SessionCard({ session, index, completed, formatTime, formatDate }: SessionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${
        completed ? 'opacity-75' : ''
      }`}
    >
      <div className="p-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
            completed 
              ? 'bg-green-100 text-green-700' 
              : 'bg-primary/10 text-primary'
          }`}>
            {completed ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5" />
                Upcoming
              </>
            )}
          </div>
          {session.track && (
            <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
              {session.track}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-neutral-800 mb-2 ${
          completed ? 'line-through decoration-2' : ''
        }`}>
          {session.title}
        </h3>

        {/* Description */}
        {session.description && (
          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
            {session.description}
          </p>
        )}

        {/* Session Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <Calendar className="w-4 h-4 text-neutral-400" />
            <span>{formatDate(session.date)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <Clock className="w-4 h-4 text-neutral-400" />
            <span>
              {formatTime(session.start_time)} - {formatTime(session.end_time)}
              {session.duration_minutes && ` (${session.duration_minutes} mins)`}
            </span>
          </div>

          {session.speaker_name && (
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <User className="w-4 h-4 text-neutral-400" />
              <span>{session.speaker_name}</span>
            </div>
          )}

          {session.location && (
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>{session.location}</span>
            </div>
          )}
        </div>

        {/* Session Type */}
        {session.session_type && (
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <span className="text-xs text-neutral-500">
              Type: <span className="font-medium text-neutral-700">{session.session_type}</span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
