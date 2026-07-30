import type { PaletteOptions } from '@mui/material/styles'

/**
 * Dark-only palette: black / charcoal / white / grey, with a single blue accent.
 * No gradients, no secondary hues — restraint is the point.
 */
export const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
    contrastText: '#0A0A0B',
  },
  secondary: {
    main: '#A1A1AA',
    light: '#D4D4D8',
    dark: '#71717A',
    contrastText: '#0A0A0B',
  },
  success: {
    main: '#34D399',
  },
  error: {
    main: '#F87171',
  },
  warning: {
    main: '#FBBF24',
  },
  background: {
    default: '#08080A',
    paper: '#111113',
  },
  text: {
    primary: '#F5F5F7',
    secondary: '#A1A1AA',
    disabled: '#52525B',
  },
  divider: 'rgba(255, 255, 255, 0.08)',
}

/** Extra greys not modeled by MUI's default palette shape, exposed via theme augmentation (see theme/index.ts). */
export const surfaceColors = {
  charcoal: '#111113',
  charcoalElevated: '#18181B',
  charcoalBorder: 'rgba(255, 255, 255, 0.08)',
  charcoalBorderStrong: 'rgba(255, 255, 255, 0.14)',
}
