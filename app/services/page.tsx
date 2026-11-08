import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Brain,
  Layers,
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Coins,
  Compass,
} from "lucide-react";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import ServicesMatrix from "@/components/ServicesMatrix";
import PageHero from "@/components/PageHero";


const servicesHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://avorria.com/services#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://avorria.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://avorria.com/services" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://avorria.com/services#list",
      name: "Avorria Commercial Engineering Practices",
      itemListElement: [
        { "@type": "SiteNavigationElement", position: 1, name: "Website Design & Development", url: "https://avorria.com/services/build" },
        { "@type": "SiteNavigationElement", position: 2, name: "AI Development & Business Automation", url: "https://avorria.com/services/ai" },
        { "@type": "SiteNavigationElement", position: 3, name: "Digital Systems & Integrations", url: "https://avorria.com/services/systems" },
        { "@type": "SiteNavigationElement", position: 4, name: "Technical SEO & Search Architecture", url: "https://avorria.com/services/search" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Commercial Services & Engineering Capabilities",
  description:
    "Explore Avorria's four core engineering disciplines: Website Design & Development, AI Development & Business Automation, Digital Systems & Integrations, and Technical SEO & Search Architecture.",
  alternates: { canonical: "https://avorria.com/services" },
  openGraph: {
    url: "https://avorria.com/services",
    title: "Commercial Services & Engineering Capabilities",
    description:
      "Senior-led practices across web flagships, applied AI systems, digital systems integrations, and technical SEO architecture. London & New York.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Commercial Services & Capabilities" }],
  },
};

const SERVICE_BLOCKS = [
  {
    id: "build",
    href: "/services/build",
    number: "01",
    icon: Globe,
    title: "Website Design & Development",
    tagline: "Bespoke digital platforms engineered for performance, brand distinction, and growth.",
    description:
      "We build category-defining web experiences powered by Next.js 16, Three.js, and custom GLSL shaders. Sub-second load times with zero compromise on motion art direction, e-commerce conversion, or accessibility.",
    price: "From £14,000 / $18,000",
    timeline: "3–6 Weeks Delivery",
    deliverables: [
      "Custom WebGL / Three.js 60fps canvas engine",
      "Next.js 16 App Router + Turbopack architecture",
      "100/100 Core Web Vitals guarantee (sub-second LCP)",
      "Headless e-commerce (Shopify Plus / Medusa)",
      "Headless CMS integration (Sanity, Storyblok, Contentful)",
      "Cross-device retina & mobile responsive QA audit",
    ],
  },
  {
    id: "ai",
    href: "/services/ai",
    number: "02",
    icon: Brain,
    title: "AI Development & Business Automation",
    tagline: "Practical AI solutions that automate processes and create operational leverage.",
    description:
      "Intelligent AI systems that connect your business knowledge, automate complex workflows, and help your team make faster, better decisions. We implement secure RAG pipelines, autonomous task agents, and private vector storage.",
    price: "From £16,000 / $20,000",
    timeline: "4–8 Weeks Delivery",
    deliverables: [
      "Connected knowledge base & enterprise RAG architecture",
      "Automated multi-agent workflow routing & task execution",
      "Private vector indexing with strict zero-public-training boundaries",
      "Deterministic safety guardrails, evaluation harnesses & fallbacks",
      "Native integrations into ERP, CRM, and internal databases",
      "Operational telemetry dashboard with enterprise SLA",
    ],
  },
  {
    id: "systems",
    href: "/services/systems",
    number: "03",
    icon: Layers,
    title: "Digital Systems & Integrations",
    tagline: "Connected applications, integrations, and intelligent workflows that reduce friction.",
    description:
      "Modern API architectures, edge middleware, and real-time data synchronization designed for scale. We connect legacy databases, enterprise software, and cloud platforms with zero data loss.",
    price: "From £18,000 / $22,000",
    timeline: "4–8 Weeks Delivery",
    deliverables: [
      "Edge API gateways & Next.js worker middleware",
      "Omnichannel stock & order synchronization pipelines",
      "ERP & ledger integration (SAP, NetSuite, Stripe)",
      "Asynchronous event queues with automated retry backoff",
      "Distributed Redis caching with sub-8ms state resolution",
      "Full observability, payload tracing, and error alerting",
    ],
  },
  {
    id: "search",
    href: "/services/search",
    number: "04",
    icon: Search,
    title: "Technical SEO & Search Architecture",
    tagline: "Search architecture and content infrastructure that earn sustainable organic visibility.",
    description:
      "Code-level search optimization engineered directly into production systems. Server-side rendering, schema knowledge graphs, and Core Web Vitals remediation that ensure crawlers understand and rank your assets.",
    price: "From £8,500 / $11,000",
    timeline: "2–4 Weeks Delivery",
    deliverables: [
      "Edge SSR pre-rendering delivering full HTML in < 50ms",
      "Entity-linked JSON-LD Schema.org knowledge graph",
      "Core Web Vitals remediation (LCP, CLS, INP optimization)",
      "International hreflang & multi-domain routing architecture",
      "Headless content modeling for non-branded search capture",
      "Automated crawl monitoring and XML sitemap pipelines",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesHubSchema) }} />
      {/* ── Page Hero ── */}
      <PageHero
        eyebrow="Commercial Services & Architecture"
        headline={
          <h1 className="font-display font-semibold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase">
            FOUR SENIOR DISCIPLINES.<br />
            <span className="text-gradient-silver">MEASURABLE IMPACT.</span>
          </h1>
        }
        body={
          <div className="space-y-12">
            <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
              We design, engineer, and implement technology across four core commercial capabilities. Dedicated senior pods, locked sprint timelines, and verified production outcomes.
            </p>
            {/* Interactive Discipline Selector & Technical Matrix */}
            <ServicesMatrix />
          </div>
        }
        className="pb-20"
      />

      {/* ── Triage Banner ── */}
      <section className="container-px mx-auto max-w-[1440px] mb-20">
        <div className="p-8 md:p-10 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
              <Compass size={22} />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Technical Architecture Advisory
              </span>
              <h2 className="font-display font-semibold text-xl md:text-2xl text-white">
                Evaluating which technical architecture suits your milestone?
              </h2>
              <p className="font-body text-sm text-[var(--color-muted)] mt-1 max-w-xl">
                Outline your current bottlenecks. We analyze stack viability, performance trade-offs, and return a scope recommendation within 4 business hours.
              </p>
            </div>
          </div>

          <MagneticButton className="shrink-0">
            <Link
              href="/contact?triage=direct"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-colors duration-200"
            >
              RUN SCOPE TRIAGE
              <ArrowRight size={14} />
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* ── 4 Detail Blocks with Deliverables Checklist, Price, Timeline & Links to Dedicated Pages ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-px mx-auto max-w-[1440px] divide-y divide-[var(--color-border)]">
          {SERVICE_BLOCKS.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
              >
                {/* Left Column: Number, Title, Description, Meta, Explore & Scope */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-panel)] border border-[var(--color-border)] flex items-center justify-center">
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                        Discipline {service.number}
                      </span>
                    </div>

                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="font-body text-base text-white/80 mb-4">
                      {service.tagline}
                    </p>
                    <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing & Timeline Pill Badges */}
                  <div className="p-5 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] flex items-center gap-1.5 mb-1">
                        <Coins size={12} className="text-white/60" />
                        Engagement Tier
                      </span>
                      <p className="font-display font-bold text-base md:text-lg text-white">
                        {service.price}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] flex items-center gap-1.5 mb-1">
                        <Clock size={12} className="text-white/60" />
                        Delivery Window
                      </span>
                      <p className="font-display font-bold text-base md:text-lg text-white">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons: Dedicated Page + Direct Scope */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200"
                    >
                      EXPLORE SERVICE
                      <ArrowRight size={13} />
                    </Link>

                    <Link
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors duration-200"
                    >
                      SCOPE THIS
                      <ArrowUpRight size={13} className="text-[var(--color-muted)]" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Deliverables Checklist */}
                <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-6 block pb-4 border-b border-[var(--color-border)]">
                    Guaranteed Deliverables Checklist
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <CheckCircle2
                          size={18}
                          className="text-[var(--color-lime)] shrink-0 mt-0.5"
                        />
                        <span className="font-body text-sm text-white/90 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <span>100% IP Assignment</span>
                    <span>Direct Senior Access</span>
                    <span>Production SLA</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
