"use client";

import { useEffect, useRef } from "react";

/**
 * Card tilt hook — applies a subtle rotateX/rotateY perspective tilt
 * based on cursor position within the card. Caches rect on mouseenter
 * to prevent forced reflows, and schedules transform via requestAnimationFrame.
 */
export function useCardTilt(maxDeg = 5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rect: DOMRect | null = null;
    let rafId: number | null = null;

    const handleEnter = () => {
      rect = el.getBoundingClientRect();
      el.style.transformStyle = "preserve-3d";
      el.style.willChange = "transform";
    };

    const handleMove = (e: MouseEvent) => {
      if (!rect) rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * maxDeg;
      const rotY = dx * maxDeg;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015,1.015,1.015)`;
          rafId = null;
        });
      }
    };

    const handleLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
      el.style.willChange = "auto";
      rect = null;
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxDeg]);

  return ref;
}
