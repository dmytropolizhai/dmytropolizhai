import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

import { Glow, GridLines } from './effects'
import { fadeUp } from './animations'
import { FloatingBadges } from './components/floating-badges'
import { useIsMobile } from '@/hooks/use-is-mobile'

export function HeroSection() {
    const { t } = useTranslation()
    const isMobile = useIsMobile()

    return (
        <section
            aria-label="Hero"
            className="px-6 md:px-12 md:mx-2 md:mb-8 md:mt-2 md:rounded-2xl min-h-screen grid grid-rows-[1fr_auto] relative overflow-hidden bg-surface"
        >
            <GridLines />
            <Glow />

            <div
                aria-hidden="false"
                className="inset-0 flex items-center justify-center z-0 pointer-events-none"
            >
                {!isMobile && <FloatingBadges />}

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                    className="
                        font-serif text-center
                        tracking-[0.01em]
                        flex flex-col items-center
                        select-none
                    "
                >
                    <motion.p
                        {...fadeUp(0.1)}
                        aria-hidden="true"
                        className="font-serif text-[clamp(48px,7vw,96px)] leading-none tracking-[-0.02em] font-normal"
                    >
                        {t('hero.title.line1')}
                        <br />
                        <em className="italic text-accent">
                            {t('hero.title.line2')}
                        </em>
                        <br />
                        <span className="text-muted">
                            {t('hero.title.muted')}
                        </span>
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                        {...fadeUp(0.2)}
                        className="font-mono mt-8 text-sm text-muted leading-[1.7] max-w-[480px] whitespace-pre-line"
                    >
                        {t('hero.sub')}
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.3)}
                        className="mt-12 flex items-center gap-6"
                    >
                        <a
                            href="#cta"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-[#0a0a0a] font-sans text-sm font-bold tracking-[0.04em] uppercase no-underline transition-[transform,box-shadow] duration-200"
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(227,93,20,0.28)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                        >
                            {t('hero.cta.primary')}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>

                        <Link
                            to="/projects"
                            className="font-mono text-[13px] text-muted no-underline flex items-center gap-2 tracking-[0.04em] transition-colors duration-200 hover:text-text"
                        >
                            {t('hero.cta.ghost')}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
