import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/SectionHeading'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { SkillCategory } from './SkillCategory'

export function Skills() {
  return (
    <Box id={SECTION_IDS.skills} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          subtitle="A backend-first toolkit, with enough frontend and infrastructure fluency to ship a feature end to end."
        />
        <Stack spacing={4}>
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} delay={index * 0.08} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
