import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import type { Project, Statistic } from "@/data/projects"


type DetailsGridProps = {
    project: Project
}

type DetailSectionProps = {
    title: string
    children: React.ReactNode
    delay?: number
}

function DetailSection({
    title,
    children,
    delay = 0
}: DetailSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <h2 className="font-mono text-[var(--color-accent)] text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--color-accent-border)]"></span>
                {title}
            </h2>

            {children}
        </motion.div>
    )
}

export function DetailsGrid({ project }: DetailsGridProps) {
    const { t } = useTranslation()

    const statistics = t(`projects.items.${project.id}.statistics`, {
        returnObjects: true
    }) as Statistic[]

    const contentSections = [
        {
            title: t("projects.labels.problem"),
            content: t(`projects.items.${project.id}.problem`, {
                defaultValue: t("projects.labels.not-provided")
            }),
            delay: 0
        },
        {
            title: t("projects.labels.solution"),
            content: t(`projects.items.${project.id}.solution`, {
                defaultValue: t("projects.labels.not-provided")
            }),
            delay: 0.1
        },
        {
            title: t("projects.labels.statistics"),
            delay: 0.2,
            content: (
                <div className="space-y-8">
                    {statistics.map((stat, i) => (
                        <div
                            key={i}
                            className="group"
                        >
                            <p className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                                {stat.label}
                            </p>

                            <p className="font-serif text-3xl text-[var(--color-text)]">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            )
        }
    ]

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {contentSections.map((section, index) => (
                <DetailSection
                    key={index}
                    title={section.title}
                    delay={section.delay}
                >
                    {typeof section.content === "string" ? (
                        <p className="font-sans text-[var(--color-text)] text-lg leading-relaxed opacity-80">
                            {section.content}
                        </p>
                    ) : (
                        section.content
                    )}
                </DetailSection>
            ))}
        </section>
    )
}