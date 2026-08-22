import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // if the user tries to access /ar explicitly, redirect them to / without prefix
    if (pathname.startsWith("/ar/") || pathname === "/ar") {
      request.nextUrl.pathname = pathname.replace(/^\/ar/, "") || "/";
      return NextResponse.redirect(request.nextUrl);
    }
    return;
  }

  // Rewrite to default locale if no locale is present
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|images).*)',
  ],
};
