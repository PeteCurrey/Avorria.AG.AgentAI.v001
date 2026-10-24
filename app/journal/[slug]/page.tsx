import type { Metadata } from "next";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Sparkles, Send } from "lucide-react";
import CTA from "@/components/CTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Deep editorial content for each journal post
const POST_CONTENT: Record<
  string,
  {
    intro: string;
    sections: Array<{
      heading: string;
      body: string;
      takeaways: string[];
    }>;
  }
> = {
  "why-performance-is-the-new-brand": {
    intro:
      "For decades, creative agencies treated performance as a DevOps ticket rather than a design variable. They built heavy, script-choked experiences that took four seconds to hydrate, rationalizing the friction as the 'price of beauty'. In 2026, latency is the ultimate brand pollutant.",
    sections: [
      {
        heading: "1. The Psychology of the 100ms Window",
        body:
          "Human perception processes tactile response in under 100 milliseconds. When an interaction takes 300ms, the user's subconscious registers friction. When it takes two seconds, brand reverence collapses. High-end brands like Apple, Porsche, and Hermès don't just sell aesthetics — they sell effortless precision. Your digital flagship should feel like sliding into a precision-engineered cockpit.",
        takeaways: [
          "Every 100ms delay in LCP reduces conversion by an average of 7%.",
          "DPR capping at 2× reduces memory footprint by up to 55% without visible blur.",
          "CSS-first token architecture eliminates megabytes of runtime styling JS.",
        ],
      },
      {
        heading: "2. The '60fps or Scrap It' Constraint",
        body:
          "If a 3D canvas drops below 55 frames per second on a mid-tier iPhone, it doesn't matter how innovative your shaders are. At Avorria, we enforce strict performance budgets before client sign-off. We profile draw calls, unbind unused vertex buffers off-screen, and prioritize server-rendered static HTML as the bedrock.",
        takeaways: [
          "Zero-runtime CSS with modern Tailwind v4 compilation.",
          "Three.js scenes dynamically imported only after initial paint.",
          "Server-driven edge hydration with static generation fallback.",
        ],
      },
    ],
  },
  "building-ai-agents-that-actually-work": {
    intro:
      "Most enterprise AI initiatives are stuck in 'demo paralysis'. Teams spend millions on wrapper tools that hallucinate under real customer loads. Building autonomous agent systems that actually survive production requires engineering discipline, not prompt hacking.",
    sections: [
      {
        heading: "1. The Fallacy of the Single Monolithic Agent",
        body:
          "Single-prompt generalist agents inevitably drift and hallucinate when given complex tool trees. The production pattern is a swarm of micro-agents with deterministic handoffs. One agent extracts structured intent, another queries vector indices, and a third synthesizes the customer response against strict policy guardrails.",
        takeaways: [
          "Decompose multi-step tasks into isolated, single-responsibility workers.",
          "Use deterministic validation schemas (Zod/Pydantic) between every agent hop.",
          "Implement human-in-the-loop triggers whenever confidence drops below 95%.",
        ],
      },
      {
        heading: "2. Vector Infrastructure That Scales",
        body:
          "Naive RAG with generic embeddings fails as soon as documents contain tabular numbers or domain jargon. We build hybrid search pipelines combining sparse lexical matching (BM25) with dense vector embeddings (Qdrant), reranked via cross-encoders before reaching context windows.",
        takeaways: [
          "Hybrid BM25 + dense retrieval eliminates semantic false positives.",
          "Pre-chunk tables into self-contained markdown schemas.",
          "Log every token exchange to evaluate drift over weekly sprints.",
        ],
      },
    ],
  },
  "the-craft-of-webgl-at-scale": {
    intro:
      "WebGL has a reputation for being brittle, battery-draining, and hostile to search engines. But when engineered with architectural rigor, in-browser 3D transforms passive scrollers into passionate brand advocates.",
    sections: [
      {
        heading: "1. Headless Three.js & Offscreen Canvases",
        body:
          "Never tie your 3D animation loop directly to main-thread DOM reflows. We utilize Web Workers and OffscreenCanvas wherever supported, allowing geometry calculations to run in parallel without competing with Next.js hydration or UI rendering.",
        takeaways: [
          "OffscreenCanvas prevents user scroll hitching during heavy shader compiles.",
          "Reuse global buffer geometries across instanced mesh models.",
          "Apply post-processing Bloom and Vignette passes selectively on high-tier GPUs only.",
        ],
      },
      {
        heading: "2. SEO & Accessibility in a 3D World",
        body:
          "A WebGL canvas is an empty black box to search crawlers unless surrounded by semantic HTML. We layer our 3D worlds over server-rendered semantic text trees. Web spiders index clean text, screen readers read ARIA headings, and visual users experience immersive real-time depth.",
        takeaways: [
          "Never render critical body copy solely inside a WebGL canvas.",
          "Provide high-contrast accessible fallbacks for reduced-motion preferences.",
          "Serve semantic SVG/JSON-LD mirrors of all 3D showcase products.",
        ],
      },
    ],
  },
  "dark-luxury-design-language": {
    intro:
      "Dark mode isn't just swapping `#ffffff` for `#000000`. True dark luxury is the art of illumination: sculpted shadows, subtle panel elevations, neon micro-accents, and generous typographic breathing room.",
    sections: [
      {
        heading: "1. The 8-Layer Elevation Palette",
        body:
          "Pure pitch black (#000000) causes visual fatigue and harsh contrast edges. We anchor our palette at #050508, layering elevated card panels at #0b0b12 with 8% white borders. This creates tactile optical depth that guides the eye naturally toward primary action triggers.",
        takeaways: [
          "Base background at #050508; elevated interactive panels at #0b0b12.",
          "Accent with high-frequency neon lime (#D6FF3F) used sparingly for maximum punch.",
          "Subtle animated film grain breaks digital flatness and imparts tactile luxury.",
        ],
      },
      {
        heading: "2. Typographic Hierarchy in the Shadows",
        body:
          "Display typography on dark backdrops demands deliberate weight and tracking. We pair the geometric assertiveness of Space Grotesk with the hyper-legible body rhythm of Inter, maintaining tight line-heights and negative letter-spacing for that distinctive editorial silhouette.",
        takeaways: [
          "Tight display tracking (-0.03em) prevents display type from feeling loose.",
          "Use 60% opacity muted gray (#6B7280) for body copy to prevent high-contrast glow.",
          "Neon highlights should be reserved for key conversion verbs and metrics.",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://avorria.com/journal/${post.slug}`;
  const description = post.excerpt.slice(0, 155);

  return {
    title: `${post.title} — Playbook`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | Avorria Playbook`,
      description,
      publishedTime: `${post.date}T09:00:00Z`,
      authors: ["https://avorria.com"],
      section: post.category,
      images: [
        {
          url: post.cover ?? "/og.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} — Avorria Playbook`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Avorria Playbook`,
      description,
      images: [post.cover ?? "/og.jpg"],
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const canonicalUrl = `https://avorria.com/journal/${post.slug}`;
  const content = POST_CONTENT[post.slug] || {
    intro: post.excerpt,
    sections: [
      {
        heading: "1. Core Engineering Principles",
        body:
          "Deploying category-defining digital products requires a disciplined approach to software craft, performance profiling, and conversion rate optimization.",
        takeaways: [
          "Eliminate bloat before beginning UI layout.",
          "Design for real-world devices, not top-spec development rigs.",
          "Ship iteratively with weekly verified staging links.",
        ],
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: canonicalUrl,
    datePublished: `${post.date}T09:00:00Z`,
    dateModified: `${post.date}T09:00:00Z`,
    author: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Avorria",
      url: "https://avorria.com",
      logo: {
        "@type": "ImageObject",
        url: "https://avorria.com/logo.png",
      },
    },
    image: post.cover ?? "https://avorria.com/og.jpg",
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
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
        <header className="container-px mx-auto max-w-[880px] mb-12">
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
              <time dateTime={post.date}>{post.date}</time>
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-white uppercase mb-8">
            {post.title}
          </h1>

          <p className="font-body text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed border-l-2 border-[var(--color-lime)] pl-6">
            {content.intro}
          </p>
        </header>

        {/* ── Visual Media Banner ── */}
        <div className="container-px mx-auto max-w-[1200px] mb-16">
          <div
            className="aspect-[16/7] rounded-3xl bg-gradient-to-br from-[#141424] via-[#090912] to-[#050508] border border-white/10 flex items-center justify-center p-8 overflow-hidden shadow-2xl relative"
            role="img"
            aria-label={`Visual header for ${post.title}`}
          >
            <div className="text-center z-10">
              <span className="font-display font-black text-4xl md:text-6xl text-white/15 uppercase tracking-wider">
                {post.category}
              </span>
              <p className="font-mono text-xs text-[var(--color-lime)] mt-2 uppercase tracking-widest">
                Avorria Playbook Series · LDN-NYC
              </p>
            </div>
            <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/5 transition-colors duration-500" />
          </div>
        </div>

        {/* ── Body Content Paragraphs ── */}
        <div className="container-px mx-auto max-w-[880px] space-y-16">
          {content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                {sec.heading}
              </h2>

              <p className="font-body text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
                {sec.body}
              </p>

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

          {/* ── "Want this done for you?" Box + Compact Contact Form ── */}
          <section className="pt-12 border-t border-[var(--color-border)]">
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--color-panel)] border border-[var(--color-lime)]/40 shadow-[0_0_40px_rgba(214,255,63,0.08)] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-[var(--color-lime)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)] font-semibold">
                  Direct Implementation
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">
                Want this done for you?
              </h2>
              <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-xl mb-8 leading-relaxed">
                We implement custom WebGL flagships, Next.js migrations, and autonomous AI infrastructure for ambitious teams. Tell us your target milestone below.
              </p>

              {/* Compact Contact Form */}
              <form
                action="/contact"
                method="GET"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
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
