import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Unify Media</CardTitle>
          <CardDescription>
            Sign in to access your creator dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/api/auth/login">
              Log In
            </Link>
          </Button>
          <p className="text-sm text-gray-600 text-center">
            Powered by <span className="font-semibold">ARCatAR</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
