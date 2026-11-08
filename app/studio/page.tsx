import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Globe2,
  Clock,
  Sparkles,
  Award,
  Terminal,
} from "lucide-react";
import CTA from "@/components/CTA";
import StudioTelemetry from "@/components/StudioTelemetry";
import PageHero from "@/components/PageHero";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "The Studio — Principles, Founder Perspective & Engineering Standards",
  description:
    "Meet Avorria. An independent digital development and applied intelligence studio combining commercial strategy, creative direction, and senior engineering rigor. London & New York.",
  alternates: { canonical: "https://avorria.com/studio" },
  openGraph: {
    url: "https://avorria.com/studio",
    title: "The Studio — Principles, Founder Perspective & Engineering Standards",
    description:
      "Why Avorria exists: combining commercial acumen, creative execution, and senior engineering. Authentic operating principles and technical standards.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Studio — London & New York" }],
  },
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Commercial thinking before technology",
    description:
      "We understand the business objective before choosing a framework. Technology is capital expenditure; it must generate measurable commercial leverage, lift customer trust, or streamline operations.",
  },
  {
    num: "02",
    title: "Creativity with a purpose",
    description:
      "We design distinctive, immersive digital experiences that command market authority without resorting to superficial novelty that hurts usability or conversion.",
  },
  {
    num: "03",
    title: "Engineering without unnecessary complexity",
    description:
      "We reject bloated stacks, fragile multi-plugin dependencies, and architectural over-engineering. We build clean, maintainable systems using modern web standards.",
  },
  {
    num: "04",
    title: "Performance as a design requirement",
    description:
      "Speed is not an afterthought or a DevOps ticket — it is a foundational brand requirement. Sub-second response times heighten credibility and respect human attention.",
  },
  {
    num: "05",
    title: "AI that solves actual business problems",
    description:
      "We deploy AI strictly where it eliminates human operational drag, unlocks private institutional knowledge, or automates multi-step workflows with verified deterministic accuracy.",
  },
  {
    num: "06",
    title: "Long-term client relationships",
    description:
      "We operate as high-trust technical partners rather than transactional vendors. We transfer 100% intellectual property and build maintainable codebases clients can own with pride.",
  },
];

const ENGAGEMENT_JOURNEY = [
  { step: "01", title: "Discovery", detail: "Deep commercial audit, bottleneck mapping, and defining measurable project milestones." },
  { step: "02", title: "Strategy", detail: "Architectural scope definition, technology evaluation, and commercial positioning alignment." },
  { step: "03", title: "Creative Direction", detail: "Bespoke design systems, typography hierarchy, and interactive motion choreography." },
  { step: "04", title: "Technical Architecture", detail: "Edge routing design, data schemas, API contracts, and security boundary definition." },
  { step: "05", title: "Development", detail: "Sprint-based production with senior engineers, Next.js 16, TypeScript, and Three.js." },
  { step: "06", title: "Testing", detail: "Automated accessibility scans, Cross-browser QA, mobile GPU profiling, and latency audits." },
  { step: "07", title: "Deployment", detail: "Zero-downtime global DNS cutover, edge caching warm-up, and search engine verification." },
  { step: "08", title: "Continuous Improvement", detail: "Post-launch CrUX telemetry monitoring, conversion tracking, and iterative refinement." },
];

const SUPPORTED_TECHNOLOGIES = [
  {
    name: "Next.js 16 & React 19",
    category: "Core Web Engine",
    rationale: "Selected for native App Router server components, edge rendering, and sub-second compilation with zero runtime hydration drag.",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    rationale: "Ensures complete type contracts between frontends, headless backends, and AI pipelines to prevent runtime bugs.",
  },
  {
    name: "Three.js & GLSL Shaders",
    category: "Spatial 3D & Graphics",
    rationale: "GPU-accelerated in-browser graphics that deliver 60fps interactive product inspection with mobile battery fallback.",
  },
  {
    name: "Tailwind CSS v4",
    category: "Styling Architecture",
    rationale: "Zero-runtime CSS engine delivering sub-15KB global stylesheets without layout shifts or style reflow overhead.",
  },
  {
    name: "Sanity & Contentful",
    category: "Headless Content Management",
    rationale: "Structured, real-time visual editorial workspaces empowering client marketing teams to update sites without developer intervention.",
  },
  {
    name: "Shopify Plus & Medusa",
    category: "Composable Commerce",
    rationale: "Scalable headless commerce backends supporting instant edge checkout, localized currencies, and 3PL synchronization.",
  },
  {
    name: "Qdrant & Milvus",
    category: "Vector Retrieval",
    rationale: "Dedicated vector database engines providing sub-25ms semantic document indexing within private VPC boundaries.",
  },
  {
    name: "Cloudflare & Vercel Edge",
    category: "Edge Infrastructure",
    rationale: "Global distribution across 300+ edge nodes ensuring sub-50ms TTFB and instant worldwide asset delivery.",
  },
];

const ENGINEERING_STANDARDS = [
  {
    label: "Quality Assurance",
    description: "Every pull request passes automated linting, type checks, build validation, and unit tests before staging deployment.",
  },
  {
    label: "Accessibility (WCAG 2.1 AA)",
    description: "Full keyboard navigation, high-contrast typography, screen reader semantics, and prefers-reduced-motion compliance.",
  },
  {
    label: "Security & Sovereignty",
    description: "Zero public internet vector routing, strict CSP headers, encrypted environment secrets, and SOC-2 aligned principles.",
  },
  {
    label: "Performance Budgets",
    description: "Enforced 100/100 Core Web Vitals targets: sub-second LCP, zero Cumulative Layout Shift (CLS 0.00), and sub-50ms INP.",
  },
  {
    label: "Documentation",
    description: "Clear READMEs, architecture decision records (ADRs), and bespoke video walkthroughs provided for internal handover.",
  },
  {
    label: "Maintainability",
    description: "Modular component boundaries, shared design tokens, and strict linting that allow any competent engineer to iterate effortlessly.",
  },
  {
    label: "Complete Client Ownership",
    description: "100% intellectual property assignment and direct repository transfer upon completion with zero recurring vendor lock-in.",
  },
  {
    label: "Ongoing Senior Support",
    description: "Transparent post-launch warranty, dedicated SLA response windows, and scheduled quarterly architectural health checks.",
  },
];

export default function StudioPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <PageHero
        eyebrow="The Studio · Doctrine & Standards"
        headline={
          <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase">
            WHY AVORRIA<br />
            <span className="text-gradient-lime">EXISTS.</span>
          </h1>
        }
        body={
          <div className="space-y-12">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
              We believe ambitious businesses deserve better digital experiences and better technology. We combine commercial thinking, distinctive creative execution, and senior engineering capability under one unified practice.
            </p>
            {/* Live Studio Telemetry Strip */}
            <StudioTelemetry />
          </div>
        }
        className="pb-20"
      />

      {/* 01 — WHY AVORRIA EXISTS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
              01 / Core Thesis
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Bridging the divide between commercial strategy, design, and engineering.
            </h2>
            <p className="font-body text-base text-[var(--color-muted)] leading-relaxed">
              Most digital projects fail in the handoff. Traditional strategy consultancies produce theoretical roadmaps that designers cannot visually interpret. Creative agencies design breathtaking visual mockups that collapse under technical production constraints. Development shops write functional code that lacks commercial nuance and aesthetic refinement.
            </p>
            <p className="font-body text-base text-white/90 leading-relaxed">
              Avorria exists to unite all three disciplines under one roof. When senior strategists, creative directors, and systems architects collaborate from day one, projects ship faster, perform better, and create enduring market value.
            </p>
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block">
              The Three Pillars
            </span>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-white/5">
                <span className="font-mono text-xs text-white font-semibold block mb-1">Commercial Acumen</span>
                <p className="font-body text-xs text-[var(--color-muted)]">Understanding revenue models, buyer friction, and competitive positioning.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-white/5">
                <span className="font-mono text-xs text-[var(--color-lime)] font-semibold block mb-1">Creative Distinction</span>
                <p className="font-body text-xs text-[var(--color-muted)]">Bespoke art direction, tactile typography, and spatial 3D interaction.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-bg)] border border-white/5">
                <span className="font-mono text-xs text-white font-semibold block mb-1">Engineering Rigor</span>
                <p className="font-body text-xs text-[var(--color-muted)]">Sub-second edge execution, strict type safety, and zero technical debt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE FOUNDER'S PERSPECTIVE */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="p-8 md:p-14 rounded-3xl bg-[var(--color-bg)] border border-[var(--color-border)] relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                02 / Founder&apos;s Perspective
              </span>
              <h2 className="font-display font-semibold text-2xl md:text-4xl text-white tracking-tight leading-tight">
                &ldquo;We founded Avorria on a simple premise: a compact, senior-led studio will always out-execute a bloated traditional agency.&rdquo;
              </h2>
              <div className="font-body text-sm md:text-base text-[var(--color-muted)] space-y-4 leading-relaxed">
                <p>
                  Having spent years observing client budgets swallowed by account management layers, junior handoffs, and misaligned incentives, our founding mission was clear: create an agency where clients partner directly with the principals who design and write the code.
                </p>
                <p>
                  We don&apos;t pitch with senior directors only to delegate work to junior trainees. We maintain an intentionally selective roster of clients so our partners remain hands-on in the terminal, in Figma, and at every sprint review.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[var(--color-lime)]">
                <span>The Founding Directorate · Avorria Studio</span>
                <span aria-hidden>·</span>
                <span>London &amp; New York</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — HOW WE THINK (OPERATING PRINCIPLES) */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              03 / Operating Principles
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              The standards that govern every line of code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-lime)] block mb-4">{p.num}</span>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — HOW WE WORK (THE ENGAGEMENT JOURNEY) */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              04 / Engagement Journey
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Eight stages from discovery to continuous scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_JOURNEY.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]"
              >
                <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">{step.step}</span>
                <h4 className="font-display font-semibold text-lg text-white mb-2">{step.title}</h4>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — OUR TECHNOLOGY */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              05 / Technology Foundation
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Tools selected for durability and edge velocity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORTED_TECHNOLOGIES.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-3"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase text-[var(--color-lime)] block mb-1">
                    {tech.category}
                  </span>
                  <h4 className="font-display font-semibold text-lg text-white">{tech.name}</h4>
                </div>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">
                  {tech.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — OUR STANDARDS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              06 / Production Standards
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Non-negotiable benchmarks on every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGINEERING_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-start gap-4"
              >
                <CheckCircle2 size={18} className="text-[var(--color-lime)] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-base text-white">{std.label}</h4>
                  <p className="font-body text-xs md:text-sm text-[var(--color-muted)] leading-relaxed">
                    {std.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — START A CONVERSATION */}
      <CTA />
    </>
  );
}
