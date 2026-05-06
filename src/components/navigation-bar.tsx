import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './logo'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

export function NavigationBar() {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()

  const progress = useTransform(scrollYProgress, [0, 1], [0, 0.8], { clamp: true })

  const borderOpacity = progress
  const bgOpacity = useTransform(progress, [0, 1], [0, 0.85])
  const blur = useTransform(progress, [0, 1], [0, 12])

  const navBg = useMotionTemplate`rgba(10,10,10, ${bgOpacity})`
  const border = useMotionTemplate`rgba(255,255,255, ${borderOpacity})`
  const blurValue = useMotionTemplate`blur(${blur}px)`

  const categories = [
    { href: '#about', label: t('nav.approach') },
    { href: '#cta', label: t('nav.contact') },
  ]

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5"
      style={{
        borderColor: border,
        background: navBg,
        backdropFilter: blurValue,
      }}
    >
      <Link
        to="/"
        aria-label="Home"
        className="font-mono text-[13px] tracking-[0.05em] no-underline transition-colors duration-200 px-4 py-2 rounded-lg text-muted bg-surface"
      >
        <Logo />
      </Link>

      <div
        className="hidden md:flex items-center gap-8 bg-surface px-4 py-2 rounded-lg">
        <div className="flex gap-8">
          {categories.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[13px] font-medium tracking-[0.04em] uppercase no-underline transition-colors duration-200 text-muted"
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          className="flex items-center gap-3"
          style={{
            borderLeft: '1px solid var(--color-border)',
            paddingLeft: 16,
          }}
        >
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}