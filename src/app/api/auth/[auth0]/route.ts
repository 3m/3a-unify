import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'
import { prisma } from '@/lib/prisma'

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/timeline'
  }),
  logout: handleLogout({
    returnTo: '/'
  }),
  callback: handleCallback({
    afterCallback: async (req, res, session) => {
      // Create or update user in database
      if (session?.user) {
        const { sub, email, name, picture } = session.user
        
        await prisma.user.upsert({
          where: { email: email! },
          update: {
            name: name || null,
            avatar: picture || null,
          },
          create: {
            id: sub!,
            email: email!,
            name: name || null,
            avatar: picture || null,
            role: 'MEMBER',
            subscriptionTier: 'FREE',
          },
        })
      }
      
      return session
    }
  })
})
