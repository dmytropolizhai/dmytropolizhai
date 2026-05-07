import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from './hero.animations'
import type { HeroScrollMotionValues } from './hero.types'

type HeroStatsProps = Pick<HeroScrollMotionValues, 'statsY' | 'statsOpacity'>

export function HeroStats({ statsY, statsOpacity }: HeroStatsProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      {...fadeUp(0.4)}
      className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 py-8"
      style={{
        borderTop: '1px solid var(--color-border)',
        position: 'relative', zIndex: 2,
        y: statsY,
        opacity: statsOpacity,
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {([
          [t('hero.stat1_value'), t('hero.stat1_label')],
          [t('hero.stat2_value'), t('hero.stat2_label')],
          [t('hero.stat3_value'), t('hero.stat3_label')],
        ] as [string, string][]).map(([val, lbl]) => (
          <div key={lbl} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="font-serif" style={{ fontSize: 28, color: 'var(--color-text)', lineHeight: 1 }}>{val}</span>
            <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{lbl}</span>
          </div>
        ))}
      </div>

      <div
        className="font-mono"
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 11, color: 'var(--color-muted)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}
      >
        <div style={{ width: 40, height: 1, background: 'var(--color-muted)', position: 'relative', overflow: 'hidden' }}>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute', top: 0, left: '-100%',
              width: '100%', height: '100%',
              background: 'var(--color-accent)',
              animation: 'scanline 2s infinite',
            }}
          />
        </div>
        {t('hero.scroll')}
      </div>
    </motion.div>
  )
}
