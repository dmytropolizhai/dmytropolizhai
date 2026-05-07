import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { fadeUp } from './hero.animations'
import type { HeroScrollMotionValues } from './hero.types'

type HeroActionsProps = Pick<HeroScrollMotionValues, 'ctaY' | 'ctaOpacity' | 'ctaScale'>

export function HeroActions({ ctaY, ctaOpacity, ctaScale }: HeroActionsProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      {...fadeUp(0.3)}
      style={{
        marginTop: 48, display: 'flex', alignItems: 'center', gap: 24,
        y: ctaY,
        opacity: ctaOpacity,
        scale: ctaScale,
        transformOrigin: 'left center',
      }}
    >
      <a
        href="#cta"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '14px 28px',
          background: 'var(--color-accent)', color: '#0a0a0a',
          fontFamily: 'Syne,sans-serif', fontSize: 14, fontWeight: 700,
          letterSpacing: '0.04em', textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,255,110,0.25)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = ''
        }}
      >
        {t('hero.cta_primary')}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </a>

      <Link
        to="/projects"
        style={{
          fontSize: 13, color: 'var(--color-muted)', textDecoration: 'none',
          fontFamily: "'DM Mono',monospace", letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', gap: 8,
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
      >
        {t('hero.cta_ghost')}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </Link>
    </motion.div>
  )
}
