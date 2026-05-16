import { useTranslation } from "react-i18next"
import { Link } from "@tanstack/react-router"

export const NoProject = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-32">
            <p className="font-mono text-[var(--color-muted)] mb-4">Project not found.</p>
            <Link
                to="/projects"
                hash="projects"
                className="text-[var(--color-accent)] underline underline-offset-4"
            >
                {t('projects.back')}
            </Link>
        </div >
    )
}