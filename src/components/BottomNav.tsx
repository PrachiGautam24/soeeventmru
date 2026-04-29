'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, CalendarDays, Zap, User, Star, Share2,
  Target, Trophy, Rss, Gift, Sparkles,
} from 'lucide-react'

type NavItem = { name: string; href: string; icon: React.ElementType }

export default function BottomNav() {
  const pathname = usePathname()
  const isInEvent = pathname.startsWith('/icass-2026')
  const isInEngage = pathname.startsWith('/engage')

  let navItems: NavItem[]

  if (isInEngage) {
    navItems = [
      { name: 'Hub',      href: '/engage',             icon: Sparkles },
      { name: 'Quests',   href: '/engage/challenges',  icon: Target },
      { name: 'Ranks',    href: '/engage/leaderboard', icon: Trophy },
      { name: 'Feed',     href: '/engage/feed',        icon: Rss },
      { name: 'Rewards',  href: '/engage/rewards',     icon: Gift },
    ]
  } else if (isInEvent) {
    navItems = [
      { name: 'Home',     href: '/icass-2026/home',     icon: Home },
      { name: 'Location', href: '/icass-2026/location', icon: Star },
      { name: 'More',     href: '/icass-2026/more',     icon: Share2 },
    ]
  } else {
    navItems = [
      { name: 'Home',     href: '/home',        icon: Home },
      { name: 'Events',   href: '/events',      icon: CalendarDays },
      { name: 'Engage',   href: '/engage',      icon: Sparkles },
      { name: 'Quick',    href: '/quick-links', icon: Zap },
      { name: 'Profile',  href: '/profile',     icon: User },
    ]
  }

  if (pathname === '/' || pathname === '/login') return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
      <div className="w-full max-w-md bg-white border-t border-neutral-200 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/engage' && pathname.startsWith(item.href + '/'))
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-all duration-200 ${
                  isActive ? 'text-secondary' : 'text-neutral-400'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isActive ? 'bg-red-50 scale-110' : ''
                  }`}
                >
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
