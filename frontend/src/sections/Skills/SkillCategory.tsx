import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { SkillCategory as SkillCategoryType } from '@/types/skill'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'
import { SkillPill } from './SkillPill'

interface SkillCategoryProps {
  category: SkillCategoryType
  delay?: number
}

export function SkillCategory({ category, delay = 0 }: SkillCategoryProps) {
  return (
    <RevealOnScroll delay={delay} style={{ height: '100%' }}>
      <GlassCard
        sx={{
          p: { xs: 2.5, md: 3 },
          height: '100%',
          '&:hover': { borderColor: 'rgba(59, 130, 246, 0.35)' },
        }}
      >
        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'baseline', mb: 0.75 }}>
          <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem', fontWeight: 600 }}>
            {category.title}
          </Typography>
          <Typography variant="caption" sx={{ color: 'primary.light', fontVariantNumeric: 'tabular-nums' }}>
            {category.skills.length}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
          {category.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {category.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </Box>
      </GlassCard>
    </RevealOnScroll>
  )
}
