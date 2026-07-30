import { useState, type MouseEvent } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { FiMenu } from 'react-icons/fi'
import { navLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToSection } from '@/utils/scroll'
import { layout } from '@/theme/tokens'
import { MobileDrawer } from './MobileDrawer'

export function Navbar() {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const scrollSpySection = useScrollSpy(navLinks.map((link) => link.sectionId))
  const activeSection = location.pathname === '/' ? scrollSpySection : ''
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 })

  const handleNavClick = (event: MouseEvent, sectionId: string) => {
    if (location.pathname === '/') {
      event.preventDefault()
      scrollToSection(sectionId)
    }
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? undefined : 'transparent',
          backdropFilter: scrolled ? undefined : 'none',
          WebkitBackdropFilter: scrolled ? undefined : 'none',
          borderBottom: scrolled ? undefined : '1px solid transparent',
          transition: 'background-color 250ms ease, border-color 250ms ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: layout.navHeight, justifyContent: 'space-between' }}>
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'text.primary' }}
            >
              {profile.initials}
              <Typography component="span" sx={{ color: 'primary.main' }}>
                .
              </Typography>
            </Typography>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <Button
                  key={link.sectionId}
                  href={`/#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  sx={{
                    color: activeSection === link.sectionId ? 'text.primary' : 'text.secondary',
                    fontWeight: 500,
                    px: 2,
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Button
                variant="outlined"
                size="small"
                href="/#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Let&apos;s talk
              </Button>
              <IconButton
                aria-label="Open navigation menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                <FiMenu size={20} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeSection={activeSection}
      />
    </>
  )
}
