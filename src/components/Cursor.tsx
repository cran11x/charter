import { useEffect, useRef } from 'react'

/**
 * A lagging ink ring. Native cursor stays; this is extra weight on fine pointers.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ring.current
    if (!node) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let hot = false
    let frame = 0

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      const target = e.target
      hot =
        target instanceof Element &&
        Boolean(target.closest('a, button, .deed-link, .route-legs li, .cargo-words li'))
      node.classList.toggle('is-hot', hot)
    }

    const tick = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove)
    frame = requestAnimationFrame(tick)
    document.documentElement.classList.add('has-cursor')

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return <div ref={ring} className="cursor" aria-hidden="true" />
}
