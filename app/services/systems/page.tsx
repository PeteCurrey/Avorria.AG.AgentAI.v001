import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Server, RefreshCw, Cpu } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import SystemsIntegrationDemo from "@/components/services/SystemsIntegrationDemo";


const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://avorria.com/services/systems#service",
      name: "Digital Systems & Integrations",
      serviceType: "Enterprise Systems & Workflow Integration",
      description: "Connected applications, integrations, and intelligent workflows that reduce friction and improve operations. Modern API architectures, headless commerce sync, and edge middleware.",
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
      "@id": "https://avorria.com/services/systems#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avorria.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avorria.com/services" },
        { "@type": "ListItem", position: 3, name: "Digital Systems & Integrations", item: "https://avorria.com/services/systems" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Digital Systems & Integrations — Connected Enterprise Workflows",
  description:
    "Connected applications, integrations, and intelligent workflows that reduce friction and improve operations. Modern API architectures, headless commerce sync, and edge middleware.",
  alternates: { canonical: "https://avorria.com/services/systems" },
};

const PROBLEMS = [
  {
    num: "01",
    title: "Brittle Point-to-Point Glue Code",
    description:
      "Ad-hoc Zapier triggers and undocumented webhooks break silently under high concurrency, creating data desynchronisation and lost revenue.",
  },
  {
    num: "02",
    title: "Sluggish Legacy Monolith Latency",
    description:
      "Legacy ERP and inventory systems cannot keep pace with modern sub-second frontends, causing slow checkout rates and degraded user experiences.",
  },
  {
    num: "03",
    title: "Double Data Entry & Manual Friction",
    description:
      "Teams waste hours copy-pasting customer records, fulfillment states, and billing invoices across incompatible software platforms.",
  },
];

const DELIVERABLES = [
  {
    title: "Edge API Gateways & Middleware",
    description: "Next.js edge runtimes that route, transform, and cache third-party payloads in under 30ms globally.",
  },
  {
    title: "Omnichannel Headless Commerce Sync",
    description: "Real-time stock synchronization across Shopify Plus, Medusa, global 3PLs, and localized checkout channels.",
  },
  {
    title: "ERP & Financial System Connectors",
    description: "Secure, idempotent bridges between frontends and backend ledgers (SAP, NetSuite, Stripe, QuickBooks).",
  },
  {
    title: "Resilient Webhook Event Infrastructure",
    description: "Asynchronous task queues with automated exponential backoff, dead-letter queues, and zero-data-loss guarantees.",
  },
  {
    title: "Distributed Redis Caching Layers",
    description: "Low-latency state management and session persistence distributed across global edge clusters.",
  },
  {
    title: "End-to-End Observability & Tracing",
    description: "Real-time error tracking, payload telemetry, and automated alerts to catch integration degradation instantly.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "API Audit & Schema Mapping", detail: "Data boundary review, payload schema contracts, and latency benchmarks." },
  { step: "02", title: "Edge Middleware Architecture", detail: "Edge routing design, token authentication, and cache strategy." },
  { step: "03", title: "Integration Testing & Gates", detail: "Load testing, concurrency spikes, and automated failure simulations." },
  { step: "04", title: "Production Cutover & Observability", detail: "Zero-downtime traffic migration and 24/7 telemetry monitoring." },
];

const FAQS = [
  {
    q: "What does the starting investment include?",
    a: "Engagements start from £18,000 / $22,000 for a 4–8 week sprint delivering a production-hardened API gateway, edge middleware, and bidirectional system integration.",
  },
  {
    q: "How do you handle traffic spikes during sales campaigns?",
    a: "We engineer serverless edge workers backed by distributed Redis clusters. Our architecture auto-scales to handle 10,000+ requests per second without latency degradation.",
  },
  {
    q: "Can you connect proprietary internal software?",
    a: "Yes. Whether you operate legacy SOAP endpoints, private SQL databases, or modern GraphQL microservices, we build secure, validated bridges.",
  },
  {
    q: "How do you prevent data loss if a third-party service goes down?",
    a: "We implement transactional event queues with persistent storage, automated retries with exponential backoff, and dead-letter alert queues.",
  },
];

export default function DigitalSystemsServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* 01. DISTINCTIVE HERO */}
      <PageHero
        eyebrow="03 / Digital Systems & Integrations"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.6rem,7vw,6.8rem)] leading-[0.96] tracking-tight text-white uppercase">
            CONNECTED SYSTEMS.<br />
            <span className="text-gradient-cyan">ZERO OPERATIONAL FRICTION.</span>
          </h1>
        }
        body={
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl leading-relaxed">
              Connected applications, integrations, and intelligent workflows that reduce friction and improve operations. Modern API architectures built for global scale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-display font-medium text-xs sm:text-sm hover:bg-[var(--color-cyan)] transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
              <span className="font-mono text-xs text-white/50">
                Starting from £18,000 / $22,000 · 4–8 Weeks
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
              The Architecture Bottleneck
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Why disconnected systems silently drain profits.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((p) => (
              <div
                key={p.num}
                className="p-8 rounded-[var(--radius-card)] bg-[var(--color-panel)] border border-[var(--color-border)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-cyan)] block mb-4">{p.num}</span>
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block">
              The Systems Architecture
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              Idempotent. Resilient. Sub-50ms Global Response.
            </h2>
            <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
              We design integration fabrics that treat failure as an inevitability to be absorbed gracefully. By deploying edge routing layers, strict JSON contracts, and transactional queue mechanisms, we isolate your business from external platform outages.
            </p>
          </div>
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] space-y-4">
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-cyan)]" />
              <span>Zero-data-loss event streaming architecture</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-cyan)]" />
              <span>Sub-50ms edge caching across 300+ global PoPs</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-cyan)]" />
              <span>Cryptographic signature verification on all webhooks</span>
            </div>
            <div className="flex items-center gap-3 text-white font-mono text-xs">
              <CheckCircle2 size={16} className="text-[var(--color-cyan)]" />
              <span>Full source code ownership with clear API documentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. WHAT WE BUILD */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
              Live Architecture Diagnostic
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Interactive Systems &amp; Webhook Latency Visualizer
            </h2>
          </div>
          <SystemsIntegrationDemo />
        </div>
      </section>

      {/* 06. OUR TECHNOLOGY */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
              Technical Stack
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Engineered for throughput and durability.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Edge Routing</span>
              <h4 className="font-display font-semibold text-lg text-white">Next.js Edge Workers</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Zero cold start runtime execution with instant global dispatch.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">State Cache</span>
              <h4 className="font-display font-semibold text-lg text-white">Upstash &amp; Redis</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Serverless Redis replicas delivering sub-8ms state resolution.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Commerce Core</span>
              <h4 className="font-display font-semibold text-lg text-white">Shopify &amp; Medusa</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Composable headless commerce APIs with multi-currency routing.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Event Queue</span>
              <h4 className="font-display font-semibold text-lg text-white">Kafka &amp; Inngest</h4>
              <p className="font-body text-xs text-[var(--color-muted)] mt-2">Durable background step-functions with automated recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. BUSINESS VALUE */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
              Practical Outcomes
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Commercial impact of connected architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Error Elimination</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Automated idempotent synchronization eradicates order desync, billing mismatches, and double-entry friction.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Spike Resilience</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Marketing campaigns and flash sales execute smoothly without crashing internal legacy backends or slowing down checkout.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Operational Agility</span>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Add, swap, or upgrade SaaS tools and logistics providers in days instead of undertaking multi-year replatforming projects.
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
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
                Verified Case Studies
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
                Work engineered with this service.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-cyan)] hover:text-white transition-colors"
            >
              <span>View All 5 Case Studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/work/bloom-health"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Bloom Health</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-cyan)] transition-colors">
                Headless commerce architecture with real-time inventory sync
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Automated multi-carrier logistics integration and sub-100ms checkout pipeline.
              </p>
            </Link>

            <Link
              href="/work/vanta-ai"
              className="group p-8 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-cyan)] transition-colors block"
            >
              <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">Vanguard AI</span>
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[var(--color-cyan)] transition-colors">
                Enterprise operations &amp; multi-system data bridging
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Unified data retrieval across disparate legacy databases with sub-25ms response latency.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 09. DELIVERY PROCESS */}
      <section className="section-pad border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
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
                <span className="font-mono text-xs text-[var(--color-cyan)] block mb-2">{step.step}</span>
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-cyan)] block mb-3">
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
