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
  LogOut 
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
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">UNIFY</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User Navigation */}
      <nav className="px-4 py-4 border-t border-gray-200">
        {userNavigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          )
        })}
        
        {/* Logout */}
        <button className="group flex w-full items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors">
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          Logout
        </button>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          powered by <span className="font-bold">ARCatAR</span>
        </p>
      </div>
    </div>
  )
}
