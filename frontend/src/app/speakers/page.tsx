'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Speaker } from '@/lib/types'
import { motion } from 'framer-motion'
import { Search, Twitter, Linkedin, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState<Speaker[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  useEffect(() => {
    fetchSpeakers()
  }, [])

  const fetchSpeakers = async () => {
    try {
      const { data, error } = await supabase
        .from('speakers')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setSpeakers(data || [])
    } catch (error) {
      console.error('Error fetching speakers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSpeakers = speakers.filter((speaker) =>
    speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (speaker.organization && speaker.organization.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  if (selectedSpeaker) {
    return (
      <AppLayout>
        <SpeakerDetails 
          speaker={selectedSpeaker} 
          onBack={() => setSelectedSpeaker(null)} 
        />
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Speakers</h1>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search speakers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      {/* Speakers List */}
      <div className="bg-gray-50 min-h-screen px-4 py-6 space-y-4 pt-44">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : filteredSpeakers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No speakers found
            </div>
          ) : (
            filteredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {speaker.image_url ? (
                      <img 
                        src={speaker.image_url} 
                        alt={speaker.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {speaker.name}
                    </h3>
                    {speaker.title && (
                      <p className="text-sm text-gray-600 truncate">
                        {speaker.title}
                      </p>
                    )}
                    {speaker.organization && (
                      <p className="text-xs text-gray-500 truncate">
                        {speaker.organization}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
    </AppLayout>
  )
}

function SpeakerDetails({ speaker, onBack }: { speaker: Speaker; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 sticky top-0 z-10">
        <button onClick={onBack} className="flex items-center gap-2 mb-4">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-2xl font-bold">Speaker Details</h1>
      </div>

      {/* Speaker Info */}
      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold mb-4">
            {speaker.image_url ? (
              <img 
                src={speaker.image_url} 
                alt={speaker.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)
            )}
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h2>
          {speaker.title && <p className="text-base text-gray-600 mb-1">{speaker.title}</p>}
          {speaker.organization && <p className="text-sm text-gray-500">{speaker.organization}</p>}

          {/* Social Links */}
          {(speaker.twitter || speaker.linkedin || speaker.website) && (
            <div className="flex justify-center gap-4 mt-6">
              {speaker.twitter && (
                <a 
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {speaker.linkedin && (
                <a 
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {speaker.website && (
                <a 
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Biography</h3>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {speaker.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
