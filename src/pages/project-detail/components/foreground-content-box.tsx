import { Project } from "@/data/projects";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

type ForegroundContentBoxProps = {
    project: Project
}


export function ForegroundContentBox({ project }: ForegroundContentBoxProps) {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
            }}
            className="relative z-30 -mt-20 md:-mt-32 w-full p-8 md:p-12 border border-border backdrop-blur-md bg-[rgba(var(--color-surface-rgb),0.8)] shadow-2xl rounded-sm"
        >
            <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight flex flex-col">
                <em className="not-italic opacity-50 block text-sm font-mono tracking-[0.2em] uppercase mb-4">
                    {project.year}
                </em>

                <em className="text-[var(--color-accent)] font-medium">
                    {t(`projects.items.${project.id}.title`)}
                </em>

                {project.inProgress && (
                    <span className="font-mono text-[12px] text-[var(--color-accent)]">
                        {t("projects.in_progress")}
                    </span>
                )}
            </h1>

            <p className="font-sans text-lg md:text-xl text-[var(--color-muted)] leading-relaxed">
                {t(`projects.items.${project.id}.description`)}
            </p>

            {project.url && (
                <div className="mt-6">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] text-[var(--color-accent)] underline underline-offset-4"
                    >
                        {t("projects.visit")}
                    </a>
                </div>
            )}

            <div className="flex flex-wrap gap-3 mt-8">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="font-mono text-[10px] px-3 py-1 border border-[var(--color-border-light)] text-[var(--color-muted)] uppercase tracking-wider"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}