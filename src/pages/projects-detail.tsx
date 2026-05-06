import { motion } from 'framer-motion'
import { Link, useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { projects } from '@/data/projects'

export function ProjectDetailPage() {
  const { t } = useTranslation()
  const { id } = useParams({ from: '/projects/$id' })
  const project = projects.find(p => p.id === id)

  if (!project) return (
    <div style={{ paddingTop: 200, textAlign: 'center' }}>
      <p className="font-mono" style={{ color: 'var(--color-muted)' }}>Project not found.</p>
      <Link to="/projects" style={{ color: 'var(--color-accent)' }}>{t('projects.back')}</Link>
    </div>
  )

  return (
    <div style={{ paddingTop: 120, minHeight: '100vh', padding: '120px 48px' }}>
      <Link to="/projects" className="font-mono"
        style={{ fontSize: 12, color: 'var(--color-muted)', textDecoration: 'none', letterSpacing: '0.06em', display: 'inline-block', marginBottom: 48, transition: 'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
      >
        {t('projects.back')}
      </Link>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <h1 className="font-serif" style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 400, letterSpacing: '-0.02em' }}>{project.title}</h1>
          <span className="font-mono" style={{ fontSize: 13, color: 'var(--color-muted)' }}>{project.year}</span>
        </div>

        <img src={project.image} alt={project.title} style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover', marginBottom: 48, border: '1px solid var(--color-border)' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80 }}>
          <div>
            <p className="font-sans" style={{ fontSize: 17, color: 'var(--color-muted)', lineHeight: 1.8 }}>{project.description}</p>
          </div>
          <div>
            <p className="font-mono" style={{ fontSize: 11, color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tags.map(tag => (
                <span key={tag} className="font-mono" style={{ fontSize: 11, padding: '6px 12px', border: '1px solid var(--color-border-light)', color: 'var(--color-muted)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
