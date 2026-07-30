import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/SectionHeading'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <Box id={SECTION_IDS.projects} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Backend-heavy work, with a couple of full-stack and IoT builds mixed in."
        />
        <Grid container spacing={4}>
          {sorted.map((project, index) => (
            <Grid key={project.slug} size={{ xs: 12, md: 6 }}>
              <RevealOnScroll delay={index * 0.1}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
