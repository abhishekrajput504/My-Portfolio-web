import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { AnimatedButton } from '@/components/AnimatedButton'
import { SocialIcons } from '@/components/SocialIcons'
import { GlassCard } from '@/components/GlassCard'
import { scrollToSection } from '@/utils/scroll'
import { SECTION_IDS } from '@/utils/constants'
import { easeOut } from '@/theme/tokens'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { ParticleBackground } from './ParticleBackground'
import { TypewriterRole } from './TypewriterRole'

const codeSnippet = `@RestController
class ContactController {
  @PostMapping("/api/contact")
  ResponseEntity<?> submit(...)
}`

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
        pt: { xs: 12, md: 0 },
      }}
    >
      <ParticleBackground />

      <Box
        component={motion.div}
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'absolute',
          top: '18%',
          right: '6%',
          width: 260,
          zIndex: 1,
        }}
      >
        <GlassCard sx={{ p: 2, opacity: 0.7 }}>
          <Typography
            component="pre"
            sx={{
              fontFamily: 'fontFamilyMono',
              fontSize: '0.7rem',
              lineHeight: 1.6,
              color: 'text.secondary',
              m: 0,
              whiteSpace: 'pre-wrap',
            }}
          >
            {codeSnippet}
          </Typography>
        </GlassCard>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack spacing={3} sx={{ maxWidth: 780 }}>
          <Typography
            component={motion.p}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            variant="subtitle2"
            sx={{ color: 'text.secondary' }}
          >
            Hi, I&apos;m {profile.name}
          </Typography>

          <Typography
            component={motion.h1}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            variant="h1"
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
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          >
            <TypewriterRole />
          </Box>

          <Typography
            component={motion.p}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 560 }}
          >
            {profile.tagline}
          </Typography>

          <Stack
            component={motion.div}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 1 }}
          >
            <AnimatedButton
              variant="contained"
              color="primary"
              size="large"
              href={profile.resumeUrl}
              target="_blank"
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
              onClick={() => scrollToSection(SECTION_IDS.contact)}
            >
              Contact Me
            </AnimatedButton>
          </Stack>

          <Box
            component={motion.div}
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            sx={{ pt: 2 }}
          >
            <SocialIcons />
          </Box>
        </Stack>
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
