import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const PARTICLE_COUNT = 60
const LINK_DISTANCE = 130
const PARTICLE_COLOR = '59, 130, 246' // primary blue, as an rgb triplet for template use

/**
 * A restrained canvas network of drifting particles with proximity links.
 * Pauses its animation loop when off-screen or tab-hidden, and renders a static
 * grid (no motion) when the user prefers reduced motion.
 */
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let animationFrame = 0
    let running = false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      const canvasEl = canvasRef.current
      if (!canvasEl) return
      const rect = canvasEl.parentElement!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvasEl.width = width * dpr
      canvasEl.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height)
      ctx!.strokeStyle = `rgba(${PARTICLE_COLOR}, 0.08)`
      ctx!.lineWidth = 1
      const step = 64
      for (let x = 0; x <= width; x += step) {
        ctx!.beginPath()
        ctx!.moveTo(x, 0)
        ctx!.lineTo(x, height)
        ctx!.stroke()
      }
      for (let y = 0; y <= height; y += step) {
        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(width, y)
        ctx!.stroke()
      }
    }

    function tick() {
      if (!running) return
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${PARTICLE_COLOR}, ${0.12 * (1 - dist / LINK_DISTANCE)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      ctx!.fillStyle = `rgba(${PARTICLE_COLOR}, 0.55)`
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx!.fill()
      }

      animationFrame = requestAnimationFrame(tick)
    }

    function start() {
      if (running) return
      running = true
      animationFrame = requestAnimationFrame(tick)
    }

    function stop() {
      running = false
      cancelAnimationFrame(animationFrame)
    }

    resize()
    createParticles()

    if (prefersReducedMotion) {
      drawStatic()
    } else {
      start()
    }

    const handleResize = () => {
      resize()
      createParticles()
      if (prefersReducedMotion) drawStatic()
    }
    window.addEventListener('resize', handleResize)

    const handleVisibility = () => {
      if (document.hidden) stop()
      else if (!prefersReducedMotion) start()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (prefersReducedMotion) return
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 },
    )
    observer.observe(canvas)

    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      observer.disconnect()
    }
  }, [prefersReducedMotion])

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
      }}
      aria-hidden="true"
    >
      <Box component="canvas" ref={canvasRef} sx={{ width: '100%', height: '100%', display: 'block' }} />
    </Box>
  )
}
