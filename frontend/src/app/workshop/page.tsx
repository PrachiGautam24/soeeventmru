'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Workshop } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'

export default function WorkshopPage() {
  const [workshop, setWorkshop] = useState<Workshop | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWorkshop()
  }, [])

  const fetchWorkshop = async () => {
    try {
      const { data, error } = await supabase
        .from('workshop')
        .select('*')
        .limit(1)
        .single()

      if (error) throw error
      setWorkshop(data)
    } catch (error) {
      console.error('Error fetching workshop:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
        </div>
      </AppLayout>
    )
  }

  if (!workshop) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="bg-gradient-primary text-white px-6 py-6">
            <Link href="/home" className="flex items-center gap-4">
              <ArrowLeft className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Pre-Conference Workshop</h1>
            </Link>
          </div>
          <div className="text-center py-12 text-gray-500">
            No workshop information available
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <Link href="/home" className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Pre-Conference Workshop</h1>
        </Link>
      </div>

      <div className="bg-gray-50 min-h-screen px-4 py-6 space-y-4 pt-28">
          {/* Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg"
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
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-semibold text-gray-800">
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
                <p className="text-xs text-gray-500">Time</p>
                <p className="font-semibold text-gray-800">
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
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">{workshop.location || 'TBA'}</p>
              </div>
            </div>
            
            {workshop.max_participants && (
              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm text-gray-600">
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
              <h3 className="font-bold text-gray-800 mb-3">Workshop Overview</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
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
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Topics Covered
              </h3>
              <ul className="space-y-2">
                {workshop.topics?.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Prerequisites
              </h3>
              <ul className="space-y-2">
                {workshop.prerequisites?.map((prereq, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Target Audience
              </h3>
              <ul className="space-y-2">
                {workshop.target_audience?.map((audience, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Benefits to Participants
              </h3>
              <ul className="space-y-2">
                {workshop.benefits?.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
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
