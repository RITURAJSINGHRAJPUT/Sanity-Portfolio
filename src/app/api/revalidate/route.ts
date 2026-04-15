import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, type, slug } = body;

    // Verify secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Revalidate based on content type
    switch (type) {
      case "project":
        revalidatePath("/projects");
        if (slug) revalidatePath(`/projects/${slug}`);
        revalidatePath("/"); // Hero stats
        break;
      case "blogPost":
        revalidatePath("/blog");
        if (slug) revalidatePath(`/blog/${slug}`);
        revalidatePath("/"); // Hero stats
        break;
      case "testimonial":
        revalidatePath("/testimonials");
        revalidatePath("/"); // Hero stats
        break;
      case "skill":
        revalidatePath("/skills");
        break;
      case "certification":
        revalidatePath("/certifications");
        break;
      case "artifact":
        revalidatePath("/artifacts");
        break;
      case "siteSettings":
        revalidatePath("/");
        revalidatePath("/about");
        break;
      default:
        // Revalidate everything
        revalidatePath("/");
        break;
    }

    return NextResponse.json({
      success: true,
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
