"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type CursorType = "default" | "hover" | "view" | "drag";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  const currentTypeRef = useRef<CursorType>("default");
  const currentLabelRef = useRef<string>("");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only run on fine-pointer devices (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setVisible(true);
      }

      // Instant hardware-level response for the primary dot (zero delay)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }

      // Check hovered element
      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor], [data-cursor-label], a, button, input, select, textarea, [role='button']"
      ) as HTMLElement | null;

      let nextType: CursorType = "default";
      let nextLabel = "";

      if (target) {
        const cursorAttr = target.getAttribute("data-cursor");
        const labelAttr = target.getAttribute("data-cursor-label");

        if (cursorAttr === "view" || labelAttr?.toUpperCase() === "VIEW") {
          nextType = "view";
          nextLabel = labelAttr || "VIEW";
        } else if (cursorAttr === "drag" || labelAttr?.toUpperCase() === "DRAG") {
          nextType = "drag";
          nextLabel = labelAttr || "DRAG";
        } else if (cursorAttr === "hover" || target.tagName === "A" || target.tagName === "BUTTON") {
          nextType = "hover";
          nextLabel = labelAttr || "";
        }
      }

      // ONLY trigger a React re-render when the state actually transitions
      if (
        nextType !== currentTypeRef.current ||
        nextLabel !== currentLabelRef.current
      ) {
        currentTypeRef.current = nextType;
        currentLabelRef.current = nextLabel;
        setCursorType(nextType);
        setCursorLabel(nextLabel);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // High-performance RAF loop for responsive smooth follower ring
    let rafId: number;
    const loop = () => {
      if (isVisibleRef.current && ringRef.current) {
        // Snappy lerp (0.35) for instant, fluid tracking without lag
        const lerpFactor = 0.35;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  let size = 32;
  let ringClasses = "border border-white/30 bg-transparent text-transparent";

  if (cursorType === "hover") {
    size = 48;
    ringClasses = "border border-white/50 bg-white/5 text-transparent";
  } else if (cursorType === "view") {
    size = 78;
    ringClasses =
      "border-none bg-white text-black font-mono font-medium text-[11px] tracking-widest shadow-xl";
  } else if (cursorType === "drag") {
    size = 64;
    ringClasses =
      "border border-white/60 bg-black/70 text-white font-mono font-medium text-[10px] tracking-widest backdrop-blur-sm";
  }

  const offset = size / 2;

  return (
    <div
      className={`custom-cursor pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Primary Dot - Instant 0ms hardware response */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[10000]"
        style={{ willChange: "transform" }}
      />

      {/* Outer Follower Ring - 60-120fps direct RAF with snappy 0.35 lerp */}
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
          transition={{ type: "spring", stiffness: 450, damping: 32 }}
          className={`rounded-full flex items-center justify-center transition-colors duration-150 uppercase select-none ${ringClasses}`}
        >
          {cursorLabel && (cursorType === "view" || cursorType === "drag") ? cursorLabel : null}
        </motion.div>
      </div>
    </div>
  );
}
