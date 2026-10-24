"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Card tilt hook — applies a subtle rotateX/rotateY perspective tilt
 * based on cursor position within the card. Position updates via direct
 * DOM transform (no React state per frame) for maximum performance.
 *
 * @param maxDeg  Maximum rotation in degrees (default 6)
 */
export function useCardTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    el.style.transformStyle = "preserve-3d";
    el.style.transition =
      "transform 0.08s linear, box-shadow 0.3s ease";

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);   // -1 → +1
      const dy = (e.clientY - cy) / (rect.height / 2);   // -1 → +1
      const rotX = -dy * maxDeg;
      const rotY = dx * maxDeg;
      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015,1.015,1.015)`;
    };

    const handleLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxDeg]);

  return ref;
}
