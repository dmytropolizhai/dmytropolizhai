import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type FloatingBadge = {
    icon: string
    labelKey: string
    descKey: string
    position: string
    delay: number
    floatY: number
}

const BADGES: FloatingBadge[] = [
    {
        icon: '⚡',
        labelKey: 'hero.badges.fast.label',
        descKey: 'hero.badges.fast.desc',
        position: 'top-[10%] left-[3%] lg:top-[14%] lg:left-[5%]',
        delay: 0.2,
        floatY: -7,
    },
    {
        icon: '🎯',
        labelKey: 'hero.badges.result.label',
        descKey: 'hero.badges.result.desc',
        position: 'top-[10%] right-[3%] lg:top-[12%] lg:right-[5%]',
        delay: 0.35,
        floatY: 7,
    },
    {
        icon: '🔒',
        labelKey: 'hero.badges.support.label',
        descKey: 'hero.badges.support.desc',
        position: 'bottom-[28%] left-[2%] lg:bottom-[32%] lg:left-[4%]',
        delay: 0.5,
        floatY: -9,
    },
    {
        icon: '💬',
        labelKey: 'hero.badges.langs.label',
        descKey: 'hero.badges.langs.desc',
        position: 'bottom-[28%] right-[2%] lg:bottom-[32%] lg:right-[4%]',
        delay: 0.65,
        floatY: 9,
    },
]

const floatVariants = (floatY: number) => ({
    animate: {
        y: [0, floatY, 0],
        transition: {
            duration: 3.6 + Math.abs(floatY) * 0.06,
            repeat: Infinity,
            ease: 'easeInOut' as const,
        },
    },
})

type BadgeCardProps = FloatingBadge & { label: string; desc: string }

const BadgeCard = ({ icon, label, desc, position, delay, floatY }: BadgeCardProps) => (
    <motion.div
        className={`absolute ${position} z-10 pointer-events-none`}
        initial={{ opacity: 0, scale: 0.82, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
        <motion.div
            variants={floatVariants(floatY)}
            animate="animate"
            className="
                flex items-start gap-3
                px-4 py-3
                w-[168px] lg:w-[190px]
                rounded-xl
                border border-accent-border
                bg-accent-dim
                backdrop-blur-sm
                shadow-[0_4px_24px_rgba(227,93,20,0.10)]
                select-none
            "
        >
            {/* Icon bubble */}
            <span
                aria-hidden="true"
                className="
                    shrink-0 w-8 h-8
                    rounded-lg
                    border border-accent-border
                    bg-[rgba(227,93,20,0.12)]
                    flex items-center justify-center
                    text-[15px] leading-none
                "
            >
                {icon}
            </span>

            {/* Text */}
            <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-mono text-[10px] lg:text-[11px] text-accent tracking-[0.07em] uppercase leading-none">
                    {label}
                </span>
                <span className="font-mono text-[10px] lg:text-[10.5px] text-muted leading-[1.45] tracking-[0.01em]">
                    {desc}
                </span>
            </div>
        </motion.div>
    </motion.div>
)

export const FloatingBadges = () => {
    const { t } = useTranslation()

    return (
        <>
            {BADGES.map((badge) => (
                <BadgeCard
                    key={badge.labelKey}
                    {...badge}
                    label={t(badge.labelKey)}
                    desc={t(badge.descKey)}
                />
            ))}
        </>
    )
}
