/**
 * Avorria Telemetry — Privacy-preserving analytics module.
 *
 * Tracks meaningful commercial conversion signals without third-party
 * ad pixels, cross-site cookies, or fingerprinting. All events are
 * console-logged in development and silenced in production unless
 * NEXT_PUBLIC_ANALYTICS_ENDPOINT is set (pointing to your own edge
 * collector or Plausible/Fathom self-hosted instance).
 *
 * Respects:
 *  - navigator.doNotTrack === "1"
 *  - globalPrivacyControl (GPC)
 *  - Vercel Speed Insights is preferred for RUM — this module handles
 *    custom business events only.
 */

type EventPayload = {
  event: string;
  properties?: Record<string, string | number | boolean | undefined>;
};

function shouldTrack(): boolean {
  if (typeof window === "undefined") return false;
  // Respect Do Not Track
  if (navigator.doNotTrack === "1") return false;
  // Respect Global Privacy Control
  if ((navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl) return false;
  return true;
}

async function dispatch(payload: EventPayload): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

  if (process.env.NODE_ENV !== "production") {
    console.debug("[Avorria Analytics]", payload.event, payload.properties ?? "");
    return;
  }

  if (!endpoint || !shouldTrack()) return;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        url: window.location.href,
        referrer: document.referrer || undefined,
        timestamp: new Date().toISOString(),
      }),
      keepalive: true,
      signal: AbortSignal.timeout(3000),
    });
  } catch {
    // Telemetry must never surface errors to users
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

export function trackPageView(route: string): void {
  void dispatch({ event: "page_view", properties: { route } });
}

export function trackServiceEngagement(serviceId: string): void {
  void dispatch({ event: "service_engagement", properties: { serviceId } });
}

export function trackCaseStudyView(projectSlug: string): void {
  void dispatch({ event: "case_study_view", properties: { projectSlug } });
}

export function trackLabInteraction(experimentId: string, action?: string): void {
  void dispatch({ event: "lab_interaction", properties: { experimentId, action } });
}

export function trackCtaClick(ctaName: string, destination: string): void {
  void dispatch({ event: "cta_click", properties: { ctaName, destination } });
}

export function trackBriefStep(stepNumber: number, stepName: string): void {
  void dispatch({ event: "brief_step", properties: { stepNumber, stepName } });
}

export function trackBriefCompletion(needs: string[], budget: string): void {
  void dispatch({
    event: "brief_completion",
    properties: {
      needsCount: needs.length,
      primaryNeed: needs[0],
      budget,
    },
  });
}

export function trackNewsletterSignup(): void {
  void dispatch({ event: "newsletter_signup" });
}
