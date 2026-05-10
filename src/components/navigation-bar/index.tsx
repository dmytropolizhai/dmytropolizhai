import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useState, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'
import { BurgerIcon, BurgerMenu } from './burger-menu'


export function NavigationBar() {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const progress = useTransform(scrollYProgress, [0, 1], [0, 0.8], { clamp: true })

  const borderOpacity = progress
  const bgOpacity = useTransform(progress, [0, 1], [0, 0.85])
  const blur = useTransform(progress, [0, 1], [0, 12])

  const navBg = useMotionTemplate`rgba(var(--color-bg-rgb), ${bgOpacity})`
  const borderAlpha = useTransform(borderOpacity, [0, 1], [0, 0.1])
  const border = useMotionTemplate`rgba(var(--color-text-rgb), ${borderAlpha})`
  const blurValue = useMotionTemplate`blur(${blur}px)`

  const colorValue = useTransform(progress, [0.3, 1], ['var(--color-accent)', 'var(--color-text)']);

  const utilityClasses = {
    color: colorValue,
    '--color-text': colorValue,
    '--color-muted': colorValue,
  } as any;

  const categories = [
    { href: '/#about', label: t('nav.approach') },
    { href: '/#cta', label: t('nav.contact') },
  ]

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b"
        style={{
          borderColor: border,
          background: navBg,
          backdropFilter: blurValue,
        }}
      >
        <Link
          to="/"
          aria-label="Home"
          className="font-mono text-[13px] tracking-[0.05em] no-underline transition-colors duration-200 px-4 py-2 rounded-lg text-text hover:bg-accent-dim"
        >
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 px-4 py-2 rounded-lg">
          <div className="flex gap-8">
            {categories.map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                className="font-sans text-[13px] font-medium tracking-[0.04em] uppercase no-underline transition-colors duration-200 text-muted hover:text-text"
                style={{
                  color: colorValue
                }}
              >
                {label}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="flex items-center gap-3 border-l border-accent-dim pl-4"
            style={utilityClasses}
          >
            <LanguageSwitcher />
          </motion.div>
        </div>

        {/* Mobile burger button */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden relative z-[60] p-2 -mr-2"
        >
          <BurgerIcon isOpen={menuOpen} />
        </button>
      </motion.nav>

      <BurgerMenu
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        categories={categories}
      />
    </>
  )
}