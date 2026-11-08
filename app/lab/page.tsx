import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Box, Workflow, Gauge, Database, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import SpatialWebLab from "@/components/lab/SpatialWebLab";
import AIWorkflowLab from "@/components/lab/AIWorkflowLab";
import PerformanceLab from "@/components/lab/PerformanceLab";
import KnowledgeAssistantLab from "@/components/lab/KnowledgeAssistantLab";

export const metadata: Metadata = {
  title: "The Interactive Lab — Digital Capability Showroom",
  description:
    "Experience Avorria's creative and engineering capabilities directly. Real-time 3D WebGL meshes, simulated AI task workflows, live browser performance telemetry, and grounded knowledge systems.",
  alternates: { canonical: "https://avorria.com/lab" },
  openGraph: {
    url: "https://avorria.com/lab",
    title: "The Interactive Lab — Digital Capability Showroom",
    description:
      "A genuine interactive digital showroom. Test spatial 3D WebGL, simulated multi-stage AI workflows, real browser performance telemetry, and grounded knowledge assistants.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Interactive Lab" }],
  },
};

export default function LabPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <PageHero
        eyebrow="The Interactive Lab · Digital Capability Showroom"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase">
            EXPERIENCE THE<br />
            <span className="text-gradient-lime">CAPABILITY DIRECTLY.</span>
          </h1>
        }
        body={
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl leading-relaxed">
              Welcome to the Avorria capability showroom. Rather than relying on static mockups or video reels, explore four working interactive demonstrations engineered to showcase our standards in spatial 3D, intelligent automation, hardware rendering, and grounded AI.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-display font-medium text-xs sm:text-sm hover:bg-[var(--color-lime)] transition-colors duration-200"
                >
                  Commission an Engagement
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <span className="font-mono text-xs text-white/50">
                Four Working Client Sandboxes Below ↓
              </span>
            </div>
          </div>
        }
        className="pb-20"
      />

      {/* ── Lab Index Navigation Strip ── */}
      <section className="container-px mx-auto max-w-[1440px] mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="#spatial-web"
            className="p-5 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block group"
          >
            <span className="font-mono text-[10px] uppercase text-[var(--color-lime)] block mb-1">01 / Graphics</span>
            <span className="font-display font-semibold text-base text-white group-hover:text-[var(--color-lime)] transition-colors block">
              Spatial WebGL ↗
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)] block mt-1">3D Mesh &amp; Lighting</span>
          </a>

          <a
            href="#ai-workflow"
            className="p-5 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block group"
          >
            <span className="font-mono text-[10px] uppercase text-[var(--color-lime)] block mb-1">02 / Automation</span>
            <span className="font-display font-semibold text-base text-white group-hover:text-[var(--color-lime)] transition-colors block">
              AI Task Orchestration ↗
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)] block mt-1">Human-in-the-Loop</span>
          </a>

          <a
            href="#performance"
            className="p-5 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block group"
          >
            <span className="font-mono text-[10px] uppercase text-[var(--color-lime)] block mb-1">03 / Diagnostics</span>
            <span className="font-display font-semibold text-base text-white group-hover:text-[var(--color-lime)] transition-colors block">
              Render Telemetry ↗
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)] block mt-1">Live Hardware APIs</span>
          </a>

          <a
            href="#knowledge"
            className="p-5 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block group"
          >
            <span className="font-mono text-[10px] uppercase text-[var(--color-lime)] block mb-1">04 / Intelligence</span>
            <span className="font-display font-semibold text-base text-white group-hover:text-[var(--color-lime)] transition-colors block">
              Grounded Assistant ↗
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)] block mt-1">Zero Hallucinations</span>
          </a>
        </div>
      </section>

      {/* ── EXPERIENCE 01: SPATIAL WEB ── */}
      <section id="spatial-web" className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                Commercial Capability 01
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Spatial Web &amp; Interactive 3D Product Canvas
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
                We engineer GPU-accelerated WebGL environments that run smoothly across mobile and desktop. For luxury brands, architectural firms, and high-growth commerce, interactive 3D increases product comprehension and transforms static catalogs into memorable experiences.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/services/build"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors"
              >
                <span>Website &amp; 3D Service Spec</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <SpatialWebLab />
        </div>
      </section>

      {/* ── EXPERIENCE 02: AI WORKFLOW ── */}
      <section id="ai-workflow" className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                Commercial Capability 02
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Simulated Business Process Orchestration
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Applied AI generates compounding enterprise value when it automates multi-step human friction. This sandbox demonstrates deterministic request routing, evidence verification, and human-in-the-loop authorization gates that keep your team in complete control.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/services/ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors"
              >
                <span>AI Systems Service Spec</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <AIWorkflowLab />
        </div>
      </section>

      {/* ── EXPERIENCE 03: DIGITAL PERFORMANCE ── */}
      <section id="performance" className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                Commercial Capability 03
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Live Client Environment &amp; Hardware Telemetry
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Every millisecond of input delay erodes visitor trust. This inspector reads your actual device capabilities directly from browser hardware APIs to show how Avorria dynamically budgets resources for sub-second page performance.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/services/systems"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors"
              >
                <span>Digital Systems Spec</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <PerformanceLab />
        </div>
      </section>

      {/* ── EXPERIENCE 04: INTELLIGENT KNOWLEDGE ── */}
      <section id="knowledge" className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                Commercial Capability 04
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Grounded Enterprise Knowledge Assistant
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Enterprise knowledge assistants must never guess. Test this assistant against our verified documentation corpus. If information is not explicitly documented, the system refuses to speculate, protecting brand reputation and data integrity.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/services/search"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors"
              >
                <span>Search &amp; Schema Spec</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <KnowledgeAssistantLab />
        </div>
      </section>

      {/* ── Commercial Conversion ── */}
      <CTA />
    </>
  );
}
