import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Users, Video, Star, TrendingUp } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] blur-2xl opacity-50" />
                <Sparkles className="relative h-12 w-12 text-primary" />
              </div>
              <h1 className="text-5xl font-black gradient-text">UNIFY</h1>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Connect with creators.
              <br />
              <span className="gradient-text">Build your community.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The ultimate platform for creators to share exclusive content and connect with their biggest fans.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {[
              { icon: Users, text: 'Connect with your favorite creators' },
              { icon: Video, text: 'Access exclusive content' },
              { icon: Star, text: 'Join premium tier communities' },
              { icon: TrendingUp, text: 'Support creators you love' },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Login card */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md border-2 shadow-2xl">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="md:hidden flex items-center justify-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] blur-xl opacity-50" />
                  <Sparkles className="relative h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl font-black gradient-text">UNIFY</h1>
              </div>
              <CardTitle className="text-3xl font-bold">
                Welcome back
              </CardTitle>
              <CardDescription className="text-base">
                Sign in to access your feed and connect with creators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <Button asChild variant="gradient" size="lg" className="w-full text-base">
                <Link href="/api/auth/login">
                  Continue with Auth0
                </Link>
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Secure authentication
                  </span>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground">
          powered by <span className="font-bold gradient-text">ARCatAR</span>
        </p>
      </div>
    </div>
  )
}
