import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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

const WhatsappIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.45 0 .07 5.38.07 11.99c0 2.12.55 4.19 1.6 6.01L0 24l6.2-1.63a11.94 11.94 0 0 0 5.86 1.5h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.54-8.4ZM12.07 21.4h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.68.97.98-3.59-.22-.37a9.36 9.36 0 0 1-1.44-5.01c0-5.19 4.22-9.41 9.41-9.41 2.51 0 4.87.98 6.65 2.76a9.36 9.36 0 0 1 2.76 6.65c0 5.19-4.22 9.41-9.41 9.41Zm5.16-7.03c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14-.18.28-.7.91-.86 1.1-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.31.23-.64.23-1.18.16-1.31-.07-.12-.25-.2-.53-.34Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h3.96v15H.5V8Zm7.02 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.09V23h-3.96v-7.75c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V23H7.52V8Z" />
  </svg>
)

export function CtaSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const socialLinks = [
    { href: 'mailto:dmytropolizhai@gmail.com', icon: <MailIcon />, label: t('cta.email') },
    { href: 'https://github.com/dmytropolizhai', icon: <GithubIcon />, label: t('cta.github') },
    { href: 'https://wa.me/37126621435', icon: <WhatsappIcon />, label: t('cta.whatsapp') },
    { href: "https://www.linkedin.com/in/dmytropolizhai/", icon: <LinkedinIcon />, label: t('cta.linkedin') },
  ]

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
          {t('cta.title.line1')}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>{t('cta.title.line2')}</em>
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
          {socialLinks.map(({ href, icon, label }) => (
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
