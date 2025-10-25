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
  Sparkles,
  Settings
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'

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
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" className="border-r-0">
      <SidebarHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 via-primary/3 to-accent/5">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                UNIFY
              </h1>
              <p className="text-xs text-muted-foreground">Creator Platform</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      className={cn(
                        "group relative overflow-hidden transition-all duration-200",
                        isActive && "bg-primary/10 text-primary shadow-sm"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-4" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      className={cn(
                        "group relative overflow-hidden transition-all duration-200",
                        isActive && "bg-primary/10 text-primary shadow-sm"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="group relative overflow-hidden transition-all duration-200 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="font-medium">Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="flex items-center justify-center px-4 py-3">
          <p className="text-xs text-muted-foreground/80">
            © 2024 UNIFY Platform
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}