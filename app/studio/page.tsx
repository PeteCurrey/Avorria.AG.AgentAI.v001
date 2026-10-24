import type { Metadata } from "next";
import { Zap, Heart, Brain, Eye, MapPin, Users, Globe2, Clock } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Small Team. Absurd Output. — The Avorria Studio",
  description:
    "Meet Avorria. 14 makers, 2 studios in London & New York, 16 hours of daily overlap. We build performance-first immersive websites and autonomous AI systems.",
  alternates: { canonical: "https://avorria.com/studio" },
  openGraph: {
    url: "https://avorria.com/studio",
    title: "Small Team. Absurd Output. | Avorria Studio",
    description:
      "A boutique digital agency with teams in London, UK and New York, USA. Obsessed with digital craft, performance and AI.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Studio — London & New York" }],
  },
};

const VALUES = [
  {
    number: "01",
    icon: Zap,
    label: "Speed is a feature",
    description:
      "A fast website isn't a technical triumph — it's a foundational design achievement. Sub-second response times heighten trust, lift conversion rates, and respect human attention.",
  },
  {
    number: "02",
    icon: Eye,
    label: "Obsessive craft",
    description:
      "Every frame, every spring-damped interaction, every typographic curve is calculated. We build digital flagships that make our clients' competitors rethink their entire strategy.",
  },
  {
    number: "03",
    icon: Brain,
    label: "AI-native engineering",
    description:
      "We don't use AI as a novelty — we deploy it as compounding leverage. From autonomous swarms to domain RAG, our systems generate measurable ROI from Day 1.",
  },
  {
    number: "04",
    icon: Heart,
    label: "Direct senior partnership",
    description:
      "No account executives. No junior delegation. You work directly with founding principals, lead creative directors, and senior systems architects at every meeting.",
  },
];

const TEAM_MEMBERS = [
  { name: "Alex Reyes", role: "Co-Founder & Creative Director", location: "London · Shoreditch" },
  { name: "Sam Chen", role: "Co-Founder & Lead Systems Architect", location: "New York · SoHo" },
  { name: "Nadia Patel", role: "Principal AI Engineer", location: "London · Shoreditch" },
  { name: "Marcus Vance", role: "Senior 3D / WebGL Engineer", location: "New York · SoHo" },
  { name: "Sofia Lindqvist", role: "Art Director & Brand Strategist", location: "London · Remote" },
  { name: "Darius Thorne", role: "Senior Frontend Engineer", location: "New York · SoHo" },
];

export default function StudioPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-40 pb-20 container-px mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Studio Manifesto & Principles
          </span>
        </div>

        {/* Required H1 */}
        <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase mb-8">
          SMALL TEAM.<br />
          <span className="text-gradient-lime">ABSURD OUTPUT.</span>
        </h1>

        <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Avorria was founded on a simple thesis: a compact, elite collective of senior engineers and art directors will always outperform a bloated traditional agency.
        </p>
      </section>

      {/* ── Studio Operating Model (14 makers / 2 studios / 16h coverage) ── */}
      <section className="container-px mx-auto max-w-[1440px] mb-24">
        <div className="rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] text-white p-10 md:p-16 shadow-2xl select-none">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 border-b border-[var(--color-border)]">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] block mb-2">
                The Avorria Operating Model
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight leading-tight text-white">
                Dual-City Velocity. Zero Agency Friction.
              </h2>
            </div>
            <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-md leading-relaxed">
              We operate an asynchronous transatlantic engineering collective. While London completes design architecture, New York executes production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-muted)]">
                <Users size={17} className="text-white" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">Practice Scale</span>
              </div>
              <p className="font-display font-bold text-4xl md:text-5xl text-white">
                14 makers
              </p>
              <p className="font-body text-xs md:text-sm text-[var(--color-muted)] pt-1">
                Zero junior bench. Exclusively principal-grade engineers and creative directors.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-muted)]">
                <Globe2 size={17} className="text-white" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">Physical Studios</span>
              </div>
              <p className="font-display font-bold text-4xl md:text-5xl text-white">
                2 studios
              </p>
              <p className="font-body text-xs md:text-sm text-[var(--color-muted)] pt-1">
                London (Shoreditch, EC2A) &amp; New York (SoHo, NY 10013).
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2 text-[var(--color-muted)]">
                <Clock size={17} className="text-white" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">Active Coverage</span>
              </div>
              <p className="font-display font-bold text-4xl md:text-5xl text-white">
                16h coverage
              </p>
              <p className="font-body text-xs md:text-sm text-[var(--color-muted)] pt-1">
                Continuous delivery overlap across GMT, EST, and PST operational hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Values ── */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] block mb-4">
                What Guides Us
              </span>
              <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,4.5rem)] text-white leading-tight">
                Four non-negotiable <span className="text-gradient-lime">principles.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="p-8 md:p-10 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/40 transition-colors duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-lime)]">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs text-[var(--color-muted)]">
                        {val.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[var(--color-lime)] transition-colors duration-200">
                      {val.label}
                    </h3>
                    <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Senior Collective ── */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] block mb-4">
              Direct Contact
            </span>
            <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,4rem)] text-white">
              The senior collective.
            </h2>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <p className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                    {member.name}
                  </p>
                  <p className="font-body text-sm text-[var(--color-muted)] mt-0.5">{member.role}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-muted)]">
                  <MapPin size={13} className="text-[var(--color-lime)]" />
                  <span>{member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
