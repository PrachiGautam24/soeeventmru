'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MapPin, Menu } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Home',
      href: '/home',
      icon: Home,
    },
    {
      name: 'Location',
      href: '/location',
      icon: MapPin,
    },
    {
      name: 'More',
      href: '/more',
      icon: Menu,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-mixed border-t border-white/20 backdrop-blur-lg z-40 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                  isActive
                    ? 'text-white scale-110'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'drop-shadow-glow' : ''}`} />
                <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-1 bg-white rounded-t-full" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
