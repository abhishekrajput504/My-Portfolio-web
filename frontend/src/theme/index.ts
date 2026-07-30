import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'
import { radius } from './tokens'

const baseTheme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: radius.md,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
    '0 2px 8px 0 rgba(0, 0, 0, 0.45)',
    '0 2px 8px 0 rgba(0, 0, 0, 0.45)',
    '0 4px 12px 0 rgba(0, 0, 0, 0.48)',
    '0 4px 12px 0 rgba(0, 0, 0, 0.48)',
    '0 8px 24px -4px rgba(0, 0, 0, 0.5)',
    '0 8px 24px -4px rgba(0, 0, 0, 0.5)',
    '0 8px 24px -4px rgba(0, 0, 0, 0.5)',
    '0 12px 32px -6px rgba(0, 0, 0, 0.52)',
    '0 12px 32px -6px rgba(0, 0, 0, 0.52)',
    '0 12px 32px -6px rgba(0, 0, 0, 0.52)',
    '0 16px 48px -8px rgba(0, 0, 0, 0.55)',
    '0 16px 48px -8px rgba(0, 0, 0, 0.55)',
    '0 16px 48px -8px rgba(0, 0, 0, 0.55)',
    '0 16px 48px -8px rgba(0, 0, 0, 0.55)',
    '0 20px 56px -10px rgba(0, 0, 0, 0.58)',
    '0 20px 56px -10px rgba(0, 0, 0, 0.58)',
    '0 20px 56px -10px rgba(0, 0, 0, 0.58)',
    '0 20px 56px -10px rgba(0, 0, 0, 0.58)',
    '0 24px 64px -12px rgba(0, 0, 0, 0.6)',
    '0 24px 64px -12px rgba(0, 0, 0, 0.6)',
    '0 24px 64px -12px rgba(0, 0, 0, 0.6)',
    '0 24px 64px -12px rgba(0, 0, 0, 0.6)',
    '0 24px 64px -12px rgba(0, 0, 0, 0.6)',
  ],
  components,
})

export const theme = responsiveFontSizes(baseTheme, { breakpoints: ['sm', 'md', 'lg'] })

export * from './tokens'
export * from './palette'
