import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import type { Certificate } from '@/types/certificate'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'

interface CertificateCardProps {
  certificate: Certificate
  delay?: number
}

export function CertificateCard({ certificate, delay = 0 }: CertificateCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <GlassCard sx={{ p: 3, height: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'primary.light',
            }}
          >
            <FiAward size={18} />
          </Box>
          {certificate.credentialUrl && (
            <Tooltip title="View credential" arrow>
              <IconButton
                component="a"
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label={`View ${certificate.title} credential`}
              >
                <FiExternalLink size={14} />
              </IconButton>
            </Tooltip>
          )}
        </Stack>

        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {certificate.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {certificate.issuer} · {certificate.issueDate}
        </Typography>

        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
          {certificate.skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
      </GlassCard>
    </RevealOnScroll>
  )
}
