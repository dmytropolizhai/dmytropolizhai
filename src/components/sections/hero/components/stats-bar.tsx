import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { fadeUp } from '../animations'

type Stat = {
    value: string;
    label: string;
}

const StatItem = ({ value, label }: Stat) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="font-serif text-[28px] text-[var(--color-text)] leading-none">
                {value}
            </span>
            <span className="font-mono text-[11px] text-[var(--color-muted)] tracking-[0.06em] uppercase">
                {label}
            </span>
        </div>
    )
}


export const StatsBar = () => {
    const { t } = useTranslation()

    const stats = t("hero.stats", { returnObjects: true }) as Stat[]
    if (!Array.isArray(stats)) return null

    return (
        <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0 py-8 border-t border-[var(--color-border)] relative z-[1]"
        >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {stats.map((stat, index) => (
                    <StatItem key={index} {...stat} />
                ))}
            </div>

            <div className="font-mono flex items-center gap-3 text-[11px] text-[var(--color-muted)] tracking-[0.08em] uppercase">
                <div className="w-10 h-px bg-[var(--color-muted)] relative overflow-hidden">
                    <span
                        aria-hidden="true"
                        className="absolute top-0 left-[-100%] w-full h-full bg-[var(--color-accent)] animate-[scanline_2s_infinite]"
                    />
                </div>

                {t('hero.scroll')}
            </div>
        </motion.div>
    )
}