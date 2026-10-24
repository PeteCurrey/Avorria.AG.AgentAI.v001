import type { Metadata } from "next";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Proof, Not Promises — Selected Work & Case Studies",
  description:
    "Explore Avorria's portfolio of Awwwards-winning websites, WebGL experiences, and autonomous AI systems. Shipped for ambitious brands in London, New York and worldwide.",
  alternates: { canonical: "https://avorria.com/work" },
  openGraph: {
    url: "https://avorria.com/work",
    title: "Proof, Not Promises — Selected Work | Avorria",
    description:
      "Awwwards-recognized websites, Three.js flagships, and enterprise AI systems. See the proof.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Avorria Portfolio — Proof, Not Promises" }],
  },
};

export default function WorkPage() {
  const [firstProject, ...otherProjects] = projects;

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-20 container-px mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
          <span className="font-body text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Case Studies & Proof
          </span>
        </div>

        {/* Required H1 */}
        <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.96] tracking-tight text-white uppercase mb-8">
          PROOF, NOT<br />
          <span className="text-gradient-lime">PROMISES.</span>
        </h1>

        <p className="font-body text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Every project is built on three non-negotiables: sub-second performance, award-winning immersion, and measurable business growth.
        </p>
      </section>

      {/* ── Projects Grid ── */}
      <section className="border-t border-[var(--color-border)]">
        <div className="container-px mx-auto max-w-[1440px] py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* First Project: col-span-2 Tall Showcase */}
            {firstProject && (
              <div className="md:col-span-2">
                <Link
                  href={`/work/${firstProject.slug}`}
                  data-cursor="view"
                  aria-label={`View flagship case study: ${firstProject.title}`}
                  className="group block rounded-3xl p-8 md:p-12 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 shadow-2xl relative overflow-hidden"
                >
                  {/* Tall Image Showcase */}
                  <div
                    className="relative aspect-[16/8] md:aspect-[21/9] min-h-[380px] md:min-h-[460px] rounded-2xl bg-gradient-to-br from-[#131322] via-[#0b0b14] to-[#050508] border border-white/5 overflow-hidden flex flex-col justify-between p-8 md:p-12 mb-8 group"
                    role="img"
                    aria-label={`${firstProject.title} flagship project showcase`}
                  >
                    <div className="flex items-center gap-3 z-10">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {firstProject.category}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-[var(--color-lime)]">
                        {firstProject.year}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[var(--color-lime)] text-[var(--color-bg)] font-bold">
                        FEATURED FLAGSHIP
                      </span>
                    </div>

                    <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                      <span className="font-display font-black text-4xl md:text-7xl text-white tracking-tight block">
                        {firstProject.title}
                      </span>
                      <p className="font-body text-base md:text-xl text-[var(--color-muted)] max-w-xl mt-3 line-clamp-2">
                        {firstProject.tagline}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/[0.03] transition-colors duration-500" />
                  </div>

                  {/* Bottom info strip */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
                    <p className="font-body text-sm md:text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
                      {firstProject.description}
                    </p>

                    <div className="flex items-center gap-3 text-sm font-display font-bold text-[var(--color-lime)] group-hover:text-white transition-colors duration-200 shrink-0">
                      <span>READ COMPLETE CASE STUDY</span>
                      <div className="w-10 h-10 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Rest: 2-Column Grid */}
            {otherProjects.map((project) => (
              <div key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="view"
                  aria-label={`View case study: ${project.title}`}
                  className="group block rounded-3xl p-6 md:p-8 bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-[var(--color-lime)]/50 transition-all duration-300 flex flex-col justify-between h-full shadow-lg"
                >
                  <div>
                    {/* Media container */}
                    <div
                      className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#12121e] via-[#090912] to-[#050508] border border-white/5 overflow-hidden flex flex-col justify-between p-6 mb-6"
                      role="img"
                      aria-label={`${project.title} cover`}
                    >
                      <div className="flex items-center gap-2 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-black/60 backdrop-blur-md border border-white/10 text-[var(--color-lime)]">
                          {project.year}
                        </span>
                      </div>

                      <div className="transition-transform duration-500 ease-out group-hover:scale-105 z-10">
                        <span className="font-display font-bold text-2xl md:text-3xl text-white block">
                          {project.title}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-[var(--color-lime)]/0 group-hover:bg-[var(--color-lime)]/[0.04] transition-colors duration-500" />
                    </div>

                    <h2 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[var(--color-lime)] transition-colors duration-200 mb-2">
                      {project.title}
                    </h2>
                    <p className="font-body text-xs md:text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                    <span>{project.tags.slice(0, 2).join(" · ")}</span>
                    <span className="text-[var(--color-lime)] group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                      Explore Case Study →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
