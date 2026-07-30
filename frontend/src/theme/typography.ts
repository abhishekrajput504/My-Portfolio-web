import type { TypographyVariantsOptions } from '@mui/material/styles'

const fontFamily = "'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
const fontFamilyMono = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"

export const typography: TypographyVariantsOptions = {
  fontFamily,
  fontFamilyMono,
  h1: {
    fontFamily,
    fontWeight: 700,
    fontSize: 'clamp(2.75rem, 2rem + 3vw, 5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontFamily,
    fontWeight: 700,
    fontSize: 'clamp(2.25rem, 1.8rem + 1.8vw, 3.25rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  h3: {
    fontFamily,
    fontWeight: 600,
    fontSize: 'clamp(1.5rem, 1.3rem + 0.8vw, 2rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h4: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
  },
  h6: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.4,
  },
  subtitle1: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: 1.5,
    color: '#A1A1AA',
  },
  subtitle2: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  body1: {
    fontFamily,
    fontWeight: 400,
    fontSize: '1.0625rem',
    lineHeight: 1.7,
  },
  body2: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.9375rem',
    lineHeight: 1.65,
  },
  button: {
    fontFamily,
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '-0.005em',
  },
  caption: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.8125rem',
    color: '#71717A',
  },
  overline: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.8125rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontFamilyMono: string
  }
  interface TypographyVariantsOptions {
    fontFamilyMono?: string
  }
}
