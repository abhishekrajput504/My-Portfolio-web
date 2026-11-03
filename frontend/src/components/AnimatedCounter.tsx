import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

/** Counts up from 0 to `value` once it scrolls into view. Jumps straight to the final value under reduced motion. */
export function AnimatedCounter({ value, suffix = '', duration = 1.4 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = usePrefersReducedMotion()
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0)

  useEffect(() => {
    if (!inView || prefersReducedMotion) return

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, prefersReducedMotion, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
