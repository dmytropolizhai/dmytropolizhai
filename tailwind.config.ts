import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        'accent-border': 'var(--color-accent-border)',
      },
    },
  },
  plugins: [],
} satisfies Config
