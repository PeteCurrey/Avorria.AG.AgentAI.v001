"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Full-screen page transition curtain.
 *
 * On route change: obsidian panel slides UP from the bottom to cover the screen,
 * then slides UP off the top to reveal the new page.
 *
 * The curtain only runs when the pathname changes (not on first load),
 * and auto-dismisses after 600ms total.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          {children}

          {/* Exit/Enter curtain — slides as the key changes */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-[var(--color-bg)] origin-bottom pointer-events-none"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: "bottom" }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Entry reveal — slides up off the top */}
      <AnimatePresence>
        <motion.div
          key={pathname + "-enter"}
          className="fixed inset-0 z-[9997] bg-[var(--color-bg)] pointer-events-none"
          initial={{ scaleY: 1, originY: 0 }}
          animate={{ scaleY: 0, originY: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          aria-hidden="true"
        />
      </AnimatePresence>
    </>
  );
}
