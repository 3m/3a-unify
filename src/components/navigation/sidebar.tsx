'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home,
  MessageCircle,
  Calendar,
  Star,
  Hash,
  Bell,
  User,
  LogOut,
  Sparkles
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/timeline', icon: Home },
  { name: 'Chats', href: '/chats', icon: MessageCircle },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Creators', href: '/creators', icon: Star },
  { name: 'Interests', href: '/interests', icon: Hash },
]

const userNavigation = [
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Profile', href: '/profile/me', icon: User },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-72 flex-col bg-card/50 backdrop-blur-xl border-r border-border/50">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] blur-lg opacity-50" />
            <Sparkles className="relative h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-black gradient-text">UNIFY</h1>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group relative flex items-center gap-3 px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-105'
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] rounded-xl opacity-100 transition-opacity" />
              )}
              <item.icon
                className={cn(
                  'relative h-5 w-5 flex-shrink-0 transition-transform duration-200',
                  isActive ? 'text-primary-foreground scale-110' : 'text-muted-foreground group-hover:scale-110'
                )}
              />
              <span className="relative">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Navigation */}
      <nav className="px-4 py-4 space-y-2 border-t border-border/50">
        {userNavigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group relative flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] rounded-xl opacity-100" />
              )}
              <item.icon
                className={cn(
                  'relative h-5 w-5 flex-shrink-0',
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                )}
              />
              <span className="relative">{item.name}</span>
            </Link>
          )
        })}

        {/* Logout */}
        <button className="group flex w-full items-center gap-3 px-4 py-3 text-sm font-semibold text-muted-foreground rounded-xl hover:bg-destructive/10 hover:text-destructive transition-all duration-200">
          <LogOut className="h-5 w-5 flex-shrink-0" />
          Logout
        </button>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          powered by <span className="font-bold gradient-text">ARCatAR</span>
        </p>
      </div>
    </div>
  )
}
