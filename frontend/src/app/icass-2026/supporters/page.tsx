'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Sponsor } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSponsors()
  }, [])

  const fetchSponsors = async () => {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setSponsors(data || [])
    } catch (error) {
      console.error('Error fetching sponsors:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Our Supporters</h1>
        </div>
        <p className="text-sm text-white/80">
          Thank you to our valued supporters
        </p>
      </div>

      {/* Sponsors List */}
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-4 pt-32">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : sponsors.length === 0 ? (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500">No supporter available</p>
          </div>
        ) : (
          sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                {/* Logo */}
                {sponsor.logo_url && (
                  <div className="relative w-full h-32 mb-4 bg-neutral-50 rounded-xl flex items-center justify-center">
                    <Image
                      src={sponsor.logo_url}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}

                {/* Sponsor Info */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">
                    {sponsor.name}
                  </h3>
                  
                  {sponsor.description && (
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {sponsor.description}
                    </p>
                  )}

                  {/* Website Link */}
                  {sponsor.website && (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}

        {/* Become a Sponsor CTA */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 mt-8"
          >
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Interested in Sponsoring?
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Join us in supporting innovation and education. Contact us to learn about sponsorship opportunities.
            </p>
            <a
              href="mailto:conference@icass-2026.in"
              className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </div>
    </AppLayout>
  )
}
