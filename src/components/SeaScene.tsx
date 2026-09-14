/**
 * The open sea for Act 2 — gold-hour water to match the harbor still.
 */

export function SeaBack() {
  return (
    <svg
      className="scene-layer"
      viewBox="0 0 400 460"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dusk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6d09a" />
          <stop offset="55%" stopColor="var(--sky)" />
          <stop offset="100%" stopColor="#e8a05a" />
        </linearGradient>
        <linearGradient id="gold-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a05a" />
          <stop offset="45%" stopColor="var(--sea)" />
          <stop offset="100%" stopColor="#243844" />
        </linearGradient>
      </defs>

      <rect width="400" height="460" fill="url(#gold-water)" />
      <rect width="400" height="188" fill="url(#dusk-sky)" />

      <circle cx="272" cy="108" r="28" fill="#f4e0a8" opacity="0.95" />
      <circle cx="272" cy="108" r="44" fill="#f4e0a8" opacity="0.22" />

      <g className="cloud-drift" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.4" opacity="0.7">
        <path d="M18,66 a20,20 0 0 1 20,-20 a24,24 0 0 1 44,5 a17,17 0 0 1 3,33 h-50 a17,17 0 0 1 -17,-18 Z" />
        <path d="M296,42 a15,15 0 0 1 15,-15 a18,18 0 0 1 33,4 a12,12 0 0 1 2,25 h-38 a12,12 0 0 1 -12,-14 Z" />
      </g>

      <path
        d="M0,180 q34,-15 68,0 t68,0 t68,0 t68,0 t68,0 t68,0 L400,198 L0,198 Z"
        fill="url(#gold-water)"
      />
    </svg>
  )
}

export function SeaFront() {
  return (
    <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <path
        d="M0,78 q44,-22 88,0 t88,0 t88,0 t88,0 t88,0 L400,150 L0,150 Z"
        fill="var(--sea)"
      />

      <g className="ship-rock" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="miter">
        <g transform="translate(212, 8)">
          <line x1="0" y1="72" x2="0" y2="0" />
          <path d="M3,6 L34,34 L3,46 Z" fill="var(--paper)" />
          <path d="M-3,6 L-31,34 L-3,46 Z" fill="var(--paper)" />
          <path d="M0,0 L0,-20 L22,-10 Z" fill="var(--orange)" />
          <path d="M-38,58 L38,58 L26,84 L-26,84 Z" fill="var(--sand)" />
        </g>
      </g>

      <g className="wave-bob">
        <path
          d="M0,118 q44,-18 88,0 t88,0 t88,0 t88,0 t88,0 L400,150 L0,150 Z"
          fill="var(--ink)"
          opacity="0.55"
        />
        <g stroke="var(--sky)" strokeWidth="2" strokeLinecap="square" opacity="0.45">
          <path d="M44,128 q16,-8 32,0" fill="none" />
          <path d="M196,124 q16,-8 32,0" fill="none" />
          <path d="M320,130 q16,-8 32,0" fill="none" />
        </g>
      </g>
    </svg>
  )
}
