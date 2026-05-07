import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from './hero.animations'
import type { HeroScrollMotionValues } from './hero.types'

type HeroTitleProps = Pick<
  HeroScrollMotionValues,
  'l1X' | 'l1Y' | 'l1Opacity' | 'l1Filter' | 'l1Skew' |
  'emX' | 'emY' | 'emOpacity' | 'emFilter' | 'emScale' |
  'muX' | 'muY' | 'muOpacity' | 'muFilter' | 'muSkew'
>

export function HeroTitle(props: HeroTitleProps) {
  const { t } = useTranslation()
  const {
    l1X, l1Y, l1Opacity, l1Filter, l1Skew,
    emX, emY, emOpacity, emFilter, emScale,
    muX, muY, muOpacity, muFilter, muSkew,
  } = props

  return (
    <motion.h1
      {...fadeUp(0.1)}
      className="font-serif"
      style={{
        fontSize: 'clamp(48px,7vw,96px)', lineHeight: 1.0,
        letterSpacing: '-0.02em', fontWeight: 400,
      }}
    >
      {/* Line 1 */}
      <motion.span
        style={{
          display: 'block',
          x: l1X, y: l1Y,
          opacity: l1Opacity,
          filter: l1Filter,
          skewX: l1Skew,
        }}
      >
        {t('hero.title_line1')}
      </motion.span>

      {/* Accent em */}
      <motion.em
        style={{
          fontStyle: 'italic',
          color: 'var(--color-accent)',
          display: 'block',
          x: emX, y: emY,
          opacity: emOpacity,
          filter: emFilter,
          scale: emScale,
          transformOrigin: 'left center',
        }}
      >
        {t('hero.title_em')}
      </motion.em>

      {/* Muted line */}
      <motion.span
        style={{
          color: 'var(--color-muted)',
          display: 'block',
          x: muX, y: muY,
          opacity: muOpacity,
          filter: muFilter,
          skewX: muSkew,
        }}
      >
        {t('hero.title_muted')}
      </motion.span>
    </motion.h1>
  )
}
