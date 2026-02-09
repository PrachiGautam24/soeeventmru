'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Workshop } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'

export default function WorkshopPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)

  useEffect(() => {
    fetchWorkshops()
  }, [])

  const fetchWorkshops = async () => {
    try {
      const { data, error } = await supabase
        .from('workshop')
        .select('*')
        .order('date', { ascending: true })
        .order('start_time', { ascending: true })

      if (error) throw error
      setWorkshops(data || [])
    } catch (error) {
      console.error('Error fetching workshops:', error)
    } finally {
      setLoading(false)
    }
  }

  // Show workshop details if one is selected
  if (selectedWorkshop) {
    return <WorkshopDetails workshop={selectedWorkshop} onBack={() => setSelectedWorkshop(null)} />
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Pre-Conference Workshops</h1>
            <p className="text-sm text-white/80">February 11, 2026</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-28">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : workshops.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
            No workshops available
          </div>
        ) : (
          workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedWorkshop(workshop)}
              className="bg-white rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-bold text-neutral-800 mb-2">{workshop.title}</h2>
              {workshop.instructor_name && (
                <p className="text-sm text-neutral-600 mb-3">
                  <span className="font-medium">Instructor:</span> {workshop.instructor_name}
                </p>
              )}
              
              <div className="space-y-2">
                {workshop.date && workshop.start_time && workshop.end_time && (
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>
                      {new Date(`2000-01-01T${workshop.start_time}`).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })} - {new Date(`2000-01-01T${workshop.end_time}`).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </span>
                  </div>
                )}
                
                {workshop.location && (
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{workshop.location}</span>
                  </div>
                )}
                
                {workshop.max_participants && (
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Max {workshop.max_participants} participants</span>
                  </div>
                )}
              </div>
              
              <div className="mt-3 text-sm text-primary font-medium">
                Tap to view details →
              </div>
            </motion.div>
          ))
        )}
      </div>
    </AppLayout>
  )
}

function WorkshopDetails({ workshop, onBack }: { workshop: Workshop; onBack: () => void }) {
  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <button onClick={onBack} className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Workshop Details</h1>
        </button>
      </div>

      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-28">
          {/* Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{workshop.title}</h2>
            {workshop.instructor_name && (
              <p className="text-white/90 text-sm">Instructor: {workshop.instructor_name}</p>
            )}
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-md space-y-4"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-neutral-500">Date</p>
                <p className="font-semibold text-neutral-800">
                  {workshop.date ? new Date(workshop.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'TBA'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-neutral-500">Time</p>
                <p className="font-semibold text-neutral-800">
                  {workshop.start_time && workshop.end_time ? (
                    <>
                      {workshop.start_time} - {workshop.end_time}
                      {workshop.duration_minutes && ` (${workshop.duration_minutes} mins)`}
                    </>
                  ) : 'TBA'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-neutral-500">Location</p>
                <p className="font-semibold text-neutral-800">{workshop.location || 'TBA'}</p>
              </div>
            </div>
            
            {workshop.max_participants && (
              <div className="pt-2 border-t border-neutral-100">
                <p className="text-sm text-neutral-600">
                  <span className="font-semibold">Max Participants: </span>
                  {workshop.max_participants}
                </p>
              </div>
            )}
          </motion.div>

          {/* Overview */}
          {workshop.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 shadow-md"
            >
              <h3 className="font-bold text-neutral-800 mb-3">Workshop Overview</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {workshop.description}
              </p>
            </motion.div>
          )}

          {/* Topics Covered */}
          {workshop.topics && workshop.topics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-5 shadow-md"
            >
              <h3 className="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Topics Covered
              </h3>
              <ul className="space-y-2">
                {workshop.topics?.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Prerequisites */}
          {workshop.prerequisites && workshop.prerequisites.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-5 shadow-md"
            >
              <h3 className="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Prerequisites
              </h3>
              <ul className="space-y-2">
                {workshop.prerequisites?.map((prereq, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Target Audience */}
          {workshop.target_audience && workshop.target_audience.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-md"
            >
              <h3 className="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Target Audience
              </h3>
              <ul className="space-y-2">
                {workshop.target_audience?.map((audience, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Benefits */}
          {workshop.benefits && workshop.benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-5 shadow-md"
            >
              <h3 className="font-bold text-neutral-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Benefits to Participants
              </h3>
              <ul className="space-y-2">
                {workshop.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Registration Button */}
          {workshop.registration_url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pb-6"
            >
              <a
                href={workshop.registration_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-primary text-white text-center py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Register Now
              </a>
            </motion.div>
          )}
        </div>
    </AppLayout>
  )
}
