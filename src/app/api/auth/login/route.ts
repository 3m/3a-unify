import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // For now, redirect to a mock login page
  return NextResponse.redirect(new URL('/timeline', request.url))
}
