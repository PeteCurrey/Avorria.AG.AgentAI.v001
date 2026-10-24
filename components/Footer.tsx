"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Briefcase, Camera, Code2 } from "lucide-react";

const SITEMAP_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Selected Work", href: "/work" },
  { label: "The Studio", href: "/studio" },
  { label: "Journal & Insights", href: "/journal" },
  { label: "Contact Us", href: "/contact" },
];

const EXPERTISE_LIST = [
  "WebGL & Three.js Engines",
  "Autonomous AI Swarms",
  "Next.js 15 Flagships",
  "Headless E-Commerce",
  "Custom RAG Architectures",
  "3D Brand Visual Systems",
];

const SOCIALS = [
  { icon: MessageCircle, href: "https://twitter.com/avorria", label: "Twitter" },
  { icon: Briefcase, href: "https://linkedin.com/company/avorria", label: "LinkedIn" },
  { icon: Camera, href: "https://instagram.com/avorria", label: "Instagram" },
  { icon: Code2, href: "https://github.com/avorria", label: "GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[#050508] relative overflow-hidden text-white">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--color-lime)]/[0.02] blur-3xl pointer-events-none" />

      <div className="container-px mx-auto max-w-[1440px] pt-20 pb-12">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[var(--color-border)]">
          {/* Col 1: Brand + Availability Pulse (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              aria-label="Avorria homepage"
              className="font-display font-bold text-3xl tracking-tight text-white inline-block"
            >
              Avorria<span className="text-[var(--color-lime)]">.</span>
            </Link>

            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-sm">
              Performance-first digital agency building immersive websites and autonomous AI systems. London & New York.
            </p>

            {/* Availability Pulse "BOOKING Q1 2027" */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-lime)]/10 border border-[var(--color-lime)]/30 text-[var(--color-lime)] font-mono text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-ping" />
              <span>BOOKING Q1 2027</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Avorria on ${label} (opens in new tab)`}
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-white hover:border-[var(--color-lime)] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Sitemap
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              {SITEMAP_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-lime)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Expertise (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              {EXPERTISE_LIST.map((item) => (
                <li key={item} className="text-[var(--color-muted)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-lime)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter input + lime submit (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Stay Ahead
            </h4>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Quarterly intelligence on WebGL, real-time 3D, and production AI architecture. Zero marketing fluff.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="director@brand.com"
                  required
                  className="w-full px-4 py-3 rounded-full bg-[var(--color-panel)] border border-[var(--color-border)] text-sm text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-lime)] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-200 cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe to Insights"}
                <ArrowRight size={14} />
              </button>

              {status === "success" && (
                <p className="text-xs text-[var(--color-lime)] flex items-center gap-1.5 pt-1">
                  <CheckCircle2 size={13} />
                  <span>{message}</span>
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 pt-1">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Giant AVORRIA 15rem White 6% Watermark */}
        <div
          className="font-display font-black text-[clamp(5.5rem,18vw,15rem)] leading-none tracking-tighter text-white/[0.06] select-none pointer-events-none text-center my-6 md:my-10 uppercase overflow-hidden"
          aria-hidden="true"
        >
          AVORRIA
        </div>

        {/* Bottom Bar: Copyright + hello@avorria.com */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Avorria Ltd. London (EC2A) & New York (NY 10013).</p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@avorria.com"
              className="text-white hover:text-[var(--color-lime)] transition-colors duration-200"
            >
              hello@avorria.com
            </a>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
