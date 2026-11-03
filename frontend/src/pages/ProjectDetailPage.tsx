import { Navigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiAlertCircle,
  FiCheckCircle,
  FiTrendingUp,
  FiAlertTriangle,
} from 'react-icons/fi'
import { Layout } from '@/layout/Layout'
import { SeoHead } from '@/components/SeoHead'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { LazyImage } from '@/components/LazyImage'
import { AnimatedButton } from '@/components/AnimatedButton'
import { GlassCard } from '@/components/GlassCard'
import { projects } from '@/data/projects'
import { layout } from '@/theme/tokens'

interface DetailSectionProps {
  icon: typeof FiAlertCircle
  title: string
  items: string[]
  accent?: boolean
}

function DetailSection({ icon: Icon, title, items, accent = false }: DetailSectionProps) {
  return (
    <RevealOnScroll>
      <Box sx={{ mb: 5 }}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 2 }}>
          <Icon size={16} color={accent ? '#60A5FA' : '#71717A'} />
          <Typography variant="h4" sx={{ fontSize: '1.25rem' }}>
            {title}
          </Typography>
        </Stack>
        <Stack spacing={1.5}>
          {items.map((item) => (
            <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <Box sx={{ color: accent ? 'primary.light' : 'text.secondary', mt: 0.4, flexShrink: 0 }}>
                <FiCheck size={13} />
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </RevealOnScroll>
  )
}

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
                <Typography variant="h4" sx={{ mb: 2, fontSize: '1.25rem' }}>
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

              <DetailSection icon={FiAlertCircle} title="Problem" items={project.problem} />
              <DetailSection icon={FiCheckCircle} title="Solution" items={project.solution} accent />

              <RevealOnScroll>
                <Typography variant="h4" sx={{ mb: 2, fontSize: '1.25rem' }}>
                  Architecture
                </Typography>
                <GlassCard sx={{ p: 3, mb: 5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontFamily: 'fontFamilyMono', lineHeight: 1.8 }}
                  >
                    {project.architecture}
                  </Typography>
                </GlassCard>
              </RevealOnScroll>

              <DetailSection icon={FiCheck} title="Key features" items={project.features} />

              <RevealOnScroll>
                <Box
                  sx={{
                    mb: 5,
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                  }}
                >
                  <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 2 }}>
                    <FiTrendingUp size={16} color="#60A5FA" />
                    <Typography variant="h4" sx={{ fontSize: '1.25rem', color: 'primary.light' }}>
                      Business impact
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    {project.businessImpact.map((item) => (
                      <Typography key={item} variant="body1" sx={{ color: 'text.primary' }}>
                        → {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </RevealOnScroll>

              <DetailSection icon={FiAlertTriangle} title="Challenges" items={project.challenges} />
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
                    {project.featured ? 'Featured project' : 'Professional project'}
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
