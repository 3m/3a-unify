'use client'

import { Bell, Heart, MessageCircle, UserPlus, Sparkles, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data
const mockNotifications = [
  {
    id: '1',
    type: 'LIKE',
    user: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      verified: true
    },
    content: 'liked your comment',
    timestamp: '2m ago',
    read: false
  },
  {
    id: '2',
    type: 'NEW_POST',
    user: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      verified: true
    },
    content: 'posted new exclusive content',
    timestamp: '1h ago',
    read: false
  },
  {
    id: '3',
    type: 'NEW_FOLLOWER',
    user: {
      name: 'Marcus Dev',
      avatar: '/avatars/marcus.jpg',
      verified: true
    },
    content: 'started following you',
    timestamp: '3h ago',
    read: true
  },
  {
    id: '4',
    type: 'COMMENT',
    user: {
      name: 'Emma Rose',
      avatar: '/avatars/emma.jpg',
      verified: false
    },
    content: 'commented on your post: "This is amazing!"',
    timestamp: '5h ago',
    read: true
  },
  {
    id: '5',
    type: 'NEW_EVENT',
    user: {
      name: 'Olivia Moore',
      avatar: '/avatars/olivia.jpg',
      verified: true
    },
    content: 'created a new event you might be interested in',
    timestamp: '1d ago',
    read: true
  },
  {
    id: '6',
    type: 'NEW_MESSAGE',
    user: {
      name: 'Alex Turner',
      avatar: '/avatars/alex.jpg',
      verified: false
    },
    content: 'sent you a message',
    timestamp: '2d ago',
    read: true
  }
]

const notificationIcons = {
  LIKE: { icon: Heart, color: 'text-red-500', bg: 'bg-red-500/10' },
  NEW_POST: { icon: Sparkles, color: 'text-primary', bg: 'bg-primary/10' },
  NEW_FOLLOWER: { icon: UserPlus, color: 'text-success', bg: 'bg-success/10' },
  COMMENT: { icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  NEW_EVENT: { icon: Calendar, color: 'text-warning', bg: 'bg-warning/10' },
  NEW_MESSAGE: { icon: MessageCircle, color: 'text-info', bg: 'bg-info/10' }
}

export default function NotificationsPage() {
  const unreadCount = mockNotifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-strong border-b">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow relative">
                <Bell className="h-6 w-6 text-primary-foreground" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-destructive text-destructive-foreground p-0 text-xs">
                    {unreadCount}
                  </Badge>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Notifications</h1>
                <p className="text-sm text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
                </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" className="glass hover:shadow-glow">
                Mark all as read
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-3xl mx-auto p-6">
        <div className="space-y-3">
          {mockNotifications.map((notification, index) => {
            const iconData = notificationIcons[notification.type as keyof typeof notificationIcons]
            const Icon = iconData.icon

            return (
              <Card
                key={notification.id}
                className={`group glass hover-lift transition-all duration-300 animate-in ${
                  !notification.read ? 'shadow-glow ring-1 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Notification Icon */}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconData.bg} flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${iconData.color}`} />
                    </div>

                    {/* User Avatar */}
                    <div className="relative flex-shrink-0">
                      <Avatar className="h-12 w-12 ring-2 ring-border">
                        <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                        <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold">
                          {notification.user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      {notification.user.verified && (
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full gradient-bg-intense flex items-center justify-center">
                          <Sparkles className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Notification Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground">
                        <span className="font-bold">{notification.user.name}</span>{' '}
                        <span className="text-muted-foreground">{notification.content}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{notification.timestamp}</p>
                    </div>

                    {/* Unread Indicator */}
                    {!notification.read && (
                      <div className="flex-shrink-0">
                        <div className="h-3 w-3 rounded-full bg-primary shadow-glow"></div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {mockNotifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-glow">
              <Bell className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-2">All caught up!</h3>
            <p className="text-muted-foreground">Your notifications will appear here when you have updates</p>
          </div>
        )}
      </div>
    </div>
  )
}
