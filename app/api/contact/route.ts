import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = process.env.CONTACT_FROM_EMAIL || "SerebrumAI <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL || "hello@serebrum.ai";

// Simple in-memory rate limit: 5 submissions per IP per hour.
// On serverless, state is per-instance, so a determined attacker could
// still get more via cold starts — but this blocks the common bot case.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const buckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): { allowed: true } | { allowed: false; retryAfter: number } {
  const now = Date.now();

  // Opportunistic cleanup to keep the Map from growing unbounded.
  if (buckets.size > 1000) {
    for (const [key, entry] of buckets) {
      if (entry.resetAt <= now) buckets.delete(key);
    }
  }

  const entry = buckets.get(ip);
  if (!entry || entry.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

export async function POST(req: Request) {
  const rl = checkRateLimit(getClientIp(req));
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  let payload: Record<string, string>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const organization = (payload.organization || "").trim();
  const interest = (payload.interest || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const interestLabel = interest || "general";
  const orgLabel = organization ? ` · ${organization}` : "";
  const subject = `[SerebrumAI · ${interestLabel}] ${name}${orgLabel}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "—"}`,
    `Interest: ${interest || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:1.6;color:#0a0a0a;">
      <h2 style="margin:0 0 16px;font-size:16px;">New SerebrumAI contact</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 16px 4px 0;color:#555;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555;">Organization</td><td>${escapeHtml(organization) || "—"}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#555;">Interest</td><td>${escapeHtml(interest) || "—"}</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;"/>
      <div style="white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
