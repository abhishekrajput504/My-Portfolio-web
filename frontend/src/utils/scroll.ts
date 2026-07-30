import { layout } from '@/theme/tokens'

/** Smooth-scrolls to a section by id, offsetting for the sticky nav height. */
export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - layout.navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}
