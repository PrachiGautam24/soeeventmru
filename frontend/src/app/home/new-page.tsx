'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import EventCard from '@/components/soe/EventCard'

export default function SOEEventsHome() {
  const events = [
    {
      title: 'ICASS 2026',
      slug: 'icass-2026',
      description: 'The 1st International Conference on Intelligent Computing and Automation for Sustainable Solutions',
      date: 'February 12-13, 2026',
      location: 'Manav Rachna University, Faridabad',
      image: '/images/logo.png',
      isActive: true
    },
    // Add more events
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/mru-logo.png"
                alt="MRU Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  SOE EVENTS
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  School of Engineering, Manav Rachna University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to SOE Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming conferences, workshops, and academic events organized by
            the School of Engineering at Manav Rachna University
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            More events coming soon! Check back regularly for updates on upcoming
            conferences, workshops, and academic gatherings.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} School of Engineering, Manav Rachna University. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
