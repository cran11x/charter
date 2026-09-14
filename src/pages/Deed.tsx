import { Link, useParams } from 'react-router-dom'
import DeedCard from '../components/DeedCard'
import Line from '../components/Line'
import { EDITION, findDeed, lotNumber } from '../data/manifest'
import { releasePointer, trackPointer } from '../lib/pointer'

export default function Deed() {
  const { lot } = useParams()
  const deed = findDeed(lot)

  if (!deed) {
    return (
      <div className="page">
        <Link to="/manifest" className="back">
          &larr; Manifest
        </Link>
        <div className="soon">
          <Line
            as="p"
            nl="Deze akte staat niet in het boek."
            en="This deed is not in the ledger."
          />
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/manifest" className="back">
        &larr; Manifest
      </Link>

      <div className="deed-detail">
        <div
          className="deed-frame"
          onPointerMove={trackPointer}
          onPointerLeave={releasePointer}
        >
          <DeedCard deed={deed} />
        </div>

        <div>
          <div className="page-head">
            <h1>{deed.titleNl}</h1>
            <span className="lot">{`${lotNumber(deed.id)} / ${EDITION}`}</span>
          </div>

          <Line as="p" className="note" nl={deed.copyNl} en={deed.copyEn} />

          <table className="spec">
            <tbody>
              <tr>
                <th>Vracht / Cargo</th>
                <td>{deed.cargo}</td>
              </tr>
              <tr>
                <th>Kavel / Lot</th>
                <td>{`${lotNumber(deed.id)} van ${EDITION}`}</td>
              </tr>
              <tr>
                <th>Huis / House</th>
                <td>CHARTER</td>
              </tr>
              <tr>
                <th>Keten / Chain</th>
                <td>Robinhood Chain &middot; 4663</td>
              </tr>
              <tr>
                <th>Staat / Status</th>
                <td>
                  <Line nl="Nog niet geslagen" en="Not minted yet" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
