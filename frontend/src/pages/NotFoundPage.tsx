import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Layout } from '@/layout/Layout'
import { AnimatedButton } from '@/components/AnimatedButton'
import { SeoHead } from '@/components/SeoHead'

export function NotFoundPage() {
  return (
    <Layout>
      <SeoHead title="Page not found — Abhishek Rajput" description="This page doesn't exist." path="/404" />
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'fontFamilyMono',
            color: 'primary.main',
            fontSize: '0.9rem',
            mb: 2,
            letterSpacing: '0.05em',
          }}
        >
          404
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          This page went out of scope.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 440 }}>
          The page you're looking for doesn't exist or may have moved.
        </Typography>
        <AnimatedButton href="/" variant="contained" color="primary" size="large">
          Back to home
        </AnimatedButton>
      </Box>
    </Layout>
  )
}
