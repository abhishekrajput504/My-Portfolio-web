import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { FiTrendingUp, FiArrowUpRight } from 'react-icons/fi'
import type { Project } from '@/types/project'
import { LazyImage } from '@/components/LazyImage'
import { AnimatedButton } from '@/components/AnimatedButton'
import { radius, transition } from '@/theme/tokens'
import { surfaceColors } from '@/theme/palette'

interface ProjectSpotlightProps {
  project: Project
}

/** Full-width hero treatment for the flagship project, ahead of the standard card grid. */
export function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  const navigate = useNavigate()
  const detailPath = `/projects/${project.slug}`

  return (
    <Box
      sx={{
        borderRadius: `${radius.lg}px`,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        backgroundColor: surfaceColors.charcoal,
        overflow: 'hidden',
        transition: `border-color ${transition.base}`,
        '&:hover': { borderColor: 'rgba(59, 130, 246, 0.35)' },
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            onClick={() => navigate(detailPath)}
            sx={{
              position: 'relative',
              height: '100%',
              minHeight: { xs: 240, md: 340 },
              backgroundColor: '#101014',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <LazyImage
              src={project.image}
              alt={`${project.title} preview`}
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip
                label="Featured"
                size="small"
                sx={{
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  borderColor: 'rgba(59, 130, 246, 0.35)',
                  color: 'primary.light',
                }}
              />
              <Chip label="Case study" size="small" />
            </Stack>

            <Typography variant="h4" sx={{ mb: 1.5 }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {project.summary}
            </Typography>

            {project.businessImpact[0] && (
              <Stack
                direction="row"
                spacing={1.25}
                sx={{
                  alignItems: 'flex-start',
                  mb: 3,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                }}
              >
                <Box sx={{ color: 'primary.light', mt: 0.3, flexShrink: 0 }}>
                  <FiTrendingUp size={15} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {project.businessImpact[0]}
                </Typography>
              </Stack>
            )}

            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 3.5 }}>
              {project.techStack.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Stack>

            <Box sx={{ mt: 'auto' }}>
              <AnimatedButton
                variant="contained"
                color="primary"
                onClick={() => navigate(detailPath)}
                endIcon={<FiArrowUpRight />}
              >
                View case study
              </AnimatedButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
