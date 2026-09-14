const spices = ['Nootmuskaat', 'Foelie', 'Kruidnagel', 'Peper', 'Kaneel']
const tickers = ['AAPL', 'NVDA', 'SPY', '$CHARTER', '01/10', '10/10']

function Track({ items, className }: { items: string[]; className?: string }) {
  const run = [...items, ...items]
  return (
    <div className={`marquee-track${className ? ` ${className}` : ''}`}>
      {run.map((item, i) => (
        <span key={`${item}-${i}`}>
          {item} <span className="tick">&mdash;</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-stack" aria-hidden="true">
      <div className="marquee">
        <Track items={spices} />
      </div>
      <div className="marquee marquee-ink">
        <Track items={tickers} className="is-reverse" />
      </div>
    </div>
  )
}
