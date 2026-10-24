import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimisation ─────────────────────────────────────────────────────
  images: {
    // Serve AVIF first (40% smaller than WebP), fall back to WebP
    formats: ["image/avif", "image/webp"],

    // Descriptive device breakpoints aligned to Avorria's max-w-[1440px] layout
    deviceSizes: [375, 480, 640, 750, 828, 1080, 1200, 1440, 1920],

    // Intrinsic sizes used by next/image's srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cap pixel ratio at 2× — 3× DPR adds bandwidth without perceptible quality gain
    // (set via loader config, not a direct config key in Next 16)

    // Allow remote images (CDN, CMS assets, etc.)
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],

    // Minimum cache TTL for optimised images (7 days)
    minimumCacheTTL: 604800,

    // Allow SVG passthrough for brand icons
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Security / performance headers ────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Preconnect to Google Fonts served from fonts.gstatic.com
          {
            key: "Link",
            value: [
              "<https://fonts.googleapis.com>; rel=preconnect",
              "<https://fonts.gstatic.com>; rel=preconnect; crossorigin=anonymous",
            ].join(", "),
          },
          // Standard security headers
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Allow AVIF/WebP images to be cached aggressively
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // ── Compiler ──────────────────────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    // Optimise CSS output (requires critters)
    optimizeCss: false,
  },
};

export default nextConfig;
