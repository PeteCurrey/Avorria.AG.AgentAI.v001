import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";

// In-memory fallback if the disk environment is read-only (e.g. Vercel serverless)
const memoryLeads: Array<LeadInput & { id: number; createdAt: string }> = [];
const memorySubscribers: Array<{ id: number; email: string; createdAt: string }> = [];

let dbInstance: DatabaseSync | null = null;
let dbUnavailable = false;

export function getDb(): DatabaseSync | null {
  if (dbUnavailable) return null;
  if (!dbInstance) {
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const dbPath = path.join(dataDir, "avorria.db");
      const db = new DatabaseSync(dbPath);

      // Initialize tables
      db.exec(`
        CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          budget TEXT,
          projectType TEXT,
          message TEXT NOT NULL,
          source TEXT,
          createdAt TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          createdAt TEXT NOT NULL
        );
      `);

      dbInstance = db;
    } catch (err) {
      console.warn(
        "[Avorria DB] Local disk SQLite unavailable (running in read-only serverless environment). Falling back to memory & telemetry logging.",
        err
      );
      dbUnavailable = true;
      return null;
    }
  }
  return dbInstance;
}

export interface LeadInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessName?: string;
  website?: string;
  industry?: string;
  needs?: string[];
  objectives?: string[];
  background?: string;
  existingTech?: string;
  mainRequirements?: string;
  timescale?: string;
  budget?: string;
  urgency?: string;
  alreadyScoped?: string;
  projectType?: string;
  message?: string;
  source?: string;
}

async function dispatchWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(4000),
    });
  } catch (webhookErr) {
    console.error("[Avorria Webhook] Failed to dispatch webhook:", webhookErr);
  }
}

export function insertLead(lead: LeadInput) {
  const now = new Date().toISOString();
  const resolvedMessage = lead.message || lead.mainRequirements || lead.background || "Commissioning brief submitted";
  
  // Permanent structured log for Vercel/CloudWatch/Datadog log ingestion
  console.log("[LEAD CAPTURED]", JSON.stringify({ ...lead, message: resolvedMessage, createdAt: now }));

  // Asynchronous webhook dispatch if configured
  if (process.env.LEAD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL) {
    void dispatchWebhook({
      text: `🚀 *New Lead Inbound*\n*Name:* ${lead.name}\n*Email:* ${lead.email}\n*Company:* ${lead.company || lead.businessName || "N/A"}\n*Budget:* ${lead.budget || "N/A"}\n*Type:* ${lead.projectType || (lead.needs ? lead.needs.join(", ") : "N/A")}\n*Message:* ${resolvedMessage}`,
      lead,
      createdAt: now,
    });
  }

  const db = getDb();
  if (db) {
    try {
      const stmt = db.prepare(`
        INSERT INTO leads (name, email, company, budget, projectType, message, source, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        lead.name ?? null,
        lead.email ?? null,
        lead.company ?? lead.businessName ?? null,
        lead.budget ?? null,
        lead.projectType ?? (lead.needs ? lead.needs.join(", ") : null),
        resolvedMessage,
        lead.source ?? "web",
        now
      );
      return { ok: true, storage: "sqlite" };
    } catch (err) {
      console.error("[Avorria DB] Error writing lead to SQLite:", err);
    }
  }

  // Fallback to in-memory store
  memoryLeads.push({
    id: memoryLeads.length + 1,
    ...lead,
    message: resolvedMessage,
    createdAt: now,
  });

  return { ok: true, storage: "memory_fallback" };
}

export function getLeads(limit = 10) {
  const db = getDb();
  if (db) {
    try {
      const stmt = db.prepare(`SELECT * FROM leads ORDER BY id DESC LIMIT ?`);
      return stmt.all(limit);
    } catch (err) {
      console.error("[Avorria DB] Error fetching leads from SQLite:", err);
    }
  }
  return memoryLeads.slice(-limit).reverse();
}

export function insertNewsletterSubscriber(email: string) {
  const now = new Date().toISOString();
  const cleanEmail = email.toLowerCase().trim();

  console.log("[NEWSLETTER SUBSCRIBED]", JSON.stringify({ email: cleanEmail, createdAt: now }));

  if (process.env.LEAD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL) {
    void dispatchWebhook({
      text: `📬 *New Newsletter Subscriber*\n*Email:* ${cleanEmail}`,
      email: cleanEmail,
      createdAt: now,
    });
  }

  const db = getDb();
  if (db) {
    try {
      const stmt = db.prepare(`
        INSERT OR IGNORE INTO newsletter_subscribers (email, createdAt)
        VALUES (?, ?)
      `);
      stmt.run(cleanEmail, now);
      return { ok: true, storage: "sqlite" };
    } catch (err) {
      console.error("[Avorria DB] Error writing subscriber to SQLite:", err);
    }
  }

  if (!memorySubscribers.some((s) => s.email === cleanEmail)) {
    memorySubscribers.push({
      id: memorySubscribers.length + 1,
      email: cleanEmail,
      createdAt: now,
    });
  }

  return { ok: true, storage: "memory_fallback" };
}
