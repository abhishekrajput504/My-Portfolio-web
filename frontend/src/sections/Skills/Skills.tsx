import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
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
          title="Technical toolkit"
          subtitle="A Java and Spring-centred toolkit for building, testing, securing, and shipping backend services."
        />
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid key={category.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <SkillCategory category={category} delay={(index % 3) * 0.08} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
