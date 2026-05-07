import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from './hero.animations'
import type { HeroScrollMotionValues } from './hero.types'

type HeroSubtitleProps = Pick<HeroScrollMotionValues, 'subY' | 'subOpacity' | 'subFilter'>

export function HeroSubtitle({ subY, subOpacity, subFilter }: HeroSubtitleProps) {
  const { t } = useTranslation()

  return (
    <motion.p
      {...fadeUp(0.2)}
      className="font-mono"
      style={{
        marginTop: 32, fontSize: 14,
        color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: 480,
        whiteSpace: 'pre-line',
        y: subY,
        opacity: subOpacity,
        filter: subFilter,
      }}
    >
      {t('hero.sub')}
    </motion.p>
  )
}
