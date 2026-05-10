import { createFileRoute, Outlet, useParams, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'
import i18n, { LANGUAGES } from '@/i18n'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    const isValidLocale = LANGUAGES.some(lang => lang.code === params.locale)
    if (!isValidLocale) {
      throw redirect({
        to: '/$locale',
        params: { locale: 'en' },
      })
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  const { locale } = useParams({ from: '/$locale' })

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  return <Outlet />
}
