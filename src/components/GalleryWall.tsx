import { useState } from 'react'
import { hungPlates, plates, type Plate } from '../data/gallery'
import Line from './Line'
import Lightbox from './Lightbox'
import Media from './Media'
import Reveal from './Reveal'

function Tile({
  plate,
  onOpen,
}: {
  plate: Plate
  onOpen: (plate: Plate) => void
}) {
  const [hover, setHover] = useState(false)
  const live = !plate.coming && Boolean(plate.src)

  return (
    <article
      className={`tile span-${plate.span}${live ? '' : ' is-coming'}${plate.kind === 'video' ? ' is-film' : ''}`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <button
        type="button"
        className="tile-hit"
        disabled={!live}
        onClick={() => live && onOpen(plate)}
        aria-label={
          live
            ? `${plate.titleNl} — ${plate.titleEn}`
            : `${plate.titleNl} volgt binnenkort`
        }
      >
        <Media plate={plate} playing={hover && live && plate.kind === 'video'} />
        <span className="tile-veil" />
        <span className="tile-meta">
          <Line nl={plate.titleNl} en={plate.titleEn} />
          {plate.kind === 'video' && <span className="film-tag">Film</span>}
        </span>
      </button>
    </article>
  )
}

export default function GalleryWall() {
  const [open, setOpen] = useState<number | null>(null)

  const onOpen = (plate: Plate) => {
    const index = hungPlates.findIndex((item) => item.id === plate.id)
    if (index >= 0) setOpen(index)
  }

  return (
    <section className="atelier" id="atelier">
      <Reveal className="section-head">
        <p className="eyebrow">Atelier — de platen</p>
        <Line
          as="h2"
          className="title"
          nl="Kijk. Later hangt hier meer."
          en="Look. More will hang here later."
        />
      </Reveal>

      <Reveal className="wall">
        {plates.map((plate) => (
          <Tile key={plate.id} plate={plate} onOpen={onOpen} />
        ))}
      </Reveal>

      {open !== null && (
        <Lightbox
          plates={hungPlates}
          index={open}
          onClose={() => setOpen(null)}
          onIndex={setOpen}
        />
      )}
    </section>
  )
}
