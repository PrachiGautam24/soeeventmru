'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar, MapPin } from 'lucide-react'

export default function SOEEventsHome() {
  const router = useRouter()

  const events = [
    {
      title: 'ICASS 2026',
      slug: 'icass-2026',
      description: 'International Conference on Intelligent Computing and Automation for Sustainable Solutions',
      date: 'February 12-13, 2026',
      location: 'Manav Rachna University',
      image: '/images/logo.png',
      isActive: true
    },
    // Add more events here in the future
  ]

  const handleEventClick = (slug: string, isActive: boolean) => {
    if (isActive) {
      router.push(`/${slug}/loading`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl">
        {/* Hero Section */}
        <div className="relative bg-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center py-8"
          >
            <div className="flex items-center justify-center gap-4 px-6">
              <Image
                src="/images/soe-events-logo.jpg"
                alt="School of Engineering - Manav Rachna University"
                width={200}
                height={200}
              />
              <Image
                src="/images/GPTW.jpg"
                alt="Great Place to Work"
                width={30}
                height={30}
              />
              {/* <h1 className="text-xl font-bold text-gray-900 mb-2">
                SOE EVENTS
              </h1>
              <p className="text-gray-600">
                School of Engineering
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Manav Rachna University
              </p> */}
            </div>
          </motion.div>

          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-6">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,30 Q720,100 1440,30 L1440,120 L0,120 Z" fill="#b12a2e"/>
            </svg>
          </div>
        </div>

        {/* Events Grid Section */}
        <div className="px-4 py-6 bg-neutral-50">
          <h3 className="text-xl font-bold text-neutral-800 mb-6 ml-2">Upcoming Events</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleEventClick(event.slug, event.isActive)}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  event.isActive ? 'cursor-pointer' : 'opacity-60'
                }`}
              >
                {/* Event Image */}
                <div className="relative h-48 bg-white">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain p-8"
                  />
                  {!event.isActive && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  {event.isActive && (
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-gradient-mixed text-white px-6 py-2 rounded-lg font-semibold text-sm">
                        View Event Details
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="px-6 py-6 bg-white">
          <h3 className="text-xl font-bold text-neutral-800 mb-4">About SOE Events</h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-50 rounded-xl p-5 border border-neutral-200"
          >
            <p className="text-gray-700 leading-relaxed text-sm">
              Welcome to the official events platform for the School of Engineering at Manav Rachna University. 
              Discover upcoming conferences, workshops, and academic gatherings organized by our school. 
              Stay connected with the latest developments in engineering, technology, and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 bg-gradient-to-br from-primary via-primary-light to-secondary text-white rounded-xl p-5"
          >
            <h4 className="font-bold text-lg mb-2">School of Engineering</h4>
            <p className="text-sm text-white/90">
              The School of Engineering at Manav Rachna University is committed to delivering 
              world-class education and fostering innovation through cutting-edge research and 
              industry collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

