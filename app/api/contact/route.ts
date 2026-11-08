import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

// Email regex pattern (RFC 5322 compliant basic check)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      website,
      industry,
      needs,
      objectives,
      background,
      existingTech,
      mainRequirements,
      timescale,
      budget,
      urgency,
      alreadyScoped,
      projectType,
      message,
      source,
    } = body;

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

    // Validate message or requirements (at least 5 characters in either)
    const combinedDetail = (message || mainRequirements || background || "").trim();
    if (combinedDetail.length < 5) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please provide details regarding your project scope or requirements.",
        },
        { status: 400 }
      );
    }

    // Insert lead into SQLite database and permanent log
    const result = insertLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      website: website ? String(website).trim() : undefined,
      industry: industry ? String(industry).trim() : undefined,
      needs: Array.isArray(needs) ? needs : undefined,
      objectives: Array.isArray(objectives) ? objectives : undefined,
      background: background ? String(background).trim() : undefined,
      existingTech: existingTech ? String(existingTech).trim() : undefined,
      mainRequirements: mainRequirements ? String(mainRequirements).trim() : undefined,
      timescale: timescale ? String(timescale).trim() : undefined,
      budget: budget ? String(budget).trim() : undefined,
      urgency: urgency ? String(urgency).trim() : undefined,
      alreadyScoped: alreadyScoped ? String(alreadyScoped).trim() : undefined,
      projectType: projectType ? String(projectType).trim() : (Array.isArray(needs) ? needs.join(", ") : undefined),
      message: combinedDetail,
      source: source ? String(source).trim() : "commissioning-experience",
    });

    return NextResponse.json({ ok: true, storage: result.storage });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred while processing your brief." },
      { status: 500 }
    );
  }
}
