import { useNavigate } from 'react-router-dom'
import Line from './Line'
import Wordmark from './Wordmark'

/**
 * Act 1 — full-bleed harbor header. The CTA sits on the merchant's parchment
 * so it reads as a seal on the paper, not a UI chip floating above it.
 */
export default function ComptoirHero() {
  const navigate = useNavigate()

  return (
    <section className="header-hero">
      <img
        className="header-plate"
        src="/header.jpg"
        alt="De kade bij zonsondergang — The quay at sunset"
      />

      <div className="header-veil" aria-hidden="true" />

      <div className="header-copy">
        <span className="act-label">Anno 1602 — Amsterdam</span>
        <h1 className="wordmark-head">
          <Wordmark />
        </h1>
        <Line as="p" className="lede" nl="Het huisaandeel." en="The house share." />
        <span className="stamp stamp-live">
          <Line nl="Pakhuis open" en="Warehouse open" />
        </span>
      </div>

      <button
        type="button"
        className="seal-btn"
        onClick={() => navigate('/desk')}
        aria-label="Naar het comptoir — Enter the desk"
      >
        <span className="seal-ring" aria-hidden="true" />
        <span className="seal-core">
          <span className="seal-nl">Teken</span>
          <span className="seal-en">Sign &amp; enter</span>
        </span>
      </button>
    </section>
  )
}
