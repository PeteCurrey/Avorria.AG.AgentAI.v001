import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

// ─── Site-wide defaults (each page can override) ──────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://avorria.com"),

  title: {
    template: "%s | Avorria",
    default:
      "Avorria — Performance-First Immersive Websites & AI Systems | UK + USA",
  },

  description:
    "Award-winning digital agency in London & New York. We build immersive WebGL websites, Next.js apps and autonomous AI systems for ambitious global brands.",

  keywords: [
    "web design agency London",
    "web design agency New York",
    "digital agency UK USA",
    "Next.js agency",
    "WebGL agency",
    "AI agents development",
    "headless e-commerce",
    "immersive website design",
    "Awwwards agency",
    "framer motion development",
    "performance web design",
    "three.js development",
  ],

  authors: [{ name: "Avorria", url: "https://avorria.com" }],
  creator: "Avorria",
  publisher: "Avorria Ltd",

  // ── Canonical handled per-page via alternates.canonical ──────────────────
  alternates: {
    canonical: "https://avorria.com",
    languages: {
      "en-GB": "https://avorria.com",
      "en-US": "https://avorria.com",
    },
  },

  // ── OpenGraph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "en_US",
    url: "https://avorria.com",
    siteName: "Avorria",
    title:
      "Avorria — Performance-First Immersive Websites & AI Systems | UK + USA",
    description:
      "Award-winning digital agency in London & New York. We build immersive WebGL websites, Next.js apps and autonomous AI systems for ambitious global brands.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Avorria — Performance-First Digital Agency, London & New York",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@avorria",
    creator: "@avorria",
    title:
      "Avorria — Performance-First Immersive Websites & AI Systems | UK + USA",
    description:
      "Award-winning digital agency in London & New York. Immersive websites + autonomous AI systems.",
    images: ["/og.jpg"],
  },

  // ── Crawlers ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Verification (add values when verified) ───────────────────────────────
  verification: {
    google: "REPLACE_WITH_GSC_VERIFICATION_TOKEN",
  },

  // ── Geo tags (non-standard; still parsed by some crawlers) ────────────────
  other: {
    "geo.region": "GB-LND, US-NY",
    "geo.placename": "London, New York",
    "geo.position": "51.5074,-0.1278; 40.7128,-74.0060",
    ICBM: "51.5074,-0.1278",
  },
};

// ─── JSON-LD structured data ──────────────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avorria.com/#organization",
      name: "Avorria",
      legalName: "Avorria Ltd",
      url: "https://avorria.com",
      logo: {
        "@type": "ImageObject",
        url: "https://avorria.com/logo.png",
        width: 400,
        height: 100,
      },
      image: "https://avorria.com/og.jpg",
      description:
        "Performance-first digital agency building immersive websites and autonomous AI systems for ambitious brands. Offices in London, UK and New York, USA.",
      foundingDate: "2022",
      founders: [{ "@type": "Person", name: "Avorria Team" }],
      email: "hello@avorria.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@avorria.com",
        availableLanguage: ["English"],
        areaServed: ["GB", "US"],
      },
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressRegion: "England",
          addressCountry: "GB",
          postalCode: "EC2A 4NE",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
          postalCode: "10013",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
      sameAs: [
        "https://twitter.com/avorria",
        "https://linkedin.com/company/avorria",
        "https://instagram.com/avorria",
        "https://github.com/avorria",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://avorria.com/#website",
      url: "https://avorria.com",
      name: "Avorria",
      description:
        "Performance-first digital agency building immersive websites and autonomous AI systems.",
      publisher: { "@id": "https://avorria.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://avorria.com/journal?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://avorria.com/#service",
      name: "Avorria",
      image: "https://avorria.com/og.jpg",
      url: "https://avorria.com",
      telephone: null,
      email: "hello@avorria.com",
      priceRange: "£££",
      currenciesAccepted: "GBP, USD",
      paymentAccepted: "Invoice, Bank Transfer",
      openingHours: "Mo-Fr 09:00-18:00",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Global (Remote)" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Agency Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Web Design",
              description:
                "Awwwards-calibre websites engineered for conversion with Core Web Vitals excellence.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Development",
              description:
                "Next.js, TypeScript, and headless CMS stacks built to scale.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Systems & Agents",
              description:
                "Custom LLM fine-tuning, RAG pipelines, and autonomous agent networks.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Identity",
              description:
                "Full-spectrum brand strategy, visual identity, and motion brand language.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "3D & WebGL",
              description:
                "Real-time 3D experiences with Three.js and custom WebGL shaders at 60fps.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Creative Direction",
              description:
                "Strategic creative leadership for campaigns and digital brand narratives.",
            },
          },
        ],
      },
      sameAs: [
        "https://twitter.com/avorria",
        "https://linkedin.com/company/avorria",
      ],
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN (next/font uses fonts.gstatic.com) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD structured data */}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <div className="film-grain" aria-hidden="true" />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
