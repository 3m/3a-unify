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
  FREE: 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-300 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200 dark:border-slate-600',
  BRONZE: 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 border border-amber-300 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-200 dark:border-amber-600',
  SILVER: 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 border border-gray-400 dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 dark:border-gray-500',
  GOLD: 'bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-900 border border-yellow-400 dark:from-yellow-900/30 dark:to-yellow-800/30 dark:text-yellow-200 dark:border-yellow-600'
}

export default function TimelinePage() {
  const [posts] = useState(mockPosts)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
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
                className="pl-10 w-64 bg-background/50 border-border/50 focus:bg-background transition-colors"
              />
            </div>
            <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-all duration-200">
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
            className="group overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 animate-in slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/30 bg-gradient-to-r from-card/40 to-card/20">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200">
                      <AvatarImage src={post.creator.avatar} alt={post.creator.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold">
                        {post.creator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {post.creator.verified && (
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                        {post.creator.name}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className={`${tierColors[post.creator.tier as keyof typeof tierColors]} font-medium px-3 py-1 text-xs`}
                      >
                        {post.creator.tier}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* Post Content */}
              <div className="relative">
                {post.isLocked ? (
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/20 flex items-center justify-center border-b border-border/30">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                          <Lock className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Premium Content</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm">Subscribe to unlock this exclusive content and get access to premium features</p>
                        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                          Subscribe to Unlock
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center border-b border-border/30 group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-200">
                    {post.type === 'video' ? (
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                        <p className="text-muted-foreground font-medium">Video Content</p>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                          <div className="text-2xl">🖼️</div>
                        </div>
                        <p className="text-muted-foreground font-medium">Image Content</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="p-6 bg-gradient-to-r from-card/20 to-card/10">
                <p className="text-foreground mb-4 leading-relaxed text-base">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <Heart className="mr-2 h-4 w-4 group-hover/action:scale-110 transition-transform" />
                      <span className="font-medium">{post.likes.toLocaleString()}</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <MessageCircle className="mr-2 h-4 w-4 group-hover/action:scale-110 transition-transform" />
                      <span className="font-medium">{post.comments}</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-200 rounded-full px-4 py-2 group/action"
                    >
                      <Share className="mr-2 h-4 w-4 group-hover/action:scale-110 transition-transform" />
                      <span className="font-medium">{post.shares}</span>
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
