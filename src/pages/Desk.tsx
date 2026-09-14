import Line from '../components/Line'

export default function Desk() {
  return (
    <div className="page">
      <div className="page-head">
        <h1>COMPTOIR</h1>
        <Line
          nl="De waar ligt in het pakhuis."
          en="The goods lie in the warehouse."
        />
      </div>

      <div className="soon">
        <Line
          as="p"
          nl="Hier komen de Stock Tokens te liggen: prijs, sessie, en één knop om te kopen."
          en="Stock Tokens will be listed here: price, session, and one button to buy."
        />
        <p>
          <span className="stamp">
            <Line nl="Nog gesloten" en="Not open yet" />
          </span>
        </p>
      </div>
    </div>
  )
}
