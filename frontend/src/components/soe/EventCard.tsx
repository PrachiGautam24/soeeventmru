'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface EventCardProps {
  title: string
  slug: string
  description: string
  date: string
  location: string
  image: string
  isActive?: boolean
}

export default function EventCard({ 
  title, 
  slug, 
  description, 
  date, 
  location, 
  image,
  isActive = true 
}: EventCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (isActive) {
      router.push(`/${slug}/loading`)
    }
  }

  return (
    <motion.div
      whileHover={isActive ? { scale: 1.02 } : {}}
      whileTap={isActive ? { scale: 0.98 } : {}}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        isActive ? 'cursor-pointer' : 'opacity-60'
      }`}
      onClick={handleClick}
    >
      {/* Event Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {!isActive && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Coming Soon</span>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {isActive && (
          <div className="flex items-center text-blue-600 font-semibold">
            <span>View Event</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
