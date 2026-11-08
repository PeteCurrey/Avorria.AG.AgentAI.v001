import type { Metadata } from "next";
import { projects } from "@/lib/data";
import CTA from "@/components/CTA";
import WorkFilterGrid from "@/components/WorkFilterGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Proof, Not Promises — Selected Work & Case Studies | Avorria",
  description:
    "Explore Avorria's portfolio of high-throughput web flagships, WebGL spatial canvases, and autonomous AI systems. Shipped for ambitious brands worldwide.",
  alternates: { canonical: "https://avorria.com/work" },
  openGraph: {
    url: "https://avorria.com/work",
    title: "Proof, Not Promises — Selected Work | Avorria",
    description:
      "Awwwards-recognized websites, Three.js flagships, and enterprise AI systems. See the proof.",
    images: [{ url: "/imagery/hero/spatial-monolith.webp", width: 1200, height: 630, alt: "Avorria Portfolio — Proof, Not Promises" }],
  },
};

export default function WorkPage() {
  return (
    <div className="bg-[#F7F7F5] min-h-screen">
      {/* ── Editorial Header ── */}
      <PageHero
        eyebrow="Portfolio · Selected Commissions &amp; Demonstrations"
        headline={
          <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.96] tracking-tight text-[#15171B] uppercase">
            PROOF, NOT<br />
            <span className="text-[#3657E8]">PROMISES.</span>
          </h1>
        }
        body={
          <p className="font-body text-[#6E7179] text-lg md:text-xl max-w-2xl leading-relaxed">
            Every project is engineered on three principles: sub-second performance, bespoke 3D spatial artistry, and verifiable business outcomes.
          </p>
        }
        className="pb-16"
      />

      {/* ── Interactive Filterable Projects Grid ── */}
      <section className="border-t border-[#15171B]/10">
        <div className="container-px mx-auto max-w-[1440px] py-16 md:py-24">
          <WorkFilterGrid projects={projects} />
        </div>
      </section>

      <CTA />
    </div>
  );
}
