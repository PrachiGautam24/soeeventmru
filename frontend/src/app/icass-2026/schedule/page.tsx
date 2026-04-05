'use client'

import { useEffect, useState, useMemo } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { ScheduleEvent, SessionPaper } from '@/lib/types'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Search, ChevronDown, Clock, MapPin, User, Wifi,
  Coffee, UtensilsCrossed, Mic2, Music, Award, GraduationCap,
  FileText, Hash, Target, CalendarDays, Users
} from 'lucide-react'
import Link from 'next/link'

// Color and icon mapping for event types
const eventTypeConfig: Record<string, { bg: string; border: string; icon: React.ElementType; label: string }> = {
  registration: { bg: 'bg-blue-50', border: 'border-blue-200', icon: Users, label: 'Registration' },
  ceremony: { bg: 'bg-purple-50', border: 'border-purple-200', icon: GraduationCap, label: 'Ceremony' },
  high_tea: { bg: 'bg-amber-50', border: 'border-amber-200', icon: Coffee, label: 'Break' },
  tea_break: { bg: 'bg-amber-50', border: 'border-amber-200', icon: Coffee, label: 'Break' },
  lunch: { bg: 'bg-orange-50', border: 'border-orange-200', icon: UtensilsCrossed, label: 'Lunch' },
  technical_session: { bg: 'bg-white', border: 'border-neutral-200', icon: FileText, label: 'Technical' },
  plenary: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: Mic2, label: 'Plenary' },
  talk: { bg: 'bg-rose-50', border: 'border-rose-200', icon: Mic2, label: 'Talk' },
  cultural: { bg: 'bg-pink-50', border: 'border-pink-200', icon: Music, label: 'Cultural' },
  valedictory: { bg: 'bg-violet-50', border: 'border-violet-200', icon: Award, label: 'Valedictory' },
  certificate: { bg: 'bg-green-50', border: 'border-green-200', icon: Award, label: 'Certificate' },
}

export default function SchedulePage() {
  const [events, setEvents] = useState<ScheduleEvent[]>([])
  const [papers, setPapers] = useState<SessionPaper[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDay, setSelectedDay] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchSchedule()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchSchedule = async () => {
    if (!supabase) {
      console.warn('Supabase not configured - using mock data')
      setEvents([])
      setPapers([])
      setLoading(false)
      return
    }

    try {
      const [eventsRes, papersRes] = await Promise.all([
        supabase
          .from('schedule_events')
          .select('*')
          .order('order_index', { ascending: true }),
        supabase
          .from('session_papers')
          .select('*')
          .order('order_index', { ascending: true })
      ])

      if (eventsRes.error) throw eventsRes.error
      if (papersRes.error) throw papersRes.error

      setEvents(eventsRes.data || [])
      setPapers(papersRes.data || [])
    } catch (error) {
      console.error('Error fetching schedule:', error)
    } finally {
      setLoading(false)
    }
  }

  // Group papers by schedule_event_id
  const papersByEvent = useMemo(() => {
    const map: Record<string, SessionPaper[]> = {}
    papers.forEach((paper) => {
      if (!map[paper.schedule_event_id]) {
        map[paper.schedule_event_id] = []
      }
      map[paper.schedule_event_id].push(paper)
    })
    return map
  }, [papers])

  // Filter events by day + search
  const filteredEvents = useMemo(() => {
    const dayEvents = events.filter((e) => e.day === selectedDay)

    if (!searchQuery.trim()) return dayEvents

    const query = searchQuery.toLowerCase()

    // Find events that match OR have papers that match
    return dayEvents.filter((event) => {
      // Check event fields
      if (event.title.toLowerCase().includes(query)) return true
      if (event.venue?.toLowerCase().includes(query)) return true
      if (event.session_chair?.toLowerCase().includes(query)) return true
      if (event.session_incharge?.toLowerCase().includes(query)) return true
      if (event.tracks?.toLowerCase().includes(query)) return true
      if (event.description?.toLowerCase().includes(query)) return true

      // Check papers in this event
      const eventPapers = papersByEvent[event.id] || []
      return eventPapers.some(
        (p) =>
          p.paper_title.toLowerCase().includes(query) ||
          p.author_name.toLowerCase().includes(query) ||
          p.paper_id.toLowerCase().includes(query)
      )
    })
  }, [events, selectedDay, searchQuery, papersByEvent])

  const isExpandable = (event: ScheduleEvent) => {
    return event.event_type === 'technical_session' || event.event_type === 'ceremony'
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Schedule</h1>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search papers, authors, venues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedDay(1)}
            className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all ${
              selectedDay === 1
                ? 'bg-white text-primary'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Day 1: Thu, Feb 12
          </button>
          <button
            onClick={() => setSelectedDay(2)}
            className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all ${
              selectedDay === 2
                ? 'bg-white text-primary'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Day 2: Fri, Feb 13
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-3 pt-52">
        {/* Day Header */}
        <div className="flex items-center gap-2 mb-2">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-neutral-800">
            {selectedDay === 1 ? 'Thursday, 12 February 2026' : 'Friday, 13 February 2026'}
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
            No events found
          </div>
        ) : (
          filteredEvents.map((event, index) => {
            const config = eventTypeConfig[event.event_type] || eventTypeConfig.registration
            const IconComponent = config.icon
            const eventPapers = papersByEvent[event.id] || []
            const expandable = isExpandable(event)
            const isExpanded = expandedEvent === event.id

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`rounded-2xl shadow-md overflow-hidden border ${config.border} ${config.bg}`}
              >
                {/* Event Header */}
                <button
                  onClick={() => {
                    if (expandable) {
                      setExpandedEvent(isExpanded ? null : event.id)
                    }
                  }}
                  className={`w-full p-4 flex items-start gap-3 text-left ${
                    expandable ? 'hover:bg-black/5 cursor-pointer' : 'cursor-default'
                  } transition-colors`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    event.event_type === 'technical_session'
                      ? event.mode?.toLowerCase() === 'online'
                        ? 'bg-green-100 text-green-600'
                        : event.mode?.toLowerCase() === 'offline'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-teal-100 text-teal-600'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-800 text-sm leading-tight">
                      {event.title}
                    </h3>

                    {/* Time + Venue */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="text-xs text-neutral-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.start_time}{event.end_time ? ` – ${event.end_time}` : ' onwards'}
                      </span>
                      {event.venue && (
                        <span className="text-xs text-neutral-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.venue}
                        </span>
                      )}
                    </div>

                    {/* Mode + Track badges for technical sessions */}
                    {event.event_type === 'technical_session' && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        {event.mode && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            event.mode.toLowerCase() === 'online'
                              ? 'bg-green-100 text-green-700'
                              : event.mode.toLowerCase() === 'offline'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-teal-100 text-teal-700'
                          }`}>
                            {event.mode}
                          </span>
                        )}
                        {event.tracks && (
                          <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">
                            {event.tracks}
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full text-xs">
                          {eventPapers.length} paper{eventPapers.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expand Arrow */}
                  {expandable && (
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 mt-1 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-neutral-200 bg-white"
                  >
                    {/* Ceremony Description */}
                    {event.event_type === 'ceremony' && event.description && (
                      <div className="p-4 space-y-2">
                        {event.description.split('\n').map((line, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <Clock className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700">{line}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technical Session Details */}
                    {event.event_type === 'technical_session' && (
                      <div className="p-4 space-y-4">
                        {/* Session Chair & Incharge */}
                        <div className="space-y-2">
                          {event.session_chair && (
                            <div className="flex items-start gap-2 text-sm">
                              <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-neutral-500 font-medium">Session Chair: </span>
                                <span className="text-neutral-700">{event.session_chair}</span>
                              </div>
                            </div>
                          )}
                          {event.session_incharge && (
                            <div className="flex items-start gap-2 text-sm">
                              <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-neutral-500 font-medium">Incharge: </span>
                                <span className="text-neutral-700">{event.session_incharge}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Papers List */}
                        {eventPapers.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-neutral-700 text-sm flex items-center gap-1.5">
                              <FileText className="w-4 h-4 text-primary" />
                              Papers ({eventPapers.length})
                            </h4>
                            {eventPapers.map((paper) => (
                              <div
                                key={paper.id}
                                className="bg-neutral-50 rounded-xl p-3 border border-neutral-100"
                              >
                                {/* Paper Title */}
                                <p className="text-sm font-medium text-neutral-800 leading-tight mb-2">
                                  {paper.paper_title}
                                </p>

                                {/* Paper Details Grid */}
                                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                                  <div className="flex items-center gap-1.5 text-xs">
                                    <Hash className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-neutral-500">ID:</span>
                                    <span className="text-neutral-700 font-medium">{paper.paper_id}</span>
                                  </div>

                                  <div className="flex items-center gap-1.5 text-xs">
                                    <Target className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-neutral-500">Track:</span>
                                    <span className="text-neutral-700 font-medium">{paper.track_number}</span>
                                  </div>

                                  <div className="flex items-center gap-1.5 text-xs col-span-2">
                                    <User className="w-3 h-3 text-primary flex-shrink-0" />
                                    <span className="text-neutral-500">Author:</span>
                                    <span className="text-neutral-700 font-medium truncate">{paper.author_name}</span>
                                  </div>

                                  {paper.timings && (
                                    <div className="flex items-center gap-1.5 text-xs">
                                      <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                                      <span className="text-neutral-700">{paper.timings}</span>
                                    </div>
                                  )}

                                  {paper.online_offline && (
                                    <div className="flex items-center gap-1.5 text-xs">
                                      <Wifi className="w-3 h-3 text-primary flex-shrink-0" />
                                      <span className={`font-medium ${
                                        paper.online_offline.toLowerCase() === 'online'
                                          ? 'text-green-600'
                                          : 'text-blue-600'
                                      }`}>
                                        {paper.online_offline}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )
          })
        )}

        {/* Day conclusion */}
        <div className="text-center py-6">
          <p className="text-sm text-neutral-400 font-medium">
            {selectedDay === 1 ? 'DAY 1 CONCLUDES' : 'CONFERENCE CONCLUDES'}
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
