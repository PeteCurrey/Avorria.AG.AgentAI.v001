import { NextResponse } from "next/server";
import { insertNewsletterSubscriber } from "@/lib/db";

// Email regex pattern
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Insert into database with INSERT OR IGNORE
    insertNewsletterSubscriber(email);

    return NextResponse.json({
      ok: true,
      message: "Subscribed successfully.",
    });
  } catch (err) {
    console.error("Error in /api/newsletter:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to process newsletter subscription." },
      { status: 500 }
    );
  }
}
