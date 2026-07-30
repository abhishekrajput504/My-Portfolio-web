import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '@/data/profile'

interface SocialIconsProps {
  size?: 'small' | 'medium' | 'large'
}

const links = [
  { label: 'GitHub', href: profile.socials.github, icon: FiGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: FiLinkedin },
  { label: 'Email', href: profile.socials.email, icon: FiMail },
]

export function SocialIcons({ size = 'medium' }: SocialIconsProps) {
  return (
    <Stack direction="row" spacing={1}>
      {links.map(({ label, href, icon: Icon }) => (
        <Tooltip key={label} title={label} arrow>
          <IconButton
            component="a"
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            size={size}
            sx={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'text.primary',
            }}
          >
            <Icon size={size === 'small' ? 16 : 18} />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  )
}
