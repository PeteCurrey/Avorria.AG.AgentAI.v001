import type { Metadata } from "next";
import { projects } from "@/lib/data";
import CTA from "@/components/CTA";
import WorkFilterGrid from "@/components/WorkFilterGrid";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Proof, Not Promises — Selected Work & Case Studies",
  description:
    "Explore Avorria's portfolio of Awwwards-winning websites, WebGL experiences, and autonomous AI systems. Shipped for ambitious brands in London, New York and worldwide.",
  alternates: { canonical: "https://avorria.com/work" },
  openGraph: {
    url: "https://avorria.com/work",
    title: "Proof, Not Promises — Selected Work | Avorria",
    description:
      "Awwwards-recognized websites, Three.js flagships, and enterprise AI systems. See the proof.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Portfolio — Proof, Not Promises" }],
  },
};

export default function WorkPage() {
  return (
    <>
      {/* ── Header ── */}
      <PageHero
        eyebrow="Case Studies & Proof"
        headline={
          <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase">
            PROOF, NOT<br />
            <span className="text-gradient-lime">PROMISES.</span>
          </h1>
        }
        body={
          <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
            Every project is built on three non-negotiables: sub-second performance, award-winning immersion, and measurable business growth.
          </p>
        }
        className="pb-20"
      />

      {/* ── Interactive Filterable Projects Grid ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-px mx-auto max-w-[1440px] py-20">
          <WorkFilterGrid projects={projects} />
        </div>
      </section>

      <CTA />
    </>
  );
}
