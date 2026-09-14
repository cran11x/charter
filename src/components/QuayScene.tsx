/**
 * The Amsterdam quay, in two halves. `QuayBack` is sky, water and planks that
 * sit behind the merchant loop; `QuayFront` is the barrels and sacks that sit
 * in front of it and cover the video's bottom edge.
 *
 * The middle of the back layer is deliberately kept plain. The loop blends
 * with `multiply`, so anything busy behind the character shows through his
 * light areas — collar, ledger pages, stockings.
 */

const VIEW = '0 0 400 520'

export function QuayBack() {
  return (
    <svg
      className="scene-layer"
      viewBox={VIEW}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* sky */}
      <rect width="400" height="330" fill="var(--sky)" />

      <g className="sun-spin" style={{ transformOrigin: '344px 58px' }}>
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1="344"
            y1="58"
            x2="344"
            y2="8"
            transform={`rotate(${deg} 344 58)`}
            stroke="var(--orange)"
            strokeWidth="3"
            opacity="0.45"
          />
        ))}
      </g>
      <circle cx="344" cy="58" r="32" fill="var(--orange)" />
      <circle cx="344" cy="58" r="32" fill="none" stroke="var(--ink)" strokeWidth="3" />

      <g className="cloud-drift" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3">
        <path d="M12,84 a24,24 0 0 1 24,-24 a28,28 0 0 1 52,6 a20,20 0 0 1 4,40 h-60 a20,20 0 0 1 -20,-22 Z" />
        <path d="M300,140 a15,15 0 0 1 15,-15 a18,18 0 0 1 33,4 a12,12 0 0 1 2,25 h-38 a12,12 0 0 1 -12,-14 Z" />
      </g>

      <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="miter">
        <path d="M40,258 L40,206 L70,258 Z" fill="var(--paper)" />
      </g>

      <g className="wave-bob">
        <path
          d="M0,258 q34,-14 68,0 t68,0 t68,0 t68,0 t68,0 t68,0 L400,348 L0,348 Z"
          fill="var(--sea)"
          stroke="var(--ink)"
          strokeWidth="3"
        />
      </g>

      <rect y="348" width="400" height="172" fill="var(--sand)" />
      <line x1="0" y1="348" x2="400" y2="348" stroke="var(--ink)" strokeWidth="3" />
      <g stroke="var(--ink)" strokeWidth="2" opacity="0.28">
        {[390, 432, 474, 516].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} />
        ))}
      </g>
    </svg>
  )
}

function Barrel({
  x,
  y,
  w,
  h,
  fill,
}: {
  x: number
  y: number
  w: number
  h: number
  fill: string
}) {
  const bulge = w * 0.12
  return (
    <g transform={`translate(${x}, ${y})`} strokeLinejoin="miter">
      <path
        d={`M0,0 q${-bulge},${h / 2} 0,${h} h${w} q${bulge},${-h / 2} 0,${-h} Z`}
        fill={fill}
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <path
        d={`M${-bulge * 0.75},${h * 0.32} q${w / 2},6 ${w + bulge * 1.5},0`}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <path
        d={`M${-bulge * 0.75},${h * 0.66} q${w / 2},6 ${w + bulge * 1.5},0`}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <ellipse
        cx={w / 2}
        cy="0"
        rx={w / 2}
        ry="7"
        fill="var(--cream)"
        stroke="var(--ink)"
        strokeWidth="3"
      />
    </g>
  )
}

export function QuayFront() {
  return (
    <svg viewBox="0 0 400 128" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="miter">
        <path
          d="M10,128 L10,76 q0,-22 24,-26 q-6,-14 8,-16 q14,-2 11,12 q23,8 23,30 L76,128 Z"
          fill="var(--cream)"
        />
        <path d="M20,92 q23,-9 46,0" fill="none" strokeWidth="2.5" opacity="0.45" />
        <path d="M20,108 q23,-9 46,0" fill="none" strokeWidth="2.5" opacity="0.45" />
      </g>

      <Barrel x={92} y={58} w={68} h={70} fill="var(--orange)" />

      <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="miter">
        <rect x="290" y="62" width="100" height="66" fill="var(--sand)" />
        <g strokeWidth="2.5" opacity="0.45">
          <line x1="290" y1="84" x2="390" y2="84" />
          <line x1="290" y1="106" x2="390" y2="106" />
          <line x1="340" y1="62" x2="340" y2="128" />
        </g>
      </g>

      <Barrel x={222} y={76} w={56} h={52} fill="var(--sea)" />
    </svg>
  )
}
