import { useTranslation } from "react-i18next"

export const DiscussButton = () => {
    const { t } = useTranslation()

    return (
        <a
            href="#cta"
            className="font-sans py-2 bg-accent px-4 rounded-full text-[13px] font-medium tracking-[0.04em] uppercase 
              no-underline transition-colors duration-200 text-black text-center"
        >
            {t('hero.cta.primary')}
        </a>
    )
}