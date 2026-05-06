import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './logo'

export function NavigationBar() {
  const { t } = useTranslation()

  const categories = [
    { href: '#about', label: t('nav.approach') },
    { href: '/projects', label: t('nav.projects'), isRoute: true },
    { href: '#cta', label: t('nav.contact') },
  ]

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 px-6 md:px-12 py-4 md:py-5"
      style={{
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <Link
        to="/"
        aria-label="Home"
        className="font-mono text-[13px] tracking-[0.05em] no-underline transition-colors duration-200"
        style={{
          background: scrolled ? 'transparent' : 'var(--color-bg)',
          padding: '8px 16px',
          borderRadius: '8px',
          color: "var(--color-muted)"
        }}
      >
        <Logo />
      </Link>

      <div
        className="hidden md:flex items-center gap-8"
        style={{
          background: scrolled ? 'transparent' : 'var(--color-bg)',
          padding: '8px 16px',
          borderRadius: '8px',
        }}
      >
        <div className="flex gap-8">
          {categories.map(({ href, label, isRoute }) =>
            isRoute ? (
              <Link
                key={href}
                to={href}
                className="font-sans text-[13px] font-medium tracking-[0.04em] uppercase no-underline transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={href}
                className="font-sans text-[13px] font-medium tracking-[0.04em] uppercase no-underline transition-colors duration-200"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {label}
              </a>
            )
          )}
        </div>
        <div className="flex items-center gap-3" style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: 16 }}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
