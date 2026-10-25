"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PRACTICE_AREAS = [
  "WebGL & Three.js Engines",
  "Autonomous AI Swarms",
  "Next.js 16 Flagships",
  "Headless E-Commerce",
  "Custom RAG Architectures",
  "3D Brand Visual Systems",
];

const SITEMAP = [
  { label: "Selected Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "The Studio", href: "/studio" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Twitter / X", href: "https://twitter.com/avorria" },
  { label: "LinkedIn", href: "https://linkedin.com/company/avorria" },
  { label: "Instagram", href: "https://instagram.com/avorria" },
  { label: "GitHub", href: "https://github.com/avorria" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07070A] text-white">
      {/* Top rule */}
      <div className="border-t border-[var(--color-border)]" />

      {/* ── Three-column content strip ─────────────────────────────────────── */}
      <div className="container-px mx-auto max-w-[1440px] pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-border)]">

          {/* Col 1: Brand + Offices */}
          <div className="md:col-span-5 space-y-8">
            <Link
              href="/"
              aria-label="Avorria homepage"
              className="font-display text-2xl tracking-[-0.04em] text-white inline-block"
            >
              AVORRIA<span className="text-[var(--color-lime)]">.</span>
            </Link>

            <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
              Digital flagships and enterprise intelligence systems for ambitious
              industry leaders.
            </p>

            {/* Office addresses */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 block mb-1">
                  London
                </span>
                <span className="font-mono text-xs text-[var(--color-muted)]">
                  Shoreditch · EC2A · United Kingdom
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 block mb-1">
                  New York
                </span>
                <span className="font-mono text-xs text-[var(--color-muted)]">
                  Tribeca · NY 10013 · United States
                </span>
              </div>
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                Commissions Open — Q1 2027
              </span>
            </div>
          </div>

          {/* Col 2: Practice + Navigation */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className="font-mono text-[10px] font-light uppercase tracking-[0.22em] text-white/30 mb-5">
                Practice
              </h4>
              <ul className="space-y-2.5">
                {PRACTICE_AREAS.map((item) => (
                  <li key={item} className="font-mono text-xs text-[var(--color-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Navigation + Social + Contact */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="font-mono text-[10px] font-light uppercase tracking-[0.22em] text-white/30 mb-5">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {SITEMAP.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-white transition-colors duration-200"
                    >
                      {label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] font-light uppercase tracking-[0.22em] text-white/30 mb-5">
                Follow
              </h4>
              <ul className="space-y-2.5">
                {SOCIALS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-white transition-colors duration-200"
                    >
                      {label}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:hello@avorria.com"
              className="inline-block font-mono text-sm text-white hover:text-[var(--color-lime)] transition-colors duration-200"
            >
              hello@avorria.com
            </a>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/25">
            © {new Date().getFullYear()} Avorria Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] text-white/25">
            <Link href="/privacy" className="hover:text-white/50 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* ── Watermark AVORRIA — architectural endpaper ───────────────────────
        * Flush to the bottom, full-width, deeply subdued.
        * The final page of a hardcover book.
        * ──────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden pointer-events-none select-none"
        style={{ marginTop: "-2vw" }}
      >
        <span
          className="block font-display text-white text-center leading-[0.85] tracking-[-0.04em] uppercase"
          style={{
            fontSize: "clamp(6rem, 22vw, 22rem)",
            fontWeight: 200,
            opacity: 0.035,
            letterSpacing: "-0.04em",
          }}
        >
          AVORRIA
        </span>
      </div>
    </footer>
  );
}
