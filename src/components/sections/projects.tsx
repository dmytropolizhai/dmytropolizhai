import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '../SectionLabel'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const featured = projects.slice(0, 3)

  return (
    <section
      ref={ref}
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 md:px-12 py-20 md:py-32"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
        <SectionLabel index="03" label={t('projects.section_label')} />
        <Link
          to="/projects"
          className="font-mono"
          style={{ fontSize: 12, color: 'var(--color-muted)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          {t('projects.view_all')} →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          >
            <Link
              to="/projects/$id"
              params={{ id: project.id }}
              style={{ display: 'block', textDecoration: 'none', border: '1px solid var(--color-border)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-border-light)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '16/10' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = '')}
                />
              </div>
              <div style={{ padding: 24 }}>
                <h3 className="font-sans" style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: 'var(--color-text)' }}>
                  {project.title}
                </h3>
                <p className="font-mono" style={{ fontSize: 12, color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: 16 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono" style={{
                      fontSize: 10, padding: '3px 8px',
                      border: '1px solid var(--color-border-light)',
                      color: 'var(--color-muted)', letterSpacing: '0.05em',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
