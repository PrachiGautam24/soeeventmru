'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
// import { supabase } from '@/lib/supabase'
import { Organiser } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, UserCog } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'

export default function OrganisersPage() {
  const [organisers, setOrganisers] = useState<Organiser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchOrganisers()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchOrganisers = async () => {
    // Using mock data instead of database
    console.warn('Using mock data - database not configured')
    const mockOrganisers: Organiser[] = [
      {
        id: '1',
        name: 'Dr. Rajesh Kumar',
        role: 'Conference Chair',
        organization: 'MRU College',
        email: 'rajesh.kumar@mru.edu.in',
        phone: null,
        image_url: '/images/organisers/rajesh-kumar.jpg',
        order_index: 1
      },
      {
        id: '2',
        name: 'Prof. Anita Gupta',
        role: 'Technical Program Chair',
        organization: 'MRU College',
        email: 'anita.gupta@mru.edu.in',
        phone: null,
        image_url: '/images/organisers/anita-gupta.jpg',
        order_index: 2
      },
      {
        id: '3',
        name: 'Dr. Sanjay Sharma',
        role: 'Organizing Secretary',
        organization: 'MRU College',
        email: 'sanjay.sharma@mru.edu.in',
        phone: null,
        image_url: '/images/organisers/sanjay-sharma.jpg',
        order_index: 3
      }
    ]
    setOrganisers(mockOrganisers)
    setLoading(false)
  }

  const groupedOrganisers = organisers.reduce((acc, organiser) => {
    if (!acc[organiser.role]) {
      acc[organiser.role] = []
    }
    acc[organiser.role].push(organiser)
    return acc
  }, {} as Record<string, Organiser[]>)

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Organising Committee</h1>
            <p className="text-sm text-white/80">ICASS 2026</p>
          </div>
        </div>
      </div>

      {/* Organisers List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-6 pt-28">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : Object.keys(groupedOrganisers).length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No organisers information available
            </div>
          ) : (
            Object.entries(groupedOrganisers).map(([role, roleOrganisers]) => (
              <div key={role}>
                <h2 className="text-lg font-bold text-neutral-800 mb-4 flex items-center gap-2">
                  <UserCog className="w-5 h-5 text-primary" />
                  {role}
                </h2>
                
                <div className="space-y-3">
                  {roleOrganisers.map((organiser, index) => (
                    <motion.div
                      key={organiser.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0 overflow-hidden">
                          <Image 
                            src={getImageUrl(organiser.image_url, organiser.name, 128)}
                            alt={organiser.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organiser.name)}&size=128&background=1e4ba9&color=fff&bold=true`;
                            }}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-800 mb-1">
                            {organiser.name}
                          </h3>
                          {organiser.organization && (
                            <p className="text-sm text-neutral-600 mb-2">
                              {organiser.organization}
                            </p>
                          )}
                          
                          {organiser.email && (
                            <a
                              href={`mailto:${organiser.email}`}
                              className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-dark"
                            >
                              <Mail className="w-3 h-3" />
                              {organiser.email}
                            </a>
                          )}
                          {organiser.phone && (
                            <p className="text-xs text-neutral-500 mt-1">
                              {organiser.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
    </AppLayout>
  )
}
