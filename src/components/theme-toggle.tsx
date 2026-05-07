import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(true)

  useEffect(() => {
    const root = document.documentElement;
    
    root.classList.toggle('dark', dark)
    root.classList.toggle('light', !dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="font-mono text-[11px] tracking-widest transition-colors duration-200 text-muted"
    >
      {dark ? '○' : '●'}
    </button>
  )
}
