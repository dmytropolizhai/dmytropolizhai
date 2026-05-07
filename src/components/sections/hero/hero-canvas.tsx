import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { COLORS } from './hero.constants'
import type { Particle } from './hero.types'

interface HeroCanvasProps {
  scrollProgressRef: React.RefObject<number>
}

export function HeroCanvas({ scrollProgressRef }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const lastBurstRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const spawnBurst = (progress: number) => {
      if (!canvasRef.current) return
      const { width, height } = canvasRef.current

      const count = Math.floor(4 + progress * 16)

      for (let i = 0; i < count; i++) {
        const ox = Math.random() * width
        const oy = Math.random() * height * 0.65

        const cx = width * 0.4
        const angle = Math.atan2(oy - height * 0.35, ox - cx)
          + (Math.random() - 0.5) * 1.2

        const speed = (0.8 + Math.random() * 2.5) * Math.sqrt(progress) * 3
        const shape = Math.random() < 0.5 ? 'square' : Math.random() < 0.5 ? 'rect' : 'dot'

        particlesRef.current.push({
          x: ox, y: oy, ox, oy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - progress * 2.5,
          size: shape === 'dot' ? 1.5 + Math.random() * 2 : 2 + Math.random() * 5,
          opacity: 0.7 + Math.random() * 0.3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 0,
          maxLife: 55 + Math.random() * 80,
          shape,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.12,
        })
      }

      if (particlesRef.current.length > 600) {
        particlesRef.current = particlesRef.current.slice(-600)
      }
    }

    const loop = () => {
      if (!canvasRef.current) return
      const { width, height } = canvasRef.current
      ctx.clearRect(0, 0, width, height)

      const progress = scrollProgressRef.current
      if (!progress) {
        return;
      }

      if (progress > 0.03) {
        const now = Date.now()
        const interval = Math.max(16, 80 - progress * 60)
        if (now - lastBurstRef.current > interval) {
          spawnBurst(progress)
          lastBurstRef.current = now
        }
      }

      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife)

      for (const p of particlesRef.current) {
        p.life++
        p.x += p.vx
        p.y += p.vy
        p.vy -= 0.025
        p.vx *= 0.985
        p.vy *= 0.985
        p.rotation += p.rotSpeed

        const t = p.life / p.maxLife
        p.opacity = t < 0.15
          ? (t / 0.15) * 0.8
          : (1 - (t - 0.15) / 0.85) * 0.8

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        if (p.shape === 'dot') {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.shape === 'square') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        }

        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [scrollProgressRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  )
}
