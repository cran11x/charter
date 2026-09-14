/**
 * CHARTER as a plate. Two passes of type so the ink outline stays sharp
 * even when the webfont is still swapping in.
 */
export default function Wordmark() {
  const type = {
    x: 350,
    y: 108,
    textLength: 690,
    lengthAdjust: 'spacingAndGlyphs' as const,
    textAnchor: 'middle' as const,
    fontFamily: 'Cinzel, serif',
    fontWeight: 700,
    fontSize: 118,
  }

  return (
    <svg className="wordmark" viewBox="0 0 700 140" role="img" aria-label="CHARTER">
      <text
        {...type}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="10"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        CHARTER
      </text>
      <text {...type} fill="var(--orange)">
        CHARTER
      </text>
    </svg>
  )
}
