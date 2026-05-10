import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

import { Glow, GridLines } from './effects'
import { fadeUp } from './animations'
import { Badge } from './components/badge'
import { StatsBar } from './components/stats-bar'

export function HeroSection() {
    const { t } = useTranslation()

    return (
        <section
            aria-label="Hero"
            className="px-6 md:px-12 md:mx-2 md:mb-8 md:mt-2 md:rounded-2xl min-h-screen grid grid-rows-[1fr_auto] relative overflow-hidden bg-[var(--color-surface)]"
        >
            <GridLines />
            <Glow />

            <div className="flex flex-col justify-center pt-[120px] max-w-[900px] relative z-[1]">
                <Badge
                    text={t('hero.badge')}
                    icon={<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>}
                />
                {/* SEO */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-serif text-[clamp(48px,7vw,96px)] leading-none tracking-[-0.02em] font-normal"
                >
                    {t('hero.title_line1')}
                    <br />
                    <em className="italic text-[var(--color-accent)]">
                        {t('hero.title_em')}
                    </em>
                    <br />
                    <span className="text-[var(--color-muted)]">
                        {t('hero.title_muted')}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="font-mono mt-8 text-sm text-[var(--color-muted)] leading-[1.7] max-w-[480px] whitespace-pre-line"
                >
                    {t('hero.sub')}
                </motion.p>

                <motion.div
                    {...fadeUp(0.3)}
                    className="mt-12 flex items-center gap-6"
                >
                    <a href="#cta"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-[#0a0a0a] font-syne text-sm font-bold tracking-[0.04em] uppercase text-decoration-none transition-transform transition-box-shadow"
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,255,110,0.25)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                    >
                        {t('hero.cta_primary')}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </a>
                    <Link to="/projects" style={{
                        fontSize: 13, color: 'var(--color-muted)', textDecoration: 'none',
                        fontFamily: "'DM Mono',monospace", letterSpacing: '0.04em',
                        display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
                    }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
                    >
                        {t('hero.cta_ghost')}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
            <StatsBar />
        </section>
    )
}
