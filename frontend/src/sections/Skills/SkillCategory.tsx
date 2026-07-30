import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
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
        <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {category.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </Stack>
      </Box>
    </RevealOnScroll>
  )
}
