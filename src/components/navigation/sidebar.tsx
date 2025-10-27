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
    <Sidebar variant="inset" className="border-r border-border/50">
      <SidebarHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 via-primary/3 to-accent/5 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 shadow-lg shadow-primary/20">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                UNIFY
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Creator Platform</p>
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
                        "group relative overflow-hidden transition-all duration-200 hover:bg-accent/50",
                        isActive && "bg-primary/10 text-primary shadow-sm hover:bg-primary/15 border-l-2 border-primary"
                      )}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className={cn(
                          "h-4 w-4 transition-all duration-200",
                          isActive ? "text-primary scale-110" : "text-muted-foreground group-hover:text-foreground"
                        )} />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent -z-10" />
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
                        "group relative overflow-hidden transition-all duration-200 hover:bg-accent/50",
                        isActive && "bg-primary/10 text-primary shadow-sm hover:bg-primary/15 border-l-2 border-primary"
                      )}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className={cn(
                          "h-4 w-4 transition-all duration-200",
                          isActive ? "text-primary scale-110" : "text-muted-foreground group-hover:text-foreground"
                        )} />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent -z-10" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    // In production, this would call your auth logout function
                    // For now, we'll redirect to the login page
                    if (confirm('Are you sure you want to logout?')) {
                      window.location.href = '/login'
                    }
                  }}
                  className="group relative overflow-hidden transition-all duration-200 text-muted-foreground hover:text-destructive hover:bg-destructive/10 cursor-pointer"
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