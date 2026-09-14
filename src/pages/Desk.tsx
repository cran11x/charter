import Line from '../components/Line'
import Reveal from '../components/Reveal'

export default function Desk() {
  return (
    <div className="page split">
      <Reveal className="page-still">
        <img
          src="/header.jpg"
          alt="De kade bij zonsondergang — The quay at sunset"
          style={{ objectPosition: '72% 40%' }}
        />
      </Reveal>

      <div>
        <div className="page-head">
          <p className="eyebrow">Pakhuis</p>
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
    </div>
  )
}
