'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Session } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, MapPin, Plus } from 'lucide-react'
import Link from 'next/link'

export default function SchedulePage() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState<string>('all')
  const [mySchedule, setMySchedule] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchSessions()
    loadMySchedule()
  }, [])

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
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

  const loadMySchedule = () => {
    const saved = localStorage.getItem('mySchedule')
    if (saved) {
      setMySchedule(new Set(JSON.parse(saved)))
    }
  }

  const toggleMySchedule = (sessionId: string) => {
    const updated = new Set(mySchedule)
    if (updated.has(sessionId)) {
      updated.delete(sessionId)
    } else {
      updated.add(sessionId)
    }
    setMySchedule(updated)
    localStorage.setItem('mySchedule', JSON.stringify([...updated]))
  }

  const uniqueDates = [...new Set(sessions.map(s => s.date))].sort()
  
  const filteredSessions = selectedDate === 'all' 
    ? sessions 
    : sessions.filter(s => s.date === selectedDate)

  const sessionsByDate = filteredSessions.reduce((acc, session) => {
    if (!acc[session.date]) {
      acc[session.date] = []
    }
    acc[session.date].push(session)
    return acc
  }, {} as Record<string, Session[]>)

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-primary text-white px-6 py-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/home">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold">Schedule</h1>
          </div>
          
          {/* Date Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedDate('all')}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedDate === 'all'
                  ? 'bg-white text-primary'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              All Sessions
            </button>
            {uniqueDates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedDate === date
                    ? 'bg-white text-primary'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions List */}
        <div className="px-4 py-6 space-y-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : Object.keys(sessionsByDate).length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No sessions scheduled
            </div>
          ) : (
            Object.entries(sessionsByDate).map(([date, dateSessions]) => (
              <div key={date}>
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  {new Date(date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </h2>
                
                <div className="space-y-3">
                  {dateSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Clock className="w-4 h-4" />
                            <span>{session.start_time} - {session.end_time}</span>
                            {session.duration_minutes && (
                              <span className="text-gray-400">({session.duration_minutes} mins)</span>
                            )}
                          </div>
                          
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {session.title}
                          </h3>
                          
                          {session.speaker_name && (
                            <p className="text-sm text-primary font-medium mb-1">
                              {session.speaker_name}
                            </p>
                          )}
                          
                          {session.description && (
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                              {session.description}
                            </p>
                          )}
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {session.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{session.location}</span>
                              </div>
                            )}
                            {session.track && (
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                {session.track}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleMySchedule(session.id)}
                          className={`ml-4 p-2 rounded-full transition-all ${
                            mySchedule.has(session.id)
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                          }`}
                        >
                          <Plus className={`w-5 h-5 transition-transform ${
                            mySchedule.has(session.id) ? 'rotate-45' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {session.session_type && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                          {session.session_type}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  )
}
