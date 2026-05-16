import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { projects } from '@/data/projects'

import { BackButton } from './components/back-button'
import { NoProject } from './no-project'
import { ForegroundContentBox } from './components/foreground-content-box'
import { DetailsGrid } from './components/details-grid'
import { ImagePreviewModal } from './components/image-preview-modal'
import type { Image } from '@/types'
import { useIsMobile } from '@/hooks/use-is-mobile'

export function ProjectDetailPage() {
  const { t } = useTranslation()
  const { id } = useParams({ from: '/projects/$id' })
  const project = projects.find(p => p.id === id)
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const isMobile = useIsMobile();

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedImage])

  if (!project) return <NoProject />

  const screenshots = project.images || [project.preview]
  const screenshotConfigs = [
    {
      key: "screenshot-1",
      image: screenshots[0],
      initial: { opacity: 0, y: 40, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      hover: {
        scale: 1.05,
        transition: { duration: 0.3 }
      },
      delay: 0.1,
      className:
        "absolute z-10 w-[240px] md:w-full max-w-[50vw] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] cursor-pointer"
    },
    {
      key: "screenshot-2",
      image: screenshots[1],
      animate: { opacity: 1, x: -500, rotate: -15, scale: 0.9 },
      hover: {
        scale: 1.05,
        x: -600,
        transition: { duration: 0.5 }
      },
      delay: 0.2,
      className:
        "absolute z-10 w-[240px] md:w-full max-w-[50vw] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
    },
    {
      key: "screenshot-3",
      image: screenshots[2],
      animate: { opacity: 1, x: 500, rotate: 15, scale: 0.9 },
      hover: {
        scale: 1.05,
        x: 500,
        transition: { duration: 0.5 }
      },
      delay: 0.3,
      className:
        "absolute z-10 w-[240px] md:w-full max-w-[50vw] rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] cursor-pointer"
    },
  ]


  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-visible">
      <BackButton />

      <section className="relative mb-32 pt-20 flex flex-col items-center">
        {!isMobile && (
          <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {screenshotConfigs.map(
                ({
                  key,
                  image,
                  initial,
                  animate,
                  hover,
                  delay,
                  className
                }) => (
                  <motion.div
                    key={`${id}-${key}`}
                    initial={initial ?? { opacity: 0, x: 0, rotate: 0, scale: 0.8 }}
                    animate={animate}
                    whileHover={hover}
                    transition={{
                      duration: 0.8,
                      delay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    onClick={() => setSelectedImage({
                      src: image.src,
                      alt: t(`projects.items.${id}.screenshots.${key}`),
                    })}
                    className={className}
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block w-full h-auto object-contain"
                    />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        )}

        <ForegroundContentBox project={project} />
      </section>

      <DetailsGrid project={project} />

      {!isMobile && (
        <ImagePreviewModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div >
  )
}
