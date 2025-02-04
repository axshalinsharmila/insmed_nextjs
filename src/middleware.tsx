import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected paths
const adminPaths = ["/admin"];
const userPaths = ["/user"];

// Middleware function
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Example: Mock user roles (replace with actual logic, e.g., cookies or session)
  const role = request.cookies.get("role")?.value || "guest"; // "admin", "user", or "guest"

  // Admin route protection
  if (adminPaths.some((path) => pathname.startsWith(path))) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to homepage
    }
  }

  // User route protection
  if (userPaths.some((path) => pathname.startsWith(path))) {
    if (role !== "user" && role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to homepage
    }
  }

  // Allow request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"], // Paths where middleware should run
};
