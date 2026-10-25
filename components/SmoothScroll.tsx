"use client";

/**
 * SmoothScroll — native hardware-accelerated scroll container.
 *
 * Removes JavaScript wheel interception and lerp lag to allow the browser's
 * compositor thread to drive 120Hz fluid momentum scrolling with zero input lag.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
