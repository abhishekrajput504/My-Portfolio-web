import { useState } from 'react'
import Box from '@mui/material/Box'
import type { SystemStyleObject, Theme } from '@mui/system'
import { transition } from '@/theme/tokens'

interface LazyImageProps {
  src: string
  alt: string
  sx?: SystemStyleObject<Theme>
  className?: string
  onError?: () => void
  /** Set for likely-LCP images (e.g. the hero photo) so they load eagerly instead of lazily. */
  priority?: boolean
}

/** Native lazy-loaded image with a subtle fade-in once decoded, so images never pop in jarringly. */
export function LazyImage({ src, alt, sx, className, onError, priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={onError}
      className={className}
      sx={{
        opacity: loaded ? 1 : 0,
        transition: `opacity ${transition.slow}`,
        ...sx,
      }}
    />
  )
}
