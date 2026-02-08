'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Organiser } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, UserCog } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OrganisersPage() {
  const [organisers, setOrganisers] = useState<Organiser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrganisers()
  }, [])

  const fetchOrganisers = async () => {
    try {
      const { data, error } = await supabase
        .from('organisers')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setOrganisers(data || [])
    } catch (error) {
      console.error('Error fetching organisers:', error)
    } finally {
      setLoading(false)
    }
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
            <h1 className="text-2xl font-bold">Organisers</h1>
            <p className="text-sm text-white/80">Organizing Committee</p>
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
                        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0 overflow-hidden">
                          <Image 
                            src={organiser.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(organiser.name)}&size=128&background=1e4ba9&color=fff&bold=true`}
                            alt={organiser.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
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
