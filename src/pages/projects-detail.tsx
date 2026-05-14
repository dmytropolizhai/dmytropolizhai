import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'

export function ProjectDetailPage() {
  const { t } = useTranslation()
  const { id, locale } = useParams({ from: '/$locale/projects/$id' })
  const project = projects.find(p => p.id === id)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Lock scroll when image is fullscreen
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedImage])

  if (!project) return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-32">
      <p className="font-mono text-[var(--color-muted)] mb-4">Project not found.</p>
      <Link
        to="/$locale/projects"
        params={{ locale: locale }}
        className="text-[var(--color-accent)] underline underline-offset-4"
      >
        {t('projects.back')}
      </Link>
    </div >
  )

  const screenshots = project.images || [project.image, project.image, project.image]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/$locale"
          params={{ locale: locale }}
          hash="projects"
          className="font-mono text-[12px] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 mb-12 inline-block"
        >
          {t('projects.back')}
        </Link>
      </motion.div>

      {/* Hero Section with Fanned-out Images */}
      <section className="relative mb-32 pt-20 flex flex-col items-center">
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {/* Screenshot 2 (Left) */}
            <motion.div
              key={`${id}-s2`}
              initial={{ opacity: 0, x: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: -160, rotate: -15, scale: 0.9 }}
              whileHover={{ scale: 1, rotate: 0, x: -400, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(screenshots[1])}
              className="absolute z-10 w-[240px] md:w-[350px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] cursor-pointer"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <img src={screenshots[1]} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Screenshot 3 (Right) */}
            <motion.div
              key={`${id}-s3`}
              initial={{ opacity: 0, x: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: 160, rotate: 15, scale: 0.9 }}
              whileHover={{ scale: 1, rotate: 0, x: 400, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(screenshots[2])}
              className="absolute z-10 w-[240px] md:w-[350px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] cursor-pointer"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <img src={screenshots[2]} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Screenshot 1 (Center) */}
            <motion.div
              key={`${id}-s1`}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(screenshots[0])}
              className="absolute z-20 w-[260px] md:w-[380px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border-light)] cursor-pointer"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <img src={screenshots[0]} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foreground Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="relative z-30 -mt-20 md:-mt-32 w-full  p-8 md:p-12 border border-border backdrop-blur-md bg-[rgba(var(--color-surface-rgb),0.8)] shadow-2xl rounded-sm"
        >
          <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight flex flex-col">
            <em className="not-italic opacity-50 block text-sm font-mono tracking-[0.2em] uppercase mb-4 italic-none">{project.year}</em>
            <em className="text-[var(--color-accent)] font-medium">
              {t(`projects.items.${project.id}.title`)}
            </em>
            {project.inProgress && (
              <span className="font-mono text-[12px] text-[var(--color-accent)]">In Progress</span>
            )}  
          </h1>
          <p className="font-sans text-lg md:text-xl text-[var(--color-muted)] leading-relaxed">
            {t(`projects.items.${project.id}.description`)}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-[10px] px-3 py-1 border border-[var(--color-border-light)] text-[var(--color-muted)] uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section >

      {/* Details Grid */}
      < section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20" >
        {/* Problem */}
        < motion.div
          initial={{ opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--color-accent-border)]"></span>
            {t('projects.problem_label')}
          </h2>
          <p className="font-sans text-[var(--color-text)] text-lg leading-relaxed opacity-80">
            {t(`projects.items.${project.id}.problem`, { defaultValue: 'Information not provided for this project.' })}
          </p>
        </motion.div >

        {/* Solution */}
        < motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--color-accent-border)]"></span>
            {t('projects.solution_label')}
          </h2>
          <p className="font-sans text-[var(--color-text)] text-lg leading-relaxed opacity-80">
            {t(`projects.items.${project.id}.solution`, { defaultValue: 'Information not provided for this project.' })}
          </p>
        </motion.div >

        {/* Statistics */}
        < motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--color-accent-border)]"></span>
            {t('projects.stats_label')}
          </h2>
          <div className="space-y-8">
            {(t(`projects.items.${project.id}.statistics`, { returnObjects: true }) as any[] || [
              { label: 'Completed', value: project.year.toString() },
              { label: 'Role', value: 'Fullstack Dev' }
            ]).map((stat: any, i: number) => (
              <div key={i} className="group">
                <p className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                  {stat.label}
                </p>
                <p className="font-serif text-3xl text-[var(--color-text)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div >
      </section >

      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Fullscreen screenshot"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              />
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-0 right-0 m-4 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  )
}
