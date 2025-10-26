'use client'

import { useState } from 'react'
import { User, Settings, Heart, Calendar, Users, Sparkles, Mail, MapPin, Link as LinkIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data
const profileData = {
  name: 'Alex Johnson',
  username: '@alexjohnson',
  bio: 'Content creator | Tech enthusiast | Sharing my journey in coding and creativity',
  avatar: '/avatars/user.jpg',
  coverImage: null,
  location: 'San Francisco, CA',
  website: 'alexjohnson.dev',
  joinedDate: 'January 2024',
  stats: {
    posts: 127,
    followers: 2845,
    following: 156,
    likes: 8921
  },
  subscriptions: ['GOLD', 'SILVER', 'BRONZE'],
  interests: ['Technology', 'Music', 'Art']
}

const tabs = [
  { id: 'posts', label: 'Posts', icon: User },
  { id: 'about', label: 'About', icon: Sparkles },
  { id: 'subscriptions', label: 'Subscriptions', icon: Users }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <div className="min-h-screen gradient-bg">
      {/* Cover Section */}
      <div className="relative h-48 gradient-bg-intense">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      </div>

      {/* Profile Info */}
      <div className="max-w-5xl mx-auto px-6 -mt-20">
        <Card className="glass shadow-glow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-32 w-32 ring-4 ring-primary shadow-glow-lg">
                  <AvatarImage src={profileData.avatar} alt={profileData.name} />
                  <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold text-4xl">
                    {profileData.name[0]}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gradient mb-1">{profileData.name}</h1>
                    <p className="text-muted-foreground">{profileData.username}</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-start">
                    <Button className="gradient-bg-intense text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <p className="text-foreground mb-4 max-w-2xl">{profileData.bio}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-primary" />
                    <a href={`https://${profileData.website}`} className="text-primary hover:underline">
                      {profileData.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Joined {profileData.joinedDate}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div>
                    <span className="font-bold text-foreground text-lg">{profileData.stats.posts}</span>
                    <span className="text-muted-foreground ml-1">Posts</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">{profileData.stats.followers.toLocaleString()}</span>
                    <span className="text-muted-foreground ml-1">Followers</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">{profileData.stats.following}</span>
                    <span className="text-muted-foreground ml-1">Following</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">{profileData.stats.likes.toLocaleString()}</span>
                    <span className="text-muted-foreground ml-1">Likes</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="mt-6 glass-strong rounded-2xl p-2">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'gradient-bg-intense text-primary-foreground shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 mb-12">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="glass hover-lift hover:shadow-glow transition-all cursor-pointer animate-in" style={{ animationDelay: `${i * 50}ms` }}>
                  <CardContent className="p-0">
                    <div className="aspect-square gradient-bg flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">Post content preview...</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" /> 234
                        </span>
                        <span>2d ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <Card className="glass animate-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-6">About Me</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Biography</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {profileData.bio}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.interests.map((interest) => (
                        <Badge key={interest} className="gradient-bg-intense text-primary-foreground">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>alex@example.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <LinkIcon className="h-4 w-4 text-primary" />
                        <a href={`https://${profileData.website}`} className="text-primary hover:underline">
                          {profileData.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'subscriptions' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.subscriptions.map((tier, i) => (
                <Card key={tier} className="glass hover-lift hover:shadow-glow transition-all animate-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 gradient-bg-intense rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                      <Sparkles className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <Badge className={`tier-${tier.toLowerCase()}-bg tier-${tier.toLowerCase()} mb-3`}>
                      {tier}
                    </Badge>
                    <p className="text-sm text-muted-foreground">Subscribed to creators</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
