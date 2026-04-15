// Plausible Analytics event tracking helper
// See PRD §7.13 for full event list

type PlausibleEventName =
  | "resume_download"
  | "cta_hero_projects"
  | "cta_hero_resume"
  | "story_tab_switch"
  | "story_phase_next"
  | "story_phase_dot_click"
  | "story_outcomes_viewed"
  | "testimonial_submit_start"
  | "testimonial_submit_success"
  | "blog_read_50pct"
  | "blog_read_100pct"
  | "contact_submit";

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number> }
    ) => void;
  }
}

export function trackEvent(
  eventName: PlausibleEventName,
  props?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, props ? { props } : undefined);
  }
}
