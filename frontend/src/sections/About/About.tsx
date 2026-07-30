import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { FiMapPin, FiBriefcase } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/SectionHeading'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { StatsRow } from './StatsRow'
import { Timeline } from './Timeline'

export function About() {
  return (
    <Box id={SECTION_IDS.about} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="About" title="The engineer behind the code" />

        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <RevealOnScroll>
              <GlassCard
                sx={{
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  backgroundImage:
                    'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'fontFamilyMono',
                    fontSize: 'clamp(4rem, 12vw, 7rem)',
                    fontWeight: 600,
                    color: 'transparent',
                    background: 'linear-gradient(160deg, #F5F5F7 20%, #3B82F6 130%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  {profile.initials}
                </Typography>
              </GlassCard>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <FiMapPin size={16} color="#A1A1AA" />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {profile.location}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <FiBriefcase size={16} color="#A1A1AA" />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {profile.currentRole} at {profile.currentCompany}
                  </Typography>
                </Stack>
              </Stack>
            </RevealOnScroll>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {profile.bio.map((paragraph, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {paragraph}
                  </Typography>
                </RevealOnScroll>
              ))}
              <Box sx={{ pt: 1 }}>
                <StatsRow />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <RevealOnScroll>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Experience &amp; education
          </Typography>
        </RevealOnScroll>
        <Timeline />
      </Container>
    </Box>
  )
}
