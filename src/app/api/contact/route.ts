import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, source } = body;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 20 || message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be between 20 and 1000 characters" },
        { status: 400 }
      );
    }

    // In production: verify hCaptcha token
    // In production: send email to candidate via Resend
    // In production: send auto-reply to submitter

    /*
    // Example:
    import { resend, EMAIL_FROM, PORTFOLIO_EMAIL } from "@/lib/resend";
    
    // Notify candidate
    await resend.emails.send({
      from: EMAIL_FROM,
      to: PORTFOLIO_EMAIL,
      subject: `[Portfolio Contact] ${subject} — ${fullName}`,
      html: `<p><strong>From:</strong> ${fullName} (${email})</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Source:</strong> ${source || "Not specified"}</p>
             <hr />
             <p>${message}</p>`,
    });

    // Auto-reply to submitter
    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: `Got your message, ${fullName.split(" ")[0]}!`,
      html: `<p>Hi ${fullName.split(" ")[0]},</p>
             <p>Thanks for reaching out! I've received your message and will get back to you within 24-48 hours.</p>
             <p>Best,<br />Rituraj</p>`,
    });
    */

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
