'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
import { supabase } from '@/lib/supabase'
import { Author } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, FileText, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchAuthors()
  }, [])

  const fetchAuthors = async () => {
    try {
      const { data, error } = await supabase
        .from('authors')
        .select('*')
        .order('name', { ascending: true })

      if (error) throw error
      setAuthors(data || [])
    } catch (error) {
      console.error('Error fetching authors:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (author.affiliation && author.affiliation.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (author.country && author.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (author.paper_title && author.paper_title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-primary text-white px-6 py-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/home">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold">Authors</h1>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        {/* Authors List */}
        <div className="px-4 py-6 space-y-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : filteredAuthors.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No authors found
            </div>
          ) : (
            filteredAuthors.map((author, index) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-4 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {author.name}
                    </h3>
                    
                    <div className="space-y-1">
                      {author.affiliation && (
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {author.affiliation}
                        </p>
                      )}
                      
                      {author.country && (
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {author.country}
                        </p>
                      )}
                      
                      {author.email && (
                        <a
                          href={`mailto:${author.email}`}
                          className="text-sm text-primary hover:text-primary-dark flex items-center gap-1"
                        >
                          <Mail className="w-3 h-3" />
                          {author.email}
                        </a>
                      )}
                    </div>
                    
                    {author.paper_title && (
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500">Paper Title:</p>
                        <p className="text-sm text-gray-700 font-medium line-clamp-2">
                          {author.paper_title}
                        </p>
                        {author.track && (
                          <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                            Track: {author.track}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  )
}
