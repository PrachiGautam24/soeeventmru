'use client'

import AppLayout from '@/components/AppLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  Award, 
  UserCog, 
  MapPin,
  Globe,
  BookOpen,
  Info,
  Share2,
  ArrowLeft
} from 'lucide-react'

export default function MorePage() {
  const menuItems = [
    {
      title: 'Navigation',
      items: [
        {
          name: 'Back to SOE Events',
          icon: ArrowLeft,
          href: '/home',
          color: 'from-purple-600 to-purple-700',
        },
      ],
    },
    {
      title: 'Conference Info',
      items: [
        {
          name: 'Speakers',
          icon: Users,
          href: '/icass-2026/speakers',
          color: 'from-primary to-primary-dark',
        },
        {
          name: 'Patrons & Chairs',
          icon: Award,
          href: '/icass-2026/patrons',
          color: 'from-secondary-light to-secondary',
        },
        {
          name: 'Organisers',
          icon: UserCog,
          href: '/icass-2026/organisers',
          color: 'from-neutral-700 to-neutral-800',
        },
      ],
    },
    {
      title: 'Venue & Contact',
      items: [
        {
          name: 'Location',
          icon: MapPin,
          href: '/icass-2026/location',
          color: 'from-secondary to-secondary-dark',
        },
        {
          name: 'Website',
          icon: Globe,
          href: 'https://icass-2026.in',
          color: 'from-primary to-secondary',
          external: true,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Conference Tracks',
          icon: BookOpen,
          href: '/icass-2026/tracks',
          color: 'from-primary-light to-primary',
        },
      ],
    },
  ]

  const shareConference = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ICASS 2026',
          text: 'Join us at the International Conference on Intelligent Computing and Automation for Sustainable Solutions',
          url: window.location.origin,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <div className="bg-gradient-mixed text-white px-6 py-8">
          <h1 className="text-2xl font-bold mb-2">More</h1>
          <p className="text-sm text-white/80">Additional Information</p>
        </div>

        <div className="px-4 py-6 space-y-6">
          {/* Share Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={shareConference}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-5 shadow-lg flex items-center justify-center gap-3 hover:shadow-xl transition-shadow"
          >
            <Share2 className="w-6 h-6" />
            <span className="font-semibold text-lg">Share Conference</span>
          </motion.button>

          {/* Menu Sections */}
          {menuItems.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wide mb-3 px-2">
                {section.title}
              </h2>
              
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                {section.items.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <span className="font-medium text-neutral-800 flex-1">
                        {item.name}
                      </span>
                      
                      <svg 
                        className="w-5 h-5 text-neutral-400" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )

                  return (
                    <div key={item.name}>
                      {index > 0 && <div className="border-t border-neutral-100" />}
                      {item.external ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link href={item.href}>
                          {content}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {/* Conference Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary via-primary-light to-secondary text-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">ICASS 2026</h3>
            <p className="text-sm text-white/90 mb-3">
              International Conference on Intelligent Computing and Automation for Sustainable Solutions
            </p>
            <div className="space-y-1 text-sm">
              <p className="font-semibold">February 12-13, 2026</p>
              <p>Manav Rachna University, Faridabad</p>
              <p className="text-white/80 mt-3 italic">
                "Harnessing AI for a Digital Future"
              </p>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="text-center py-4 text-sm text-neutral-500">
            <p>© 2026 Manav Rachna University</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
