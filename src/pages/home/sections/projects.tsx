import { useRef, useState, useEffect } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { Link, useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SectionLabel } from '@/components/section-label'
import { projects } from '@/data/projects'
import { cursor } from '@/components/cursor'

export function ProjectsSection() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const { locale } = useParams({ strict: false }) as { locale?: string }

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    const scrollSpeed = 0.6 // Pixels per frame

    const scroll = () => {
      if (!isHovered && !isMouseDown) {
        container.scrollLeft += scrollSpeed

        // Seamless loop logic
        const singleSetWidth = container.scrollWidth / 3
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isMouseDown])

  // Custom Drag-to-Scroll logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsMouseDown(true)
    setIsDragging(false)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
    // Delay resetting isDragging to prevent the click from firing after a drag
    setTimeout(() => setIsDragging(false), 50)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier

    // Set isDragging if we moved more than a small threshold
    if (Math.abs(x - startX) > 5) {
      setIsDragging(true)
    }

    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const { scrollXProgress } = useScroll({
    container: containerRef
  })

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-32 overflow-hidden"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
        <SectionLabel index="03" label={t('projects.section_label')} />
      </div>

      {/* Carousel Container */}
      <div
        className="relative group"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          setIsMouseDown(false)
          setIsDragging(false)
        }}
      >
        <div
          ref={containerRef}
          className="flex gap-8 px-6 md:px-12 overflow-x-auto scrollbar-hide select-none"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="flex-shrink-0 w-[300px] md:w-[450px]"
              onMouseEnter={() => cursor.hint(t("cursor.view_details"))}
              onMouseLeave={() => cursor.reset()}
            >
              <Link
                to="/$locale/projects/$id"
                params={{ locale: locale || 'en', id: project.id }}
                className={`block no-underline group/card ${isDragging ? 'pointer-events-none' : ''}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--color-border)] transition-colors duration-500 group-hover/card:border-[var(--color-border-light)]">
                  <img
                    src={project.image}
                    alt={t(`projects.items.${project.id}.title`)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="font-mono text-[10px] text-[var(--color-accent)] uppercase tracking-widest">
                      {t('projects.view_details')}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-2xl text-[var(--color-text)] flex items-center gap-2 group-hover/card:text-[var(--color-accent)] transition-colors duration-300">
                      {t(`projects.items.${project.id}.title`)}
                      {project.inProgress && (
                        <span className="font-mono text-[12px] text-[var(--color-accent)]">In Progress</span>
                      )}
                    </h3>
                    <span className="font-mono text-[12px] text-[var(--color-muted)]">{project.year}</span>
                  </div>

                  <p className="font-mono text-[13px] text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-2 h-10">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="font-mono text-[9px] px-2 py-1 border border-[var(--color-border-light)] text-[var(--color-muted)] uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
