import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from './hero.animations'
import type { HeroScrollMotionValues } from './hero.types'

interface HeroBadgeProps {
  motionValues: Pick<HeroScrollMotionValues, 'badgeX' | 'badgeOpacity' | 'badgeSkew'>
}

export function HeroBadge({ motionValues }: HeroBadgeProps) {
  const { t } = useTranslation()
  const { badgeX, badgeOpacity, badgeSkew } = motionValues

  return (
    <motion.div
      {...fadeUp(0)}
      style={{
        x: badgeX,
        opacity: badgeOpacity,
        skewX: badgeSkew,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 14px',
        border: '1px solid var(--color-accent-border)',
        background: 'var(--color-accent-dim)',
        borderRadius: 100,
        fontFamily: "'DM Mono',monospace", fontSize: 11,
        color: 'var(--color-accent)', letterSpacing: '0.08em',
        textTransform: 'uppercase', marginBottom: 40, width: 'fit-content',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 6, height: 6,
          background: 'var(--color-accent)',
          borderRadius: '50%',
          animation: 'pulse 2s infinite',
          display: 'inline-block',
        }}
      />
      {t('hero.badge')}
    </motion.div>
  )
}
