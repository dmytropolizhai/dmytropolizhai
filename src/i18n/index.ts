import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'
import lv from './locales/lv.json'
import uk from './locales/uk.json'

export const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'lv', label: 'LV' },
  { code: 'uk', label: 'UK' },
] as const

export type LangCode = (typeof LANGUAGES)[number]['code']

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ru: { translation: ru }, lv: { translation: lv }, uk: { translation: uk } },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
