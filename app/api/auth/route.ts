import { NextRequest } from "next/server";

export function GET(_: NextRequest) {
  return new Response('Auth Required', 
    {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    }
  )
}