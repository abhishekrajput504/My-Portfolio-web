import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { experiences } from '@/data/experience'
import { SectionHeading } from '@/components/SectionHeading'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { ExperienceItem } from './ExperienceItem'

export function Experience() {
  return (
    <Box id={SECTION_IDS.experience} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Roles that shaped how I think about reliability, ownership, and shipping software that lasts."
        />
        <Stack spacing={4}>
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} delay={index * 0.1} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
