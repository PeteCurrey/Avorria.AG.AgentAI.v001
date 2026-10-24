import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";

// Ensure data directory exists
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "avorria.db");

// Singleton connection
let dbInstance: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (!dbInstance) {
    dbInstance = new DatabaseSync(dbPath);

    // Initialize tables
    dbInstance.exec(`
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
  }
  return dbInstance;
}

export interface LeadInput {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType?: string;
  message: string;
  source?: string;
}

export function insertLead(lead: LeadInput) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO leads (name, email, company, budget, projectType, message, source, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const now = new Date().toISOString();
  stmt.run(
    lead.name,
    lead.email,
    lead.company ?? null,
    lead.budget ?? null,
    lead.projectType ?? null,
    lead.message,
    lead.source ?? "web",
    now
  );

  return { ok: true };
}

export function insertNewsletterSubscriber(email: string) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT OR IGNORE INTO newsletter_subscribers (email, createdAt)
    VALUES (?, ?)
  `);

  const now = new Date().toISOString();
  stmt.run(email.toLowerCase().trim(), now);

  return { ok: true };
}
