import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, role, organisation, relationship, linkedinUrl, email, quote } = body;

    // Validate required fields
    if (!fullName || !role || !organisation || !relationship || !email || !quote) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate quote length
    if (quote.length < 30 || quote.length > 600) {
      return NextResponse.json(
        { error: "Testimonial must be between 30 and 600 characters" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production: verify hCaptcha token
    // In production: write to Sanity with writeClient
    // In production: send notification email to candidate
    // In production: send confirmation email to submitter

    /*
    // Example Sanity write:
    import { writeClient } from "@/sanity/lib/client";
    
    await writeClient.create({
      _type: "testimonial",
      submitterName: fullName,
      role,
      organisation,
      relationship,
      linkedinUrl: linkedinUrl || undefined,
      submitterEmail: email,
      quote,
      status: "pending",
      submittedAt: new Date().toISOString(),
    });

    // Example Resend email:
    import { resend, EMAIL_FROM, PORTFOLIO_EMAIL } from "@/lib/resend";
    
    await resend.emails.send({
      from: EMAIL_FROM,
      to: PORTFOLIO_EMAIL,
      subject: `New Testimonial Submission — ${fullName}`,
      html: `<p>New testimonial from ${fullName} (${role}, ${organisation})...</p>`,
    });
    */

    return NextResponse.json(
      { success: true, message: "Testimonial submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Testimonial submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
