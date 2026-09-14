import { useEffect, useRef, useState } from 'react'
import Line from './Line'
import Marks from './Marks'
import { releasePointer, trackPointer } from '../lib/pointer'

export type LoopBlend = 'multiply' | 'screen' | 'normal'

type Props = {
  src: string
  poster: string
  captionNl: string
  captionEn: string
  back?: React.ReactNode
  front?: React.ReactNode
  blend?: LoopBlend
  /**
   * Full illustrated plate (the harbor still, and the videos you shoot to
   * match it). No mask, no blend, no SVG sandwich — the frame is the picture.
   */
  plate?: boolean
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function MerchantVideo({
  src,
  poster,
  captionNl,
  captionEn,
  back,
  front,
  blend = 'multiply',
  plate = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stillOnly, setStillOnly] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = videoRef.current
    if (!node || stillOnly) return
    void node.play().catch(() => setStillOnly(true))
  }, [stillOnly])

  return (
    <div
      className={plate ? 'scene is-plate' : 'scene'}
      onPointerMove={trackPointer}
      onPointerLeave={releasePointer}
    >
      {!plate && <Marks />}
      {back && <div className="scene-layer scene-back">{back}</div>}

      <div className="loop-wrap" style={{ ['--loop-blend' as string]: blend }}>
        {stillOnly ? (
          <img className="loop-poster" src={poster} alt="" />
        ) : (
          <video
            ref={videoRef}
            className="loop"
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            onError={() => setStillOnly(true)}
          />
        )}
      </div>

      {front && <div className="scene-layer scene-front">{front}</div>}

      <div className="scene-vignette" />

      <figcaption className="film-caption">
        <Line nl={captionNl} en={captionEn} />
      </figcaption>
    </div>
  )
}
