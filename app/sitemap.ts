import type { MetadataRoute } from "next";
import { projects, posts } from "@/lib/data";

const BASE = "https://avorria.com";

// Stable date for static pages so sitemap doesn't churn on every build
const SITE_UPDATED = new Date("2026-10-01");

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static routes ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/work`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/studio`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/journal`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // ── Dynamic: work project pages ────────────────────────────────────────────
  const workRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.6,
  }));

  // ── Dynamic: journal post pages ────────────────────────────────────────────
  const journalRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/journal/${p.slug}`,
    // Use the post's actual publish date for accurate crawl scheduling
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...journalRoutes];
}
