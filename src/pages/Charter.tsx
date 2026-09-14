import Line from '../components/Line'

export default function Charter() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>OCTROOI</h1>
        <Line nl="Het huisaandeel." en="The house share." />
      </div>

      <div className="soon">
        <Line
          as="p"
          nl="$CHARTER is de naam van dit huis. Geen noot, geen aandeel in AAPL, geen aanspraak op Manhattan."
          en="$CHARTER is the name of this house. Not nutmeg, not a share in AAPL, no claim on Manhattan."
        />
        <Line
          as="p"
          nl="Vaste voorraad. Geverifieerd. Het boek is openbaar."
          en="Fixed supply. Verified. The ledger is public."
        />
        <p>
          <span className="stamp">
            <Line nl="Nog niet uitgegeven" en="Not issued yet" />
          </span>
        </p>
      </div>
    </div>
  )
}
