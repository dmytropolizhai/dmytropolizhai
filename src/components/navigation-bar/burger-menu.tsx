import { motion, AnimatePresence } from 'framer-motion'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTranslation } from 'react-i18next'
import { DiscussButton } from './discuss-button'


const BLOCK_COUNT = 5
const STAGGER = 0.04
const BLOCK_DURATION = 0.5
const EASE = [0.76, 0, 0.24, 1] as const

type BurgerMenuProps = {
  menuOpen: boolean
  closeMenu: () => void
  categories: {
    href: string
    label: string
  }[]
}

export function BurgerIcon({ isOpen }: { isOpen: boolean }) {

  return (
    <div className="relative w-5 h-4 flex flex-col justify-between">
      <motion.span
        className="block h-[1.5px] w-full bg-text origin-center"
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.span
        className="block h-[1.5px] w-full bg-text origin-center"
        animate={isOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.span
        className="block h-[1.5px] w-full bg-text origin-center"
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  )
}

export function BurgerMenu({
  menuOpen,
  closeMenu,
  categories,
}: BurgerMenuProps) {
  const { t } = useTranslation()

  const totalBlocksTime = BLOCK_COUNT * STAGGER + BLOCK_DURATION
  const contentDelay = totalBlocksTime * 0.6

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />

          {/* Slide-in panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[360px] md:hidden overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Animated blocks filling the container */}
            <div className="absolute inset-0 flex flex-row-reverse">
              {Array.from({ length: BLOCK_COUNT }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-full bg-surface"
                  style={{ flex: 1 }}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{
                    duration: BLOCK_DURATION,
                    delay: i * STAGGER,
                    ease: EASE,
                  }}
                />
              ))}
            </div>

            {/* Subtle border on the left edge */}
            <motion.div
              className="absolute top-0 left-0 bottom-0 w-px bg-border"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.4, delay: contentDelay * 0.5, ease: EASE }}
              style={{ transformOrigin: 'top' }}
            />

            {/* Menu content */}
            <motion.div
              className="relative z-10 flex flex-col h-full pt-24 pb-10 px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                delay: contentDelay,
                ease: 'easeOut',
              }}
            >
              {/* Navigation links */}
              <div className="flex flex-col gap-2">
                {categories.map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="group flex items-center py-4 no-underline border-b border-border"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{
                      duration: 0.4,
                      delay: contentDelay + i * 0.08,
                      ease: EASE,
                    }}
                  >
                    <span className="font-sans text-[28px] capitalize font-medium tracking-tight text-text group-hover:text-accent transition-colors duration-200">
                      {label}
                    </span>

                    <motion.span
                      className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </div>

              <div className="flex-1" />

              {/* Bottom section */}
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.4,
                  delay: contentDelay + 0.2,
                  ease: EASE,
                }}
              >
                <div className="h-px bg-border" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted">
                    {t('nav.language', 'Language')}
                  </span>

                  <LanguageSwitcher />
                </div>

                <DiscussButton />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}