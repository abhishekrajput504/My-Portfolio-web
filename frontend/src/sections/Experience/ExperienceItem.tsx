import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { FiCheck } from 'react-icons/fi'
import type { ExperienceEntry } from '@/types/experience'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'

interface ExperienceItemProps {
  experience: ExperienceEntry
  delay?: number
}

export function ExperienceItem({ experience, delay = 0 }: ExperienceItemProps) {
  return (
    <RevealOnScroll delay={delay}>
      <GlassCard sx={{ p: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', mb: 2 }} spacing={1}>
          <Box>
            <Typography variant="h5">{experience.role}</Typography>
            <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 500 }}>
              {experience.company} · {experience.location}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{ fontFamily: 'fontFamilyMono', whiteSpace: 'nowrap', color: 'text.secondary' }}
          >
            {experience.startDate} — {experience.endDate}
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          {experience.summary}
        </Typography>

        <Stack spacing={1} sx={{ mb: 3 }}>
          {experience.responsibilities.map((item) => (
            <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
              <Box sx={{ color: 'primary.light', mt: 0.4, flexShrink: 0 }}>
                <FiCheck size={14} />
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

        {experience.achievements.length > 0 && (
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 2,
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: 'primary.light', mb: 1 }}>
              Impact
            </Typography>
            <Stack spacing={0.75}>
              {experience.achievements.map((item) => (
                <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                  → {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        )}

        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
          {experience.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
      </GlassCard>
    </RevealOnScroll>
  )
}
