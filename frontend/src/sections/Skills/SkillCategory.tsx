import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import type { SkillCategory as SkillCategoryType } from '@/types/skill'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SkillPill } from './SkillPill'

interface SkillCategoryProps {
  category: SkillCategoryType
  delay?: number
}

export function SkillCategory({ category, delay = 0 }: SkillCategoryProps) {
  return (
    <RevealOnScroll delay={delay}>
      <Box>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2 }}>
          {category.title}
        </Typography>
        <Grid container spacing={1.5}>
          {category.skills.map((skill) => (
            <Grid key={skill.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <SkillPill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </RevealOnScroll>
  )
}
