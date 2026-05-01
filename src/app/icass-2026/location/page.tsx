'use client'

import AppLayout from '@/components/AppLayout'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Navigation } from 'lucide-react'

export default function LocationPage() {
  const venue = {
    name: 'Manav Rachna University',
    address: 'Sector – 43, Aravalli Hills, Delhi – Surajkund Road, Faridabad – 121004, (Haryana), India',
    coordinates: {
      lat: 28.4222,
      lng: 77.3017,
    },
    phone: '+91-129-4198000',
    email: 'info@mru.edu.in',
    website: 'https://manavrachna.edu.in',
  }

  const openInMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${venue.coordinates.lat},${venue.coordinates.lng}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <div className="bg-gradient-primary text-white px-6 py-6">
          <h1 className="text-2xl font-bold mb-2">Location</h1>
          <p className="text-sm text-white/80">Conference Venue</p>
        </div>

        <div className="px-4 py-6 space-y-4">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="h-64 bg-neutral-200 relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJTSKBKvgDDkR675bSGgv0aQ&key=AIzaSyClZxfln6R0Jjk53Y6tydshM46JP6MU-pE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Open in Maps Button */}
              <button
                onClick={openInMaps}
                className="absolute bottom-4 right-4 bg-white text-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-neutral-50 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span className="text-sm font-medium">Open in Maps</span>
              </button>
            </div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-md space-y-4"
          >
            <div>
              <h2 className="text-xl font-bold text-neutral-800 mb-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                {venue.name}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {venue.address}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <a
                href={`tel:${venue.phone}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Phone</p>
                  <p className="font-medium">{venue.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${venue.email}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Email</p>
                  <p className="font-medium">{venue.email}</p>
                </div>
              </a>

              <a
                href={venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Website</p>
                  <p className="font-medium">{venue.website}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* How to Reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-lg font-bold text-neutral-800 mb-4">How to Reach</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">By Air</h4>
                <p className="text-sm text-neutral-600">
                  Indira Gandhi International Airport (DEL) is approximately 30 km from the venue. 
                  You can hire a taxi or use app-based cab services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">By Train</h4>
                <p className="text-sm text-neutral-600">
                  Faridabad Railway Station is the nearest station, about 8 km away. 
                  New Delhi Railway Station is 25 km from the venue.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">By Metro</h4>
                <p className="text-sm text-neutral-600">
                  The nearest metro station is Badkhal Mor on the Violet Line. 
                  From there, you can take an auto-rickshaw or cab to the university.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-700 mb-2">By Road</h4>
                <p className="text-sm text-neutral-600">
                  Well connected by road from Delhi and NCR. Regular bus services and 
                  private cabs are available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  )
}
