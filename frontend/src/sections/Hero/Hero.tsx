import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowRight, FiDownload } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { experiences } from '@/data/experience'
import { AnimatedButton } from '@/components/AnimatedButton'
import { SocialIcons } from '@/components/SocialIcons'
import { scrollToSection } from '@/utils/scroll'
import { SECTION_IDS } from '@/utils/constants'
import { easeOut } from '@/theme/tokens'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { ParticleBackground } from './ParticleBackground'
import { TypewriterRole } from './TypewriterRole'
import { HeroPhoto } from './HeroPhoto'

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Box
      id={SECTION_IDS.hero}
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        py: { xs: 16, md: 12 },
      }}
    >
      <ParticleBackground />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 8, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Stack spacing={3.5}>
              <Stack
                component={motion.div}
                direction="row"
                spacing={1.25}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
                sx={{ alignItems: 'center' }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'primary.main' }} />
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Hi, I&apos;m {profile.name}
                </Typography>
              </Stack>

              <Typography
                component={motion.h1}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
                variant="h1"
                sx={{ maxWidth: 640 }}
              >
                Building backend systems{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  that don&apos;t fall over.
                </Box>
              </Typography>

              <Box
                component={motion.div}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: easeOut }}
              >
                <TypewriterRole />
              </Box>

              <Typography
                component={motion.p}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: easeOut }}
                variant="body1"
                sx={{ color: 'text.secondary', maxWidth: 520 }}
              >
                {profile.tagline}
              </Typography>

              <Stack
                component={motion.div}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38, ease: easeOut }}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ alignItems: { sm: 'center' }, pt: 1.5 }}
              >
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  size="large"
                  href={profile.resumeUrl}
                  download="Abhishek_Rajput_Resume.pdf"
                  startIcon={<FiDownload />}
                >
                  Download Resume
                </AnimatedButton>
                <AnimatedButton
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection(SECTION_IDS.projects)}
                >
                  View Projects
                </AnimatedButton>
                <AnimatedButton
                  variant="text"
                  size="large"
                  endIcon={<FiArrowRight />}
                  onClick={() => scrollToSection(SECTION_IDS.contact)}
                  sx={{ color: 'text.primary' }}
                >
                  Contact Me
                </AnimatedButton>
              </Stack>

              <Box
                component={motion.div}
                initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                sx={{ pt: 1.5 }}
              >
                <SocialIcons />
              </Box>

              <Box
                component={motion.div}
                initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                sx={{ pt: 2.5, borderTop: '1px solid rgba(255, 255, 255, 0.06)', maxWidth: 560 }}
              >
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: 'text.secondary', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.25 }}
                >
                  Experience across
                </Typography>
                <Stack direction="row" sx={{ flexWrap: 'wrap', columnGap: 3, rowGap: 1 }}>
                  {experiences.map((exp) => (
                    <Typography
                      key={exp.id}
                      variant="body2"
                      sx={{ fontWeight: 600, color: exp.current ? 'text.primary' : 'rgba(245, 245, 247, 0.62)' }}
                    >
                      {exp.company.replace(/ (Pvt\.|Smart Poles).*$/, '')}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
            <HeroPhoto />
          </Grid>
        </Grid>
      </Container>

      <Box
        component="button"
        aria-label="Scroll to about section"
        onClick={() => scrollToSection(SECTION_IDS.about)}
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'text.secondary',
          animation: prefersReducedMotion ? 'none' : 'bounce 2.2s ease-in-out infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <FiArrowDown size={20} />
      </Box>
    </Box>
  )
}
