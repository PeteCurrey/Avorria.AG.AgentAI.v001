import type { Metadata } from "next";
import { posts } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Playbooks, Not Hot Takes — The Avorria Journal",
  description:
    "Tactical playbooks from the Avorria engineering and design collective. In-depth guides on WebGL, real-time 3D, autonomous AI swarms, and high-conversion headless commerce.",
  alternates: { canonical: "https://avorria.com/journal" },
  openGraph: {
    url: "https://avorria.com/journal",
    title: "Playbooks, Not Hot Takes | Avorria Journal",
    description:
      "Field notes and architectural playbooks on performance-first digital experiences from London & New York.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Journal — Playbooks, Not Hot Takes" }],
  },
};

export default function JournalPage() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-40 pb-20 container-px mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Engineering & Design Intelligence
          </span>
        </div>

        {/* Required H1 */}
        <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase mb-8">
          PLAYBOOKS, NOT<br />
          <span className="text-gradient-lime">HOT TAKES.</span>
        </h1>

        <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Deep architectural breakdowns, benchmarks, and production lessons from shipping high-stakes digital flagships and autonomous AI systems.
        </p>
      </section>

      {/* ── Journal Feed ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-px mx-auto max-w-[1440px] py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Featured First Post: Large Card */}
            {featuredPost && (
              <article className="md:col-span-2">
                <Link
                  href={`/journal/${featuredPost.slug}`}
                  aria-label={`Read featured playbook: ${featuredPost.title}`}
                  className="group block rounded-3xl p-8 md:p-12 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 shadow-2xl relative overflow-hidden"
                >
                  {/* Large Showcase Cover */}
                  <div
                    className="relative aspect-[16/8] md:aspect-[21/9] min-h-[340px] md:min-h-[440px] rounded-2xl bg-gradient-to-br from-[#131322] via-[#0a0a14] to-[#050508] border border-white/5 overflow-hidden flex flex-col justify-between p-8 md:p-12 mb-8 group"
                    role="img"
                    aria-label={`Featured cover: ${featuredPost.title}`}
                  >
                    <div className="flex items-center gap-3 z-10">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[var(--color-lime)] text-[var(--color-bg)] font-bold">
                        FEATURED PLAYBOOK
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {featuredPost.category}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-[var(--color-muted)]">
                        {featuredPost.readTime} min read
                      </span>
                    </div>

                    <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                      <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200 tracking-tight leading-tight max-w-4xl">
                        {featuredPost.title}
                      </h2>
                      <p className="font-body text-base md:text-xl text-[var(--color-muted)] max-w-3xl mt-4 leading-relaxed line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/[0.03] transition-colors duration-500" />
                  </div>

                  {/* Bottom Metadata & Read Prompt */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs font-mono text-[var(--color-muted)]">
                    <div className="flex items-center gap-4">
                      <span>By {featuredPost.author}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                    </div>

                    <div className="flex items-center gap-2 font-display font-bold text-sm text-[var(--color-lime)] group-hover:text-white transition-colors duration-200">
                      <span>READ FULL PLAYBOOK</span>
                      <div className="w-8 h-8 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Rest of the Posts: Clean 2-Column Grid */}
            {otherPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/journal/${post.slug}`}
                  aria-label={`Read article: ${post.title}`}
                  className="group block rounded-3xl p-6 md:p-8 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 flex flex-col justify-between h-full shadow-lg"
                >
                  <div>
                    {/* Media Cover */}
                    <div
                      className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#12121e] via-[#090912] to-[#050508] border border-white/5 overflow-hidden flex flex-col justify-between p-6 mb-6"
                      role="img"
                      aria-label={`Cover for ${post.title}`}
                    >
                      <div className="flex items-center gap-2 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white">
                          {post.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 backdrop-blur-md border border-white/10 text-[var(--color-lime)]">
                          {post.readTime} min read
                        </span>
                      </div>

                      <div className="transition-transform duration-500 ease-out group-hover:scale-105 z-10">
                        <span className="font-display font-bold text-2xl text-white block">
                          {post.title}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/[0.04] transition-colors duration-500" />
                    </div>

                    <h2 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200 mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="font-body text-xs md:text-sm text-[var(--color-muted)] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="text-[var(--color-lime)] group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1 font-semibold">
                      Read Playbook →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
