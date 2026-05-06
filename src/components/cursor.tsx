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
      <div ref={dotRef} aria-hidden="true" style={{
        position: 'fixed', width: 8, height: 8, background: 'var(--color-accent)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)', transition: 'transform 0.2s',
        top: 0, left: 0,
      }} />
      <div ref={ringRef} aria-hidden="true" style={{
        position: 'fixed', width: 32, height: 32,
        border: '1px solid rgba(212,255,110,0.4)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)',
        transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        top: 0, left: 0,
      }} />
    </>
  )
}
