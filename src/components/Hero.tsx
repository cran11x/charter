import { useNavigate } from 'react-router-dom'
import { releasePointer, trackPointer } from '../lib/pointer'
import Line from './Line'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section
      className="hero"
      onPointerMove={trackPointer}
      onPointerLeave={releasePointer}
    >
      <img
        className="hero-plate"
        src="/header.jpg"
        alt="De kade bij zonsondergang — The quay at sunset"
      />
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow">Anno 1602 · Amsterdam</p>
        <h1>CHARTER</h1>
        <Line as="p" className="lede" nl="Het huisaandeel." en="The house share." />
        <div className="hero-actions">
          <a className="btn" href="#atelier">
            <Line nl="Bekijk de platen" en="View the plates" />
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/desk')}>
            <Line nl="Naar het comptoir" en="Enter the desk" />
          </button>
        </div>
      </div>

      <a className="scroll-cue" href="#atelier" aria-label="Naar het atelier">
        <span />
      </a>
    </section>
  )
}
