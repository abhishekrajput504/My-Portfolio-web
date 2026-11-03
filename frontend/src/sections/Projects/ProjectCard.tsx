import type { KeyboardEvent } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowUpRight, FiTrendingUp } from 'react-icons/fi'
import type { Project } from '@/types/project'
import { LazyImage } from '@/components/LazyImage'
import { radius, transition } from '@/theme/tokens'
import { surfaceColors } from '@/theme/palette'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate()
  const detailPath = `/projects/${project.slug}`

  return (
    <Box
      component={motion.div}
      role="link"
      tabIndex={0}
      aria-label={`View case study: ${project.title}`}
      onClick={() => navigate(detailPath)}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          navigate(detailPath)
        }
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      sx={{
        display: 'block',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        borderRadius: `${radius.lg}px`,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        backgroundColor: surfaceColors.charcoal,
        overflow: 'hidden',
        transition: `border-color ${transition.base}`,
        '&:hover': { borderColor: 'rgba(59, 130, 246, 0.35)' },
        '&:hover .project-cta': { color: 'primary.light' },
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '16 / 10', backgroundColor: '#0C0C0F', overflow: 'hidden' }}>
        <LazyImage
          src={project.image}
          alt={`${project.title} preview`}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {project.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              position: 'absolute',
              top: 14,
              left: 14,
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              borderColor: 'rgba(59, 130, 246, 0.35)',
              color: 'primary.light',
            }}
          />
        )}
      </Box>

      <Box sx={{ p: 3 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Typography variant="h5">{project.title}</Typography>
          <Stack direction="row" spacing={0.5}>
            {project.githubUrl && (
              <Tooltip title="View source" arrow>
                <IconButton
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  size="small"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FiGithub size={16} />
                </IconButton>
              </Tooltip>
            )}
            {project.liveUrl && (
              <Tooltip title="Live demo" arrow>
                <IconButton
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  size="small"
                  aria-label={`${project.title} live demo`}
                >
                  <FiExternalLink size={16} />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
          {project.summary}
        </Typography>

        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
          {project.techStack.slice(0, 5).map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>

        {project.businessImpact[0] && (
          <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start', mb: 2.5 }}>
            <Box sx={{ color: 'primary.light', mt: 0.3, flexShrink: 0 }}>
              <FiTrendingUp size={13} />
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {project.businessImpact[0]}
            </Typography>
          </Stack>
        )}

        <Typography
          className="project-cta"
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 600,
            color: 'text.primary',
            transition: `color ${transition.base}`,
          }}
        >
          View case study <FiArrowUpRight size={14} />
        </Typography>
      </Box>
    </Box>
  )
}
