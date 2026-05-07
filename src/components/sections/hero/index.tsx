import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'
import { HeroBadge } from './hero-badge'
import { HeroTitle } from './hero-title'
import { HeroSubtitle } from './hero-subtitle'
import { HeroActions } from './hero-actions'
import { HeroStats } from './hero-stats'
import { HeroCanvas } from './hero-canvas'

export function HeroSection() {
  const sectionRef        = useRef<HTMLElement>(null)
  const scrollProgressRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Badge - flies left
  const badgeX       = useTransform(scrollYProgress, [0,    0.22], [0,   -280])
  const badgeOpacity = useTransform(scrollYProgress, [0,    0.18], [1,    0  ])
  const badgeSkew    = useTransform(scrollYProgress, [0,    0.22], [0,   -12 ])

  // H1 line 1 - shears right + up + blurs
  const l1X       = useTransform(scrollYProgress, [0.04, 0.28], [0,   80  ])
  const l1Y       = useTransform(scrollYProgress, [0.04, 0.28], [0,  -50  ])
  const l1Opacity = useTransform(scrollYProgress, [0.04, 0.24], [1,   0   ])
  const l1Filter  = useTransform(scrollYProgress, [0.04, 0.28], ['blur(0px)', 'blur(12px)'])
  const l1Skew    = useTransform(scrollYProgress, [0.04, 0.28], [0,    8  ])

  // H1 em - scatters up-left + accent blur
  const emX       = useTransform(scrollYProgress, [0.09, 0.33], [0,  -100 ])
  const emY       = useTransform(scrollYProgress, [0.09, 0.33], [0,  -30  ])
  const emOpacity = useTransform(scrollYProgress, [0.09, 0.28], [1,   0   ])
  const emFilter  = useTransform(scrollYProgress, [0.09, 0.33], ['blur(0px)', 'blur(16px)'])
  const emScale   = useTransform(scrollYProgress, [0.09, 0.33], [1,   1.08])

  // H1 muted - collapses right + down
  const muX       = useTransform(scrollYProgress, [0.14, 0.38], [0,   120 ])
  const muY       = useTransform(scrollYProgress, [0.14, 0.38], [0,   20  ])
  const muOpacity = useTransform(scrollYProgress, [0.14, 0.32], [1,   0   ])
  const muFilter  = useTransform(scrollYProgress, [0.14, 0.38], ['blur(0px)', 'blur(8px)'])
  const muSkew    = useTransform(scrollYProgress, [0.14, 0.38], [0,   -6  ])

  // Sub paragraph - melts downward
  const subY       = useTransform(scrollYProgress, [0.20, 0.42], [0,   40  ])
  const subOpacity = useTransform(scrollYProgress, [0.20, 0.40], [1,   0   ])
  const subFilter  = useTransform(scrollYProgress, [0.20, 0.42], ['blur(0px)', 'blur(14px)'])

  // CTA - shrinks and fades
  const ctaScale   = useTransform(scrollYProgress, [0.26, 0.46], [1,   0.80])
  const ctaOpacity = useTransform(scrollYProgress, [0.26, 0.44], [1,   0   ])
  const ctaY       = useTransform(scrollYProgress, [0.26, 0.46], [0,   24  ])

  // Stats bar - sinks
  const statsY       = useTransform(scrollYProgress, [0.36, 0.56], [0,   60  ])
  const statsOpacity = useTransform(scrollYProgress, [0.36, 0.54], [1,   0   ])

  // Whole section subtle scale
  const sectionScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.97])

  // Scanline glitch overlay intensity
  const glitchOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.50, 0.65],
    [0,  0.5,  0.9,  0  ]
  )

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    scrollProgressRef.current = v
  })

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Hero"
      className="px-6 md:px-12"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-surface)',
        scale: sectionScale,
        transformOrigin: 'top center',
      }}
    >
      {/* ── Grid lines ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),' +
            'linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Accent glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', width: 600, height: 600,
          background: 'radial-gradient(circle,rgba(212,255,110,0.06) 0%,transparent 70%)',
          top: -100, right: -100, pointerEvents: 'none',
        }}
      />

      {/* ── Particle canvas ── */}
      <HeroCanvas scrollProgressRef={scrollProgressRef} />

      {/* ── Scanline / glitch overlay ── */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 9,
          backgroundImage:
            'repeating-linear-gradient(' +
            '0deg,transparent,transparent 2px,' +
            'rgba(212,255,110,0.04) 2px,rgba(212,255,110,0.04) 4px)',
          opacity: glitchOpacity,
        }}
      />

      {/* ── Content ── */}
      <div className="flex flex-row justify-between gap-32">
        <div
          className="flex flex-col justify-center pt-60 max-w-4xl relative"
          style={{ zIndex: 2 }}
        >
          <HeroBadge motionValues={{ badgeX, badgeOpacity, badgeSkew }} />

          <HeroTitle
            l1X={l1X} l1Y={l1Y} l1Opacity={l1Opacity} l1Filter={l1Filter} l1Skew={l1Skew}
            emX={emX} emY={emY} emOpacity={emOpacity} emFilter={emFilter} emScale={emScale}
            muX={muX} muY={muY} muOpacity={muOpacity} muFilter={muFilter} muSkew={muSkew}
          />

          <HeroSubtitle subY={subY} subOpacity={subOpacity} subFilter={subFilter} />

          <HeroActions ctaY={ctaY} ctaOpacity={ctaOpacity} ctaScale={ctaScale} />
        </div>
      </div>

      {/* ── Stats bar ── */}
      <HeroStats statsY={statsY} statsOpacity={statsOpacity} />
    </motion.section>
  )
}
