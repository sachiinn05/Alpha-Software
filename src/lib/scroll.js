export function getLenis() {
  return window.__alphaLenis ?? null;
}

export function scrollToId(id, offset = -88) {
  const el = document.getElementById(id);
  if (!el) return false;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.15 });
    return true;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}
