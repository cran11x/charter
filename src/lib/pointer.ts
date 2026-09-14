import type { PointerEvent as ReactPointerEvent } from 'react'

/** Writes --px/--py in -1..1 so CSS can drive tilt and parallax. */
export function trackPointer(e: ReactPointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width) * 2 - 1
  const y = ((e.clientY - r.top) / r.height) * 2 - 1
  e.currentTarget.style.setProperty('--px', x.toFixed(3))
  e.currentTarget.style.setProperty('--py', y.toFixed(3))
  e.currentTarget.classList.add('is-tracking')
}

export function releasePointer(e: ReactPointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--px', '0')
  e.currentTarget.style.setProperty('--py', '0')
  e.currentTarget.classList.remove('is-tracking')
}
