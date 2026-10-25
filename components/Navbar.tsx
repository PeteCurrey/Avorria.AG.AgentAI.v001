"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { href: "/work", label: "Selected Work", num: "01", tag: "Case Studies" },
  { href: "/services", label: "Capabilities", num: "02", tag: "Core Practice" },
  { href: "/studio", label: "The Studio", num: "03", tag: "Doctrine & Pods" },
  { href: "/journal", label: "Journal", num: "04", tag: "Insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLDN, setTimeLDN] = useState("--:--");
  const [timeNYC, setTimeNYC] = useState("--:--");

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Live clocks for LDN and NYC
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeLDN(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setTimeNYC(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll and ESC listener when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* ── Fixed Header Bar ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-300 ${
          scrolled && !menuOpen
            ? "py-2.5 bg-[#07070A]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-xl"
            : "py-3.5 bg-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="container-px mx-auto flex items-center justify-between max-w-[1440px]"
        >
          {/* Logo with rotating mark — refined compact scale */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Avorria homepage"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-0.5"
          >
            <div className="w-6 h-6 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-transform duration-500 ease-out group-hover:rotate-180">
              <span className="font-display text-[10px] text-white">
                A
              </span>
            </div>
            <span className="font-display text-sm tracking-[-0.03em] text-white font-medium">
              AVORRIA<span className="text-[var(--color-lime)]">.</span>
            </span>
          </Link>

          {/* Center: Institutional Live Clocks (London / New York) — refined scale */}
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-[var(--color-muted)] select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span className="text-white/35">LDN</span>
              <span className="text-white/80 font-medium">{timeLDN}</span>
            </div>
            <span className="text-white/10">/</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span className="text-white/35">NYC</span>
              <span className="text-white/80 font-medium">{timeNYC}</span>
            </div>
          </div>

          {/* Right: Architectural Menu Trigger — refined compact button */}
          <div className="flex items-center gap-3">
            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close navigation index" : "Open navigation index"}
                aria-expanded={menuOpen}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-panel)] border border-[var(--color-border)] hover:border-white/30 text-white transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 group-hover:text-white">
                  {menuOpen ? "CLOSE" : "MENU"}
                </span>
                <span
                  className={`block w-2.5 h-[1px] bg-white transition-transform duration-300 ${
                    menuOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </MagneticButton>
          </div>
        </nav>
      </motion.header>

      {/* ── Fullscreen Architectural Navigation Overlay ─────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#07070A]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 overflow-y-auto"
            aria-modal="true"
            role="dialog"
          >
            {/* Background subtle watermark */}
            <div
              className="absolute right-0 bottom-0 font-display text-white pointer-events-none select-none uppercase overflow-hidden leading-none"
              style={{
                fontSize: "clamp(8rem, 25vw, 24rem)",
                opacity: 0.02,
                transform: "translate(8%, 12%)",
              }}
              aria-hidden="true"
            >
              AVORRIA
            </div>

            <div className="container-px mx-auto max-w-[1440px] w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-auto">
              {/* Navigation Index (8 cols) */}
              <div className="lg:col-span-8 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-lime)] block mb-6">
                  Index / Navigation
                </span>

                <nav className="flex flex-col space-y-1">
                  {NAV_LINKS.map(({ href, label, num, tag }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors duration-200"
                    >
                      <div className="flex items-baseline gap-6 sm:gap-10">
                        <span className="font-mono text-xs text-white/30 group-hover:text-[var(--color-lime)] transition-colors duration-200">
                          {num}
                        </span>
                        <span className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-none text-white tracking-[-0.04em] group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                          {label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-white/25 hidden md:inline-block">
                          {tag}
                        </span>
                        <ArrowUpRight
                          size={24}
                          className="text-white/20 group-hover:text-[var(--color-lime)] group-hover:rotate-45 transition-all duration-200"
                        />
                      </div>
                    </Link>
                  ))}

                  {/* 05: Initiate Project — Inverted Lime Highlight */}
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline justify-between py-5 border-b border-white/10 hover:border-[var(--color-lime)] transition-colors duration-200"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-xs text-[var(--color-lime)]">
                        05
                      </span>
                      <span className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-none text-[var(--color-lime)] tracking-[-0.04em] group-hover:translate-x-3 transition-transform duration-300">
                        Initiate Project
                      </span>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="text-[var(--color-lime)] group-hover:rotate-45 transition-transform duration-200"
                    />
                  </Link>
                </nav>
              </div>

              {/* Sidebar Info & Direct Desks (4 cols) */}
              <div className="lg:col-span-4 lg:pl-12 lg:border-l border-white/5 space-y-10 pt-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 block mb-3">
                    Institutional Practice
                  </span>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                    Digital flagships, custom WebGL environments, and autonomous AI infrastructure. Built for enterprise scale.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 block mb-1">
                      Direct Partner Desk
                    </span>
                    <a
                      href="mailto:hello@avorria.com"
                      className="font-mono text-xs text-white hover:text-[var(--color-lime)] transition-colors duration-200"
                    >
                      hello@avorria.com
                    </a>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 block mb-1">
                      Global Availability
                    </span>
                    <span className="font-mono text-xs text-[var(--color-lime)]">
                      Commissions Open — Q1 2027
                    </span>
                  </div>
                </div>

                {/* Locations */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-xs text-[var(--color-muted)]">
                  <div>
                    <span className="text-white/60 block mb-0.5">London</span>
                    <span className="text-[11px] text-white/30">EC2A · UK</span>
                  </div>
                  <div>
                    <span className="text-white/60 block mb-0.5">New York</span>
                    <span className="text-[11px] text-white/30">NY 10013 · US</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside overlay */}
            <div className="container-px mx-auto max-w-[1440px] w-full pt-8 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-white/30">
              <span>Press [ESC] to dismiss index</span>
              <span>© {new Date().getFullYear()} AVORRIA LTD.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
