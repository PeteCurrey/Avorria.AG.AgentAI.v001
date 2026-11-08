import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import WebBenchmarkDemo from "@/components/services/WebBenchmarkDemo";


const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://avorria.com/services/build#service",
      name: "Website Design & Development",
      serviceType: "Custom Web Development & Flagships",
      description: "Bespoke digital platforms engineered for performance, brand distinction, discoverability, and commercial growth. Powered by Next.js 16, Three.js WebGL, and headless architecture.",
      provider: {
        "@type": "Organization",
        "@id": "https://avorria.com/#organization",
        name: "Avorria",
        url: "https://avorria.com"
      },
      areaServed: ["GB", "US"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://avorria.com/services/build#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avorria.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avorria.com/services" },
        { "@type": "ListItem", position: 3, name: "Website Design & Development", item: "https://avorria.com/services/build" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Website Design & Development — High-Performance Digital Flagships",
  description:
    "Bespoke digital platforms engineered for performance, brand distinction, discoverability, and commercial growth. Powered by Next.js 16, Three.js WebGL, and headless architecture.",
  alternates: { canonical: "https://avorria.com/services/build" },
};

const PROBLEMS = [
  {
    num: "01",
    title: "Bloated Template Overhead",
    description:
      "Most corporate websites rely on heavy multi-plugin CMS themes that cause 4+ second load times, sluggish mobile interaction, and immediate visitor abandonment.",
  },
  {
    num: "02",
    title: "Generic Aesthetic Commoditisation",
    description:
      "Off-the-shelf templates make category leaders look indistinguishable from low-cost competitors, eroding pricing power and customer trust.",
  },
  {
    num: "03",
    title: "Fragile Maintenance & High Drift",
    description:
      "Unvetted third-party plugins create security vulnerabilities, broken updates, and unpredictable maintenance costs that distract executive focus.",
  },
];

const DELIVERABLES = [
  {
    title: "Next.js 16 App Architecture",
    description: "Server-side and static edge rendering for instantaneous navigation and zero layout shift.",
  },
  {
    title: "Cinematic 3D & WebGL Canvas",
    description: "Hardware-accelerated Three.js and custom GLSL shaders engineered for 60fps across desktop and mobile.",
  },
  {
    title: "Headless CMS Integration",
    description: "Custom editorial workflows with Sanity, Contentful, or Storyblok tailored to marketing teams.",
  },
  {
    title: "Composable E-Commerce Engines",
    description: "Shopify Plus and Medusa headless storefronts with real-time 3D product configurators.",
  },
  {
    title: "Micro-Interaction Choreography",
    description: "Tactile spring physics, clip-path text reveals, and kinetic motion designed with Framer Motion.",
  },
  {
    title: "Accessible Design Tokens",
    description: "Architectural component design systems compliant with WCAG 2.1 AA accessibility standards.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discovery & Architecture", detail: "Technical spikes, performance budget definition, and interactive prototyping." },
  { step: "02", title: "Creative Art Direction", detail: "Bespoke design systems, motion choreography, and spatial 3D exploration." },
  { step: "03", title: "Agile Production", detail: "Two-week sprints with senior engineers, Next.js 16, and weekly staging previews." },
  { step: "04", title: "Edge Deployment & Scale", detail: "Zero-downtime global DNS rollout, edge caching, and automated QA gates." },
];

const FAQS = [
  {
    q: "What does the starting investment include?",
    a: "Our website development engagements start from £14,000 / $18,000 for a focused 3–6 week senior engineering sprint. This includes custom Next.js 16 architecture, bespoke design, CMS integration, and our verified performance guarantee.",
  },
  {
    q: "What factors affect project scope and pricing?",
    a: "Key variables include bespoke 3D WebGL assets, custom interactive product configurators, third-party backend integrations, multi-language localization, and total page count.",
  },
  {
    q: "Do our non-technical team members get CMS access?",
    a: "Yes. We configure intuitive, visual headless CMS workspaces (e.g. Sanity or Contentful) allowing your marketing team to edit copy, publish articles, and launch landing pages without engineering intervention.",
  },
  {
    q: "How do you guarantee sub-second performance?",
    a: "We engineer directly on the compositor thread using Next.js 16 edge runtimes, optimized AVIF asset delivery, and strict asset budgets. We test on low-powered mobile hardware before staging sign-off.",
  },
];

export default function WebsiteDevelopmentServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* 01. DISTINCTIVE HERO */}
      <PageHero
        eyebrow="01 / Website Design & Development"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.6rem,7vw,6.8rem)] leading-[0.96] tracking-tight text-white uppercase">
            FLAGSHIPS THAT<br />
            <span className="text-gradient-lime">COMMAND AUTHORITY.</span>
          </h1>
        }
        body={
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl leading-relaxed">
              Bespoke digital platforms engineered for performance, brand distinction, discoverability, and commercial growth. We combine cinematic 3D craft with sub-second speeds.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-display font-medium text-xs sm:text-sm hover:bg-[var(--color-lime)] transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <span className="font-mono text-xs text-white/50">
                Starting from £14,000 / $18,000 · 3–6 Weeks
              </span>
            </div>
          </div>
        }
        className="pb-20"
      />

      {/* 02. THE BUSINESS PROBLEM */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              The Commercial Dilemma
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Why generic websites fail ambitious companies.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((p) => (
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

      {/* 03. THE AVORRIA APPROACH */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
              The Avorria Doctrine
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Speed as design. Craft as commercial leverage.
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              We reject off-the-shelf templates and bloated page-builders. Every Avorria platform is architected from clean code using Next.js 16 and TypeScript. We eliminate every microsecond of input latency so your brand feels instantaneous, authoritative, and permanent.
            </p>
          </div>
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Dedicated senior engineer &amp; creative director pod</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Sub-second LCP benchmarked across global networks</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Full source code ownership with zero agency lock-in</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Headless CMS configured specifically for your team</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. WHAT WE BUILD */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Capabilities &amp; Scope
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              What we design and engineer.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((d, i) => (
              <div
                key={i}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/20 transition-colors duration-200"
              >
                <h3 className="font-display font-semibold text-lg text-white mb-2">{d.title}</h3>
                <p className="font-body text-xs md:text-sm text-[var(--color-muted)] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. INTERACTIVE DEMONSTRATION */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Interactive Proof
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Live Architecture &amp; Frame Budget Simulation
            </h2>
          </div>
          <WebBenchmarkDemo />
        </div>
      </section>

      {/* 06. OUR TECHNOLOGY */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Technical Foundation
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Modern stack, zero legacy baggage.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Core Engine</span>
              <h4 className="font-display font-semibold text-lg text-white">Next.js 16 &amp; React 19</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Server components, edge rendering, and sub-second compilation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Graphics</span>
              <h4 className="font-display font-semibold text-lg text-white">Three.js &amp; GLSL</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">GPU-accelerated spatial interactive 3D with mobile fallback.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Motion</span>
              <h4 className="font-display font-semibold text-lg text-white">Framer Motion</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Physics-based kinetic springs and clip-path mask choreography.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Edge CMS</span>
              <h4 className="font-display font-semibold text-lg text-white">Sanity &amp; Medusa</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Type-safe content models and scalable headless commerce backends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. BUSINESS VALUE */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Commercial Outcomes
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Measuring the business value of engineering craft.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Conversion Elevation</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Sub-second page speeds eliminate the friction that drives away prospective enterprise clients and high-value buyers.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Brand Authority</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Distinctive interactive art direction elevates brand perception, validating premium pricing and commanding market respect.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Operational Independence</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Intuitive content schemas allow internal marketing teams to deploy landing pages quickly without waiting on external agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. RELEVANT PROJECTS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
                Verified Case Studies
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Work engineered with this service.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-lime)] hover:text-white transition-colors"
            >
              <span>View All 5 Case Studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/work/axiom-finance"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Axiom Finance</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                High-throughput fintech platform architecture
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Next.js 16 and real-time Three.js WebGL visualization delivering sub-second LCP.
              </p>
            </Link>

            <Link
              href="/work/bloom-health"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Bloom Health</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                Headless commerce architecture with story-first editorial
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Modern D2C commerce platform with bespoke liquid components and sub-second checkout speeds.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 09. DELIVERY PROCESS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Delivery Governance
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              The four-stage production sprint.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
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

      {/* 10. FAQ */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px] max-w-4xl">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Commercial FAQ
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-2"
              >
                <h3 className="font-display font-semibold text-lg text-white">{faq.q}</h3>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONVERSION */}
      <CTA />
    </>
  );
}
