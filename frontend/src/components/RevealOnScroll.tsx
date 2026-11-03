import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { easeOut } from '@/theme/tokens'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  style?: CSSProperties
}

/** Fades + slides children up into view once, the first time they enter the viewport. */
export function RevealOnScroll({ children, delay = 0, y = 24, className, style }: RevealOnScrollProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
