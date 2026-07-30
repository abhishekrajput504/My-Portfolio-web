import { useState } from 'react'
import Box from '@mui/material/Box'
import type { SystemStyleObject, Theme } from '@mui/system'
import { transition } from '@/theme/tokens'

interface LazyImageProps {
  src: string
  alt: string
  sx?: SystemStyleObject<Theme>
  className?: string
}

/** Native lazy-loaded image with a subtle fade-in once decoded, so images never pop in jarringly. */
export function LazyImage({ src, alt, sx, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      sx={{
        opacity: loaded ? 1 : 0,
        transition: `opacity ${transition.slow}`,
        ...sx,
      }}
    />
  )
}
