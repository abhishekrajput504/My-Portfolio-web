import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { FiMapPin, FiBriefcase, FiBookOpen, FiCheckCircle } from 'react-icons/fi'
import { profile, education } from '@/data/profile'
import { SectionHeading } from '@/components/SectionHeading'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { StatsRow } from './StatsRow'
import { Timeline } from './Timeline'

const facts = [
  { icon: FiBriefcase, label: 'Current role', value: `${profile.currentRole} at ${profile.currentCompany}` },
  { icon: FiMapPin, label: 'Location', value: profile.location },
  { icon: FiBookOpen, label: 'Education', value: [education[0].degree, education[0].institution].filter(Boolean).join(', ') },
  { icon: FiCheckCircle, label: 'Availability', value: 'Open to opportunities' },
]

export function About() {
  return (
    <Box id={SECTION_IDS.about} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="About" title="The engineer behind the code" />

        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <RevealOnScroll>
              <GlassCard sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                  At a glance
                </Typography>
                <Stack spacing={2.5}>
                  {facts.map((fact) => (
                    <Stack key={fact.label} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          color: 'primary.light',
                          flexShrink: 0,
                        }}
                      >
                        <fact.icon size={16} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="caption" sx={{ display: 'block' }}>
                          {fact.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                          {fact.value}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </GlassCard>
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
