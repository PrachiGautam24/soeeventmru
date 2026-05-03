'use client'

import { useEffect, useState } from 'react'
import AppLayout from '@/components/AppLayout'
// import { supabase } from '@/lib/supabase'
import { Author } from '@/lib/types'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, FileText, Mail, MapPin, ChevronDown, Clock, Hash, Wifi, User, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'

// Extended Author type to include session details
interface AuthorWithSession extends Author {
  paper_id?: string
  timings?: string
  participation_mode?: string
  session_chair?: string
  session_incharge?: string
  venue?: string
  session_name?: string
}

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<AuthorWithSession[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedAuthor, setExpandedAuthor] = useState<string | null>(null)

  useEffect(() => {
    // Only fetch data in browser environment, not during build/static generation
    if (typeof window !== 'undefined') {
      fetchAuthors()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchAuthors = async () => {
    // Using mock data instead of database
    console.warn('Using mock data - database not configured')
    const mockAuthors: AuthorWithSession[] = [
      {
        id: '1',
        name: 'Dr. Priya Sharma',
        affiliation: 'IIT Delhi',
        country: 'India',
        email: 'priya.sharma@iitd.ac.in',
        paper_title: 'Advances in Machine Learning for Healthcare',
        track: 'AI & ML',
        track_no: '1',
        image_url: '/images/authors/priya-sharma.jpg',
        order_index: 1,
        paper_id: 'ML-001',
        timings: '10:00 AM - 11:00 AM',
        participation_mode: 'In-person',
        session_chair: 'Dr. Rajesh Kumar',
        session_incharge: 'Prof. Anita Gupta',
        venue: 'Auditorium A',
        session_name: 'AI in Healthcare'
      },
      {
        id: '2',
        name: 'Prof. Ahmed Hassan',
        affiliation: 'Cairo University',
        country: 'Egypt',
        email: 'ahmed.hassan@cu.edu.eg',
        paper_title: 'Cybersecurity Challenges in IoT Networks',
        track: 'Cybersecurity',
        track_no: '2',
        image_url: '/images/authors/ahmed-hassan.jpg',
        order_index: 2,
        paper_id: 'CS-002',
        timings: '2:00 PM - 3:00 PM',
        participation_mode: 'Virtual',
        session_chair: 'Dr. Fatima Al-Zahra',
        session_incharge: 'Dr. Mohamed El-Sayed',
        venue: 'Room 201',
        session_name: 'IoT Security'
      }
    ]
    setAuthors(mockAuthors)
    setLoading(false)
  }

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (author.affiliation && author.affiliation.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (author.country && author.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (author.paper_title && author.paper_title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-gradient-primary text-white px-6 py-6 fixed top-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/icass-2026/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Authors</h1>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
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
      <div className="bg-neutral-50 min-h-screen px-4 py-6 space-y-3 pt-44">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : filteredAuthors.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No authors found
            </div>
          ) : (
            filteredAuthors.map((author, index) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedAuthor(
                    expandedAuthor === author.id ? null : author.id
                  )}
                  className="w-full p-4 flex items-start gap-3 hover:bg-neutral-50 transition-colors text-left"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-sm font-bold flex-shrink-0 overflow-hidden">
                    <Image 
                      src={getImageUrl(author.image_url, author.name, 128)}
                      alt={author.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&size=128&background=1e4ba9&color=fff&bold=true`;
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-800 mb-1">
                      {author.name}
                    </h3>
                    
                    <div className="space-y-1">
                      {author.affiliation && (
                        <p className="text-sm text-neutral-600 flex items-center gap-1">
                          <FileText className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{author.affiliation}</span>
                        </p>
                      )}
                      
                      {author.country && (
                        <p className="text-sm text-neutral-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {author.country}
                        </p>
                      )}
                    </div>
                    
                    {author.paper_title && (
                      <div className="mt-2 pt-2 border-t border-neutral-100">
                        <p className="text-xs text-neutral-500">Paper Title:</p>
                        <p className="text-sm text-neutral-700 font-medium">
                          {author.paper_title}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 mt-1 ${
                      expandedAuthor === author.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Session Details */}
                {expandedAuthor === author.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 pt-2 border-t border-neutral-100 bg-neutral-50"
                  >
                    <h4 className="font-semibold text-neutral-700 mb-3">Session Details:</h4>
                    <div className="space-y-2">
                      {author.timings && (
                        <div className="flex items-start gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Timings: </span>
                            <span className="text-neutral-700 font-medium">{author.timings}</span>
                          </div>
                        </div>
                      )}

                      {author.paper_id && (
                        <div className="flex items-start gap-2 text-sm">
                          <Hash className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Paper ID: </span>
                            <span className="text-neutral-700 font-medium">{author.paper_id}</span>
                          </div>
                        </div>
                      )}

                      {author.track_no && (
                        <div className="flex items-start gap-2 text-sm">
                          <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Track No.: </span>
                            <span className="text-neutral-700 font-medium">{author.track_no}</span>
                          </div>
                        </div>
                      )}

                      {author.track && (
                        <div className="flex items-start gap-2 text-sm">
                          <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Track: </span>
                            <span className="text-neutral-700 font-medium">{author.track}</span>
                          </div>
                        </div>
                      )}

                      {author.participation_mode && (
                        <div className="flex items-start gap-2 text-sm">
                          <Wifi className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Mode: </span>
                            <span className={`font-medium ${
                              author.participation_mode.toLowerCase() === 'online' 
                                ? 'text-green-600' 
                                : 'text-blue-600'
                            }`}>
                              {author.participation_mode}
                            </span>
                          </div>
                        </div>
                      )}

                      {author.venue && (
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Venue: </span>
                            <span className="text-neutral-700 font-medium">{author.venue}</span>
                          </div>
                        </div>
                      )}

                      {author.session_name && (
                        <div className="flex items-start gap-2 text-sm">
                          <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Session: </span>
                            <span className="text-neutral-700 font-medium">{author.session_name}</span>
                          </div>
                        </div>
                      )}

                      {author.session_chair && (
                        <div className="flex items-start gap-2 text-sm">
                          <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Session Chair: </span>
                            <span className="text-neutral-700">{author.session_chair}</span>
                          </div>
                        </div>
                      )}

                      {author.session_incharge && (
                        <div className="flex items-start gap-2 text-sm">
                          <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-neutral-500">Incharge: </span>
                            <span className="text-neutral-700">{author.session_incharge}</span>
                          </div>
                        </div>
                      )}

                      {author.email && (
                        <div className="flex items-start gap-2 text-sm mt-3 pt-3 border-t border-neutral-200">
                          <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <a
                            href={`mailto:${author.email}`}
                            className="text-primary hover:text-primary-dark transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {author.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          )}
        </div>
    </AppLayout>
  )
}
