import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const limiter = rateLimit({ interval: 15 * 60 * 1000, maxRequests: 5 });

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  occupation: string;
  companySize: string;
  message?: string;
  turnstileToken: string;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Skip in development if no key

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const { success } = limiter.check(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: ContactBody = await request.json();

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!body.occupation?.trim()) {
      return NextResponse.json({ error: "Occupation is required." }, { status: 400 });
    }
    if (!body.companySize?.trim()) {
      return NextResponse.json({ error: "Company size is required." }, { status: 400 });
    }

    // Verify Turnstile
    if (body.turnstileToken) {
      const valid = await verifyTurnstile(body.turnstileToken);
      if (!valid) {
        return NextResponse.json(
          { error: "Anti-spam verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "admin@synaptixlabs.ai";

    if (!resendKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "SynaptixLabs <onboarding@resend.dev>";

    const { data, error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact: ${body.name} — ${body.occupation} at ${body.companyName || "N/A"}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 1px solid #333; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; color: #999; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 12px; color: #fff;">${escapeHtml(body.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; color: #999; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(body.email)}" style="color: #f97316;">${escapeHtml(body.email)}</a></td>
            </tr>
            ${body.phone ? `<tr><td style="padding: 8px 12px; color: #999; vertical-align: top;">Phone</td><td style="padding: 8px 12px; color: #fff;">${escapeHtml(body.phone)}</td></tr>` : ""}
            ${body.companyName ? `<tr><td style="padding: 8px 12px; color: #999; vertical-align: top;">Company</td><td style="padding: 8px 12px; color: #fff;">${escapeHtml(body.companyName)}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 12px; color: #999; vertical-align: top;">Occupation</td>
              <td style="padding: 8px 12px; color: #fff;">${escapeHtml(body.occupation)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; color: #999; vertical-align: top;">Company Size</td>
              <td style="padding: 8px 12px; color: #fff;">${escapeHtml(body.companySize)}</td>
            </tr>
            ${body.message ? `<tr><td style="padding: 8px 12px; color: #999; vertical-align: top;">Message</td><td style="padding: 8px 12px; color: #fff; white-space: pre-wrap;">${escapeHtml(body.message)}</td></tr>` : ""}
          </table>
          <p style="color: #666; font-size: 12px; margin-top: 24px;">
            Sent from synaptixlabs.ai contact form · IP: ${ip}
          </p>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend send error:", sendError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
