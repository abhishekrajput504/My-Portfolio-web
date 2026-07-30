import Button, { type ButtonProps } from '@mui/material/Button'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const MotionButton = motion.create(Button)

type AnimatedButtonProps = Omit<
  ButtonProps,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> & {
  target?: string
  rel?: string
}

/** MUI Button with a restrained hover/tap micro-interaction; no-ops under reduced-motion. */
export function AnimatedButton(props: AnimatedButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <Button {...props} />
  }

  return (
    <MotionButton
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      {...props}
    />
  )
}
