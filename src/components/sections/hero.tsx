import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
})

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      aria-label="Hero"
      className="px-6 md:px-12 md:mx-2 md:mb-8 md:mt-2 md:rounded-2xl"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-gradient)',
      }}
    >
      {/* Grid lines */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      {/* Glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle,rgba(212,255,110,0.06) 0%,transparent 70%)',
        top: -100, right: -100, pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 120, maxWidth: 900, position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px',
          border: '1px solid var(--color-accent-border)',
          background: 'var(--color-accent-dim)',
          borderRadius: 100,
          fontFamily: "'DM Mono',monospace", fontSize: 11,
          color: 'var(--color-accent)', letterSpacing: '0.08em',
          textTransform: 'uppercase', marginBottom: 40, width: 'fit-content',
        }}>
          <span style={{ width: 6, height: 6, background: 'var(--color-accent)', borderRadius: '50%', animation: 'pulse 2s infinite', display: 'inline-block' }} aria-hidden="true" />
          {t('hero.badge')}
        </motion.div>

        {/* H1 — SEO */}
        <motion.h1 {...fadeUp(0.1)} className="font-serif" style={{
          fontSize: 'clamp(48px,7vw,96px)', lineHeight: 1.0,
          letterSpacing: '-0.02em', fontWeight: 400,
        }}>
          {t('hero.title_line1')}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>{t('hero.title_em')}</em><br />
          <span style={{ color: 'var(--color-muted)' }}>{t('hero.title_muted')}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="font-mono" style={{
          marginTop: 32, fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.7, maxWidth: 480,
          whiteSpace: 'pre-line',
        }}>
          {t('hero.sub')}
        </motion.p>

        {/* Actions */}
        <motion.div {...fadeUp(0.3)} style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="#cta" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px', background: 'var(--color-accent)', color: '#0a0a0a',
            fontFamily: 'Syne,sans-serif', fontSize: 14, fontWeight: 700,
            letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,255,110,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            {t('hero.cta_primary')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
          <Link to="/projects" style={{
            fontSize: 13, color: 'var(--color-muted)', textDecoration: 'none',
            fontFamily: "'DM Mono',monospace", letterSpacing: '0.04em',
            display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
      </div>

      {/* Stats bar */}
      <motion.div {...fadeUp(0.4)} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 py-8" style={{
        borderTop: '1px solid var(--color-border)', position: 'relative', zIndex: 1,
      }}>
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
        <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <div style={{ width: 40, height: 1, background: 'var(--color-muted)', position: 'relative', overflow: 'hidden' }}>
            <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'var(--color-accent)', animation: 'scanline 2s infinite' }} />
          </div>
          {t('hero.scroll')}
        </div>
      </motion.div>
    </section>
  )
}
