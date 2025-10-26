'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Sparkles, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data
const mockEvents = [
  {
    id: '1',
    title: 'Live Performance & Q&A',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      verified: true
    },
    date: 'March 15, 2024',
    time: '7:00 PM EST',
    location: 'Virtual Event',
    attendees: 234,
    maxAttendees: 500,
    tier: 'GOLD',
    price: '$25',
    category: 'Music',
    featured: true
  },
  {
    id: '2',
    title: 'Morning Yoga Session',
    creator: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      verified: true
    },
    date: 'March 18, 2024',
    time: '8:00 AM EST',
    location: 'Virtual Event',
    attendees: 89,
    maxAttendees: 100,
    tier: 'SILVER',
    price: '$15',
    category: 'Fitness',
    featured: false
  },
  {
    id: '3',
    title: 'Coding Bootcamp: React Advanced',
    creator: {
      name: 'Marcus Dev',
      avatar: '/avatars/marcus.jpg',
      verified: true
    },
    date: 'March 20, 2024',
    time: '3:00 PM EST',
    location: 'Virtual Event',
    attendees: 156,
    maxAttendees: 200,
    tier: 'BRONZE',
    price: 'Free',
    category: 'Tech',
    featured: true
  },
  {
    id: '4',
    title: 'Fashion Show Behind the Scenes',
    creator: {
      name: 'Emma Rose',
      avatar: '/avatars/emma.jpg',
      verified: true
    },
    date: 'March 22, 2024',
    time: '6:00 PM EST',
    location: 'New York, NY',
    attendees: 45,
    maxAttendees: 50,
    tier: 'GOLD',
    price: '$50',
    category: 'Fashion',
    featured: false
  }
]

const tierColors = {
  FREE: 'tier-free-bg tier-free font-semibold',
  BRONZE: 'tier-bronze-bg tier-bronze font-semibold',
  SILVER: 'tier-silver-bg tier-silver font-semibold',
  GOLD: 'tier-gold-bg tier-gold font-semibold'
}

const categories = ['All', 'Music', 'Fitness', 'Tech', 'Fashion']

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredEvents = mockEvents.filter(event =>
    selectedCategory === 'All' || event.category === selectedCategory
  )

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-strong border-b">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Events</h1>
                <p className="text-sm text-muted-foreground">Discover upcoming creator events</p>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category
                  ? 'gradient-bg-intense text-primary-foreground shadow-glow'
                  : 'glass hover:shadow-glow'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="group glass hover-lift hover:shadow-glow transition-all duration-300 animate-in overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/30">
                      <AvatarImage src={event.creator.avatar} alt={event.creator.name} />
                      <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold">
                        {event.creator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground truncate">{event.creator.name}</span>
                        {event.creator.verified && (
                          <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${tierColors[event.tier as keyof typeof tierColors]} text-xs rounded-full mt-1`}
                      >
                        {event.tier}
                      </Badge>
                    </div>
                  </div>
                  {event.featured && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-warning shadow-glow flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-warning-foreground" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.attendees} / {event.maxAttendees} attending</span>
                  </div>
                </div>

                {/* Attendees Progress */}
                <div className="mb-6">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="gradient-bg-intense h-2 rounded-full transition-all shadow-glow"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">{event.price}</span>
                  <Button className="gradient-bg-intense text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:scale-105">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-glow">
              <Calendar className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-2">No Events Found</h3>
            <p className="text-muted-foreground">Check back later for new events</p>
          </div>
        )}
      </div>
    </div>
  )
}
