import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.pathname;

  // Bypass auth for Builder.io routes and iframe previews
  if (url.startsWith("/api/builder") || url.startsWith("/builder-preview")) {
    // Explicitly returning NextResponse.next() to bypass Clerk auth for Builder routes
    return NextResponse.next();
  }

  // Apply Clerk auth to all other routes
  const clerkResponse = clerkMiddleware(req);

  // If clerkMiddleware didn't return a proper response, fallback to NextResponse.next
  if (clerkResponse instanceof NextResponse) {
    return clerkResponse; // Ensure we return the valid response from Clerk middleware
  }

  // Fallback: return NextResponse.next() if clerkMiddleware fails
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|_static|.*\\..*).*)"], // Protect all non-static routes
};
