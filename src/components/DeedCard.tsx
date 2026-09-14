import { EDITION, lotNumber, type Deed } from '../data/manifest'

/**
 * A distinct cargo mark per lot. Bodies are filled ink, so any detail drawn
 * inside a body has to be cream or it disappears.
 */
const CUT = { fill: 'none', stroke: 'var(--cream)' } as const

function CargoMark({ id }: { id: number }) {
  switch (id) {
    case 1: // nootmuskaat
      return (
        <g>
          <ellipse cx="0" cy="0" rx="19" ry="25" />
          <path d="M0,-22 C7,-9 7,9 0,22" {...CUT} />
        </g>
      )
    case 2: // foelie — lace strands lying over the nut
      return (
        <g>
          <ellipse cx="0" cy="1" rx="11" ry="16" />
          {[-1, 1].map((dir) => (
            <path
              key={dir}
              d={`M${dir * 6},-24 C${dir * 20},-12 ${dir * 20},10 ${dir * 11},22`}
              fill="none"
            />
          ))}
        </g>
      )
    case 3: // kruidnagel — bud at the top, stem hanging down
      return (
        <g>
          <path d="M0,-6 L0,25" fill="none" />
          <circle cx="0" cy="-13" r="8" />
          {[-32, -11, 11, 32].map((deg) => (
            <path
              key={deg}
              d="M0,-19 L0,-28"
              fill="none"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>
      )
    case 4: // peper
      return (
        <g>
          {[
            [-14, -10],
            [12, -14],
            [0, 2],
            [-10, 16],
            [15, 12],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="7" />
          ))}
        </g>
      )
    case 5: // kaneel
      return (
        <g>
          <rect x="-22" y="-11" width="44" height="22" rx="11" />
          {[-10, 1, 12].map((x) => (
            <path key={x} d={`M${x},-8 L${x},8`} {...CUT} />
          ))}
        </g>
      )
    case 6: // het aandeel
      return (
        <g>
          <rect x="-20" y="-26" width="40" height="52" rx="4" />
          {[-14, -4, 6, 16].map((y) => (
            <path key={y} d={`M-11,${y} L11,${y}`} {...CUT} />
          ))}
        </g>
      )
    case 7: // vrachtbrief
      return (
        <g>
          <path d="M-22,-24 L22,-24 L22,20 L0,28 L-22,20 Z" />
          {[-13, -3, 7].map((y) => (
            <path key={y} d={`M-12,${y} L12,${y}`} {...CUT} />
          ))}
        </g>
      )
    case 8: // pakhuiszegel
      return (
        <g>
          <circle cx="0" cy="0" r="24" />
          <circle cx="0" cy="0" r="14" {...CUT} />
          <path d="M0,-24 L0,-14 M0,14 L0,24 M-24,0 L-14,0 M14,0 L24,0" {...CUT} />
        </g>
      )
    case 9: // nieuw-amsterdam
      return (
        <g>
          <path d="M-8,-26 C6,-22 10,-4 6,14 C4,24 -4,26 -8,20 C-12,10 -14,-14 -8,-26 Z" />
          <path d="M-20,24 L20,24" fill="none" />
        </g>
      )
    default: // huisoctrooi
      return (
        <g>
          <path d="M-22,-22 L22,-22 L22,22 L-22,22 Z" fill="none" />
          <path d="M-10,-10 L10,-10 M-10,0 L10,0 M-10,10 L4,10" fill="none" />
        </g>
      )
  }
}

const DISPLAY = 'Cinzel, serif'
const BODY = 'Source Sans 3, sans-serif'

export default function DeedCard({ deed }: { deed: Deed }) {
  const lot = lotNumber(deed.id)

  if (deed.image) {
    return <img className="deed-art" src={deed.image} alt={deed.titleEn} />
  }

  return (
    <svg
      className="deed-art"
      viewBox="0 0 400 480"
      role="img"
      aria-label={`${deed.titleNl} — ${deed.titleEn}, lot ${lot} van ${EDITION}`}
    >
      <rect width="400" height="480" fill="var(--paper)" />

      {/* wood header band */}
      <rect width="400" height="52" fill="var(--sand)" />
      <line
        x1="0"
        y1="52"
        x2="400"
        y2="52"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="34"
        fill="var(--cream)"
        fontFamily={DISPLAY}
        fontWeight="700"
        fontSize="13"
        letterSpacing="2.5"
      >
        VRACHTBRIEF
      </text>
      <g transform="translate(346, 26)">
        <circle
          r="19"
          fill="var(--orange)"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
        <text
          y="5"
          fill="var(--cream)"
          fontFamily={DISPLAY}
          fontWeight="700"
          fontSize="11"
          textAnchor="middle"
        >
          1602
        </text>
      </g>

      {/* lot number */}
      <text
        x="200"
        y="182"
        fill="var(--orange)"
        stroke="var(--ink)"
        strokeWidth="3"
        paintOrder="stroke fill"
        strokeLinejoin="miter"
        fontFamily={DISPLAY}
        fontWeight="700"
        fontSize="110"
        textAnchor="middle"
      >
        {lot}
      </text>
      <text
        x="200"
        y="212"
        fill="var(--ink)"
        fontFamily={DISPLAY}
        fontWeight="700"
        fontSize="15"
        letterSpacing="4"
        textAnchor="middle"
        opacity="0.65"
      >
        {`VAN ${EDITION}`}
      </text>

      {/* cargo mark in a rounded chip */}
      <g transform="translate(24, 250)">
        <rect
          width="86"
          height="86"
          rx="6"
          fill="var(--cream)"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
        <g
          transform="translate(43, 43)"
          fill="var(--ink)"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <CargoMark id={deed.id} />
        </g>
      </g>

      <text
        x="128"
        y="284"
        fill="var(--ink)"
        fontFamily={DISPLAY}
        fontWeight="700"
        fontSize="24"
      >
        {deed.titleNl}
      </text>
      <text
        x="128"
        y="308"
        fill="var(--ink)"
        fontFamily={BODY}
        fontSize="16"
        opacity="0.6"
      >
        {deed.titleEn}
      </text>
      <text
        x="128"
        y="332"
        fill="var(--orange)"
        fontFamily={DISPLAY}
        fontWeight="700"
        fontSize="13"
        letterSpacing="1.5"
      >
        {deed.cargo.toUpperCase()}
      </text>

      {/* footer band */}
      <line
        x1="0"
        y1="372"
        x2="400"
        y2="372"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <rect y="372" width="400" height="108" fill="var(--cream)" />
      <text
        x="24"
        y="412"
        fill="var(--ink)"
        fontFamily={BODY}
        fontWeight="600"
        fontSize="16"
      >
        {deed.copyNl}
      </text>
      <text
        x="24"
        y="436"
        fill="var(--ink)"
        fontFamily={BODY}
        fontSize="14"
        opacity="0.6"
      >
        {deed.copyEn}
      </text>
    </svg>
  )
}
