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
    <footer className="border-t border-[var(--color-border)] bg-[#07070A] relative overflow-hidden text-white">
      <div className="container-px mx-auto max-w-[1440px] pt-20 pb-12">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[var(--color-border)]">
          {/* Col 1: Brand + Availability Pulse (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              aria-label="Avorria homepage"
              className="font-display font-semibold text-2xl tracking-tight text-white inline-block"
            >
              AVORRIA<span className="text-[var(--color-lime)]">.</span>
            </Link>

            <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-sm">
              Digital flagships and enterprise intelligence systems. Operating from London &amp; New York for global partners.
            </p>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-panel)] border border-[var(--color-border)] text-white/90 font-mono text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
              <span>COMMISSIONS OPEN Q1 2027</span>
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
                  className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-white hover:border-white/40 transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-body text-sm">
              {SITEMAP_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--color-muted)] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Expertise (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Core Practices
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {EXPERTISE_LIST.map((item) => (
                <li key={item} className="text-[var(--color-muted)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter input + submit (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Executive Briefings
            </h4>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Quarterly technical intelligence on WebGL, real-time 3D, and autonomous enterprise systems.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="director@enterprise.com"
                  required
                  className="w-full px-4 py-2.5 rounded-full bg-[var(--color-panel)] border border-[var(--color-border)] text-xs text-white placeholder-[var(--color-muted)] focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-[var(--color-lime)] hover:text-black transition-colors duration-200 cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe to Briefing"}
                <ArrowRight size={13} />
              </button>

              {status === "success" && (
                <p className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 size={13} />
                  <span>{message}</span>
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-400 pt-1">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Subdued AVORRIA Monogram */}
        <div
          className="font-display font-black text-[clamp(4.5rem,15vw,12rem)] leading-none tracking-tighter text-white/[0.025] select-none pointer-events-none text-center my-6 uppercase overflow-hidden"
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
