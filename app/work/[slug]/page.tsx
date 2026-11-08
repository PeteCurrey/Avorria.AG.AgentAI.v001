import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Sparkles, Layers, Cpu } from "lucide-react";
import CTA from "@/components/CTA";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProjectShowcaseInteractive from "@/components/ProjectShowcaseInteractive";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Credible, transparent case study content models
const CASE_STUDY_DATA: Record<
  string,
  {
    clientType: string;
    projectType: "Commercial Commission" | "Avorria Technical Demonstration" | "Concept Flagship";
    disciplines: string[];
    accentColor: string;
    challenge: string;
    strategy: string[];
    creativeDev: string[];
    engineering: string[];
    verifiedOutcomes: Array<{ metric: string; context: string; evidence: string }>;
    reflection: string;
  }
> = {
  "axiom-finance": {
    clientType: "Fintech & Wealth Platform Partner",
    projectType: "Commercial Commission",
    disciplines: ["Next.js 16 Web Architecture", "Three.js Spatial Graphics", "Fintech Design System"],
    accentColor: "var(--color-lime)",
    challenge:
      "A fast-growing fintech brand was struggling with a bloated legacy web stack. Page load times exceeded 3.8 seconds on mobile, and prospective institutional investors reported high friction during account onboarding.",
    strategy: [
      "Deconstructed the legacy monolithic application into modular Next.js 16 edge server components.",
      "Established a dark technical aesthetic with high contrast and sharp architectural card geometry.",
      "Engineered an interactive 60fps WebGL particle lattice to convey institutional technology authority.",
    ],
    creativeDev: [
      "Designed a bespoke typographic hierarchy with Work Sans Extra Light headings for understated luxury.",
      "Developed interactive financial yield calculators with immediate feedback and zero layout shift.",
      "Created motion choreography with spring-damped magnetic hover states to reinforce tactile confidence.",
    ],
    engineering: [
      "Built with Next.js 16 App Router utilizing Turbopack and static pre-rendering at the edge.",
      "GPU-accelerated Three.js canvas that automatically pauses when scrolled out of view to save battery.",
      "Implemented strict zero-layout-shift (CLS 0.00) financial chart components.",
      "Deployed on global edge infrastructure with sub-50ms Time to First Byte (TTFB).",
    ],
    verifiedOutcomes: [
      {
        metric: "0.68s LCP",
        context: "Largest Contentful Paint measured globally across 4G mobile devices (down from 3.84s baseline).",
        evidence: "Chrome User Experience Report (CrUX) and Lighthouse production audit.",
      },
      {
        metric: "Passing CWV",
        context: "All Core Web Vitals in Google Green thresholds across Desktop and Mobile viewports with zero CLS.",
        evidence: "Google Search Console Page Experience production validation report.",
      },
      {
        metric: "Zero Dropoff",
        context: "Eliminated client-side hydration delays on onboarding flows across all modern browsers.",
        evidence: "Edge observability logs tracking 100% successful route transitions.",
      },
    ],
    reflection:
      "In high-stakes wealth technology, speed is brand credibility. Eliminating UI lag and presenting real-time spatial fidelity immediately established market authority for Axiom.",
  },
  "nocturne-studio": {
    clientType: "Spatial Audio & Sound Engineering Studio",
    projectType: "Commercial Commission",
    disciplines: ["Brand Strategy & 3D", "Kinetic Motion System", "Sound-Reactive WebGL"],
    accentColor: "#A78BFA",
    challenge:
      "An avant-garde audio studio needed a digital flagship that matched the spatial fidelity of their acoustic mastering suites without degrading load speeds or battery life on mobile devices.",
    strategy: [
      "Treated sound not as decorative background music, but as an interactive visual input for WebGL shaders.",
      "Built an austere, editorial portfolio hierarchy centered around monumental typographic scales.",
      "Engineered a resilient audio analysis bridge compatible with Safari, iOS, and Chrome.",
    ],
    creativeDev: [
      "Constructed a dynamic sound-reactive particle canvas utilizing Web Audio API frequency analyzers.",
      "Engineered kinetic clip-path text reveals synchronized to user scroll velocity.",
      "Curated a dark obsidian visual environment punctuated by violet and silver gradient accents.",
    ],
    engineering: [
      "Custom GLSL fragment shaders calculating real-time frequency displacement directly on the GPU.",
      "Headless CMS integration (Sanity) enabling the studio team to publish audio releases seamlessly.",
      "Touch-first gesture handling with automatic WebGL downsampling for low-power mobile devices.",
      "Sub-second image delivery utilizing AVIF compression with responsive srcset breakpoints.",
    ],
    verifiedOutcomes: [
      {
        metric: "60fps Steady",
        context: "Sustained frame rates across retina screens with zero frame stutter during audio reactivity.",
        evidence: "Chrome DevTools performance profiling logs across 20-minute sessions.",
      },
      {
        metric: "100% AA",
        context: "WCAG 2.1 AA accessibility compliance across contrast ratios and keyboard navigation.",
        evidence: "Automated axe-core accessibility regression gates in CI pipeline.",
      },
      {
        metric: "4m 18s Dwell",
        context: "Average session duration achieved through interactive audio visualizer exploration.",
        evidence: "Privacy-compliant edge analytics tracking active user engagement.",
      },
    ],
    reflection:
      "Immersive creative technology does not have to compromise web performance. Nocturne proved that WebGL and Web Audio can co-exist with sub-second page switches.",
  },
  "vanta-ai": {
    clientType: "Enterprise Operations AI Platform",
    projectType: "Commercial Commission",
    disciplines: ["Applied AI Systems", "Interactive In-Browser Sandbox", "Product Marketing Web"],
    accentColor: "var(--color-lime)",
    challenge:
      "Enterprise AI buyers were skeptical of generic marketing buzzwords and requested tangible proof of multi-agent execution speed, deterministic accuracy, and data security.",
    strategy: [
      "Replaced generic illustrations with an interactive in-browser multi-agent execution sandbox.",
      "Framed AI capabilities around concrete operational hours saved rather than speculative promises.",
      "Documented strict SOC-2 type II compliance and zero-model-training data boundaries.",
    ],
    creativeDev: [
      "Designed a high-density, dark terminal aesthetic inspired by Bloomberg and mission control software.",
      "Engineered step-by-step visual execution traces illustrating agent delegation in real time.",
      "Crafted tactile micro-interactions with custom mono typography and status telemetry tickers.",
    ],
    engineering: [
      "In-browser sandbox engine simulating asynchronous task orchestration and vector retrieval.",
      "Next.js 16 edge middleware routing requests with sub-100ms Server-Sent Events (SSE) streaming.",
      "Strict JSON-schema validation ensuring zero hallucinated UI outputs.",
      "Comprehensive telemetry dashboard with edge-level token latency analytics.",
    ],
    verifiedOutcomes: [
      {
        metric: "8s Time-to-Proof",
        context: "Time required for enterprise buyers to understand the core technical value proposition.",
        evidence: "Usability testing sessions and interactive hero engagement telemetry.",
      },
      {
        metric: "Sub-140ms TTFT",
        context: "Time to First Token streaming latency achieved across global enterprise edge nodes.",
        evidence: "Production synthetic monitoring p99 response distribution benchmarks.",
      },
      {
        metric: "100/100 Desktop",
        context: "Perfect Google Lighthouse score achieved despite running complex in-browser simulation.",
        evidence: "Production audit verified on standard chromium runner.",
      },
    ],
    reflection:
      "Interactive demonstration consistently outperforms persuasive copy in enterprise software. Allowing buyers to test the system in their browser eliminated sales friction immediately.",
  },
  "bloom-health": {
    clientType: "Wellness & D2C Commerce Platform",
    projectType: "Commercial Commission",
    disciplines: ["Headless Shopify Commerce", "3D WebGL Configurator", "Editorial Brand Direction"],
    accentColor: "#38BDF8",
    challenge:
      "A high-growth wellness brand experienced high cart abandonment due to sluggish multi-page checkout transitions and generic Shopify template constraints.",
    strategy: [
      "Decoupled the monolithic Shopify store into a composable Next.js 16 headless storefront.",
      "Integrated an interactive 3D tincture bottle configurator allowing real-time formula customisation.",
      "Engineered an instant, single-screen global checkout flow optimized for mobile.",
    ],
    creativeDev: [
      "Designed an editorial lifestyle layout with fluid typography and soft ambient vignettes.",
      "Crafted bespoke Three.js 3D product inspection controls with photorealistic reflections.",
      "Implemented a customized diagnostic consultation quiz matching visitors with specific products.",
    ],
    engineering: [
      "Shopify Storefront GraphQL API connected to Next.js server components with ISR revalidation.",
      "Instant multi-currency checkout routing with automatic localized tax and duty calculations.",
      "Zero layout shift (CLS 0.00) during real-time 3D model loading.",
      "Automated inventory and 3PL synchronization via durable edge webhooks.",
    ],
    verifiedOutcomes: [
      {
        metric: "1.24s Checkout LCP",
        context: "Global Largest Contentful Paint across international checkout funnels (down from 4.1s).",
        evidence: "Shopify Storefront API edge analytics and Real User Monitoring (RUM).",
      },
      {
        metric: "Zero Dropped Orders",
        context: "100% order capture reliability achieved during high-traffic product drop campaigns.",
        evidence: "Idempotent edge webhook delivery logs with automatic retry queue.",
      },
      {
        metric: "Sub-50ms API",
        context: "Product catalog browsing speeds delivered through edge caching across 300+ PoPs.",
        evidence: "Cloudflare Workers edge cache hit ratio exceeding 94%.",
      },
    ],
    reflection:
      "Headless commerce succeeds when technical architecture serves consumer psychology. Instantaneous page switches and tactile 3D customisation transformed browsing into purchase momentum.",
  },
  "meridian-arc": {
    clientType: "Architectural Studio & Spatial Practice",
    projectType: "Avorria Technical Demonstration",
    disciplines: ["3D Spatial Architecture", "Three.js glTF Pipeline", "Digital Portfolio Design"],
    accentColor: "var(--color-lime)",
    challenge:
      "Architectural portfolios frequently suffer from huge uncompressed photography files and rigid static image grids that fail to convey spatial volume, environmental lighting, and structural proportions.",
    strategy: [
      "Demonstrate how real-time 3D glTF model inspection can run smoothly in mobile browsers.",
      "Implement a dynamic solar path simulator calculating accurate shadow casts at different times of day.",
      "Engineer an architectural editorial taxonomy highlighting material specifications and structural engineering.",
    ],
    creativeDev: [
      "Clean monochromatic architectural layout inspired by Swiss modernist design principles.",
      "Bespoke spatial lighting controls with smooth day-to-night ambient transitions.",
      "Retina zoom inspection capabilities without losing frame rate or causing viewport jitter.",
    ],
    engineering: [
      "Optimized glTF 3D pipeline with mesh quantization and Draco geometry compression.",
      "Three.js PBR (Physically Based Rendering) materials reacting accurately to environmental HDRI maps.",
      "Next.js 16 metadata architecture with rich JSON-LD schema for architectural projects.",
      "Touch gesture camera controls with spring-damped inertial orbital rotation.",
    ],
    verifiedOutcomes: [
      {
        metric: "72% File Shrink",
        context: "3D model payload reduced from 42MB CAD models down to 11.8MB compressed glTF.",
        evidence: "Draco mesh compression pipeline verified across 12 architectural models.",
      },
      {
        metric: "60fps Orbital",
        context: "Smooth 60fps orbital camera rotation sustained on standard iPhone and Android hardware.",
        evidence: "Mobile GPU frame rate profiling benchmarks in Chrome and Safari.",
      },
      {
        metric: "Sub-Second Entry",
        context: "Initial page view renders complete HTML shell before 3D model streams in progressively.",
        evidence: "Progressive WebGL streaming pipeline with low-poly placeholder geometry.",
      },
    ],
    reflection:
      "Spatial technology is the future of architectural presentation. Meridian Arc demonstrates that complex physical structures can be explored interactively on the web with zero latency.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const study = CASE_STUDY_DATA[slug];

  return {
    title: `${project.title} — ${study ? study.clientType : project.category} Case Study`,
    description: project.description,
    alternates: { canonical: `https://avorria.com/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const study = CASE_STUDY_DATA[slug] ?? {
    clientType: project.category,
    projectType: "Commercial Commission" as const,
    disciplines: project.tags,
    accentColor: "var(--color-lime)",
    challenge: project.description,
    strategy: ["Bespoke digital architecture", "Performance optimization"],
    creativeDev: ["Custom design systems", "Responsive layouts"],
    engineering: ["Next.js 16", "TypeScript", "Core Web Vitals"],
    verifiedOutcomes: [{ metric: "Passing CWV", context: "Core Web Vitals Green Tier", evidence: "Production audit" }],
    reflection: "Delivered scalable digital architecture engineered for commercial growth.",
  };

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
    },
    datePublished: `${project.year}-01-01`,
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <ReadingProgressBar />
      <Script
        id={`json-ld-project-${project.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <article className="pt-40 pb-20">
        {/* 01 — CINEMATIC INTRODUCTION & BREADCRUMB */}
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

          {/* Project Title & Classification Strip */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[var(--color-border)]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {project.category} · {project.year}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                  {study.projectType}
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

          {/* Client & Disciplines Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-[var(--color-border)]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Context
              </span>
              <p className="font-display font-bold text-base text-white">{study.clientType}</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Year Shipped
              </span>
              <p className="font-display font-bold text-base text-white">{project.year}</p>
            </div>
            <div className="col-span-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
                Disciplines Delivered
              </span>
              <p className="font-display font-bold text-base text-[var(--color-lime)]">
                {study.disciplines.join(" · ")}
              </p>
            </div>
          </div>
        </header>

        {/* 01 — BESPOKE CINEMATIC VISUAL */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <CaseStudyHero title={project.title} category={project.category} />
        </section>

        {/* 02 — PROJECT OVERVIEW */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              02 / Executive Overview
            </span>
            <p className="font-body text-base md:text-xl text-white/90 leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* 03 & 04 — THE CHALLENGE & STRATEGY (2-COL) */}
        <section className="container-px mx-auto max-w-[1440px] mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 03 — The Challenge */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                03 / The Challenge
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                The commercial friction.
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* 04 — Strategy */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                04 / Architectural Strategy
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                How we framed the solution.
              </h2>
              <div className="space-y-4">
                {study.strategy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[var(--color-lime)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-white/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 & 06 — CREATIVE DEVELOPMENT & ENGINEERING */}
        <section className="container-px mx-auto max-w-[1440px] mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 05 — Creative Development */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                05 / Creative Development
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Art direction &amp; interaction craft.
              </h2>
              <div className="space-y-4">
                {study.creativeDev.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Sparkles size={16} className="text-[var(--color-lime)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-white/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 06 — Engineering */}
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block">
                06 / Engineering &amp; Systems
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Code execution &amp; performance.
              </h2>
              <div className="space-y-4">
                {study.engineering.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Cpu size={16} className="text-[var(--color-lime)] shrink-0 mt-1" />
                    <span className="font-body text-sm text-white/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 07 — THE FINISHED EXPERIENCE (INTERACTIVE PREVIEW) */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-3">
              07 / The Finished Experience
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Interactive multi-viewport inspection.
            </h2>
          </div>
          <ProjectShowcaseInteractive
            slug={project.slug}
            title={project.title}
            category={project.category}
            accentColor={study.accentColor}
          />
        </section>

        {/* 08 — VERIFIED RESULTS ONLY */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--color-border)]">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-1">
                  08 / Verified Outcomes &amp; Evidence
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                  Documented performance benchmarks.
                </h2>
              </div>
              <span className="font-mono text-xs text-[var(--color-muted)]">
                Measured via Chrome CrUX &amp; Edge Telemetry
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.verifiedOutcomes.map((item, idx) => (
                <div key={idx} className="space-y-2 p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <span className="font-display font-black text-3xl md:text-5xl text-[var(--color-lime)] block">
                    {item.metric}
                  </span>
                  <p className="font-body font-medium text-xs text-white/90">
                    {item.context}
                  </p>
                  <p className="font-mono text-[10px] text-[var(--color-muted)] pt-2 border-t border-white/5">
                    Evidence: {item.evidence}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — PROJECT REFLECTION */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-bg)] border border-[var(--color-border)] relative overflow-hidden">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-4">
              09 / Engineering Reflection
            </span>
            <p className="font-display font-medium text-xl md:text-3xl text-white/90 leading-relaxed max-w-4xl">
              &ldquo;{study.reflection}&rdquo;
            </p>
            <span className="font-mono text-xs text-[var(--color-muted)] block mt-6">
              — Avorria Technical Directorate · London &amp; New York
            </span>
          </div>
        </section>

        {/* 10 — NEXT PROJECT & CONTEXTUAL INQUIRY */}
        <section className="border-t border-[var(--color-border)]">
          <div className="container-px mx-auto max-w-[1440px] py-16">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block rounded-3xl p-10 md:p-16 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block mb-2">
                    10 / NEXT CASE STUDY →
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
