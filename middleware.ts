import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/admin'],
}

export default function middleware(req: NextRequest) {
    console.log('hit middleware')
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  console.log('basicAuth', basicAuth)
    console.log('url', url.pathname)
  if (basicAuth) {
    
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'user' && pwd === 'password') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}