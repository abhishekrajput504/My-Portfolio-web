/** Design tokens shared across the theme system — the single source of truth for spacing, radius, shadow and glass values. */

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const

export const shadow = {
  // Dark-surface elevation: soft black falloff, no colored ambient light.
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
  sm: '0 2px 8px 0 rgba(0, 0, 0, 0.45)',
  md: '0 8px 24px -4px rgba(0, 0, 0, 0.5)',
  lg: '0 16px 48px -8px rgba(0, 0, 0, 0.55)',
  // Accent glow for primary CTAs / focus states.
  accent: '0 8px 24px -6px rgba(59, 130, 246, 0.45)',
} as const

export const glass = {
  background: 'rgba(18, 18, 21, 0.72)',
  backgroundLight: 'rgba(24, 24, 28, 0.55)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  blur: 'blur(20px) saturate(140%)',
} as const

export const layout = {
  maxWidth: 1200,
  navHeight: 72,
  sectionPaddingY: { xs: 10, md: 14 },
} as const

export const transition = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '450ms cubic-bezier(0.16, 1, 0.3, 1)',
} as const

/** Framer Motion easing curve matching `transition.slow` — for use in motion variants. */
export const easeOut = [0.16, 1, 0.3, 1] as const
