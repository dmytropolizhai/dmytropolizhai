import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { projects } from '@/data/projects'
import { SectionLabel } from '@/components/SectionLabel'

export function ProjectsPage() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div style={{ paddingTop: 120, minHeight: '100vh' }}>
      <div style={{ padding: '80px 48px 0' }}>
        <SectionLabel index="03" label={t('projects.section_label')} />
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif"
          style={{ fontSize: 'clamp(40px,5vw,72px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 64 }}
        >
          {t('seo.h1')}
        </motion.h1>
      </div>

      <div ref={ref} style={{ padding: '0 48px 120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
          >
            <Link
              to="/projects/$id"
              params={{ id: project.id }}
              style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--color-border)', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = '' }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '16/10' }}>
                <img src={project.image} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h2 className="font-sans" style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text)' }}>{project.title}</h2>
                  <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)' }}>{project.year}</span>
                </div>
                <p className="font-mono" style={{ fontSize: 12, color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: 16 }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono" style={{ fontSize: 10, padding: '3px 8px', border: '1px solid var(--color-border-light)', color: 'var(--color-muted)', letterSpacing: '0.05em' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
