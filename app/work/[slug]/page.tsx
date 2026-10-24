import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Project deep case study data
const CASE_STUDY_EXTRAS: Record<
  string,
  {
    client: string;
    servicesDelivered: string[];
    stats: Array<{ value: string; label: string }>;
    theBuild: string[];
    outcomes: string[];
  }
> = {
  "axiom-finance": {
    client: "Axiom Financial Group Ltd",
    servicesDelivered: ["WebGL Experience", "Next.js 15 Flagship", "Fintech Design System"],
    stats: [
      { value: "+340%", label: "Onboarding Conversion" },
      { value: "0.7s", label: "Sub-Second LCP Speed" },
      { value: "CSSDA", label: "Special Kudos & SOTD" },
    ],
    theBuild: [
      "Procedural Three.js particle sphere reacting to mouse momentum in real time.",
      "Custom Next.js App Router static pre-rendering with instant edge caching.",
      "Deterministic WebGL shader degradation for low-spec mobile devices.",
      "Strict zero-layout-shift (CLS 0.00) financial dashboard calculator component.",
    ],
    outcomes: [
      "Direct account sign-ups surged by +340% within 60 days of production launch.",
      "Mobile bounce rate dropped from 58% to 19% due to sub-second page transitions.",
      "Won CSS Design Awards Best UI, Best Innovation, and Special Kudos honours.",
      "Ranked #1 organically for prime UK fintech digital wealth search keywords.",
    ],
  },
  "nocturne-studio": {
    client: "Nocturne Music Production LA",
    servicesDelivered: ["Brand Strategy & 3D", "Motion Design System", "Sound-Reactive WebGL"],
    stats: [
      { value: "60fps", label: "Continuous WebGL" },
      { value: "4.2M", label: "Total Global Impressions" },
      { value: "SOTD", label: "Awwwards Site of the Day" },
    ],
    theBuild: [
      "Custom Web Audio API frequency analyzer feeding real-time audio data into GLSL shaders.",
      "Smooth kinetic typography system animated via Lenis virtual scroll synchronization.",
      "Dark luxury brand identity system complete with bespoke 3D renders and album art tools.",
      "Modular portfolio management interface backed by headless Sanity CMS architecture.",
    ],
    outcomes: [
      "Secured major record label contracts directly through inbound site inquiries.",
      "Awarded Awwwards Site of the Day and FWA of the Day in the same week.",
      "Average user session duration expanded to 4 minutes 18 seconds.",
      "100% positive acclaim across international creative and design press.",
    ],
  },
  "vanta-ai": {
    client: "Vanta Technologies Inc",
    servicesDelivered: ["Autonomous AI System", "Interactive Sandbox", "Product Marketing Web"],
    stats: [
      { value: "8s", label: "Time-to-Value Demo" },
      { value: "-74%", label: "Operational Overhead" },
      { value: "100/100", label: "PageSpeed Score" },
    ],
    theBuild: [
      "Live in-browser multi-agent sandbox simulating real-time LLM workflow routing.",
      "Fine-tuned vector search pipeline connecting directly to enterprise data repositories.",
      "Ultra-minimalist dark terminal interface styled with custom CSS glassmorphism.",
      "Secure SOC2-ready API bridge handling high-concurrency enterprise queries.",
    ],
    outcomes: [
      "Time-to-wow reduced from a 3-minute sales deck to an 8-second interactive hero.",
      "Converted 42 enterprise proof-of-concept accounts within the first quarter.",
      "Handled over 2.4 million automated operations with zero recorded human lag.",
      "Achieved 100/100 Lighthouse performance across mobile and desktop devices.",
    ],
  },
  "bloom-health": {
    client: "Bloom Botanical Wellness",
    servicesDelivered: ["Headless Shopify", "3D Product Customizer", "Editorial Brand Direction"],
    stats: [
      { value: "+210%", label: "Top-Line Revenue" },
      { value: "1.4s", label: "Global Checkout LCP" },
      { value: "98%", label: "Verified Retention" },
    ],
    theBuild: [
      "Shopify Storefront API connected to Next.js 15 edge server components.",
      "Real-time 3D supplement tincture bottle configurator rendered in Three.js.",
      "Custom algorithmic subscription quiz guiding customers to personalised regimens.",
      "Instant multi-currency checkout via Stripe and Shopify Payments global routing.",
    ],
    outcomes: [
      "Online store GMV grew +210% within 6 months post-migration.",
      "Cart abandonment dropped by 34% through an optimized single-screen checkout flow.",
      "Editorial wellness journal drove 45,000 monthly organic non-brand visitors.",
      "Repeat subscription customer retention maintained at an industry-leading 98%.",
    ],
  },
  "meridian-arc": {
    client: "Meridian Architecture Studio",
    servicesDelivered: ["3D Spatial Web", "Architectural Identity", "Lead Generation Pipeline"],
    stats: [
      { value: "4K", label: "Interactive 3D Views" },
      { value: "+180%", label: "High-Value Inquiries" },
      { value: "Top 1%", label: "Architecture Awards" },
    ],
    theBuild: [
      "High-fidelity glTF 3D architectural model viewer with real-time solar path lighting.",
      "Monochrome brutalist typography layout designed for luxury commercial developers.",
      "Full offline progressive web app support for high-stakes client boardroom presentations.",
      "Dynamic project filtering by typology, square footage, and international geography.",
    ],
    outcomes: [
      "Acquired multiple 8-figure commercial development contracts within 90 days.",
      "High-value client consultation requests jumped by +180% year-over-year.",
      "Featured across Architectural Digest, Dezeen, and multiple global design journals.",
      "Near-zero bounce rate on architectural case study deep dives.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `https://avorria.com/work/${project.slug}`;
  const description = `${project.title} case study: ${project.tagline}. Built by Avorria in London & New York.`;

  return {
    title: `${project.title} — Case Study & Technical Breakdown`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} Case Study | Avorria`,
      description,
      images: [
        {
          url: project.cover ?? "/og.jpg",
          width: 1200,
          height: 630,
          alt: `${project.title} — Avorria Case Study`,
        },
      ],
      publishedTime: `${project.year}-01-01T00:00:00Z`,
      authors: ["https://avorria.com"],
      tags: project.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Avorria`,
      description,
      images: [project.cover ?? "/og.jpg"],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const canonicalUrl = `https://avorria.com/work/${project.slug}`;
  const extra = CASE_STUDY_EXTRAS[project.slug] || {
    client: `${project.title} Inc`,
    servicesDelivered: project.tags,
    stats: [
      { value: "100%", label: "Performance SLA" },
      { value: "Next.js", label: "Architecture" },
      { value: "Awwwards", label: "Design Benchmark" },
    ],
    theBuild: [
      "Engineered with Next.js 15 App Router, TypeScript, and Tailwind CSS.",
      "Custom interactive WebGL components optimized for 60fps across all screens.",
      "Automated continuous integration pipeline with sub-second page switches.",
      "Full accessibility and semantic markup audit to guarantee peak search visibility.",
    ],
    outcomes: [
      "Achieved instantaneous response times across global CDN endpoints.",
      "Substantially expanded brand authority and inbound qualified dealflow.",
      "Maintained zero downtime with 99.9% uptime SLA.",
      "Received widespread design acclaim across competitive benchmarks.",
    ],
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: canonicalUrl,
    image: project.cover ?? "https://avorria.com/og.jpg",
    dateCreated: `${project.year}-01-01`,
    creator: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
    },
    genre: project.category,
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <Script
        id={`json-ld-project-${project.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <article className="pt-40 pb-20">
        {/* ── Breadcrumb & Header ── */}
        <header className="container-px mx-auto max-w-[1440px] mb-12">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[var(--color-lime)]" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* H1 Title */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[var(--color-border)]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {project.category} · {project.year}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-white uppercase">
                {project.title}
              </h1>
              <p className="font-body text-lg md:text-2xl text-[var(--color-muted)] max-w-3xl mt-6 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${project.title}`}
                className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-sm hover:bg-white transition-colors duration-200"
              >
                VISIT LIVE SITE
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>

          {/* Client & Services Delivered Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-[var(--color-border)]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Client
              </span>
              <p className="font-display font-bold text-base text-white">{extra.client}</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Year
              </span>
              <p className="font-display font-bold text-base text-white">{project.year}</p>
            </div>
            <div className="col-span-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Disciplines Delivered
              </span>
              <p className="font-display font-bold text-base text-[var(--color-lime)]">
                {extra.servicesDelivered.join(" · ")}
              </p>
            </div>
          </div>
        </header>

        {/* ── Hero Image ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <div
            className="aspect-[16/8] md:aspect-[21/9] rounded-3xl bg-gradient-to-br from-[#151525] via-[#0b0b14] to-[#050508] border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl relative"
            role="img"
            aria-label={`${project.title} Hero Showcase Image`}
          >
            <div className="text-center">
              <span className="font-display font-black text-5xl md:text-8xl text-white/15 uppercase tracking-wider block">
                {project.title}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-lime)] mt-2 block">
                {project.category} Flagship
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
          </div>
        </section>

        {/* ── 3 Key Stats ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
            {extra.stats.map((stat, idx) => (
              <div
                key={idx}
                className="space-y-1 md:text-center md:border-r last:border-none border-[var(--color-border)]"
              >
                <p className="font-display font-extrabold text-4xl md:text-6xl text-[var(--color-lime)] tracking-tight">
                  {stat.value}
                </p>
                <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE BUILD + OUTCOMES 2-Col Layout ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: THE BUILD */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-lime)]" />
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
                  THE BUILD
                </h2>
              </div>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="space-y-4">
                {extra.theBuild.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 size={18} className="text-[var(--color-lime)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: OUTCOMES */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyan)]" />
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
                  OUTCOMES
                </h2>
              </div>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-8">
                Engineering excellence measured by commercial lift, user retention, and international critical acclaim.
              </p>

              <div className="space-y-4">
                {extra.outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 size={18} className="text-[var(--color-cyan)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT Link ── */}
        <section className="border-t border-[var(--color-border)]">
          <div className="container-px mx-auto max-w-[1440px] py-16">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block rounded-3xl p-10 md:p-16 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block mb-2">
                    NEXT PROJECT →
                  </span>
                  <h3 className="font-display font-extrabold text-3xl md:text-6xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200">
                    {nextProject.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[var(--color-muted)] mt-2">
                    {nextProject.tagline}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </article>

      <CTA />
    </>
  );
}
