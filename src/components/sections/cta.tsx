import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../section-label'

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
  </svg>
)
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
  </svg>
)
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export function CtaSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="cta"
      aria-labelledby="cta-heading"
      className="px-6 md:px-12 py-20 md:py-32 text-center relative overflow-hidden"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%,rgba(212,255,110,0.04) 0%,transparent 60%)',
      }} />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}
      >
        <p className="font-mono" style={{ fontSize: 11, color: 'var(--color-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>
          {t('cta.eyebrow')}
        </p>
        <h2 id="cta-heading" className="font-serif" style={{ fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.05, fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 20 }}>
          {t('cta.title_line1')}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>{t('cta.title_em')}</em>
        </h2>
        <p className="font-mono" style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: 48, whiteSpace: 'pre-line' }}>
          {t('cta.sub')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <a
            href="https://t.me/dmytropolizhai"
            aria-label={t('cta.telegram')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '18px 40px', background: 'var(--color-accent)', color: '#0a0a0a',
              fontFamily: 'Syne,sans-serif', fontSize: 15, fontWeight: 700,
              letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,255,110,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
          >
            <TelegramIcon />
            {t('cta.telegram')}
          </a>
          <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
            {t('cta.response_note')} <span style={{ color: 'var(--color-text)' }}>{t('cta.response_time')}</span>
          </span>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '48px 0' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
          <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t('cta.or')}</span>
          <span style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
        </div>

        {/* Secondary contacts */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          {[
            { href: 'mailto:dmytropolizhai@gmail.com', icon: <MailIcon />, label: t('cta.email') },
            { href: 'https://github.com/dmytropolizhai', icon: <GithubIcon />, label: t('cta.github') },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} className="font-mono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 20px', border: '1px solid var(--color-border-light)',
                color: 'var(--color-muted)', textDecoration: 'none', fontSize: 12, letterSpacing: '0.04em',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent-border)'; e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.background = 'var(--color-accent-dim)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.background = '' }}
            >
              {icon}{label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
