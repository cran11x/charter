import { Link } from 'react-router-dom'
import DeedCard from '../components/DeedCard'
import Line from '../components/Line'
import { EDITION, deeds, lotNumber } from '../data/manifest'
import { releasePointer, trackPointer } from '../lib/pointer'

export default function Manifest() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>MANIFEST</h1>
        <Line nl="Tien akten. Niet meer." en="Ten deeds. No more." />
      </div>

      <div className="deed-grid">
        {deeds.map((deed) => (
          <Link
            key={deed.id}
            to={`/manifest/${lotNumber(deed.id)}`}
            className="deed-link"
            onPointerMove={trackPointer}
            onPointerLeave={releasePointer}
          >
            <DeedCard deed={deed} />
            <div className="deed-caption">
              <Line nl={deed.titleNl} en={deed.titleEn} />
              <span className="lot">{`${lotNumber(deed.id)} / ${EDITION}`}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
