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
  Briefcase
} from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      name: 'Speakers',
      icon: Users,
      href: '/speakers',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Authors',
      icon: FileText,
      href: '/authors',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Schedule',
      icon: Calendar,
      href: '/schedule',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Tracks',
      icon: Target,
      href: '/tracks',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Patrons',
      icon: Award,
      href: '/patrons',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Organisers',
      icon: UserCog,
      href: '/organisers',
      color: 'from-teal-500 to-teal-600',
    },
    {
      name: 'Workshop',
      icon: Briefcase,
      href: '/workshop',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <div className="px-4 py-6 bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Explore</h3>
      
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 mt-2 text-center">
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
