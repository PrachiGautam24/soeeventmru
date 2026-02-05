'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  FileText, 
  Calendar, 
  Target, 
  Award,
  UserCog,
  Briefcase,
  UserCheck,
  Building2,
  ClipboardCheck
} from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      name: 'Speakers',
      icon: Users,
      href: '/icass-2026/speakers',
      color: 'from-primary to-primary-dark',
    },
    {
      name: 'Authors',
      icon: FileText,
      href: '/icass-2026/authors',
      color: 'from-neutral-600 to-neutral-700',
    },
    {
      name: 'Schedule',
      icon: Calendar,
      href: '/icass-2026/schedule',
      color: 'from-secondary to-secondary-dark',
    },
    {
      name: 'Tracks',
      icon: Target,
      href: '/icass-2026/tracks',
      color: 'from-primary-light to-primary',
    },
    {
      name: 'Mark Attendance',
      icon: UserCheck,
      href: '/icass-2026/attendance',
      color: 'from-primary to-primary-dark',
    },
    {
      name: 'Supporters',
      icon: Building2,
      href: '/icass-2026/supporters',
      color: 'from-secondary-light to-secondary',
    },
    {
      name: 'Session Tracker',
      icon: ClipboardCheck,
      href: '/icass-2026/session-tracker',
      color: 'from-neutral-600 to-neutral-700',
    },
    {
      name: 'Patrons',
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
    {
      name: 'Pre Conference Workshop',
      icon: Briefcase,
      href: '/icass-2026/workshop',
      color: 'from-primary to-secondary',
    },
  ]

  return (
    <div className="px-4 py-6 bg-neutral-50">
      <h3 className="text-xl font-bold text-neutral-800 mb-6 ml-6">More About Conference</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          
          return (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={action.href}>
                <div className="flex flex-col items-center group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-medium text-neutral-700 mt-2 text-center">
                    {action.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
