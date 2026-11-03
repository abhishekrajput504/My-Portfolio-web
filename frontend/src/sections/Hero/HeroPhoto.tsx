import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/GlassCard'
import { LazyImage } from '@/components/LazyImage'
import { profile } from '@/data/profile'
import { radius, easeOut } from '@/theme/tokens'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const PHOTO_SRC = '/images/profile.webp'

/**
 * Professional headshot in an elevated glass frame with a soft blue glow.
 * Falls back to the initials monogram treatment if no photo has been provided yet,
 * so the hero never shows a broken-image icon.
 */
export function HeroPhoto() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Box
      component={motion.div}
      initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
      sx={{ position: 'relative', maxWidth: 380, mx: { xs: 'auto', md: 0 } }}
    >
      <GlassCard
        sx={{
          p: 1.25,
          borderRadius: `${radius.xl}px`,
          border: '1px solid rgba(59, 130, 246, 0.22)',
          boxShadow: '0 0 70px -16px rgba(59, 130, 246, 0.4), 0 24px 60px -24px rgba(0, 0, 0, 0.65)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '4 / 5',
            borderRadius: `${radius.lg}px`,
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          {!photoFailed && (
            <LazyImage
              src={PHOTO_SRC}
              alt={`${profile.name} — ${profile.currentRole}`}
              onError={() => setPhotoFailed(true)}
              priority
              sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }}
            />
          )}
          {photoFailed && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'fontFamilyMono',
                  fontSize: '4.5rem',
                  fontWeight: 600,
                  color: 'transparent',
                  background: 'linear-gradient(160deg, #F5F5F7 20%, #3B82F6 130%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                {profile.initials}
              </Typography>
            </Box>
          )}
        </Box>
      </GlassCard>

      <GlassCard
        sx={{
          position: 'absolute',
          bottom: { xs: -14, md: -18 },
          left: { xs: '50%', md: -18 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          px: 2,
          py: 1.25,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderRadius: `${radius.pill}px`,
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#34D399',
            boxShadow: '0 0 0 3px rgba(52, 211, 153, 0.2)',
          }}
        />
        <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 500 }}>
          Open to opportunities
        </Typography>
      </GlassCard>
    </Box>
  )
}
