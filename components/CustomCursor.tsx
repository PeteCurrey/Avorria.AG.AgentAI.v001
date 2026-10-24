"use client";

import { useEffect, useRef, useState } from "react";

type CursorType = "default" | "hover" | "view" | "drag";

// Ring config per cursor type
const RING_CONFIG: Record<CursorType, { size: number; classes: string }> = {
  default: {
    size: 32,
    classes: "border border-white/30 bg-transparent",
  },
  hover: {
    size: 48,
    classes: "border border-white/60 bg-white/5",
  },
  view: {
    size: 78,
    classes: "border-none bg-white text-black",
  },
  drag: {
    size: 64,
    classes: "border border-white/60 bg-black/70 backdrop-blur-sm text-white",
  },
};

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  // Refs for direct DOM manipulation — no re-render on mouse move
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);
  const currentTypeRef = useRef<CursorType>("default");
  const currentLabelRef = useRef<string>("");

  useEffect(() => {
    // Fine-pointer devices only (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // ── PRIMARY DOT — instant, zero-delay hardware transform ──────────
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px,${y - 3}px,0)`;
      }

      // ── RING — also instant; CSS transition only on width/height/opacity ─
      if (ringRef.current) {
        const cfg = RING_CONFIG[currentTypeRef.current];
        const offset = cfg.size / 2;
        ringRef.current.style.transform = `translate3d(${x - offset}px,${y - offset}px,0)`;
      }

      // Show cursor on first move
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setVisible(true);
      }

      // ── CURSOR TYPE DETECTION ────────────────────────────────────────────
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
        } else if (
          cursorAttr === "hover" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
        ) {
          nextType = "hover";
          nextLabel = labelAttr || "";
        }
      }

      // Only trigger React re-render on actual state change
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!mounted) return null;

  const cfg = RING_CONFIG[cursorType];
  const showLabel = cursorLabel && (cursorType === "view" || cursorType === "drag");

  return (
    <>
      {/* Primary Dot — hardware-speed, no transition */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[10001]"
        style={{
          willChange: "transform",
          opacity: visible ? 1 : 0,
          transition: "opacity 150ms ease",
          transform: "translate3d(-200px,-200px,0)",
        }}
      />

      {/* Follower Ring — instant position, CSS-only size transition */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none z-[10000] uppercase select-none font-mono font-medium tracking-widest text-[11px] ${cfg.classes}`}
        style={{
          willChange: "transform",
          width: cfg.size,
          height: cfg.size,
          // CSS transition ONLY on non-positional properties
          transition:
            "width 180ms cubic-bezier(0.34,1.56,0.64,1), height 180ms cubic-bezier(0.34,1.56,0.64,1), opacity 150ms ease, background-color 150ms ease, border-color 150ms ease",
          opacity: visible ? 1 : 0,
          transform: "translate3d(-200px,-200px,0)",
        }}
      >
        {showLabel ? cursorLabel : null}
      </div>
    </>
  );
}
