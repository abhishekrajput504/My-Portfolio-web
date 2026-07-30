import { Navigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'
import { Layout } from '@/layout/Layout'
import { SeoHead } from '@/components/SeoHead'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { LazyImage } from '@/components/LazyImage'
import { AnimatedButton } from '@/components/AnimatedButton'
import { GlassCard } from '@/components/GlassCard'
import { projects } from '@/data/projects'
import { layout } from '@/theme/tokens'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/404" replace />

  return (
    <Layout>
      <SeoHead
        title={`${project.title} — Abhishek Rajput`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.image}
      />

      <Box component="section" sx={{ pt: { xs: 14, md: 16 }, pb: layout.sectionPaddingY }}>
        <Container maxWidth="lg">
          <RevealOnScroll>
            <AnimatedButton href="/#projects" startIcon={<FiArrowLeft />} sx={{ mb: 4, color: 'text.secondary' }}>
              Back to projects
            </AnimatedButton>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640, mb: 3 }}>
              {project.summary}
            </Typography>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.5, mb: 5 }}>
              {project.githubUrl && (
                <AnimatedButton
                  variant="outlined"
                  href={project.githubUrl}
                  target="_blank"
                  startIcon={<FiGithub />}
                >
                  View source
                </AnimatedButton>
              )}
              {project.liveUrl && (
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  href={project.liveUrl}
                  target="_blank"
                  startIcon={<FiExternalLink />}
                >
                  Live demo
                </AnimatedButton>
              )}
            </Stack>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                mb: { xs: 6, md: 8 },
                aspectRatio: '16 / 8',
                backgroundColor: '#0C0C0F',
              }}
            >
              <LazyImage
                src={project.image}
                alt={`${project.title} architecture preview`}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </RevealOnScroll>

          <Grid container spacing={{ xs: 6, md: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <RevealOnScroll>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Overview
                </Typography>
                <Stack spacing={2} sx={{ mb: 5 }}>
                  {project.description.map((paragraph, i) => (
                    <Typography key={i} variant="body1" sx={{ color: 'text.secondary' }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </RevealOnScroll>

              <RevealOnScroll>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Key features
                </Typography>
                <Stack spacing={1.5} sx={{ mb: 5 }}>
                  {project.features.map((feature) => (
                    <Stack key={feature} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <Box sx={{ color: 'primary.light', mt: 0.4, flexShrink: 0 }}>
                        <FiCheck size={14} />
                      </Box>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </RevealOnScroll>

              <RevealOnScroll>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Architecture
                </Typography>
                <GlassCard sx={{ p: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontFamily: 'fontFamilyMono', lineHeight: 1.8 }}
                  >
                    {project.architecture}
                  </Typography>
                </GlassCard>
              </RevealOnScroll>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <RevealOnScroll delay={0.1}>
                <GlassCard sx={{ p: 3, position: { md: 'sticky' }, top: { md: 100 } }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
                    Tech stack
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {project.techStack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.featured ? 'Featured project' : 'Side project'}
                  </Typography>
                </GlassCard>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}
