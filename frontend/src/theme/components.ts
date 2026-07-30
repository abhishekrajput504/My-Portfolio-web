import type { Components, Theme } from '@mui/material/styles'
import { radius, shadow, transition, glass } from './tokens'
import { surfaceColors } from './palette'
import { LinkBehavior } from '@/routing/LinkBehavior'

export const components: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
      underline: 'none',
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: '#08080A',
      },
      '::selection': {
        backgroundColor: 'rgba(59, 130, 246, 0.35)',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: radius.pill,
        padding: '10px 24px',
        fontSize: '0.9375rem',
        transition: `all ${transition.base}`,
      },
      contained: {
        boxShadow: shadow.accent,
        '&:hover': {
          boxShadow: '0 10px 30px -6px rgba(59, 130, 246, 0.6)',
          transform: 'translateY(-1px)',
        },
      },
      outlined: {
        borderColor: surfaceColors.charcoalBorderStrong,
        '&:hover': {
          borderColor: 'rgba(255, 255, 255, 0.28)',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
      },
      text: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: `all ${transition.fast}`,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          transform: 'translateY(-1px)',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: surfaceColors.charcoal,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        borderRadius: radius.lg,
        transition: `border-color ${transition.base}, transform ${transition.base}, box-shadow ${transition.base}`,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: radius.pill,
        fontWeight: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: `1px solid ${surfaceColors.charcoalBorder}`,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: radius.md,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        transition: `border-color ${transition.base}, background-color ${transition.base}`,
        '& fieldset': {
          borderColor: surfaceColors.charcoalBorder,
        },
        '&:hover fieldset': {
          borderColor: surfaceColors.charcoalBorderStrong,
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3B82F6',
          borderWidth: 1,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: glass.background,
        backdropFilter: glass.blur,
        WebkitBackdropFilter: glass.blur,
        borderBottom: glass.border,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: surfaceColors.charcoalElevated,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        fontSize: '0.75rem',
        borderRadius: radius.sm,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: '#0A0A0C',
        borderLeft: `1px solid ${surfaceColors.charcoalBorder}`,
      },
    },
  },
}
