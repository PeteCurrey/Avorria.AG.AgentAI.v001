import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";
import CTA from "@/components/CTA";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProjectShowcaseInteractive from "@/components/ProjectShowcaseInteractive";

// Bespoke Demonstrations
import AxiomDemonstration from "@/components/case-studies/AxiomDemonstration";
import NocturneDemonstration from "@/components/case-studies/NocturneDemonstration";
import VantaDemonstration from "@/components/case-studies/VantaDemonstration";
import BloomDemonstration from "@/components/case-studies/BloomDemonstration";
import MeridianDemonstration from "@/components/case-studies/MeridianDemonstration";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface CaseStudyContent {
  clientType: string;
  projectType: "Commercial Commission" | "Avorria Technical Demonstration";
  disciplines: string[];
  accentColor: string;
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  strategy: string[];
  creativeDirection: string;
  designExploration: string[];
  engineering: string[];
  verifiedOutcomes: Array<{ metric: string; context: string; evidence: string }>;
  reflection: string;
  relatedCapabilities: Array<{ title: string; href: string; desc: string }>;
}

const CASE_STUDY_DATA: Record<string, CaseStudyContent> = {
  "axiom-finance": {
    clientType: "Fintech & Wealth Platform Partner",
    projectType: "Commercial Commission",
    disciplines: ["Next.js 16 Web Architecture", "Three.js Spatial Graphics", "Fintech Design System", "High-Throughput Yield Simulation"],
    accentColor: "#3657E8",
    heroImage: "/imagery/projects/axiom-finance.webp",
    galleryImages: ["/imagery/services/web-dev-flagship.jpg", "/imagery/editorial/creative-technologist.webp"],
    challenge:
      "A fast-growing wealth technology platform was struggling with a bloated legacy web stack. Mobile page load times exceeded 3.8 seconds, and institutional investors encountered severe UI friction during account creation and multi-asset onboarding.",
    strategy: [
      "Deconstructed the legacy monolithic application into modular Next.js 16 edge server components.",
      "Established an architectural glass aesthetic combining deep charcoal, pure white surfaces, and cobalt focus states.",
      "Engineered an interactive 60fps WebGL particle lattice to convey institutional authority without degrading mobile battery.",
    ],
    creativeDirection:
      "Modern financial architecture meets understated luxury. The visual identity draws inspiration from high-grade architectural glass structures, precision trading floors, and clean numerical typography. We paired razor-sharp card surfaces with cobalt telemetry accents and fluid spring animations.",
    designExploration: [
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
    relatedCapabilities: [
      { title: "Performance Web Design", href: "/services/build", desc: "Sub-second flagship architectures engineered for conversion." },
      { title: "3D & WebGL Experiences", href: "/services", desc: "Hardware-accelerated 60fps canvas graphics." },
      { title: "Systems Integration", href: "/services/systems", desc: "Zero-latency edge APIs and resilient headless pipelines." },
    ],
  },
  "nocturne-studio": {
    clientType: "Spatial Audio & Sound Engineering Studio",
    projectType: "Commercial Commission",
    disciplines: ["Brand Strategy & 3D", "Kinetic Motion System", "Sound-Reactive WebGL", "Acoustic Identity"],
    accentColor: "#A78BFA",
    heroImage: "/imagery/projects/nocturne-studio.webp",
    galleryImages: ["/imagery/brand/spatial-audio-motion.jpg", "/imagery/editorial/kinetic-mesh.webp"],
    challenge:
      "An avant-garde audio studio needed a digital flagship that matched the spatial fidelity of their acoustic mastering suites without degrading load speeds or battery life on mobile devices.",
    strategy: [
      "Treated sound not as decorative background music, but as an interactive visual input for WebGL shaders.",
      "Built an austere, editorial portfolio hierarchy centered around monumental typographic scales.",
      "Engineered a resilient audio analysis bridge compatible with Safari, iOS, and Chrome.",
    ],
    creativeDirection:
      "Sound-reactive artwork meets cinematic music studio. The visual world is defined by deep obsidian dark surfaces, sculptural frequency ribbons, and kinetic waveforms. The palette relies on deep graphite, atmospheric violet gradients, and chrome highlights to evoke late-night acoustic mastering.",
    designExploration: [
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
    relatedCapabilities: [
      { title: "Brand Identity & Motion", href: "/services", desc: "Full-spectrum kinetic design systems and typography." },
      { title: "3D & WebGL Shaders", href: "/services", desc: "Sound-reactive and interactive GLSL canvases." },
      { title: "Creative Direction", href: "/services", desc: "End-to-end cinematic narratives for creative flagships." },
    ],
  },
  "vanta-ai": {
    clientType: "Enterprise Operations AI Platform",
    projectType: "Commercial Commission",
    disciplines: ["Applied AI Systems", "Interactive In-Browser Sandbox", "Product Marketing Web", "Multi-Agent Architecture"],
    accentColor: "#10B981",
    heroImage: "/imagery/projects/vanta-ai.webp",
    galleryImages: ["/imagery/services/ai-orchestration.jpg", "/imagery/editorial/studio-culture.webp"],
    challenge:
      "Enterprise AI buyers were skeptical of generic marketing buzzwords and requested tangible proof of multi-agent execution speed, deterministic accuracy, and data security boundaries.",
    strategy: [
      "Replaced generic illustrations with an interactive in-browser multi-agent execution sandbox.",
      "Framed AI capabilities around concrete operational hours saved rather than speculative promises.",
      "Documented strict SOC-2 type II compliance and zero-model-training data boundaries.",
    ],
    creativeDirection:
      "Enterprise intelligence meets mission-critical command centers. We developed a high-density, dark terminal design language inspired by aerospace telemetry and high-frequency trading terminals. Sharp borders, monospaced diagnostic counters, and emerald status signals convey rigor and precision.",
    designExploration: [
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
    relatedCapabilities: [
      { title: "Autonomous AI Agents", href: "/services/ai", desc: "Production multi-agent grids and deterministic reasoning." },
      { title: "Enterprise Systems", href: "/services/systems", desc: "SOC-2 compliant edge pipelines with zero data leakage." },
      { title: "Interactive Sandboxes", href: "/lab", desc: "In-browser live product simulations that convert." },
    ],
  },
  "bloom-health": {
    clientType: "Wellness & D2C Commerce Platform",
    projectType: "Commercial Commission",
    disciplines: ["Headless Shopify Commerce", "3D WebGL Configurator", "Editorial Brand Direction", "Sub-Second Checkout"],
    accentColor: "#E77B68",
    heroImage: "/imagery/projects/bloom-health.webp",
    galleryImages: ["/imagery/services/luxury-ecommerce.jpg", "/imagery/editorial/studio-culture.webp"],
    challenge:
      "A high-growth botanical wellness brand experienced high cart abandonment due to sluggish multi-page checkout transitions and cookie-cutter Shopify template constraints.",
    strategy: [
      "Decoupled the monolithic Shopify store into a composable Next.js 16 headless storefront.",
      "Integrated an interactive 3D tincture bottle configurator allowing real-time formula customisation.",
      "Engineered an instant, single-screen global checkout flow optimized for mobile.",
    ],
    creativeDirection:
      "Botanical product photography meets luxury editorial commerce. We paired soft warm porcelain canvases with apothecary amber glass and matte obsidian packaging. The aesthetic balances scientific precision with tactile natural beauty, using soft coral accents and fluid typography.",
    designExploration: [
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
    relatedCapabilities: [
      { title: "Headless E-Commerce", href: "/services/build", desc: "Sub-second Shopify storefronts with bespoke 3D configurators." },
      { title: "Editorial Brand Direction", href: "/services", desc: "Sensory visual storytelling for luxury D2C brands." },
      { title: "Core Web Vitals Optimization", href: "/services/search", desc: "Zero layout shift (CLS 0.00) checkout funnels." },
    ],
  },
  "meridian-arc": {
    clientType: "Architectural Studio & Spatial Practice",
    projectType: "Avorria Technical Demonstration",
    disciplines: ["3D Spatial Architecture", "Three.js glTF Pipeline", "Digital Portfolio Design", "Solar Path Simulation"],
    accentColor: "#F59E0B",
    heroImage: "/imagery/projects/meridian-arc.webp",
    galleryImages: ["/imagery/services/architectural-cgi.jpg", "/imagery/brand/signature-monolith.jpg"],
    challenge:
      "Architectural portfolios frequently suffer from 50MB uncompressed photography files and rigid static image grids that fail to convey spatial volume, environmental lighting, and structural proportions.",
    strategy: [
      "Demonstrate how real-time 3D glTF model inspection can run smoothly at 60fps in mobile browsers.",
      "Implement a dynamic solar path simulator calculating accurate shadow casts at different times of day.",
      "Engineer an architectural editorial taxonomy highlighting material specifications and structural engineering.",
    ],
    creativeDirection:
      "Photorealistic architectural CGI meets Swiss modernist editorial design. Monolithic travertine slabs, cantilevered glass pavilions, and cast bronze louvers are rendered with tactile PBR lighting. The palette combines warm stone, charcoal, and warm amber sunlight.",
    designExploration: [
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
      "Spatial technology is the future of architectural presentation. Meridian Arc proves that complex physical structures can be explored interactively on the web with zero latency.",
    relatedCapabilities: [
      { title: "3D & WebGL Visualization", href: "/services", desc: "PBR materials and compressed glTF pipelines for the web." },
      { title: "Architectural Editorial", href: "/services/build", desc: "Swiss modernist layouts for spatial and luxury practices." },
      { title: "WebGL Performance Engineering", href: "/lab", desc: "Battery-conserving 60fps hardware acceleration." },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const study = CASE_STUDY_DATA[slug];

  return {
    title: `${project.title} — ${study ? study.clientType : project.category} Case Study | Avorria`,
    description: project.description,
    alternates: { canonical: `https://avorria.com/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const study = CASE_STUDY_DATA[slug] ?? CASE_STUDY_DATA["axiom-finance"];

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
    <div className="bg-[#F7F7F5] min-h-screen">
      <ReadingProgressBar />
      <Script
        id={`json-ld-project-${project.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <article className="pt-36 md:pt-44 pb-20">
        {/* ── 01. CINEMATIC INTRODUCTION & BREADCRUMB ── */}
        <header className="container-px mx-auto max-w-[1440px] mb-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E7179]">
              <li>
                <Link href="/" className="hover:text-[#15171B] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/work" className="hover:text-[#15171B] transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#3657E8] font-bold" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Project Title & Classification Strip */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#15171B]/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3657E8]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#6E7179]">
                  {project.category} · {project.year}
                </span>
                <span
                  className={`px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                    study.projectType === "Commercial Commission"
                      ? "bg-[#3657E8]/10 text-[#3657E8] border-[#3657E8]/20"
                      : "bg-amber-500/10 text-amber-700 border-amber-500/20"
                  }`}
                >
                  {study.projectType}
                </span>
              </div>

              <h1 className="font-display font-black text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-[#15171B] uppercase">
                {project.title}
              </h1>

              <p className="font-body text-lg md:text-2xl text-[#6E7179] max-w-3xl mt-6 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site for ${project.title}`}
                className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3657E8] text-white font-display font-bold text-sm hover:bg-[#2544CC] transition-colors duration-200 shadow-xl shadow-[#3657E8]/20"
              >
                VISIT LIVE SITE
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>

          {/* Client & Disciplines Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-[#15171B]/10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E7179] block mb-1">
                Context &amp; Partner
              </span>
              <p className="font-display font-bold text-base text-[#15171B]">{study.clientType}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E7179] block mb-1">
                Release Timeline
              </span>
              <p className="font-display font-bold text-base text-[#15171B]">{project.year} Production</p>
            </div>
            <div className="col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E7179] block mb-1">
                Disciplines Delivered
              </span>
              <p className="font-display font-bold text-base text-[#3657E8]">
                {study.disciplines.join(" · ")}
              </p>
            </div>
          </div>
        </header>

        {/* ── 01. BESPOKE CINEMATIC HERO SHOWCASE ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <CaseStudyHero title={project.title} category={project.category} image={study.heroImage} />
        </section>

        {/* ── 02. PROJECT OVERVIEW ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#15171B]/10 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block mb-4 font-bold">
              02 / Executive Overview
            </span>
            <p className="font-body text-lg md:text-2xl text-[#15171B] leading-relaxed max-w-4xl font-normal">
              {project.description}
            </p>
          </div>
        </section>

        {/* ── 03 & 04. THE CHALLENGE & STRATEGY (2-COL) ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* 03 — The Challenge */}
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#15171B]/10 shadow-sm space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block font-bold">
                03 / The Commercial Challenge
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#15171B]">
                The friction in the market.
              </h2>
              <p className="font-body text-base text-[#6E7179] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* 04 — Architectural Strategy */}
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#15171B]/10 shadow-sm space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block font-bold">
                04 / Architectural Strategy
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#15171B]">
                How we engineered the answer.
              </h2>
              <div className="space-y-4">
                {study.strategy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#3657E8] shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-[#15171B]/90 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 & 05. CREATIVE DIRECTION & DESIGN EXPLORATION ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-20">
          <div className="p-8 md:p-12 rounded-3xl bg-[#15171B] text-white border border-white/10 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block font-bold">
                05 / Creative Direction &amp; Brand Aesthetics
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
                Bespoke art direction tailored to {project.title}.
              </h2>
              <p className="font-body text-base text-white/80 leading-relaxed pt-2">
                {study.creativeDirection}
              </p>
            </div>

            {/* Design Exploration Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {study.designExploration.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <span className="font-mono text-xs font-bold text-[#3657E8] block">
                    Phase 0{idx + 1}
                  </span>
                  <p className="font-body text-xs text-white/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06. TECHNICAL DEVELOPMENT & ENGINEERING ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#15171B]/10 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#15171B]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block mb-2 font-bold">
                  06 / Technical Development
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#15171B]">
                  Next.js 16 &amp; Systems Engineering
                </h2>
              </div>
              <span className="font-mono text-xs text-[#6E7179]">
                Core Web Vitals Pass Guaranteed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.engineering.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F7F5] border border-[#15171B]/10">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#15171B]/10 text-[#3657E8]">
                    <Cpu size={16} />
                  </div>
                  <p className="font-body text-sm text-[#15171B] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07. FINISHED VISUAL SHOWCASE (MULTI-VIEWPORT INSPECTION) ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-24">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block mb-2 font-bold">
              07 / Finished Visual Experience
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#15171B]">
              Multi-viewport inspection &amp; simulation.
            </h2>
          </div>

          <ProjectShowcaseInteractive
            slug={project.slug}
            title={project.title}
            category={project.category}
            accentColor={study.accentColor}
          />
        </section>

        {/* ── 08. DEMONSTRABLE FUNCTIONALITY (BESPOKE INTERACTIVE EXPERIENCE) ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3657E8] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] font-bold">
                08 / Demonstrable Functionality
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#15171B] tracking-tight">
              Test the live product experience.
            </h2>
            <p className="font-body text-base text-[#6E7179] max-w-2xl mt-2">
              Every Avorria build includes functional interactive architecture. Interact with the live sandbox below.
            </p>
          </div>

          {/* Render the bespoke demonstrable component */}
          {slug === "axiom-finance" && <AxiomDemonstration />}
          {slug === "nocturne-studio" && <NocturneDemonstration />}
          {slug === "vanta-ai" && <VantaDemonstration />}
          {slug === "bloom-health" && <BloomDemonstration />}
          {slug === "meridian-arc" && <MeridianDemonstration />}
        </section>

        {/* ── 09. VERIFIED OUTCOMES & EVIDENCE ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#15171B]/10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#15171B]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block mb-1 font-bold">
                  09 / Documented Outcomes &amp; Benchmarks
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#15171B]">
                  Verifiable technical evidence.
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#6E7179] bg-[#F7F7F5] px-4 py-2 rounded-full border border-[#15171B]/10">
                <ShieldCheck size={14} className="text-[#3657E8]" />
                <span>
                  {study.projectType === "Commercial Commission"
                    ? "Verified via Chrome CrUX & Edge Telemetry"
                    : "Avorria Lab Benchmark Validation"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.verifiedOutcomes.map((item, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-[#F7F7F5] border border-[#15171B]/10">
                  <span className="font-display font-black text-4xl md:text-5xl text-[#3657E8] block tracking-tight">
                    {item.metric}
                  </span>
                  <p className="font-body font-semibold text-xs text-[#15171B]">
                    {item.context}
                  </p>
                  <p className="font-mono text-[10px] text-[#6E7179] pt-2 border-t border-[#15171B]/10">
                    Source: {item.evidence}
                  </p>
                </div>
              ))}
            </div>

            {/* Credibility statement */}
            <div className="mt-8 pt-6 border-t border-[#15171B]/10 text-xs font-mono text-[#6E7179] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3657E8]" />
              <span>
                {study.projectType === "Commercial Commission"
                  ? "All performance metrics reflect real-world production SLAs and real-user data."
                  : "Internal capability concept engineered to demonstrate bleeding-edge browser APIs."}
              </span>
            </div>
          </div>
        </section>

        {/* ── 10. RELATED CAPABILITIES ── */}
        <section className="container-px mx-auto max-w-[1440px] mb-28">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3657E8] block mb-2 font-bold">
              10 / Related Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl text-[#15171B]">
              Disciplines that delivered this project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.relatedCapabilities.map((cap, idx) => (
              <Link
                key={idx}
                href={cap.href}
                className="group p-6 rounded-2xl bg-white border border-[#15171B]/10 hover:border-[#3657E8] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-[#15171B] group-hover:text-[#3657E8] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="font-body text-xs text-[#6E7179] mt-2 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#15171B]/10 flex items-center justify-between text-xs font-mono font-bold text-[#3657E8]">
                  <span>Explore Capability</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 11. NEXT CASE STUDY & PROJECT ENQUIRY CTA ── */}
        <section className="border-t border-[#15171B]/10">
          <div className="container-px mx-auto max-w-[1440px] py-16">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block rounded-3xl p-10 md:p-16 bg-[#15171B] text-white border border-white/10 hover:border-[#3657E8] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#3657E8] block mb-2 font-bold">
                    11 / NEXT CASE STUDY →
                  </span>
                  <h3 className="font-display font-black text-3xl md:text-5xl text-white group-hover:text-[#3657E8] transition-colors duration-200">
                    {nextProject.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-white/70 mt-2">
                    {nextProject.tagline}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#3657E8] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-[#2544CC] transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </article>

      <CTA />
    </div>
  );
}
