import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { Skill } from '@/types/skill'
import { iconRegistry } from './iconRegistry'
import { radius, transition } from '@/theme/tokens'
import { surfaceColors } from '@/theme/palette'

interface SkillPillProps {
  skill: Skill
}

export function SkillPill({ skill }: SkillPillProps) {
  const Icon = iconRegistry[skill.icon]

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.875,
        borderRadius: `${radius.sm}px`,
        backgroundColor: surfaceColors.charcoal,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        transition: `border-color ${transition.fast}, background-color ${transition.fast}, color ${transition.fast}`,
        color: 'text.secondary',
        '&:hover': {
          borderColor: 'rgba(59, 130, 246, 0.45)',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          color: 'primary.light',
        },
      }}
    >
      <Icon size={15} aria-hidden />
      <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary', lineHeight: 1.2 }}>
        {skill.name}
      </Typography>
    </Box>
  )
}
