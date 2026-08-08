import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Host-based routing.
 *
 * The iGaming version of the site lives at `/igaming`, but we serve it as the
 * root of its own domain (densygn.vercel.app) so it reads as a standalone site
 * rather than a sub-path. On that host, `/` is rewritten to `/igaming`; every
 * other path (project case pages, assets) is shared and passes through.
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";

  if (host.startsWith("densygn") && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/igaming";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Only run on the root — the only path that needs host-based rewriting.
export const config = { matcher: "/" };
