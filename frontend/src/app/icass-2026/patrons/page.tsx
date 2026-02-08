'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Patron } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PatronsPage() {
  const [patrons, setPatrons] = useState<Patron[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPatrons()
  }, [])

  const fetchPatrons = async () => {
    try {
      const { data, error } = await supabase
        .from('patrons')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setPatrons(data || [])
    } catch (error) {
      console.error('Error fetching patrons:', error)
    } finally {
      setLoading(false)
    }
  }

  const groupedPatrons = patrons.reduce((acc, patron) => {
    if (!acc[patron.category]) {
      acc[patron.category] = []
    }
    acc[patron.category].push(patron)
    return acc
  }, {} as Record<string, Patron[]>)

  const categoryOrder = ['Chief Patron(s)', 'Patron(s)', 'General Chair', 'Conference Chair']

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Patrons & Chairs</h1>
            <p className="text-sm text-white/80">Conference Leadership</p>
          </div>
        </div>
      </div>

      {/* Patrons List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-6 pt-28">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : (
            categoryOrder.map((category) => {
              const categoryPatrons = groupedPatrons[category]
              if (!categoryPatrons || categoryPatrons.length === 0) return null

              return (
                <div key={category}>
                  <h2 className="text-lg font-bold text-neutral-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {category}
                  </h2>
                  
                  <div className="space-y-3">
                    {categoryPatrons.map((patron, index) => (
                      <motion.div
                        key={patron.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-5 shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0 overflow-hidden">
                            <Image 
                              src={patron.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(patron.name)}&size=128&background=1e4ba9&color=fff&bold=true`}
                              alt={patron.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(patron.name)}&size=128&background=1e4ba9&color=fff&bold=true`;
                              }}
                            />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-800 mb-1">
                              {patron.name}
                            </h3>
                            {patron.title && (
                              <p className="text-sm text-neutral-600 mb-1">
                                {patron.title}
                              </p>
                            )}
                            {patron.organization && (
                              <p className="text-sm text-neutral-500">
                                {patron.organization}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            })
          )}
        </div>

    </AppLayout>
  )
}
