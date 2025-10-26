'use client'

import { useState } from 'react'
import { Heart, Music, Dumbbell, Code, Palette, Camera, Utensils, Gamepad2, BookOpen, Plane } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data
const interests = [
  { id: '1', name: 'Music', icon: Music, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { id: '2', name: 'Fitness', icon: Dumbbell, color: 'text-green-500', bg: 'bg-green-500/10' },
  { id: '3', name: 'Technology', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: '4', name: 'Art', icon: Palette, color: 'text-pink-500', bg: 'bg-pink-500/10' },
  { id: '5', name: 'Photography', icon: Camera, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: '6', name: 'Food', icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { id: '7', name: 'Gaming', icon: Gamepad2, color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: '8', name: 'Education', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { id: '9', name: 'Travel', icon: Plane, color: 'text-cyan-500', bg: 'bg-cyan-500/10' }
]

export default function InterestsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['1', '2', '3'])

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-strong border-b">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Interests</h1>
                <p className="text-sm text-muted-foreground">Customize your content preferences</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="gradient-bg-intense text-primary-foreground px-4 py-2">
                {selectedInterests.length} selected
              </Badge>
              <Button className="gradient-bg-intense text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all">
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Grid */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">What are you interested in?</h2>
          <p className="text-muted-foreground">Select your interests to get personalized content recommendations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            const isSelected = selectedInterests.includes(interest.id)

            return (
              <Card
                key={interest.id}
                className={`group cursor-pointer glass transition-all duration-300 animate-in ${
                  isSelected
                    ? 'shadow-glow ring-2 ring-primary hover:shadow-glow-lg'
                    : 'hover-lift hover:shadow-glow'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => toggleInterest(interest.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-3xl ${interest.bg} mb-4 group-hover:scale-110 transition-transform ${
                        isSelected ? 'scale-110 shadow-glow' : ''
                      }`}
                    >
                      <Icon className={`h-10 w-10 ${interest.color}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                      {interest.name}
                    </h3>
                    {isSelected && (
                      <Badge className="gradient-bg-intense text-primary-foreground">
                        Selected
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recommendations */}
        {selectedInterests.length > 0 && (
          <div className="mt-12 glass rounded-3xl p-8">
            <h3 className="text-xl font-bold text-gradient mb-4">Based on your interests</h3>
            <p className="text-muted-foreground mb-6">
              You'll see more content related to{' '}
              {selectedInterests.map((id, idx) => {
                const interest = interests.find(i => i.id === id)
                return (
                  <span key={id}>
                    <span className="text-primary font-semibold">{interest?.name}</span>
                    {idx < selectedInterests.length - 2 && ', '}
                    {idx === selectedInterests.length - 2 && ' and '}
                  </span>
                )
              })}
            </p>
            <Button variant="outline" className="glass hover:shadow-glow">
              Discover Creators
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
