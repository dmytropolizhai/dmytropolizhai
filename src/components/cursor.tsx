import { useEffect, useRef } from 'react'

type CursorMessage = {
  text: string
  duration?: number
}

class CursorEventEmitter extends EventTarget {
  hint(text: string, duration = 3000) {
    const event = new CustomEvent('cursor:hint', {
      detail: { text, duration }
    })
    this.dispatchEvent(event)
  }
}

export const cursor = new CursorEventEmitter()

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current!
    const ring = ringRef.current!
    const text = textRef.current!
    let rx = 0, ry = 0, mx = 0, my = 0, raf = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      text.style.left = rx + 'px'
      text.style.top = ry + 'px'
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

    const handleCursorHint = (e: Event) => {
      const customEvent = e as CustomEvent<CursorMessage>
      const { text: message, duration } = customEvent.detail

      // Hide ring and dot
      ring.style.opacity = '0'
      dot.style.opacity = '0'

      // Show and animate text
      text.textContent = message
      text.style.opacity = '1'
      text.style.transform = 'translate(-50%,-50%) scale(0.8)'

      // Trigger animation
      setTimeout(() => {
        text.style.transform = 'translate(-50%,-50%) scale(1)'
      }, 10)

      // Fade out text and restore ring/dot
      setTimeout(() => {
        text.style.opacity = '0'
        text.style.transform = 'translate(-50%,-50%) scale(0.8)'
        setTimeout(() => {
          ring.style.opacity = '1'
          dot.style.opacity = '1'
          text.textContent = ''
        }, 300)
      }, duration)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    cursor.addEventListener('cursor:hint', handleCursorHint)

    const els = document.querySelectorAll<HTMLElement>('a, button')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cursor.removeEventListener('cursor:hint', handleCursorHint)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] transition-[transform,opacity] duration-200"
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(212,255,110,0.4)] transition-[width,height,border-color,opacity] duration-300"
      />

      <div
        ref={textRef}
        aria-hidden="true"
        className="bg-accent-dim px-4 py-1 pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 select-none transition-[transform,opacity] duration-300 text-sm font-semibold text-accent whitespace-nowrap"
        style={{ opacity: 0 }}
      />
    </>
  )
}