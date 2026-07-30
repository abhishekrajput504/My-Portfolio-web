import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { certificates } from '@/data/certificates'
import { SectionHeading } from '@/components/SectionHeading'
import { SECTION_IDS } from '@/utils/constants'
import { layout } from '@/theme/tokens'
import { CertificateCard } from './CertificateCard'

export function Certificates() {
  return (
    <Box id={SECTION_IDS.certificates} component="section" sx={{ py: layout.sectionPaddingY }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Certificates" title="Credentials" />
        <Grid container spacing={3}>
          {certificates.map((certificate, index) => (
            <Grid key={certificate.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <CertificateCard certificate={certificate} delay={index * 0.08} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
