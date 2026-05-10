import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../section-label'

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export function AboutSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    { name: t('about.service1'), tag: t('about.service1_tag') },
    { name: t('about.service2') },
    { name: t('about.service3') },
  ]
  const langs = [t('about.lang1'), t('about.lang2'), t('about.lang3'), t('about.lang4')]

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="px-6 md:px-12 py-20 md:py-32"
      style={{ borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}
    >
      <SectionLabel index="02" label={t('about.section_label')} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left */}
        <motion.div {...(inView ? revealProps(0) : { initial: { opacity: 0, y: 32 } })}>
          <h2 id="about-heading" className="font-serif" style={{ fontSize: 'clamp(36px,4vw,56px)', lineHeight: 1.1, fontWeight: 400, letterSpacing: '-0.01em' }}>
            {t('about.title.line1')}<br />
            {t('about.title.prefix')} <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>{t('about.title.line2')}</em>
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div {...(inView ? revealProps(0.15) : { initial: { opacity: 0, y: 32 } })} style={{ paddingTop: 8 }}>
          <p className="font-sans" style={{ fontSize: 16, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 48 }}
            dangerouslySetInnerHTML={{ __html: t('about.body1') + '<br/><br/>' + t('about.body2') }} />

          {/* Services list */}
          <div style={{ border: '1px solid var(--color-border)' }} role="list">
            {services.map(({ name, tag }) => (
              <div
                key={name}
                role="listitem"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', borderBottom: '1px solid var(--color-border)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
              >
                <span className="font-sans" style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: 12 }}>
                  {name}
                  {tag && (
                    <span className="font-mono" style={{
                      fontSize: 10, color: 'var(--color-accent)',
                      background: 'var(--color-accent-dim)',
                      border: '1px solid var(--color-accent-border)',
                      padding: '2px 8px', letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{tag}</span>
                  )}
                </span>
                <span aria-hidden="true" style={{ color: 'var(--color-border-light)', fontSize: 18, fontWeight: 300 }}>→</span>
              </div>
            ))}
          </div>

          {/* Language pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }} role="list" aria-label="Languages">
            {langs.map(lang => (
              <span
                key={lang}
                role="listitem"
                className="font-mono"
                style={{
                  fontSize: 11, letterSpacing: '0.06em', color: 'var(--color-muted)',
                  border: '1px solid var(--color-border-light)', padding: '5px 12px',
                  textTransform: 'uppercase', transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-muted)'; e.currentTarget.style.color = 'var(--color-text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.color = 'var(--color-muted)' }}
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
