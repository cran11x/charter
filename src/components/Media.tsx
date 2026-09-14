import { useEffect, useRef, useState } from 'react'
import type { Plate } from '../data/gallery'

type Mode = 'tile' | 'stage'

type Props = {
  plate: Plate
  className?: string
  mode?: Mode
  playing?: boolean
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Media({
  plate,
  className = '',
  mode = 'tile',
  playing = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const still =
    failed || plate.coming || plate.kind !== 'video' || prefersReducedMotion()

  useEffect(() => {
    const node = videoRef.current
    if (!node || still) return
    if (playing) {
      void node.play().catch(() => setFailed(true))
    } else {
      node.pause()
    }
  }, [playing, still])

  const pos = plate.objectPosition ?? 'center center'
  const classes = `media ${className}`.trim()

  if (plate.coming || !plate.src) {
    return (
      <div className={`${classes} is-coming`} aria-hidden="true">
        <span className="coming-mark" />
        <span className="coming-label">
          {plate.kind === 'video' ? 'Lus volgt' : 'Plaat volgt'}
        </span>
      </div>
    )
  }

  if (plate.kind === 'video' && !still) {
    return (
      <video
        ref={videoRef}
        className={classes}
        src={plate.src}
        poster={plate.poster}
        muted
        loop
        playsInline
        autoPlay={mode === 'stage'}
        preload={mode === 'stage' ? 'auto' : 'metadata'}
        style={{ objectPosition: pos }}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <img
      className={classes}
      src={plate.poster ?? plate.src}
      alt={plate.titleEn}
      style={{ objectPosition: pos }}
    />
  )
}
