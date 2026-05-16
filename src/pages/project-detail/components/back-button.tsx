import { motion } from "framer-motion"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export const BackButton = () => {
    const { t } = useTranslation()
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link
                to="/"
                hash="projects"
                className="font-mono text-[12px] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 mb-12 inline-block"
            >
                {t('projects.back')}
            </Link>
        </motion.div>
    )
}