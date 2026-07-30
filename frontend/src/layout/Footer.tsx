import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { FiArrowUp } from 'react-icons/fi'
import { profile } from '@/data/profile'
import { navLinks } from '@/data/navigation'
import { scrollToSection } from '@/utils/scroll'
import { SocialIcons } from '@/components/SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {profile.currentRole} — building reliable backend systems.
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Typography
                key={link.sectionId}
                component="button"
                onClick={() => scrollToSection(link.sectionId)}
                variant="body2"
                sx={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'text.secondary',
                  p: 0,
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>

          <SocialIcons size="small" />
        </Stack>

        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 5,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <Typography variant="caption">
            © {year} {profile.name}. All rights reserved.
          </Typography>
          <IconButton
            aria-label="Back to top"
            size="small"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <FiArrowUp size={16} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  )
}
