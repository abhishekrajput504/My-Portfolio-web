import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/SectionHeading'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'
import { SocialIcons } from '@/components/SocialIcons'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <Box id={SECTION_IDS.contact} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          subtitle="Open to Java backend, Spring Boot, and microservices roles. The fastest way to reach me is the form below or a direct email."
        />

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <RevealOnScroll>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: 'primary.light',
                      flexShrink: 0,
                    }}
                  >
                    <FiMail size={18} />
                  </Box>
                  <Box>
                    <Typography variant="caption">Email</Typography>
                    <Typography variant="body1" component="a" href={profile.socials.email} sx={{ display: 'block', textDecoration: 'none' }}>
                      {profile.email}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: 'primary.light',
                      flexShrink: 0,
                    }}
                  >
                    <FiMapPin size={18} />
                  </Box>
                  <Box>
                    <Typography variant="caption">Location</Typography>
                    <Typography variant="body1">{profile.location}</Typography>
                  </Box>
                </Stack>

                <Box sx={{ pt: 1 }}>
                  <Typography variant="caption" sx={{ display: 'block', mb: 1.5 }}>
                    Elsewhere
                  </Typography>
                  <SocialIcons />
                </Box>
              </Stack>
            </RevealOnScroll>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <RevealOnScroll delay={0.1}>
              <GlassCard sx={{ p: { xs: 3, md: 4 } }}>
                <ContactForm />
              </GlassCard>
            </RevealOnScroll>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
