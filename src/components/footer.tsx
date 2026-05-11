import { useTranslation } from 'react-i18next'
import { cursor } from './cursor'
import { GitBranch } from 'lucide-react'

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
      <a
        href="https://github.com/dmytropolizhai/dmytropolizhai"
        target="_blank"
        rel="noopener noreferrer"
        className='flex gap-2 items-center'
        onMouseEnter={() => cursor.hint(t("footer.open_source_code"))}
        onMouseLeave={() => cursor.reset()}
      >
        <GitBranch className="size-4 text-primary-dim hover:text-accent transition-colors duration-200" />
        <span className='block md:hidden font-mono text-[11px] tracking-[0.06em] text-muted'>
          Source code
        </span>
      </a>
    </footer>
  )
}
