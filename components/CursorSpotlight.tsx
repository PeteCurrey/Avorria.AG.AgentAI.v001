"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CursorSpotlight — hardware-accelerated ambient radial glow.
 *
 * Moves a 600px layer directly using GPU translate3d, completely eliminating
 * document-wide CSS variable recalculations and viewport repaints during scroll.
 */
export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rafId: number | null = null;
    let targetX = -999;
    let targetY = -999;

    const render = () => {
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${targetX - 300}px, ${targetY - 300}px, 0)`;
      }
      rafId = null;
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
      if (rafId === null) {
        rafId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <div
      ref={spotRef}
      className={`fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-[1] rounded-full will-change-transform transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "radial-gradient(circle, rgba(255, 255, 255, 0.025) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
