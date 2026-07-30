import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

/** Suspense fallback for lazy-loaded routes. */
export function PageLoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <CircularProgress size={28} thickness={4} sx={{ color: 'primary.main' }} />
    </Box>
  )
}
