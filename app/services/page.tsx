import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Brain,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Coins,
  Compass,
} from "lucide-react";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Capabilities That Compound — WebGL, AI & Headless Systems",
  description:
    "Explore Avorria's four core engineering disciplines. High-performance WebGL websites, autonomous AI agent swarms, headless e-commerce, and 3D brand identity. London & New York.",
  alternates: { canonical: "https://avorria.com/services" },
  openGraph: {
    url: "https://avorria.com/services",
    title: "Capabilities That Compound | Avorria Services",
    description:
      "Fixed-price senior sprints across WebGL flagships, autonomous AI systems, headless commerce, and brand motion.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Capabilities That Compound" }],
  },
};

const SERVICE_BLOCKS = [
  {
    id: "immersive-web",
    number: "01",
    icon: Globe,
    title: "Immersive Web & 3D Flagships",
    tagline: "Websites that feel like cinema and convert like software.",
    description:
      "We build category-defining web experiences powered by Next.js 15, Three.js, and custom GLSL shaders. Sub-second load times with zero compromise on motion art direction.",
    price: "From £14,000 / $18,000",
    timeline: "3–6 Weeks Delivery",
    deliverables: [
      "Custom WebGL / Three.js 60fps canvas engine",
      "Next.js 15 App Router + Turbopack architecture",
      "100/100 Core Web Vitals guarantee (sub-second LCP)",
      "Bespoke GSAP & Lenis momentum smooth scroll",
      "Headless CMS integration (Sanity, Storyblok, Contentful)",
      "Cross-device retina & mobile responsive QA audit",
    ],
  },
  {
    id: "ai-systems",
    number: "02",
    icon: Brain,
    title: "Autonomous AI Systems & Agents",
    tagline: "Intelligence deployed directly into your operations.",
    description:
      "Enterprise-grade AI engineering: domain-trained fine-tuning, high-throughput RAG pipelines, and autonomous multi-agent networks that orchestrate high-stakes business ops 24/7.",
    price: "From £16,000 / $20,000",
    timeline: "4–8 Weeks Delivery",
    deliverables: [
      "Custom model fine-tuning on proprietary company datasets",
      "Enterprise RAG vector architecture (Qdrant, Pinecone)",
      "Autonomous multi-agent orchestration swarms",
      "Deterministic safety rails, evaluation harnesses & fallbacks",
      "Native integrations into ERP, CRM, and internal databases",
      "Automated telemetry dashboard with 99.9% uptime SLA",
    ],
  },
  {
    id: "e-commerce",
    number: "03",
    icon: ShoppingBag,
    title: "Headless Performance E-Commerce",
    tagline: "Instant page switches. Unmatched checkout conversion.",
    description:
      "Composable commerce engineered for hyper-growth brands. We replace sluggish monolithic stores with lightning-fast headless storefronts with custom 3D configurators.",
    price: "From £24,000 / $30,000",
    timeline: "6–10 Weeks Delivery",
    deliverables: [
      "Shopify Plus or Medusa composable headless backend",
      "Instant routing with zero layout shift (CLS 0.00)",
      "Interactive 3D WebGL product configurator & customizer",
      "Optimized global localized checkout flows (multi-currency)",
      "Seamless ERP, 3PL inventory, and marketing automation sync",
      "Conversion-rate-optimized (CRO) micro-interaction design",
    ],
  },
  {
    id: "brand-motion-3d",
    number: "04",
    icon: Sparkles,
    title: "Brand Identity, Motion & 3D",
    tagline: "The visual and kinetic soul of your company.",
    description:
      "A complete design system built for modern screens. From procedural 3D art direction and motion languages to comprehensive typographic guidelines that command authority.",
    price: "From £12,000 / $15,000",
    timeline: "3–5 Weeks Delivery",
    deliverables: [
      "Comprehensive visual identity & logo architecture",
      "Custom generative 3D brand assets & render library",
      "Motion design system & UI kinetic principles",
      "Full design token system & Figma master component library",
      "Sonic brand identity & bespoke sound design kit",
      "Production-ready typography and multi-channel asset pack",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-40 pb-20 container-px mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Services & Deliverables
          </span>
        </div>

        {/* Required H1 */}
        <h1 className="font-display font-semibold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase mb-8">
          CAPABILITIES THAT<br />
          <span className="text-gradient-silver">COMPOUND.</span>
        </h1>

        <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Four senior-led disciplines. Fixed pricing, predictable sprint timelines, and guaranteed production outcomes. Zero junior delegation.
        </p>
      </section>

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

      {/* ── 4 Detail Blocks with Deliverables Checklist, Price, Timeline & SCOPE THIS ── */}
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
                {/* Left Column: Number, Title, Description, Meta, SCOPE THIS */}
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

                  {/* SCOPE THIS button */}
                  <div>
                    <MagneticButton>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-all duration-200 shadow-md group"
                      >
                        SCOPE THIS
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </MagneticButton>
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
