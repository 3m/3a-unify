'use client'

import { useState } from 'react'
import { Search, Filter, Heart, MessageCircle, Share, MoreHorizontal, Play, Lock, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

// Mock data for development with real sample content
const mockPosts = [
  {
    id: '1',
    creator: {
      name: 'Flaujae',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      tier: 'BRONZE',
      verified: true
    },
    content: 'Just dropped a new track! 🎵 What do you think?',
    mediaUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    likes: 1247,
    comments: 89,
    shares: 23,
    timeAgo: '2h',
    type: 'image'
  },
  {
    id: '2',
    creator: {
      name: 'Marcus Dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      tier: 'FREE',
      verified: true
    },
    content: 'Watch my latest coding tutorial - Building a full-stack app from scratch! 🔥',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    likes: 3421,
    comments: 156,
    shares: 67,
    timeAgo: '5h',
    type: 'video'
  },
  {
    id: '3',
    creator: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      tier: 'SILVER',
      verified: true
    },
    content: 'My photography journey continues! Here\'s a shot from my latest urban exploration 📸',
    mediaUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    likes: 2156,
    comments: 92,
    shares: 45,
    timeAgo: '8h',
    type: 'image'
  },
  {
    id: '4',
    creator: {
      name: 'Emma Rose',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
      tier: 'GOLD',
      verified: true
    },
    content: 'Behind the scenes of my latest studio session. The energy was incredible!',
    mediaUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
    likes: 892,
    comments: 45,
    shares: 12,
    timeAgo: '1d',
    type: 'image',
    isLocked: true
  },
  {
    id: '5',
    creator: {
      name: 'Alex Turner',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      tier: 'BRONZE',
      verified: true
    },
    content: 'New fitness routine dropping soon! Stay tuned for the full workout video 💪',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    likes: 1789,
    comments: 67,
    shares: 34,
    timeAgo: '1d',
    type: 'video'
  },
  {
    id: '6',
    creator: {
      name: 'Olivia Moore',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
      tier: 'FREE',
      verified: true
    },
    content: 'Trying out some new recipes today! Cooking is my therapy 👨‍🍳✨',
    mediaUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    likes: 945,
    comments: 78,
    shares: 19,
    timeAgo: '2d',
    type: 'image'
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
                    <div className="aspect-video gradient-bg flex items-center justify-center border-b relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <img
                          src={post.mediaUrl}
                          alt="Locked content preview"
                          className="w-full h-full object-cover blur-xl"
                        />
                      </div>
                      <div className="text-center p-8 relative z-10">
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
                  <div className="aspect-video border-b overflow-hidden bg-black/5">
                    {post.type === 'video' ? (
                      <div className="relative w-full h-full group/video cursor-pointer">
                        <video
                          src={post.mediaUrl}
                          className="w-full h-full object-cover"
                          poster={post.thumbnail}
                          controls
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/10 transition-all pointer-events-none">
                          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-black ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={post.mediaUrl}
                        alt={post.content}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
