import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { experiences } from '@/data/experience'
import { education } from '@/data/profile'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { surfaceColors } from '@/theme/palette'

interface TimelineRow {
  id: string
  icon: typeof FiBriefcase
  title: string
  subtitle: string
  period: string
  detail: string
}

const rows: TimelineRow[] = [
  ...experiences.map((exp) => ({
    id: exp.id,
    icon: FiBriefcase,
    title: exp.role,
    subtitle: exp.company,
    period: `${exp.startDate} — ${exp.endDate}`,
    detail: exp.summary,
  })),
  ...education.map((edu) => ({
    id: edu.id,
    icon: FiBookOpen,
    title: edu.degree,
    subtitle: edu.institution,
    period: `${edu.startDate} — ${edu.endDate}`,
    detail: edu.detail ?? '',
  })),
]

export function Timeline() {
  return (
    <Stack spacing={0}>
      {rows.map((row, index) => (
        <RevealOnScroll key={row.id} delay={index * 0.06}>
          <Box sx={{ display: 'flex', gap: 2.5 }}>
            <Stack sx={{ alignItems: 'center', flexShrink: 0 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: 'primary.light',
                }}
              >
                <row.icon size={16} />
              </Box>
              {index < rows.length - 1 && (
                <Box sx={{ flexGrow: 1, width: '1px', backgroundColor: surfaceColors.charcoalBorder, my: 0.5 }} />
              )}
            </Stack>
            <Box sx={{ pb: index < rows.length - 1 ? 4 : 0 }}>
              <Typography variant="caption" sx={{ color: 'primary.light' }}>
                {row.period}
              </Typography>
              <Typography variant="h6" sx={{ mt: 0.5 }}>
                {row.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                {row.subtitle}
              </Typography>
              {row.detail && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.detail}
                </Typography>
              )}
            </Box>
          </Box>
        </RevealOnScroll>
      ))}
    </Stack>
  )
}
