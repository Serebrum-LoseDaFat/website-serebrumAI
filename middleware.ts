import { NextRequest, NextResponse } from "next/server";

// HTTP Basic Auth gate for /playbook/priorities and all subroutes.
// Returns 401 with WWW-Authenticate header → browser shows native auth prompt.
// Search engines/bots can't see content past the 401, and the response carries
// X-Robots-Tag: noindex,nofollow as a belt-and-suspenders measure.
//
// Credentials are stored in env vars (with safe defaults for local dev).
// In production, set PRIORITIES_AUTH_USER and PRIORITIES_AUTH_PASS in Vercel.

const REALM = "SerebrumAI · Priorities";

function unauthorized(): NextResponse {
  return new NextResponse(
    "Authentication required to view this internal document.",
    {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    }
  );
}

export function middleware(req: NextRequest) {
  const expectedUser = process.env.PRIORITIES_AUTH_USER ?? "Krishna";
  const expectedPass = process.env.PRIORITIES_AUTH_PASS ?? "SerebrumAI";

  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.toLowerCase().startsWith("basic ")) {
    return unauthorized();
  }

  try {
    const encoded = authHeader.slice(6).trim();
    // atob is available in the Edge runtime
    const decoded = atob(encoded);
    const colonIdx = decoded.indexOf(":");
    if (colonIdx === -1) return unauthorized();

    const user = decoded.slice(0, colonIdx);
    const pass = decoded.slice(colonIdx + 1);

    if (user !== expectedUser || pass !== expectedPass) {
      return unauthorized();
    }
  } catch {
    return unauthorized();
  }

  // Allow through, but stamp a noindex header so any caching layer
  // (Vercel edge, CDN, intermediaries) won't expose it to crawlers.
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}

export const config = {
  // Gate the internal Strategy + Fundraising operating docs.
  matcher: [
    "/playbook/priorities",
    "/playbook/priorities/:path*",
    "/playbook/fundraising",
    "/playbook/fundraising/:path*",
    "/playbook/the-raise",
    "/playbook/the-raise/:path*",
  ],
};
