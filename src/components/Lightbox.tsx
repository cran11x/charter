import { useEffect } from 'react'
import type { Plate } from '../data/gallery'
import Line from './Line'
import Media from './Media'

type Props = {
  plates: Plate[]
  index: number
  onClose: () => void
  onIndex: (index: number) => void
}

export default function Lightbox({ plates, index, onClose, onIndex }: Props) {
  const plate = plates[index]
  const total = plates.length

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % total)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + total) % total)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [index, onClose, onIndex, total])

  if (!plate) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${plate.titleNl} — ${plate.titleEn}`}
      onClick={onClose}
    >
      <button type="button" className="lb-close" onClick={onClose} aria-label="Sluiten">
        Sluiten
      </button>

      <button
        type="button"
        className="lb-nav lb-prev"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index - 1 + total) % total)
        }}
        aria-label="Vorige plaat"
      >
        ‹
      </button>

      <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
        <Media plate={plate} mode="stage" playing className="lb-media" />
        <figcaption className="lb-caption">
          <span className="lb-count">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <Line nl={plate.titleNl} en={plate.titleEn} />
          <Line as="p" className="note" nl={plate.captionNl} en={plate.captionEn} />
        </figcaption>
      </figure>

      <button
        type="button"
        className="lb-nav lb-next"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index + 1) % total)
        }}
        aria-label="Volgende plaat"
      >
        ›
      </button>

      <ol className="lb-strip" onClick={(e) => e.stopPropagation()}>
        {plates.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              className={i === index ? 'is-on' : undefined}
              onClick={() => onIndex(i)}
              aria-label={item.titleEn}
            >
              <Media plate={item} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
