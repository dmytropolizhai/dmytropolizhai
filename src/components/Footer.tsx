import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 py-6 gap-4 sm:gap-0"
      style={{ borderTop: '1px solid var(--color-border)' }}
      role="contentinfo"
    >
      <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: 'var(--color-muted)' }}>
        {t('footer.copy')}
      </span>
      <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: 'var(--color-accent)' }}>
        {t('footer.open')}
      </span>
    </footer>
  )
}
