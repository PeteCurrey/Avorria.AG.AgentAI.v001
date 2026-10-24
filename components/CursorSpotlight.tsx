"use client";

import { useEffect } from "react";

/**
 * CursorSpotlight — applies a subtle radial spotlight that follows the cursor
 * across all dark sections. Works by writing --cx / --cy CSS custom properties
 * on <html> and using them via a CSS background-image on dark section elements.
 *
 * Uses a single mousemove listener on the window, updating two CSS vars at
 * hardware speed with zero React state. The gradient lives entirely in CSS.
 */
export default function CursorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;

    // Respect reduced-motion — don't run at all
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Fine pointer only (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--cx", `${e.clientX}px`);
      root.style.setProperty("--cy", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null; // purely side-effect, no DOM output
}
