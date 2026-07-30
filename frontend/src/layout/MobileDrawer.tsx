import { type MouseEvent } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { FiX } from 'react-icons/fi'
import { navLinks } from '@/data/navigation'
import { scrollToSection } from '@/utils/scroll'
import { SocialIcons } from '@/components/SocialIcons'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  activeSection: string
}

export function MobileDrawer({ open, onClose, activeSection }: MobileDrawerProps) {
  const location = useLocation()

  const handleClick = (event: MouseEvent, sectionId: string) => {
    if (location.pathname === '/') {
      event.preventDefault()
      scrollToSection(sectionId)
    }
    onClose()
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 280 } }}>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
          <IconButton aria-label="Close navigation menu" onClick={onClose}>
            <FiX size={20} />
          </IconButton>
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 2, flexGrow: 1 }}>
          {navLinks.map((link) => (
            <Typography
              key={link.sectionId}
              component={RouterLink}
              to={`/#${link.sectionId}`}
              onClick={(e) => handleClick(e, link.sectionId)}
              variant="h6"
              sx={{
                py: 1.5,
                textDecoration: 'none',
                color: activeSection === link.sectionId ? 'primary.main' : 'text.primary',
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />
        <SocialIcons />
      </Box>
    </Drawer>
  )
}
