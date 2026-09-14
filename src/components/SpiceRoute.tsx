/**
 * Texel -> Kaap de Goede Hoop -> Indische Oceaan -> Molukken.
 * Loose equirectangular sketch, not a navigational chart.
 */
const LANE =
  'M23,9 C6,30 6,58 24,74 C30,84 32,90 36,93 C72,104 106,97 126,84 C134,79 139,71 141,65'

const ports = [
  { x: 23, y: 9, label: 'Texel', match: 'Texel', anchor: 'start' as const, w: 17 },
  { x: 36, y: 93, label: 'Kaap', match: 'Kaap de Goede Hoop', anchor: 'start' as const, w: 16 },
  { x: 141, y: 65, label: 'Molukken', match: 'Molukken', anchor: 'end' as const, w: 27 },
]

type Props = {
  active?: string | null
  onActive?: (label: string | null) => void
}

export default function SpiceRoute({ active, onActive }: Props) {
  const oceanOn = active === 'Indische Oceaan'

  return (
    <svg
      className={`route${oceanOn ? ' is-ocean' : ''}`}
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        className="land"
        d="M3,39 L14,28 L34,22 L52,26 L50,30 L66,48 L56,76 L36,96 L26,82 L26,56 L3,45 Z"
      />
      <path
        className="land"
        d="M60,22 L100,16 L130,20 L136,34 L112,40 L105,38 L94,53 L83,37 L66,34 Z"
      />
      <path className="land" d="M112,58 L132,55 L150,62 L146,70 L126,69 L114,63 Z" />

      <path className="lane" d={LANE} />

      {ports.map((port) => {
        const gap = port.anchor === 'end' ? -3.5 : 3.5
        const on = active === port.match
        return (
          <g
            key={port.label}
            className={on ? 'port-hit is-on' : 'port-hit'}
            onPointerEnter={() => onActive?.(port.match)}
            onPointerLeave={() => onActive?.(null)}
          >
            <rect
              className="port-pill"
              x={port.anchor === 'end' ? port.x + gap - port.w : port.x + gap}
              y={port.y - 4}
              width={port.w}
              height="8"
              rx="2"
            />
            <text
              className="port-label"
              x={port.x + gap * 1.6}
              y={port.y + 1.8}
              textAnchor={port.anchor}
            >
              {port.label}
            </text>
            <circle className="port" cx={port.x} cy={port.y} r={on ? 3.2 : 2} />
          </g>
        )
      })}

      <circle
        className="cargo cargo-move"
        r="3.4"
        style={{ offsetPath: `path("${LANE}")`, offsetRotate: '0deg' }}
      />
    </svg>
  )
}
