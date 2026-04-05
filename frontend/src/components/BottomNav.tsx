'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Star, Share2 } from 'lucide-react'

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
        { name: 'Home',          href: '/home',          icon: Home },
        { name: 'Fresher Guide', href: '/home#fresher',  icon: Star },
        { name: 'Social',        href: '/home#social',   icon: Share2 },
      ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-40 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/home' && pathname === '/home')
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                  isActive
                    ? 'text-primary scale-105'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-full" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
