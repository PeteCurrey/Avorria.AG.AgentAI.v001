import type { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Globe, FileCode, BarChart } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import SearchAuditDemo from "@/components/services/SearchAuditDemo";


const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://avorria.com/services/search#service",
      name: "Technical SEO & Search Architecture",
      serviceType: "Technical SEO & Search Architecture",
      description: "Search architecture, technical optimization, and content infrastructure that help businesses earn sustainable organic visibility. Server-side rendering, schema graphs, and Core Web Vitals engineering.",
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
      "@id": "https://avorria.com/services/search#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avorria.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avorria.com/services" },
        { "@type": "ListItem", position: 3, name: "Technical SEO & Search Architecture", item: "https://avorria.com/services/search" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Technical SEO & Search Architecture — Organic Discoverability",
  description:
    "Search architecture, technical optimization, and content infrastructure that help businesses earn sustainable organic visibility. Server-side rendering, schema graphs, and Core Web Vitals engineering.",
  alternates: { canonical: "https://avorria.com/services/search" },
};

const PROBLEMS = [
  {
    num: "01",
    title: "Client-Side Rendering Invisibility",
    description:
      "Modern Single-Page Apps (SPAs) render blank HTML shells that search engine crawlers struggle to index, delaying organic discovery by months.",
  },
  {
    num: "02",
    title: "Broken Crawl Budgets & Duplicate Paths",
    description:
      "Poor URL taxonomy, uncontrolled facet parameters, and missing canonical controls cause search bots to burn crawl budget on low-value pages.",
  },
  {
    num: "03",
    title: "Core Web Vitals Penalisation",
    description:
      "Cumulative Layout Shifts (CLS) and poor Interaction to Next Paint (INP) degrade real-user search signals and suppress ranking momentum.",
  },
];

const DELIVERABLES = [
  {
    title: "Edge SSR & SSG Crawl Architecture",
    description: "Full server-side pre-rendering delivering 100% complete HTML to Googlebot in under 50ms at edge nodes.",
  },
  {
    title: "Entity-Linked Schema Graph (JSON-LD)",
    description: "Deep semantic schema markup establishing your company, leadership, and products within search engine knowledge graphs.",
  },
  {
    title: "Core Web Vitals Remediation",
    description: "Architectural fixes for LCP, CLS, and INP that pass Chrome User Experience Report (CrUX) thresholds.",
  },
  {
    title: "International Hreflang & Domain Routing",
    description: "Multi-regional and multi-currency search infrastructure configured to prevent cross-market cannibalisation.",
  },
  {
    title: "Headless Content Infrastructure",
    description: "Taxonomy structures and editorial templates designed to capture high-intent non-branded search demand.",
  },
  {
    title: "Indexation Governance & Monitoring",
    description: "Automated crawl monitoring and XML sitemap pipelines that immediately flag de-indexation or soft-404 regressions.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Crawl & Log Analysis", detail: "Server log audits, bot rendering inspection, and crawl budget gap identification." },
  { step: "02", title: "Architecture & Schema Spec", detail: "Canonical rule design, JSON-LD knowledge graph modeling, and route taxonomy." },
  { step: "03", title: "Codebase Remediation", detail: "Next.js 16 metadata implementation, SSR hydration fixes, and CWV optimization." },
  { step: "04", title: "Validation & Governance", detail: "Search Console verification, log re-indexing audits, and rank tracking setup." },
];

const FAQS = [
  {
    q: "Do you guarantee #1 rankings or specific traffic numbers?",
    a: "No. Genuine engineering agencies do not promise arbitrary rankings because search algorithms are external third-party systems. What we guarantee is world-class technical search architecture: flawless crawlability, sub-50ms bot TTFB, clean schema graphs, and zero technical impediments to ranking.",
  },
  {
    q: "What does the starting investment include?",
    a: "Engagements start from £8,500 / $11,000 for a 2–4 week technical architecture sprint. This includes a full codebase crawl audit, schema graph deployment, edge SSR fixes, and Core Web Vitals remediation.",
  },
  {
    q: "How does this differ from traditional SEO agency retainers?",
    a: "Traditional agencies produce PDF audits and generic blog posts. Avorria actually writes and merges the production code: we optimize server headers, refactor JavaScript hydration, implement structured data, and tune serverless caching.",
  },
  {
    q: "Can this be implemented on existing sites without a full rebuild?",
    a: "Yes. While we build ground-up flagships, our technical search team frequently performs targeted architectural surgery on existing Next.js, Shopify, and headless setups.",
  },
];

export default function TechnicalSEOServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* 01. DISTINCTIVE HERO */}
      <PageHero
        eyebrow="04 / Technical SEO & Search Architecture"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.6rem,7vw,6.8rem)] leading-[0.96] tracking-tight text-white uppercase">
            SEARCH ARCHITECTURE FOR<br />
            <span className="text-gradient-lime">ORGANIC AUTHORITY.</span>
          </h1>
        }
        body={
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl leading-relaxed">
              Search architecture, technical optimization, and content infrastructure that help businesses earn sustainable organic visibility. Engineered directly into production code.
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
                Starting from £8,500 / $11,000 · 2–4 Weeks
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
              The Visibility Dilemma
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Why technically flawed sites remain invisible to buyers.
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
              The Engineering Approach
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Code-level search optimisation. Zero guesswork.
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              We approach organic search not as subjective marketing, but as a systems engineering problem. By delivering instant edge HTML, structured knowledge graphs, and rock-solid canonical routing, we ensure search engine algorithms easily interpret and prioritize your digital assets.
            </p>
          </div>
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Full server-rendered HTML delivered to crawlers in &lt; 50ms</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Structured entity graphs mapped via schema.org JSON-LD</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>100% Core Web Vitals adherence across desktop &amp; mobile</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-lime)]" />
              <span>Direct engineer-to-engineer implementation and PR merges</span>
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
              Technical Diagnostic
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Edge SSR Crawl &amp; Semantic Graph Simulator
            </h2>
          </div>
          <SearchAuditDemo />
        </div>
      </section>

      {/* 06. OUR TECHNOLOGY */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Technology Stack
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Search engineering toolkit.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Rendering</span>
              <h4 className="font-display font-semibold text-lg text-white">Next.js 16 Edge SSR</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Zero-delay HTML delivery with automated dynamic metadata generation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Knowledge Graph</span>
              <h4 className="font-display font-semibold text-lg text-white">JSON-LD &amp; Schema.org</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Semantic entity linking across organizations, authors, and product catalog.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Diagnostics</span>
              <h4 className="font-display font-semibold text-lg text-white">CrUX &amp; Lighthouse</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Field telemetry tracking real user metrics directly from Chrome browsers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Edge Routing</span>
              <h4 className="font-display font-semibold text-lg text-white">Cloudflare Workers</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Edge-level redirects, canonical enforcement, and bot traffic routing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. BUSINESS VALUE */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              Practical Outcomes
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Sustainable commercial return from organic channels.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Reduced Acquisition Cost</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Strong technical rankings generate continuous inbound enterprise inquiries without ongoing pay-per-click ad expenditures.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Fast Content Indexation</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                New service pages and editorial playbooks are indexed by search engines within hours rather than languishing for weeks.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Long-Term Digital Equity</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Clean, robust architecture builds permanent domain authority that withstands search engine algorithm adjustments.
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
                Next.js 16 dynamic metadata and edge SSR pre-rendering passing all Core Web Vitals checks.
              </p>
            </Link>

            <Link
              href="/work/meridian-arc"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-lime)] block mb-2">Meridian Arc</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-lime)] transition-colors">
                Architectural portfolio with structured JSON-LD schema
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Rich snippet qualification and deep semantic taxonomy for high-value architectural projects.
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
