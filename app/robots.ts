import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all well-behaved crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // API routes
          "/_next/",     // Next.js internals
          "/admin/",     // Future admin area
          "/*.json$",    // Raw JSON endpoints
        ],
      },
      // Block AI training scrapers that don't respect robots.txt well
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://avorria.com/sitemap.xml",
    host: "https://avorria.com",
  };
}
