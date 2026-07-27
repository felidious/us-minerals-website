// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, company, country, email, phone, interest, message } = body ?? {};

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { ok: false, error: "Name, email and message are required." },
//         { status: 400 }
//       );
//     }

//     // TODO: wire this up to your email/CRM provider of choice, e.g.:
//     // - Resend (resend.com) — a few lines with their Node SDK
//     // - SendGrid
//     // - Push straight into a CRM via its API (HubSpot, Zoho, etc.)
//     //
//     // For now this just logs the enquiry server-side so the route works
//     // out of the box in development.
//     console.log("New refractory enquiry:", {
//       name,
//       company,
//       country,
//       email,
//       phone,
//       interest,
//       message,
//     });

//     return NextResponse.json({ ok: true });
//   } catch (err) {
//     return NextResponse.json(
//       { ok: false, error: "Something went wrong. Please try again." },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Where enquiries land. Set CONTACT_TO_EMAIL in your environment to
// override — comma-separate multiple addresses to notify more than
// one inbox, e.g. "usminerals@useminerals.com,usminerals@yahoo.com".
const TO_EMAIL = (process.env.CONTACT_TO_EMAIL || "felidiousapple@gmail.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

// The "from" address Resend sends as. Until your domain is verified in
// Resend, this MUST stay as onboarding@resend.dev — see README for how
// to switch it to your own domain once verified.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "US Minerals Website <onboarding@resend.dev>";

function escapeHtml(value: unknown): string {
  const str = String(value ?? "").trim();
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(fields: {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  message: string;
}) {
  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Company", fields.company || "—"],
    ["Email", fields.email],
    ["Phone", fields.phone || "—"],
    ["Country", fields.country || "—"],
    ["Product interest", fields.interest || "—"],
    ["Message", fields.message],
    ["Submitted", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border:1px solid #dcdcdc;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#1b2023;white-space:nowrap;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px 14px;border:1px solid #dcdcdc;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#1b2023;white-space:pre-wrap;">
            ${escapeHtml(value).replace(/\n/g, "<br/>")}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
      <h2 style="color:#1b2023;font-size:18px;margin-bottom:4px;">New product enquiry — US Minerals website</h2>
      <p style="color:#5b6672;font-size:13px;margin-top:0;margin-bottom:18px;">
        A client submitted the contact form on the website. Details below.
      </p>
      <table style="border-collapse:collapse;width:100%;">
        ${tableRows}
      </table>
    </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const country = String(body?.country ?? "").trim();
    const interest = String(body?.interest ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — enquiry was not emailed.");
      console.log("Enquiry (not emailed, no API key configured):", {
        name, company, email, phone, country, interest, message,
      });
      return NextResponse.json(
        {
          ok: false,
          error: "Email sending isn't configured yet. Please contact us directly by phone or email for now.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry — ${interest || "General"} — ${name}${company ? ` (${company})` : ""}`,
      html: buildEmailHtml({ name, company, email, phone, country, interest, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send the enquiry email. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
