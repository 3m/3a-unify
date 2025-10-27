'use client'

import { useState } from 'react'
import { Search, Users, Sparkles, UserPlus, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

// Mock data with real avatars
const mockCreators = [
  {
    id: '1',
    name: 'Flaujae',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    bio: 'Music Artist & Basketball Player | Creating exclusive content for my fans',
    subscribers: '125K',
    posts: 234,
    tier: 'GOLD',
    verified: true,
    category: 'Music',
    trending: true
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    bio: 'Fitness & Wellness Coach | Daily workouts and nutrition tips',
    subscribers: '89K',
    posts: 567,
    tier: 'SILVER',
    verified: true,
    category: 'Fitness',
    trending: false
  },
  {
    id: '3',
    name: 'Marcus Dev',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    bio: 'Software Engineer | Tech tutorials and coding tips',
    subscribers: '156K',
    posts: 432,
    tier: 'BRONZE',
    verified: true,
    category: 'Tech',
    trending: true
  },
  {
    id: '4',
    name: 'Emma Rose',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
    bio: 'Fashion & Lifestyle | Behind the scenes & exclusive photoshoots',
    subscribers: '234K',
    posts: 891,
    tier: 'GOLD',
    verified: true,
    category: 'Fashion',
    trending: false
  },
  {
    id: '5',
    name: 'Alex Turner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    coverImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    bio: 'Food & Travel | Culinary adventures around the world',
    subscribers: '67K',
    posts: 345,
    tier: 'FREE',
    verified: false,
    category: 'Food',
    trending: false
  },
  {
    id: '6',
    name: 'Olivia Moore',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    coverImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    bio: 'Digital Artist | Creating amazing art and sharing my process',
    subscribers: '112K',
    posts: 678,
    tier: 'SILVER',
    verified: true,
    category: 'Art',
    trending: true
  }
]

const tierColors = {
  FREE: 'tier-free-bg tier-free font-semibold',
  BRONZE: 'tier-bronze-bg tier-bronze font-semibold',
  SILVER: 'tier-silver-bg tier-silver font-semibold',
  GOLD: 'tier-gold-bg tier-gold font-semibold'
}

const categories = ['All', 'Music', 'Fitness', 'Tech', 'Fashion', 'Food', 'Art']

export default function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCreators = mockCreators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.bio.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || creator.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-strong border-b">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Creators</h1>
                <p className="text-sm text-muted-foreground">Discover amazing creators</p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 glass focus:ring-2 focus:ring-primary/50 transition-all"
              />
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

      {/* Creators Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator, index) => (
            <Card
              key={creator.id}
              className="group glass hover-lift hover:shadow-glow transition-all duration-300 animate-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {/* Creator Header */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24 ring-4 ring-primary/30 group-hover:ring-primary shadow-lg transition-all duration-200">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold text-2xl">
                        {creator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {creator.verified && (
                      <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full gradient-bg-intense shadow-glow flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    {creator.trending && (
                      <div className="absolute -top-1 -left-1 h-7 w-7 rounded-full bg-warning shadow-glow flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-warning-foreground" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {creator.name}
                  </h3>

                  <Badge
                    variant="secondary"
                    className={`${tierColors[creator.tier as keyof typeof tierColors]} mb-3 px-3 py-1 text-xs rounded-full`}
                  >
                    {creator.tier}
                  </Badge>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {creator.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{creator.subscribers}</div>
                      <div className="text-xs text-muted-foreground">Subscribers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{creator.posts}</div>
                      <div className="text-xs text-muted-foreground">Posts</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1 gradient-bg-intense text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:scale-105">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" className="glass hover:shadow-glow transition-all">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-glow">
              <Search className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-2">No Creators Found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
