import Box, { type BoxProps } from '@mui/material/Box'
import { glass, radius, transition } from '@/theme/tokens'

/** A restrained glassmorphism surface — use sparingly (nav, floating cards), never as a full-viewport layer. */
export function GlassCard({ sx, children, ...rest }: BoxProps) {
  return (
    <Box
      sx={{
        backgroundColor: glass.backgroundLight,
        backdropFilter: glass.blur,
        WebkitBackdropFilter: glass.blur,
        border: glass.border,
        borderRadius: `${radius.lg}px`,
        transition: `border-color ${transition.base}, transform ${transition.base}`,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
