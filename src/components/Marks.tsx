/** Print-register ticks. Makes a panel read as a plate, not a rounded card. */
export default function Marks() {
  return (
    <span className="marks" aria-hidden="true">
      <i className="mark tl" />
      <i className="mark tr" />
      <i className="mark bl" />
      <i className="mark br" />
    </span>
  )
}
