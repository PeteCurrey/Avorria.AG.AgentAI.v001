import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AvorriaDifference from "@/components/AvorriaDifference";
import WhatWeCreate from "@/components/WhatWeCreate";
import Work from "@/components/Work";
import AppliedIntelligenceExperience from "@/components/AppliedIntelligenceExperience";
import InteractiveLabPreview from "@/components/InteractiveLabPreview";
import HowWeWork from "@/components/HowWeWork";
import AvorriaPhilosophy from "@/components/AvorriaPhilosophy";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Avorria — Digital Development & Applied Intelligence | London · New York",
  description:
    "We turn ambitious ideas into exceptional digital experiences and intelligent business systems. Bespoke web development, real-time 3D, and applied AI for ambitious businesses.",
  alternates: {
    canonical: "https://avorria.com",
  },
  openGraph: {
    url: "https://avorria.com",
    title: "Avorria — Digital Development & Applied Intelligence | London · New York",
    description:
      "We turn ambitious ideas into exceptional digital experiences and intelligent business systems. Web development, real-time 3D, and applied AI.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Avorria — Digital Development & Applied Intelligence, London & New York",
      },
    ],
  },
};

/**
 * Avorria Homepage Flagship — 9-Section Curated Narrative
 *
 * Section 01: Signature Hero (3D Sculpture, Light Porcelain, Requested Headline & CTAs)
 * Marquee: Architectural capability strip
 * Section 02: The Avorria Difference (4 Asymmetric Visual Compositions)
 * Section 03: What We Create (Large Visual Showcases for 4 Core Capabilities)
 * Section 04: Selected Work (Horizontal Showcase of 5 Client Flagships with High-Res Imagery)
 * Section 05: Applied Intelligence Experience (Interactive Multi-Stage Business Pipeline)
 * Section 06: The Interactive Lab (3 Rich Previews linking to /lab)
 * Section 07: How We Work (6-Stage Delivery Narrative)
 * Section 08: The Avorria Philosophy (Commercial Thinking & Engineering Standards)
 * Section 09: Final Conversion CTA ("Have something ambitious in mind?")
 */
export default function HomePage() {
  return (
    <>
      {/* 01: Signature Hero */}
      <Hero />

      {/* Capability Ticker */}
      <Marquee />

      {/* 02: The Avorria Difference */}
      <AvorriaDifference />

      {/* 03: What We Create */}
      <WhatWeCreate />

      {/* 04: Selected Work */}
      <Work />

      {/* 05: Applied Intelligence */}
      <AppliedIntelligenceExperience />

      {/* 06: The Interactive Lab */}
      <InteractiveLabPreview />

      {/* 07: How We Work */}
      <HowWeWork />

      {/* 08: The Avorria Philosophy */}
      <AvorriaPhilosophy />

      {/* 09: Final Conversion */}
      <CTA />
    </>
  );
}
