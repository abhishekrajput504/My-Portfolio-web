import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface UseTypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

/** Cycles through `words`, typing and deleting each in turn. Freezes on the first word when reduced-motion is preferred. */
export function useTypewriter(words: string[], options: UseTypewriterOptions = {}): string {
  const { typingSpeed = 70, deletingSpeed = 35, pauseDuration = 1800 } = options
  const prefersReducedMotion = usePrefersReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return

    const currentWord = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseDuration)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed)
      } else {
        setPhase('typing')
        setWordIndex((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, prefersReducedMotion, typingSpeed, deletingSpeed, pauseDuration])

  if (prefersReducedMotion) return words[0] ?? ''
  return text
}
