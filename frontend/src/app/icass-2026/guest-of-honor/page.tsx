'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { GuestOfHonor } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Trophy } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'

export default function GuestOfHonorPage() {
  const [guests, setGuests] = useState<GuestOfHonor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchGuests()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchGuests = async () => {
    if (!supabase) {
      console.warn('Supabase not configured - using mock data')
      setGuests([])
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('guest_of_honor')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setGuests(data || [])
    } catch (error) {
      console.error('Error fetching guests of honor:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Guest of Honor</h1>
          </div>
        </div>
      </div>

      {/* Guests List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-6 pt-28">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
          </div>
        ) : guests.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
            No guests of honor announced yet
          </div>
        ) : (
          guests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Profile Section */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold mb-4 overflow-hidden border-4 border-white/30">
                  <Image 
                    src={getImageUrl(guest.image_url, guest.name, 256)}
                    alt={guest.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(guest.name)}&size=256&background=2563eb&color=fff&bold=true`;
                    }}
                  />
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 fill-white" />
                  <h2 className="text-2xl font-bold">{guest.name}</h2>
                  <Trophy className="w-5 h-5 fill-white" />
                </div>
                
                {guest.title && (
                  <p className="text-lg text-white/90 mb-1">{guest.title}</p>
                )}
                {guest.organization && (
                  <p className="text-base text-white/80">{guest.organization}</p>
                )}
                
                {guest.session_type && (
                  <div className="mt-4 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    {guest.session_type} Session
                  </div>
                )}
              </div>

              {/* Bio Section */}
              {guest.bio && (
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-600" />
                    About
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                    {guest.bio}
                  </p>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </AppLayout>
  )
}
