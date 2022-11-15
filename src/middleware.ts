import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/signin')) {
    if (request.cookies.get(COOKIE_TOKEN_KEY)) {
      return NextResponse.redirect('http://localhost:3000/');
    }
  }
}
