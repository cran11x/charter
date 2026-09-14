import { useState } from 'react'
import Line from './Line'
import { SeaBack, SeaFront } from './SeaScene'
import SpiceRoute from './SpiceRoute'
import { releasePointer, trackPointer } from '../lib/pointer'

const legs = ['Texel', 'Kaap de Goede Hoop', 'Indische Oceaan', 'Molukken']
const cargo = ['Nootmuskaat', 'Foelie', 'Kruidnagel']

/** Act 2 — the cargo leaves the quay and runs south. */
export default function OceanVoyage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="voyage">
      <div
        className="scene"
        onPointerMove={trackPointer}
        onPointerLeave={releasePointer}
      >
        <div className="scene-layer scene-back">
          <SeaBack />
        </div>
        <SpiceRoute active={active} onActive={setActive} />
        <div className="scene-layer scene-front">
          <SeaFront />
        </div>
        <div className="scene-vignette" />
      </div>

      <div className="copy">
        <span className="act-label">Tweede bedrijf — de reis</span>

        <Line
          as="h2"
          className="title"
          nl="De vracht gaat zuid."
          en="The cargo runs south."
        />

        <Line
          as="p"
          className="note"
          nl="Eerst het boek. Dan het schip."
          en="First the book. Then the ship."
        />

        <Line
          as="p"
          className="note"
          nl="Door de Indische Oceaan, naar de specerijeilanden."
          en="Across the Indian Ocean, to the spice islands."
        />

        <ul className="route-legs">
          {legs.map((leg) => (
            <li
              key={leg}
              className={active === leg ? 'is-on' : undefined}
              onPointerEnter={() => setActive(leg)}
              onPointerLeave={() => setActive(null)}
            >
              {leg}
            </li>
          ))}
        </ul>

        <ul className="cargo-words">
          {cargo.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
