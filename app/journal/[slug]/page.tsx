import type { Metadata } from "next";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Sparkles, Send, ArrowUpRight, BookOpen, Layers, Terminal } from "lucide-react";
import CTA from "@/components/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

interface ArticleDeepContent {
  intro: string;
  authorBio: string;
  updatedDate: string;
  tableOfContents: Array<{ title: string; anchor: string }>;
  sections: Array<{
    heading: string;
    anchor: string;
    body: string;
    takeaways: string[];
    technicalSnippet?: { title: string; code: string };
  }>;
  relatedService: { title: string; href: string; reason: string };
  authoritativeSources: Array<{ name: string; url: string; context: string }>;
}

const DEEP_ARTICLES: Record<string, ArticleDeepContent> = {
  "why-performance-is-the-new-brand": {
    intro:
      "For decades, creative agencies treated web performance as a back-office DevOps ticket rather than a primary design variable. They built heavy, script-choked experiences that took four seconds to hydrate, rationalizing the friction as the 'price of luxury'. In modern commerce, latency is the ultimate brand pollutant.",
    authorBio: "Alex Reyes · Co-Founder & Technical Creative Director (London Studio)",
    updatedDate: "2026-10-12",
    tableOfContents: [
      { title: "1. The Cognitive Psychology of the 100ms Window", anchor: "psychology-100ms" },
      { title: "2. Real-World Benchmarks vs Manufactured Scores", anchor: "real-world-benchmarks" },
      { title: "3. Compositor-Only Choreography (Zero CLS)", anchor: "compositor-choreography" },
      { title: "4. Concrete Architectural Recommendations", anchor: "architectural-recommendations" },
    ],
    sections: [
      {
        heading: "1. The Cognitive Psychology of the 100ms Window",
        anchor: "psychology-100ms",
        body:
          "Human perception processes tactile response in under 100 milliseconds. When an interface takes 300ms to react, the user's subconscious registers friction. When it takes two seconds, brand reverence collapses. High-end brands like Apple, Porsche, and Hermès don't just sell aesthetics — they sell effortless precision. Your digital flagship should feel like sliding into a precision-engineered cockpit.",
        takeaways: [
          "Every 100ms delay in LCP reduces conversion by an average of 7% (Google Chromium Field Data).",
          "DPR capping at 2× reduces memory footprint by up to 55% without visible blur on retina screens.",
          "CSS-first token architecture eliminates megabytes of runtime styling JS.",
        ],
      },
      {
        heading: "2. Real-World Benchmarks vs Manufactured Scores",
        anchor: "real-world-benchmarks",
        body:
          "Lighthouse scores run on synthetic gigabit fiber rigs do not represent reality. Real-world performance must be measured through Chrome User Experience Report (CrUX) field data capturing real visitors on mobile devices with variable network latencies. Optimising for real users means reducing JavaScript bundle sizes, pre-rendering static server shells, and eliminating layout shifts.",
        takeaways: [
          "CrUX p75 field data reflects genuine commercial user experience.",
          "Eliminate third-party analytics tag congestion before running client campaigns.",
          "Preconnect to critical edge CDNs directly within HTML response headers.",
        ],
        technicalSnippet: {
          title: "Next.js 16 Preconnect Header Configuration",
          code: `// next.config.ts\nasync headers() {\n  return [{\n    source: '/(.*)',\n    headers: [\n      { key: 'Link', value: '<https://fonts.gstatic.com>; rel=preconnect; crossorigin=anonymous' },\n      { key: 'X-Content-Type-Options', value: 'nosniff' },\n    ],\n  }];\n}`,
        },
      },
      {
        heading: "3. Compositor-Only Choreography (Zero CLS)",
        anchor: "compositor-choreography",
        body:
          "If an animation touches top, left, width, or height properties, it triggers CPU geometry recalculations and repaints that cause dropped frames. At Avorria, we mandate that 100% of scroll and hover transitions operate strictly via CSS transform, opacity, and clip-path. This guarantees 60fps rendering even on low-power mobile hardware.",
        takeaways: [
          "Operate strictly on GPU compositor layers (transform & opacity).",
          "Use will-change: transform sparingly and only during active gesture interactions.",
          "Enforce hardware scroll passthroughs rather than hijacking native wheel physics.",
        ],
      },
      {
        heading: "4. Concrete Architectural Recommendations",
        anchor: "architectural-recommendations",
        body:
          "Adopt server components as your primary layout engine. Bundle CSS with zero-runtime compilers like Tailwind v4. Serve images strictly in AVIF format with explicit intrinsic aspect ratios. When these engineering constraints are treated as design parameters, the resulting web experience feels instantaneous, authoritative, and permanent.",
        takeaways: [
          "Server components reduce client-side JS payload by up to 60%.",
          "AVIF format cuts asset payload sizes by 40% compared to standard WebP.",
          "Design teams must review mobile 4G performance before signing off desktop mockups.",
        ],
      },
    ],
    relatedService: {
      title: "Website Design & Development",
      href: "/services/build",
      reason: "Explore our sub-second Next.js 16 and WebGL flagship engineering capabilities.",
    },
    authoritativeSources: [
      { name: "Google Chromium Core Web Vitals Documentation", url: "https://web.dev/vitals/", context: "Official LCP, CLS, and INP metrics specifications." },
      { name: "W3C Web Performance Working Group", url: "https://www.w3.org/webperf/", context: "Navigation Timing and Resource Timing standards." },
    ],
  },
  "building-ai-agents-that-actually-work": {
    intro:
      "Most enterprise AI initiatives are trapped in 'demo paralysis'. Teams spend substantial budgets on generic wrappers that hallucinate under real customer loads. Building autonomous agent systems that survive production demands rigorous software discipline, deterministic validation schemas, and human oversight gates.",
    authorBio: "Nadia Patel · Principal Systems & AI Engineer (London Studio)",
    updatedDate: "2026-10-20",
    tableOfContents: [
      { title: "1. The Fallacy of the Monolithic Agent", anchor: "monolithic-agent-fallacy" },
      { title: "2. Hybrid Vector & Lexical Retrieval", anchor: "hybrid-retrieval" },
      { title: "3. Deterministic Schemas & Guardrails", anchor: "deterministic-schemas" },
      { title: "4. Human-in-the-Loop Governance", anchor: "human-in-the-loop" },
    ],
    sections: [
      {
        heading: "1. The Fallacy of the Monolithic Agent",
        anchor: "monolithic-agent-fallacy",
        body:
          "Single-prompt generalist agents inevitably drift and hallucinate when given complex tool trees. The production pattern is a network of specialized micro-agents with deterministic handoffs. One agent extracts structured intent, another queries private vector indices, and a third synthesizes the response against strict corporate policy boundaries.",
        takeaways: [
          "Decompose multi-step tasks into isolated, single-responsibility workers.",
          "Implement deterministic validation schemas (Zod/Pydantic) between every agent hop.",
          "Log all token traces to evaluate regression across weekly sprint deployments.",
        ],
      },
      {
        heading: "2. Hybrid Vector & Lexical Retrieval",
        anchor: "hybrid-retrieval",
        body:
          "Naive RAG with generic embeddings fails as soon as enterprise documents contain tabular numbers, SKU codes, or domain jargon. We build hybrid search pipelines combining sparse lexical matching (BM25) with dense vector embeddings (Qdrant), reranked via cross-encoders before reaching context windows.",
        takeaways: [
          "Hybrid BM25 + dense retrieval eliminates semantic false positives on exact part numbers.",
          "Pre-chunk tables into self-contained markdown schemas before embedding.",
          "Partition tenant memory to guarantee strict zero-data-leakage across departments.",
        ],
        technicalSnippet: {
          title: "Deterministic Response Schema Guard",
          code: `import { z } from 'zod';\n\nexport const AgentResponseSchema = z.object({\n  intent: z.enum(['refund', 'support', 'escalate']),\n  confidence: z.number().min(0).max(1),\n  citations: z.array(z.string().url()),\n  requiresHumanSignoff: z.boolean(),\n  summary: z.string().max(280),\n});`,
        },
      },
      {
        heading: "3. Deterministic Schemas & Guardrails",
        anchor: "deterministic-schemas",
        body:
          "Consumer chatbots output unstructured natural language, which breaks API integrations. Production enterprise systems require strict JSON outputs validated at runtime. If an LLM response fails schema parsing, our fallback logic immediately routes the request to human review rather than executing corrupted parameters.",
        takeaways: [
          "Never execute database mutations directly from unvalidated LLM output.",
          "Use instructor or constrained sampling to enforce rigid JSON grammar.",
          "Implement automated regression test suites evaluating model outputs against golden datasets.",
        ],
      },
      {
        heading: "4. Human-in-the-Loop Governance",
        anchor: "human-in-the-loop",
        body:
          "The most successful automated workflows empower human operators rather than pretending they don't exist. By incorporating click-to-approve interfaces for high-value financial actions or edge-case customer disputes, companies capture 90% of the automation benefit while eliminating catastrophic liability.",
        takeaways: [
          "Flag actions above pre-agreed financial thresholds for mandatory staff confirmation.",
          "Provide one-click approval buttons directly within Slack, Teams, or CRM dashboards.",
          "Maintain end-to-end audit logs with full cryptographic provenance.",
        ],
      },
    ],
    relatedService: {
      title: "AI Development & Business Automation",
      href: "/services/ai",
      reason: "Learn how we build private, deterministic RAG pipelines and multi-agent workflows.",
    },
    authoritativeSources: [
      { name: "DSPy Framework Documentation", url: "https://dspy.ai", context: "Declarative programming for language models." },
      { name: "Qdrant Vector Database Research", url: "https://qdrant.tech/documentation/", context: "Sub-25ms vector search at enterprise scale." },
    ],
  },
  "the-craft-of-webgl-at-scale": {
    intro:
      "WebGL has a reputation for being brittle, battery-draining, and hostile to search engines. When engineered with architectural rigor, in-browser 3D transforms passive scrollers into passionate brand advocates without compromising Core Web Vitals.",
    authorBio: "Marcus Vance · Senior 3D & WebGL Systems Engineer (New York Studio)",
    updatedDate: "2026-09-28",
    tableOfContents: [
      { title: "1. GPU Lifecycles & Context Loss Recovery", anchor: "gpu-lifecycles" },
      { title: "2. Offscreen Pause & Battery Conservation", anchor: "offscreen-pause" },
      { title: "3. SEO & Semantic Accessibility Under 3D", anchor: "seo-accessibility-3d" },
      { title: "4. Geometry Compression (Draco & Meshopt)", anchor: "geometry-compression" },
    ],
    sections: [
      {
        heading: "1. GPU Lifecycles & Context Loss Recovery",
        anchor: "gpu-lifecycles",
        body:
          "Browsers drop WebGL contexts when mobile devices experience memory pressure or switch tabs. A resilient 3D implementation must listen for the 'webglcontextlost' event, prevent default browser aborts, and reconstruct shaders and vertex buffers cleanly when the context restores.",
        takeaways: [
          "Always attach webglcontextlost and webglcontextrestored event handlers.",
          "Cache geometry data in CPU memory to allow instant rehydration without re-fetching network files.",
          "Provide a graceful static CSS fallback if hardware context creation fails.",
        ],
        technicalSnippet: {
          title: "WebGL Context Loss Handler Pattern",
          code: `canvas.addEventListener('webglcontextlost', (e) => {\n  e.preventDefault();\n  console.warn('WebGL context lost — pausing render loop');\n  cancelAnimationFrame(animationFrameId);\n}, false);\n\ncanvas.addEventListener('webglcontextrestored', () => {\n  console.info('WebGL context restored — rebuilding scene');\n  initRenderer();\n}, false);`,
        },
      },
      {
        heading: "2. Offscreen Pause & Battery Conservation",
        anchor: "offscreen-pause",
        body:
          "Running continuous 60fps requestAnimationFrame loops when a 3D canvas is scrolled out of the active viewport burns device battery and throttles CPU cycles. Using IntersectionObserver to pause rendering loops when canvases leave the screen is a non-negotiable standard.",
        takeaways: [
          "Pause RAF loops immediately when canvas intersection ratio drops to 0.0.",
          "Disable mousemove and touch listener calculations when canvas is offscreen.",
          "Render a single static frame when prefers-reduced-motion is detected.",
        ],
      },
      {
        heading: "3. SEO & Semantic Accessibility Under 3D",
        anchor: "seo-accessibility-3d",
        body:
          "Search engine crawlers cannot parse pixel buffers inside an HTML canvas. We place interactive 3D visualizers over semantic server-rendered HTML trees. Googlebot indexes clean typography and structured JSON-LD schema, while human visitors experience spatial immersion.",
        takeaways: [
          "Never render critical body copy solely inside a WebGL canvas.",
          "Provide accessible keyboard shortcuts to manipulate interactive 3D objects.",
          "Serve semantic schema.org markup mirroring product specifications.",
        ],
      },
      {
        heading: "4. Geometry Compression (Draco & Meshopt)",
        anchor: "geometry-compression",
        body:
          "Uncompressed CAD files can easily reach 50MB+, crippling mobile load times. Applying Draco mesh compression and texture quantization reduces 3D asset payloads by up to 75% without perceptible loss in visual fidelity.",
        takeaways: [
          "Quantize vertex attributes to 16-bit floats for mobile efficiency.",
          "Use KTX2/Basis Universal textures to decode directly into GPU memory.",
          "Implement progressive LOD (Level of Detail) mesh loading for low-bandwidth users.",
        ],
      },
    ],
    relatedService: {
      title: "Website Design & Development",
      href: "/services/build",
      reason: "Explore how we engineer custom 60fps Three.js WebGL canvases for digital flagships.",
    },
    authoritativeSources: [
      { name: "Khronos Group WebGL Specification", url: "https://www.khronos.org/webgl/", context: "Industry standards for hardware-accelerated browser 3D." },
      { name: "Three.js Official Documentation", url: "https://threejs.org/docs/", context: "Core graphics engine architecture and shader standards." },
    ],
  },
  "dark-luxury-design-language": {
    intro:
      "True dark luxury is not merely swapping `#ffffff` for `#000000`. It is the calculated art of illumination: sculpted shadows, subtle panel elevations, neon micro-accents, and generous typographic breathing room that commands authority.",
    authorBio: "Sam Chen · Lead Systems Architect & Co-Founder (New York Studio)",
    updatedDate: "2026-10-05",
    tableOfContents: [
      { title: "1. The 8-Layer Elevation Architecture", anchor: "elevation-architecture" },
      { title: "2. Typographic Contrast in Shadows", anchor: "typographic-contrast" },
      { title: "3. The Neon Micro-Accent Discipline", anchor: "neon-accents" },
      { title: "4. Tactile Spring Physics & Friction", anchor: "spring-physics" },
    ],
    sections: [
      {
        heading: "1. The 8-Layer Elevation Architecture",
        anchor: "elevation-architecture",
        body:
          "Pure pitch black (#000000) causes visual fatigue and harsh contrast edges. We anchor our palette at deep obsidian (#07070A), layering elevated card panels at #0E0E14 with subtle 8% white borders. This creates optical depth that guides the eye naturally toward primary action triggers.",
        takeaways: [
          "Base background at #07070A; elevated interactive panels at #0E0E14.",
          "Use subtle 1px border lines with 8% opacity to delineate spatial layers.",
          "Layer soft radial vignettes behind primary headlines to create atmospheric focus.",
        ],
      },
      {
        heading: "2. Typographic Contrast in Shadows",
        anchor: "typographic-contrast",
        body:
          "Display typography on dark backdrops demands deliberate weight and tracking. We pair the geometric assertiveness of Work Sans Extra Light with hyper-legible body rhythms, maintaining tight line-heights and negative letter-spacing for that distinctive editorial silhouette.",
        takeaways: [
          "Tight display tracking (-0.03em) prevents display type from feeling loose.",
          "Use 60% opacity muted gray (#8E8E9A) for secondary body copy to prevent harsh contrast glare.",
          "Ensure body text meets WCAG AA 4.5:1 contrast ratios against dark backgrounds.",
        ],
      },
      {
        heading: "3. The Neon Micro-Accent Discipline",
        anchor: "neon-accents",
        body:
          "Vibrant accent colors like chartreuse lime (#D6FF3F) must be deployed with extreme restraint. When an entire interface glows green, nothing stands out. When used strictly for key conversion buttons, active radio indicators, and focal data metrics, the eye is drawn with magnetic precision.",
        takeaways: [
          "Reserve high-frequency lime for primary calls to action and live status indicators.",
          "Pair lime accents with understated silver and platinum gradient text.",
          "Avoid multi-colored rainbow gradients that dilute brand seriousness.",
        ],
      },
      {
        heading: "4. Tactile Spring Physics & Friction",
        anchor: "spring-physics",
        body:
          "Luxury physical objects possess weight and inertia. Digital buttons should feel the same. We calibrate Framer Motion spring physics with high stiffness and balanced damping, ensuring interactions snap into place with satisfying, tactile resistance.",
        takeaways: [
          "Spring configuration: stiffness 260, damping 20, mass 0.18 for tactile magnetic pull.",
          "Screen out magnetic hover calculations on touch screens to prevent mobile scroll lag.",
          "Always provide immediate CSS active states as zero-delay fallbacks.",
        ],
      },
    ],
    relatedService: {
      title: "Digital Systems & Integrations",
      href: "/services/systems",
      reason: "Explore our architectural design systems and cohesive brand token architectures.",
    },
    authoritativeSources: [
      { name: "Web Content Accessibility Guidelines (WCAG) 2.1", url: "https://www.w3.org/TR/WCAG21/", context: "Color contrast and accessible design specifications." },
      { name: "Framer Motion API Reference", url: "https://www.framer.com/motion/", context: "Spring physics and layout animation standards." },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const article = DEEP_ARTICLES[slug];
  const url = `https://avorria.com/journal/${post.slug}`;
  const description = post.excerpt.slice(0, 155);

  return {
    title: `${post.title} — Playbook`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | Avorria Journal`,
      description,
      publishedTime: `${post.date}T09:00:00Z`,
      modifiedTime: article ? `${article.updatedDate}T09:00:00Z` : `${post.date}T09:00:00Z`,
      authors: [article ? article.authorBio : "Avorria Technical Directorate"],
      section: post.category,
      images: [{ url: post.cover ?? "/og.jpg", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const article = DEEP_ARTICLES[slug] ?? {
    intro: post.excerpt,
    authorBio: "Avorria Technical Directorate · London & New York",
    updatedDate: post.date,
    tableOfContents: [],
    sections: [
      {
        heading: "1. Core Principles",
        anchor: "core-principles",
        body: post.excerpt,
        takeaways: ["Deploy clean architecture", "Measure real users", "Iterate continuously"],
      },
    ],
    relatedService: { title: "Capabilities", href: "/services", reason: "Explore our services." },
    authoritativeSources: [],
  };

  const canonicalUrl = `https://avorria.com/journal/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: canonicalUrl,
    datePublished: `${post.date}T09:00:00Z`,
    dateModified: `${article.updatedDate}T09:00:00Z`,
    author: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
      logo: { "@type": "ImageObject", url: "https://avorria.com/logo.png" },
    },
    image: post.cover ?? "https://avorria.com/og.jpg",
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  return (
    <>
      <Script
        id={`json-ld-article-${post.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pt-40 pb-24">
        {/* ── Breadcrumb & Article Header ── */}
        <header className="container-px mx-auto max-w-[920px] mb-12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-white transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} />
            Back to all playbooks
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[var(--color-lime)] text-[var(--color-bg)] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-muted)]">
              <Clock size={13} />
              {post.readTime} min read
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-muted)]">
              <Calendar size={13} />
              Published: {post.date} · Updated: {article.updatedDate}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-white uppercase mb-8">
            {post.title}
          </h1>

          {/* Author Attribution Card */}
          <div className="p-4 rounded-xl bg-[var(--color-panel)] border border-[var(--color-border)] mb-8 flex items-center justify-between text-xs font-mono">
            <span className="text-white/90">Author: {article.authorBio}</span>
            <span className="text-[var(--color-lime)]">Avorria Technical Directorate</span>
          </div>

          <p className="font-body text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed border-l-2 border-[var(--color-lime)] pl-6">
            {article.intro}
          </p>
        </header>

        {/* ── Table of Contents ── */}
        {article.tableOfContents.length > 0 && (
          <section className="container-px mx-auto max-w-[920px] mb-14">
            <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block font-semibold">
                Table of Contents
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-body">
                {article.tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.anchor}`}
                    className="text-white/80 hover:text-[var(--color-lime)] transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono text-xs text-[var(--color-muted)]">{idx + 1}.</span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Body Content Sections with Technical Snippets ── */}
        <div className="container-px mx-auto max-w-[920px] space-y-16">
          {article.sections.map((sec, idx) => (
            <section key={idx} id={sec.anchor} className="space-y-6 scroll-mt-28">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                {sec.heading}
              </h2>

              <p className="font-body text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
                {sec.body}
              </p>

              {/* Technical Code Snippet (if available) */}
              {sec.technicalSnippet && (
                <div className="rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] p-5 overflow-hidden font-mono text-xs text-white/90 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[10px] text-[var(--color-muted)]">
                    <span>{sec.technicalSnippet.title}</span>
                    <span className="text-[var(--color-lime)]">TypeScript / Config</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-white/80">
                    {sec.technicalSnippet.code}
                  </pre>
                </div>
              )}

              {/* Takeaway Highlights Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] block mb-2 font-semibold">
                  Field Takeaways
                </span>
                {sec.takeaways.map((item, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 text-sm font-body text-white/90">
                    <CheckCircle2 size={16} className="text-[var(--color-lime)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* ── Relevant Service & Authoritative Sources ── */}
          <section className="pt-12 border-t border-[var(--color-border)] grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Related Service Link */}
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-lime)] block">
                Related Capability
              </span>
              <h3 className="font-display font-semibold text-xl text-white">
                {article.relatedService.title}
              </h3>
              <p className="font-body text-xs text-[var(--color-muted)]">
                {article.relatedService.reason}
              </p>
              <Link
                href={article.relatedService.href}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--color-lime)] hover:text-white transition-colors pt-2"
              >
                <span>Explore Service Details</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Authoritative External References */}
            <div className="p-6 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border)] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block">
                Authoritative Sources &amp; Specs
              </span>
              <div className="space-y-2.5">
                {article.authoritativeSources.map((source, sIdx) => (
                  <a
                    key={sIdx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono text-white group-hover:text-[var(--color-lime)] transition-colors">
                      <span>{source.name}</span>
                      <ArrowUpRight size={11} className="text-[var(--color-muted)]" />
                    </div>
                    <span className="font-body text-[11px] text-[var(--color-muted)] block mt-0.5">
                      {source.context}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── Contextual Inquiry Form ── */}
          <section className="pt-8 border-t border-[var(--color-border)]">
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-lime)]/40 shadow-[0_0_40px_rgba(214,255,63,0.08)] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-[var(--color-lime)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] font-semibold">
                  Direct Implementation
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">
                Want this engineered for your platform?
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-xl mb-8 leading-relaxed">
                We implement custom WebGL flagships, Next.js migrations, and autonomous AI infrastructure for ambitious teams. Tell us your target milestone below.
              </p>

              <form action="/contact" method="GET" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="compact-name" className="sr-only">Your Name</label>
                  <input
                    id="compact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                  />
                </div>

                <div>
                  <label htmlFor="compact-email" className="sr-only">Your Work Email</label>
                  <input
                    id="compact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Work email address"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="compact-message" className="sr-only">Brief message</label>
                  <input
                    id="compact-message"
                    name="message"
                    type="text"
                    required
                    placeholder="Tell us about your project or milestone"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)]"
                  />
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-200 cursor-pointer shadow-[0_0_20px_rgba(214,255,63,0.3)]"
                  >
                    SEND TO SENIOR PARTNER
                    <Send size={15} />
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </article>

      <CTA />
    </>
  );
}
