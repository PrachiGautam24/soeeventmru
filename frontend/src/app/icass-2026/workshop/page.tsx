'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Workshop } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Award, Target, Mail, User } from 'lucide-react'
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
            <h1 className="text-2xl font-bold">Pre-Conf. Workshop</h1>
            <p className="text-sm text-white/80">February 11, 2026</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-28">
        {/* Session Speakers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Session Speakers
          </h2>
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-lg">Mr. Vivek Nainwal</p>
              <p className="text-sm text-white/90">Scientist E, CDAC Hyderabad</p>
              <a href="mailto:vivekn@cdac.in" className="flex items-center gap-2 mt-2 text-sm text-white/80 hover:text-white">
                <Mail className="w-4 h-4" />
                vivekn@cdac.in
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-lg">Mr. Aashay</p>
              <p className="text-sm text-white/90">Knowledge Associate, C-DAC Pune</p>
              <a href="mailto:aashayp@cdac.in" className="flex items-center gap-2 mt-2 text-sm text-white/80 hover:text-white">
                <Mail className="w-4 h-4" />
                aashayp@cdac.in
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-lg">Ms. Kanishka</p>
              <p className="text-sm text-white/90">C-DAC Pune</p>
              <a href="mailto:kanishkap@cdac.in" className="flex items-center gap-2 mt-2 text-sm text-white/80 hover:text-white">
                <Mail className="w-4 h-4" />
                kanishkap@cdac.in
              </a>
            </div>
          </div>
        </motion.div>

        {/* Event Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-5 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">Pre-Conference Workshop</h2>
              <p className="text-white/90 text-sm">Quantum Computing</p>
            </div>
          </div>
          <div className="space-y-2 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Date: 11th February 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Time: 10:00 AM – 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Venue: N Block, Manav Rachna University, Faridabad</span>
            </div>
          </div>
        </motion.div>

        {/* Workshop Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-primary text-white px-5 py-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Workshop Timeline
            </h3>
          </div>
          
          <div className="divide-y divide-neutral-200">
            {/* Registration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">09:30 – 10:00 AM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-neutral-800">Registration</p>
              </div>
            </motion.div>

            {/* Inaugural Session */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">10:00 – 10:15 AM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-neutral-800">Inaugural Session & Welcome Address</p>
              </div>
            </motion.div>

            {/* Session I */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">10:15 – 11:15 AM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Session I: Foundations of Quantum Computation</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Introduction to Quantum Computation</li>
                  <li>Qubits & Single Qubit Operations</li>
                  <li>Postulates of Quantum Mechanics</li>
                </ul>
              </div>
            </motion.div>

            {/* Tea Break 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-stretch bg-gradient-to-r from-primary/10 to-secondary/10 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-primary">
                <p className="font-bold text-sm text-primary">11:15 – 11:30 AM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-primary">Tea Break</p>
              </div>
            </motion.div>

            {/* Session II */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">11:30 – 12:30 PM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Session II: Quantum Measurement & Entanglement</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Quantum Measurement</li>
                  <li>Bell States</li>
                  <li>Quantum Circuits</li>
                </ul>
              </div>
            </motion.div>

            {/* Hands-on Session I */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">12:30 – 01:30 PM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Hands-on Session I: Quantum Gates & Circuits</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Quantum Gates & Single Qubit Gates</li>
                  <li>Pauli & Hadamard Gates</li>
                  <li>Multi-Qubit Gates (CNOT, Toffoli, Fredkin)</li>
                  <li>Universal Quantum Gates</li>
                </ul>
              </div>
            </motion.div>

            {/* Lunch Break */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-stretch bg-gradient-to-r from-primary/10 to-secondary/10 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-primary">
                <p className="font-bold text-sm text-primary">01:30 – 02:15 PM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-primary">Lunch Break</p>
              </div>
            </motion.div>

            {/* Hands-on Session II */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">02:15 – 03:15 PM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Hands-on Session II: Qniverse Platform</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Introduction to Qniverse Platform</li>
                  <li>Designing & Simulating Quantum Circuits</li>
                </ul>
              </div>
            </motion.div>

            {/* Hands-on Session III */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">03:15 – 04:15 PM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Hands-on Session III: Quantum Algorithms</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Grover's Search Algorithm</li>
                  <li>Deutsch Algorithm</li>
                </ul>
              </div>
            </motion.div>

            {/* Tea Break 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 }}
              className="flex items-stretch bg-gradient-to-r from-primary/10 to-secondary/10 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-primary">
                <p className="font-bold text-sm text-primary">04:15 – 04:30 PM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-primary">Tea Break</p>
              </div>
            </motion.div>

            {/* Hands-on Session IV */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-stretch bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-start border-r-2 border-neutral-200">
                <p className="font-bold text-sm text-neutral-700">04:30 – 04:50 PM</p>
              </div>
              <div className="flex-1 px-4 py-4">
                <p className="font-semibold text-sm text-neutral-800 mb-2">Hands-on Session IV: Quantum AI Applications</p>
                <ul className="text-xs text-neutral-600 space-y-1 ml-4 list-disc">
                  <li>Quantum K-Means Algorithm</li>
                  <li>Quantum Neural Networks (QNN)</li>
                </ul>
              </div>
            </motion.div>

            {/* Valedictory Session */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="flex items-stretch bg-gradient-to-r from-primary/10 to-secondary/10 transition-colors"
            >
              <div className="flex-shrink-0 w-36 sm:w-40 px-4 py-4 flex items-center border-r-2 border-primary">
                <p className="font-bold text-sm text-primary">04:50 – 05:00 PM</p>
              </div>
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="font-semibold text-sm text-primary">Valedictory Session & Vote of Thanks</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
          
        </div>
    </AppLayout>
  )
}
