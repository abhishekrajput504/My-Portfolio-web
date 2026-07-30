import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
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
      component={motion.div}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 2,
        py: 1.25,
        borderRadius: `${radius.pill}px`,
        backgroundColor: surfaceColors.charcoal,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        transition: `border-color ${transition.base}, background-color ${transition.base}`,
        '&:hover': {
          borderColor: 'rgba(59, 130, 246, 0.4)',
          backgroundColor: 'rgba(59, 130, 246, 0.06)',
        },
      }}
    >
      <Icon size={16} />
      <Typography variant="body2" sx={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
        {skill.name}
      </Typography>
    </Box>
  )
}
