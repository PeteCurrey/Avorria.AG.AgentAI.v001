import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

// Email regex pattern (RFC 5322 compliant basic check)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, projectType, message, source } = body;

    // Validate name: 2+ characters
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    // Validate email: regex
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // Validate message: 10+ chars, max 5000 chars
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 5000
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Message must be between 10 and 5,000 characters long.",
        },
        { status: 400 }
      );
    }

    // Insert lead into SQLite database
    insertLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? String(company).trim() : undefined,
      budget: budget ? String(budget).trim() : undefined,
      projectType: projectType ? String(projectType).trim() : undefined,
      message: message.trim(),
      source: source ? String(source).trim() : "contact-form",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred while processing your brief." },
      { status: 500 }
    );
  }
}
