import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, Users, Star, Zap } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Users className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute top-32 right-32 opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <Star className="h-6 w-6 text-accent" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <Zap className="h-7 w-7 text-primary" />
      </div>

      <Card className="w-full max-w-md relative z-10 border-0 shadow-2xl bg-card/80 backdrop-blur-xl animate-in fade-in duration-1000">
        <CardHeader className="text-center pb-8 space-y-6">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
              <Sparkles className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Welcome to UNIFY
            </CardTitle>
            <CardDescription className="text-lg mt-3 text-muted-foreground">
              Connect with creators and unlock exclusive content
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 px-8 pb-8">
          <Button 
            asChild 
            className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] group"
          >
            <Link href="/timeline" className="flex items-center justify-center gap-2">
              Enter UNIFY
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-xs text-muted-foreground">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-xs text-muted-foreground">Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Users</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center pt-4">
            <p className="text-sm text-muted-foreground">
              © 2024 UNIFY Platform
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
