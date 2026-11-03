import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { FiTrendingUp, FiBriefcase } from 'react-icons/fi'
import type { ExperienceEntry } from '@/types/experience'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'
import { surfaceColors } from '@/theme/palette'

interface ExperienceItemProps {
  experience: ExperienceEntry
  isLast: boolean
  delay?: number
}

export function ExperienceItem({ experience, isLast, delay = 0 }: ExperienceItemProps) {
  return (
    <RevealOnScroll delay={delay}>
      <Box sx={{ display: 'flex', gap: { xs: 2.5, md: 4 } }}>
        <Stack sx={{ alignItems: 'center', flexShrink: 0, pt: 1 }}>
          <Box
            sx={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              flexShrink: 0,
              backgroundColor: experience.current ? 'primary.main' : 'transparent',
              border: '2px solid',
              borderColor: experience.current ? 'primary.light' : surfaceColors.charcoalBorderStrong,
              boxShadow: experience.current ? '0 0 0 4px rgba(59, 130, 246, 0.15)' : 'none',
            }}
          />
          {!isLast && (
            <Box sx={{ flexGrow: 1, width: '1px', backgroundColor: surfaceColors.charcoalBorder, my: 1 }} />
          )}
        </Stack>

        <Box sx={{ flexGrow: 1, minWidth: 0, pb: isLast ? 0 : { xs: 5, md: 6 } }}>
          <GlassCard sx={{ p: { xs: 3, md: 4 } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-start' }, mb: 2 }}
            >
              <Box>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 0.5 }}>
                  <Typography variant="h5">{experience.role}</Typography>
                  {experience.current && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        borderColor: 'rgba(59, 130, 246, 0.35)',
                        color: 'primary.light',
                        fontWeight: 600,
                        height: 22,
                      }}
                    />
                  )}
                </Stack>
                <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 500 }}>
                  {experience.company}
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 0.25 }}>
                  {experience.location} · {experience.employmentType}
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

            <Box
              sx={{
                mb: 3,
                p: 2.5,
                borderRadius: 2,
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
              }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
                <FiTrendingUp size={15} color="#60A5FA" />
                <Typography variant="subtitle2" sx={{ color: 'primary.light' }}>
                  Business impact
                </Typography>
              </Stack>
              <Stack spacing={1}>
                {experience.impact.map((item) => (
                  <Typography key={item} variant="body2" sx={{ color: 'text.primary' }}>
                    → {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.25 }}>
              <FiBriefcase size={13} color="#71717A" />
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                Scope of work
              </Typography>
            </Stack>
            <Stack spacing={0.75} sx={{ mb: 3 }}>
              {experience.responsibilities.map((item) => (
                <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                  {item}
                </Typography>
              ))}
            </Stack>

            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
              {experience.technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Stack>
          </GlassCard>
        </Box>
      </Box>
    </RevealOnScroll>
  )
}
