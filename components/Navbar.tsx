"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/work", label: "Work", num: "01" },
  { href: "/services", label: "Services", num: "02" },
  { href: "/studio", label: "Studio", num: "03" },
  { href: "/journal", label: "Journal", num: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLDN, setTimeLDN] = useState("--:--");
  const [timeNYC, setTimeNYC] = useState("--:--");

  // Scroll > 40px triggers fixed blur background
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-[#050508]/85 backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="container-px mx-auto flex items-center justify-between max-w-[1440px]"
        >
          {/* Logo with 'A' in circle that rotates 180° on hover */}
          <Link
            href="/"
            aria-label="Avorria homepage"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-full p-1"
          >
            <div className="w-9 h-9 rounded-full border border-[var(--color-lime)] bg-[var(--color-lime)]/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:rotate-180 shadow-[0_0_15px_rgba(214,255,63,0.25)]">
              <span className="font-display font-extrabold text-sm text-[var(--color-lime)]">
                A
              </span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              AVORRIA<span className="text-[var(--color-lime)]">.</span>
            </span>
          </Link>

          {/* Center Links (Work, Services, Studio, Journal) */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm font-medium text-[var(--color-muted)] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-md px-1 py-0.5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section: LDN/NYC Live Clocks + Magnetic START A PROJECT Button */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Live Clocks */}
            <div className="flex items-center gap-4 text-[11px] font-mono text-[var(--color-muted)] border-r border-[var(--color-border)] pr-8 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] animate-ping" />
                <span>LDN</span>
                <span className="text-white font-semibold">{timeLDN}</span>
              </div>
              <span className="text-white/20">/</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)]" />
                <span>NYC</span>
                <span className="text-white font-semibold">{timeNYC}</span>
              </div>
            </div>

            {/* Lime Magnetic START A PROJECT Button */}
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-all duration-200 shadow-[0_0_20px_rgba(214,255,63,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="w-11 h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] z-[110]"
            >
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[4.5px] rotate-45 bg-[var(--color-lime)]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[4.5px] -rotate-45 bg-[var(--color-lime)]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Circle-Clip Menu (01-05 links) */}
      <div
        className={`fixed inset-0 z-[105] bg-[#050508] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden flex flex-col justify-between p-8 pt-28 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 36px) 36px)"
            : "circle(0% at calc(100% - 36px) 36px)",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-lime)] block mb-4">
            Navigation Index
          </span>

          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map(({ href, label, num }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-white"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[var(--color-muted)] group-hover:text-[var(--color-lime)]">
                    {num}
                  </span>
                  <span className="font-display font-extrabold text-4xl group-hover:text-[var(--color-lime)] group-hover:translate-x-2 transition-all duration-200">
                    {label}
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[var(--color-muted)] group-hover:text-[var(--color-lime)] group-hover:rotate-45 transition-all duration-200"
                />
              </Link>
            ))}

            {/* 05: Start a Project */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-white"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[var(--color-lime)]">05</span>
                <span className="font-display font-extrabold text-4xl text-[var(--color-lime)] group-hover:translate-x-2 transition-all duration-200">
                  Start a Project
                </span>
              </div>
              <ArrowUpRight
                size={20}
                className="text-[var(--color-lime)] group-hover:rotate-45 transition-all duration-200"
              />
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Footer with LDN/NYC clocks */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[var(--color-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-ping" />
            <span>LDN {timeLDN}</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)]" />
            <span>NYC {timeNYC}</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-[var(--color-lime)]">Q1 2027</span>
        </div>
      </div>
    </>
  );
}
