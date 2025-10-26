'use client'

import { useState } from 'react'
import { Search, MessageCircle, Send, MoreVertical, Phone, Video, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Mock data
const mockConversations = [
  {
    id: '1',
    user: {
      name: 'Flaujae',
      avatar: '/avatars/flaujae.jpg',
      verified: true,
      online: true
    },
    lastMessage: 'Thanks for subscribing! 🎵',
    timestamp: '2m ago',
    unread: 2,
    tier: 'GOLD'
  },
  {
    id: '2',
    user: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      verified: true,
      online: true
    },
    lastMessage: 'The new workout plan is ready!',
    timestamp: '1h ago',
    unread: 0,
    tier: 'SILVER'
  },
  {
    id: '3',
    user: {
      name: 'Marcus Dev',
      avatar: '/avatars/marcus.jpg',
      verified: true,
      online: false
    },
    lastMessage: 'Check out the latest tutorial',
    timestamp: '3h ago',
    unread: 1,
    tier: 'BRONZE'
  },
  {
    id: '4',
    user: {
      name: 'Emma Rose',
      avatar: '/avatars/emma.jpg',
      verified: false,
      online: false
    },
    lastMessage: 'Thanks for your support!',
    timestamp: '1d ago',
    unread: 0,
    tier: 'FREE'
  }
]

const mockMessages = [
  {
    id: '1',
    sender: 'them',
    content: 'Hey! Thanks so much for subscribing! 🎵',
    timestamp: '10:30 AM'
  },
  {
    id: '2',
    sender: 'them',
    content: 'I have some exclusive content coming out soon that you\'ll love!',
    timestamp: '10:31 AM'
  },
  {
    id: '3',
    sender: 'me',
    content: 'So excited! Your music is amazing!',
    timestamp: '10:35 AM'
  },
  {
    id: '4',
    sender: 'them',
    content: 'That means so much! Stay tuned for updates! 💜',
    timestamp: '10:36 AM'
  }
]

export default function ChatsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedChat, setSelectedChat] = useState(mockConversations[0])
  const [messageInput, setMessageInput] = useState('')

  const filteredConversations = mockConversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="h-screen gradient-bg flex flex-col">
      {/* Header */}
      <div className="glass-strong border-b">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-bg-intense shadow-glow">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gradient">Chats</h1>
              <p className="text-sm text-muted-foreground">Connect with creators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r glass-strong flex flex-col">
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-all border-b ${
                  selectedChat.id === conv.id ? 'bg-primary/10 border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conv.user.avatar} alt={conv.user.name} />
                    <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold">
                      {conv.user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  {conv.user.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-success rounded-full border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground truncate">{conv.user.name}</span>
                      {conv.user.verified && (
                        <Sparkles className="h-3 w-3 text-primary flex-shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <Badge className="ml-2 h-5 w-5 flex items-center justify-center rounded-full gradient-bg-intense text-primary-foreground p-0 text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b glass flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={selectedChat.user.avatar} alt={selectedChat.user.name} />
                  <AvatarFallback className="gradient-bg-intense text-primary-foreground font-bold">
                    {selectedChat.user.name[0]}
                  </AvatarFallback>
                </Avatar>
                {selectedChat.user.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-success rounded-full border-2 border-card" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground">{selectedChat.user.name}</h3>
                  {selectedChat.user.verified && (
                    <Sparkles className="h-4 w-4 text-primary" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedChat.user.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full">
                <Video className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted rounded-full">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} animate-in`}
              >
                <div
                  className={`max-w-md ${
                    message.sender === 'me'
                      ? 'gradient-bg-intense text-primary-foreground shadow-glow'
                      : 'glass'
                  } rounded-2xl px-4 py-3`}
                >
                  <p className={message.sender === 'me' ? 'text-primary-foreground' : 'text-foreground'}>
                    {message.content}
                  </p>
                  <span
                    className={`text-xs ${
                      message.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    } mt-1 block`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t glass">
            <div className="flex gap-3">
              <Input
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 glass focus:ring-2 focus:ring-primary/50"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && messageInput.trim()) {
                    setMessageInput('')
                  }
                }}
              />
              <Button
                className="gradient-bg-intense text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
                disabled={!messageInput.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
