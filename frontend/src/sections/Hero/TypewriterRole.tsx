import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTypewriter } from '@/hooks/useTypewriter'
import { profile } from '@/data/profile'

export function TypewriterRole() {
  const text = useTypewriter(profile.roles)

  return (
    <Typography
      variant="h4"
      component="p"
      sx={{
        fontFamily: 'fontFamilyMono',
        color: 'primary.light',
        fontWeight: 500,
        minHeight: { xs: 32, md: 40 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {text}
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '0.9em',
          ml: 0.5,
          backgroundColor: 'primary.light',
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Typography>
  )
}
