'use client'

import { usePathname } from 'next/navigation'
import { AppSidebar } from '@/components/navigation/sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'

// Map routes to display names
const routeTitles: Record<string, string> = {
  '/timeline': 'Timeline',
  '/chats': 'Chats',
  '/events': 'Events',
  '/creators': 'Creators',
  '/interests': 'Interests',
  '/notifications': 'Notifications',
  '/profile/me': 'Profile',
  '/settings': 'Settings',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const title = routeTitles[pathname] || 'Dashboard'

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="!overflow-hidden md:!ml-[16rem]">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-border" />
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
