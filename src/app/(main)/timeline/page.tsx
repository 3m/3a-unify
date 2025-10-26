'use client'

import { useState } from 'react'
import { Search, Filter, Plus, Heart, MessageCircle, Share2, Lock, Play, Image as ImageIcon, MoreHorizontal, Sparkles } from 'lucide-react'
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
      tier: 'BRONZE'
    },
    content: 'Just had an amazing practice session! Can\'t wait to show you all what we\'ve been working on. The energy is incredible!',
    mediaUrl: '/images/basketball-hoop.jpg',
    likes: 234,
    comments: 18,
    timeAgo: '3mo',
    type: 'image'
  },
  {
    id: '2',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'FREE'
    },
    content: 'Watch "Encore" | THE SPARK now - this one hits different! Thank you all for the love and support.',
    mediaUrl: '/videos/encore.mp4',
    likes: 1203,
    comments: 89,
    timeAgo: '3mo',
    type: 'video'
  },
  {
    id: '3',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'GOLD'
    },
    content: 'Exclusive behind-the-scenes content from our latest music video shoot. GOLD tier members get access to the full gallery!',
    mediaUrl: '/images/premium-content.jpg',
    likes: 456,
    comments: 45,
    timeAgo: '3mo',
    type: 'image',
    isLocked: true
  }
]

const tierVariants: Record<string, 'free' | 'bronze' | 'silver' | 'gold'> = {
  FREE: 'free',
  BRONZE: 'bronze',
  SILVER: 'silver',
  GOLD: 'gold'
}

export default function TimelinePage() {
  const [posts] = useState(mockPosts)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search posts, creators..."
                className="pl-12 bg-secondary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Your Feed</h1>
              <p className="text-sm text-muted-foreground">Stay connected with your favorite creators</p>
            </div>
            <Button variant="gradient" className="gap-2">
              <Plus className="h-5 w-5" />
              Create Post
            </Button>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/10 transition-all group-hover:ring-primary/30">
                      <AvatarImage src={post.creator.avatar} alt={post.creator.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-[hsl(var(--gradient-end))] text-white font-bold">
                        {post.creator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{post.creator.name}</span>
                        <Badge variant={tierVariants[post.creator.tier]}>
                          {post.creator.tier}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{post.timeAgo} ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>

                {/* Post Content Text */}
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                </div>

                {/* Post Media */}
                <div className="relative">
                  {post.isLocked ? (
                    <div className="relative aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60">
                      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-background/50">
                        <div className="text-center space-y-4 p-8">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--tier-gold))] to-yellow-600 blur-2xl opacity-50" />
                            <Lock className="relative h-16 w-16 text-[hsl(var(--tier-gold))]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Premium Content</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Subscribe to {post.creator.tier} tier to unlock
                            </p>
                          </div>
                          <Button variant="gradient" className="gap-2">
                            <Sparkles className="h-4 w-4" />
                            Upgrade to {post.creator.tier}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-secondary via-muted/30 to-secondary group-hover:from-secondary/80 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {post.type === 'video' ? (
                          <div className="text-center space-y-3">
                            <div className="relative inline-block">
                              <div className="absolute inset-0 bg-primary blur-2xl opacity-30" />
                              <Play className="relative h-20 w-20 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">Video Content</p>
                          </div>
                        ) : (
                          <div className="text-center space-y-3">
                            <div className="relative inline-block">
                              <div className="absolute inset-0 bg-primary blur-2xl opacity-30" />
                              <ImageIcon className="relative h-20 w-20 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">Image Content</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="p-5 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 hover:text-red-500 transition-colors"
                      >
                        <Heart className="h-5 w-5" />
                        <span className="font-semibold">{post.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 hover:text-primary transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-semibold">{post.comments}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 hover:text-primary transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" className="gap-2">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}
