import { useIsMobile } from '@/hooks/use-is-mobile'
import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current!
    const ring = ringRef.current!
    let rx = 0, ry = 0, mx = 0, my = 0, raf = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2)'
      ring.style.width = '48px'; ring.style.height = '48px'
      ring.style.borderColor = 'var(--color-accent)'
    }
    const onLeave = () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.width = '32px'; ring.style.height = '32px'
      ring.style.borderColor = 'rgba(212,255,110,0.4)'
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    const els = document.querySelectorAll<HTMLElement>('a, button')
    els.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] transition-transform duration-200"
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(212,255,110,0.4)] transition-[width,height,border-color] duration-300"
      />  
    </>
  )
}
