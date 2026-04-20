'use client'

import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ChevronLeft, Settings, ChevronRight,
  Building2, Bookmark, Calendar, Bell, LogIn, LogOut, User
} from 'lucide-react'

const menuItems = [
  { icon: Building2, label: 'Departments',     color: 'bg-red-500',    href: '/departments' },
  { icon: Bookmark,  label: 'My Bookmarks',    color: 'bg-amber-400',  href: '/home' },
  { icon: Calendar,  label: 'Upcoming Events', color: 'bg-green-600',  href: '/events' },
  { icon: Bell,      label: 'Notifications',   color: 'bg-neutral-500',href: '/home' },
]

export default function ProfilePage() {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <div className="bg-white px-5 pt-12 pb-4 flex items-center justify-between border-b border-neutral-100 shadow-sm">
          <button onClick={() => router.back()} className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="text-base font-bold text-gray-900">My Profile</h1>
          <button className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">
            <Settings className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-4 mt-4 bg-white rounded-2xl px-4 py-4 shadow-sm border border-neutral-100 flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 bg-neutral-100 flex items-center justify-center shrink-0">
            {session?.user?.image
              ? <Image src={session.user.image} alt="avatar" width={64} height={64} className="rounded-full object-cover" />
              : <User className="w-8 h-8 text-neutral-400" />
            }
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-gray-900 truncate">
              {session?.user?.name ?? 'Guest User'}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5 truncate">
              {session?.user?.email ?? 'Not signed in'}
            </p>
          </div>
        </motion.div>

        {/* Menu items */}
        <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden divide-y divide-neutral-100">
          {menuItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(item.href)}
                className="w-full flex items-center gap-4 px-4 py-4"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="flex-1 text-left text-sm font-semibold text-gray-800">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-300" />
              </motion.button>
            )
          })}
        </div>

        {/* Sign in / Sign out */}
        <div className="mx-4 mt-4">
          {session ? (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-100 rounded-2xl py-4 text-sm font-bold text-red-600"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/login')}
              className="w-full flex items-center justify-center gap-2 bg-secondary rounded-2xl py-4 text-sm font-bold text-white shadow-md"
            >
              <LogIn className="w-4 h-4" /> Sign In with Google
            </motion.button>
          )}
        </div>

        {/* MRU branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <Image
            src="https://manavrachna.edu.in/assets/images/mru-logo.png"
            alt="Manav Rachna University"
            width={140}
            height={60}
            className="object-contain opacity-30"
          />
        </motion.div>

      </div>
    </div>
  )
}
