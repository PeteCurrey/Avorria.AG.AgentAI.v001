"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorState = {
  type: "default" | "hover" | "view" | "drag";
  label?: string;
};

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({ type: "default" });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Exact mouse position
  const mousePos = useRef({ x: -200, y: -200 });
  // Lerped ring position
  const ringPos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only run on fine-pointer devices (mouse/trackpad, not touch)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check current hovered element state using event delegation
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor], [data-cursor-label], a, button, input, select, textarea, [role='button']"
      ) as HTMLElement | null;

      if (target) {
        const cursorAttr = target.getAttribute("data-cursor");
        const labelAttr = target.getAttribute("data-cursor-label");

        if (cursorAttr === "view" || labelAttr?.toUpperCase() === "VIEW") {
          setCursorState({ type: "view", label: labelAttr || "VIEW" });
        } else if (cursorAttr === "drag" || labelAttr?.toUpperCase() === "DRAG") {
          setCursorState({ type: "drag", label: labelAttr || "DRAG" });
        } else if (cursorAttr === "hover" || target.tagName === "A" || target.tagName === "BUTTON") {
          setCursorState({ type: "hover", label: labelAttr || undefined });
        } else {
          setCursorState({ type: "default" });
        }
      } else {
        setCursorState({ type: "default" });
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Continuous RAF loop with lerp 0.16
    const loop = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot && ring) {
        // Dot follows instantly
        dot.style.transform = `translate3d(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px, 0)`;

        // Outer ring follows with lerp 0.16
        const lerpFactor = 0.16;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!mounted) return null;

  // Determine size, styling, and text content based on state
  const { type, label } = cursorState;

  let size = 36;
  let ringClasses = "border border-white/40 bg-transparent text-transparent";

  if (type === "hover") {
    size = 56;
    ringClasses =
      "border border-[var(--color-lime)] bg-[var(--color-lime)]/10 shadow-[0_0_24px_rgba(214,255,63,0.35)] text-transparent";
  } else if (type === "view") {
    size = 96;
    ringClasses =
      "border-none bg-[var(--color-lime)] text-[var(--color-bg)] font-display font-bold text-xs tracking-widest shadow-[0_0_30px_rgba(214,255,63,0.5)]";
  } else if (type === "drag") {
    size = 72;
    ringClasses =
      "border-2 border-[var(--color-lime)] bg-[var(--color-lime)]/20 text-[var(--color-lime)] font-display font-bold text-xs tracking-widest shadow-[0_0_20px_rgba(214,255,63,0.4)]";
  }

  const offset = size / 2;

  return (
    <div
      className={`custom-cursor pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Small Lime Dot - follows instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] pointer-events-none z-[10000]"
        style={{ willChange: "transform" }}
      />

      {/* Outer Ring - lerped at 0.16 */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform z-[9999]"
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            x: -offset,
            y: -offset,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className={`rounded-full flex items-center justify-center transition-colors duration-200 uppercase select-none ${ringClasses}`}
        >
          {label && (type === "view" || type === "drag") ? label : null}
        </motion.div>
      </div>
    </div>
  );
}
