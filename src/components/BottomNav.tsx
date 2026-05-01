'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CalendarDays, Building2, Zap, User, Star, Share2 } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()
  const isInEventContext = pathname.startsWith('/icass-2026')
  const eventPrefix = isInEventContext ? '/icass-2026' : ''

  const navItems = isInEventContext
    ? [
        { name: 'Home',     href: `${eventPrefix}/home`,     icon: Home },
        { name: 'Location', href: `${eventPrefix}/location`, icon: Star },
        { name: 'More',     href: `${eventPrefix}/more`,     icon: Share2 },
      ]
    : [
        { name: 'Home',        href: '/home',        icon: Home },
        { name: 'Events',      href: '/events',      icon: CalendarDays },
        { name: 'Departments', href: '/departments', icon: Building2 },
        { name: 'Quick Links', href: '/quick-links', icon: Zap },
        { name: 'Profile',     href: '/profile',     icon: User },
      ]

  // Hide on landing page and login page
  if (pathname === '/' || pathname === '/login') return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
      <div className="w-full max-w-md bg-white border-t border-neutral-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link key={item.name} href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-all duration-200 ${
                  isActive ? 'text-secondary' : 'text-neutral-400'
                }`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isActive ? 'bg-red-50 scale-110' : ''
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[9px] leading-none ${isActive ? 'font-bold text-secondary' : 'font-medium'}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
