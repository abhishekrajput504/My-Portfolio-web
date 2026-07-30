import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { RevealOnScroll } from './RevealOnScroll'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <RevealOnScroll>
      <Box
        sx={{
          mb: { xs: 5, md: 7 },
          maxWidth: subtitle ? 640 : undefined,
          mx: align === 'center' ? 'auto' : undefined,
          textAlign: align,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}
        >
          {eyebrow}
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: subtitle ? 2 : 0 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </RevealOnScroll>
  )
}
