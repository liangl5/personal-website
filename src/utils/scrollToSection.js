export const NAV_OFFSET = 88;

export function scrollToSection(id, { instant = false } = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);
  window.scrollTo({ top, behavior: instant || prefersReduced ? 'auto' : 'smooth' });
}
