'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data for development
const mockPosts = [
  {
    id: '1',
    creator: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      tier: 'BRONZE'
    },
    content: 'Hello there!',
    mediaUrl: '/images/basketball-hoop.jpg',
    likes: 0,
    comments: 1,
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
    content: 'Watch "Encore" | THE SPARK now',
    mediaUrl: '/videos/encore.mp4',
    likes: 0,
    comments: 0,
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    mediaUrl: '/images/premium-content.jpg',
    likes: 0,
    comments: 0,
    timeAgo: '3mo',
    type: 'image',
    isLocked: true
  }
]

const tierColors = {
  FREE: 'bg-gray-100 text-gray-800',
  BRONZE: 'bg-amber-100 text-amber-800',
  SILVER: 'bg-gray-200 text-gray-800',
  GOLD: 'bg-yellow-100 text-yellow-800'
}

export default function TimelinePage() {
  const [posts] = useState(mockPosts)

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.creator.avatar} alt={post.creator.name} />
                    <AvatarFallback>{post.creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{post.creator.name}</span>
                      <Badge 
                        variant="secondary" 
                        className={tierColors[post.creator.tier as keyof typeof tierColors]}
                      >
                        {post.creator.tier}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="relative">
                {post.isLocked ? (
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🔒</div>
                        <p className="text-gray-600 mb-4">Premium Content</p>
                        <Button variant="outline">Subscribe to Unlock</Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    {post.type === 'video' ? (
                      <div className="text-center">
                        <div className="text-6xl mb-4">▶️</div>
                        <p className="text-gray-600">Video Content</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-6xl mb-4">🖼️</div>
                        <p className="text-gray-600">Image Content</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      ❤️ {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      💬 {post.comments}
                    </Button>
                  </div>
                  <span className="text-sm text-gray-500">{post.timeAgo}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
