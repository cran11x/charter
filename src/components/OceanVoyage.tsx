import { useState } from 'react'
import Line from './Line'
import Reveal from './Reveal'
import SpiceRoute from './SpiceRoute'
import { releasePointer, trackPointer } from '../lib/pointer'

const legs = ['Texel', 'Kaap de Goede Hoop', 'Indische Oceaan', 'Molukken']
const cargo = ['Nootmuskaat', 'Foelie', 'Kruidnagel']

export default function OceanVoyage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="voyage">
      <div
        className="voyage-plate"
        onPointerMove={trackPointer}
        onPointerLeave={releasePointer}
      >
        <img
          src="/merchant.jpg"
          alt="De koopman kijkt naar de vloot — The merchant faces the fleet"
        />
        <div className="voyage-shade" />
        <SpiceRoute active={active} onActive={setActive} />
      </div>

      <Reveal className="voyage-copy">
        <p className="eyebrow">Tweede bedrijf — de reis</p>
        <Line as="h2" className="title" nl="De vracht gaat zuid." en="The cargo runs south." />
        <Line
          as="p"
          className="note"
          nl="Eerst het boek. Dan het schip. Door de Indische Oceaan, naar de specerijeilanden."
          en="First the book. Then the ship. Across the Indian Ocean, to the spice islands."
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
      </Reveal>
    </section>
  )
}
