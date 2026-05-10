import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '@/i18n'
import { useNavigate, useParams } from '@tanstack/react-router'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const params = useParams({ strict: false }) as any

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language switcher">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => {
            navigate({
              to: '.',
              params: { ...params, locale: code },
            })
          }}
          aria-pressed={i18n.language === code}
          className="font-mono text-[11px] tracking-widest px-2 py-1 transition-colors duration-200"
          style={{
            color: i18n.language === code ? 'var(--color-text)' : 'var(--color-muted)',
            borderBottom: i18n.language === code ? '1px solid var(--color-accent)' : '1px solid transparent',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
