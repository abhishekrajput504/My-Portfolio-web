import { useRef } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion, useInView } from 'framer-motion'
import type { Skill } from '@/types/skill'
import { iconRegistry } from './iconRegistry'
import { radius, transition } from '@/theme/tokens'
import { surfaceColors } from '@/theme/palette'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface SkillPillProps {
  skill: Skill
}

export function SkillPill({ skill }: SkillPillProps) {
  const Icon = iconRegistry[skill.icon]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Box
      ref={ref}
      component={motion.div}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      sx={{
        p: 2,
        borderRadius: `${radius.md}px`,
        backgroundColor: surfaceColors.charcoal,
        border: `1px solid ${surfaceColors.charcoalBorder}`,
        transition: `border-color ${transition.base}, background-color ${transition.base}`,
        '&:hover': {
          borderColor: 'rgba(59, 130, 246, 0.4)',
          backgroundColor: 'rgba(59, 130, 246, 0.06)',
        },
      }}
    >
      <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center', mb: 1.5 }}>
        <Icon size={17} />
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {skill.name}
        </Typography>
      </Stack>

      <Box
        sx={{
          height: 4,
          borderRadius: 999,
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          overflow: 'hidden',
        }}
      >
        <Box
          component={motion.div}
          initial={{ width: prefersReducedMotion ? `${skill.level}%` : 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          sx={{
            height: '100%',
            borderRadius: 999,
            background: 'linear-gradient(90deg, #2563EB, #60A5FA)',
          }}
        />
      </Box>
    </Box>
  )
}
