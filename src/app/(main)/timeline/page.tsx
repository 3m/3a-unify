'use client'

import { useState } from 'react'
import { Search, Filter, Heart, MessageCircle, Share, MoreHorizontal, Play, Lock, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

// Mock data for development
const mockPosts = [
  {
    id: '1',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'BRONZE',
      verified: true
    },
    content: 'Just dropped a new track! 🎵 What do you think?',
    mediaUrl: '/images/basketball-hoop.jpg',
    likes: 1247,
    comments: 89,
    shares: 23,
    timeAgo: '2h',
    type: 'image'
  },
  {
    id: '2',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'FREE',
      verified: true
    },
    content: 'Watch "Encore" | THE SPARK now - this one hits different 🔥',
    mediaUrl: '/videos/encore.mp4',
    likes: 3421,
    comments: 156,
    shares: 67,
    timeAgo: '5h',
    type: 'video'
  },
  {
    id: '3',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'GOLD',
      verified: true
    },
    content: 'Behind the scenes of my latest studio session. The energy was incredible!',
    mediaUrl: '/images/premium-content.jpg',
    likes: 892,
    comments: 45,
    shares: 12,
    timeAgo: '1d',
    type: 'image',
    isLocked: true
  }
]

const tierColors = {
  FREE: 'tier-free-bg tier-free font-semibold',
  BRONZE: 'tier-bronze-bg tier-bronze font-semibold',
  SILVER: 'tier-silver-bg tier-silver font-semibold',
  GOLD: 'tier-gold-bg tier-gold font-semibold'
}

export default function TimelinePage() {
  const [posts] = useState(mockPosts)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-strong border-b">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">
                  Timeline
                </h1>
                <p className="text-sm text-muted-foreground">Discover amazing content</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 glass focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <Button variant="outline" size="icon" className="glass hover:shadow-glow transition-all duration-200">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {posts.map((post, index) => (
          <Card
            key={post.id}
            className="group overflow-hidden glass hover-lift hover:shadow-glow transition-all duration-300 animate-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-14 w-14 ring-2 ring-primary/30 group-hover:ring-primary shadow-lg transition-all duration-200">
                      <AvatarImage src={post.creator.avatar} alt={post.creator.name} />
                      <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold text-lg">
                        {post.creator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {post.creator.verified && (
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full gradient-bg-intense shadow-glow flex items-center justify-center">
                        <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {post.creator.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`${tierColors[post.creator.tier as keyof typeof tierColors]} px-3 py-1 text-xs rounded-full`}
                      >
                        {post.creator.tier}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>

              {/* Post Content */}
              <div className="relative">
                {post.isLocked ? (
                  <div className="relative">
                    <div className="aspect-video gradient-bg flex items-center justify-center border-b">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-glow-lg animate-scale-in">
                          <Lock className="h-10 w-10 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-gradient mb-2">Premium Content</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm">Subscribe to unlock this exclusive content and get access to premium features</p>
                        <Button className="gradient-bg-intense text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200 hover:scale-105">
                          Subscribe to Unlock
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video gradient-bg flex items-center justify-center border-b group-hover:shadow-inner transition-all duration-200">
                    {post.type === 'video' ? (
                      <div className="text-center p-8">
                        <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:shadow-glow transition-all duration-200">
                          <Play className="h-10 w-10 text-primary-foreground ml-1" />
                        </div>
                        <p className="text-muted-foreground font-semibold">Video Content</p>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-24 h-24 gradient-bg-intense rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:shadow-glow transition-all duration-200">
                          <div className="text-3xl">🖼️</div>
                        </div>
                        <p className="text-muted-foreground font-semibold">Image Content</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="p-6">
                <p className="text-foreground mb-5 leading-relaxed text-base">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <Heart className="mr-2 h-4 w-4 group-hover/action:scale-125 transition-transform" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <MessageCircle className="mr-2 h-4 w-4 group-hover/action:scale-125 transition-transform" />
                      <span className="font-semibold">{post.comments}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-green-500 hover:bg-green-500/10 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <Share className="mr-2 h-4 w-4 group-hover/action:scale-125 transition-transform" />
                      <span className="font-semibold">{post.shares}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
