import { Link } from 'react-router-dom'
import Line from './Line'
import Reveal from './Reveal'

const rooms = [
  {
    to: '/desk',
    src: '/header.jpg',
    pos: '78% 40%',
    nl: 'Comptoir',
    en: 'The desk',
  },
  {
    to: '/manifest',
    src: '/merchant.jpg',
    pos: '50% 30%',
    nl: 'Manifest',
    en: 'Ten deeds',
  },
  {
    to: '/charter',
    src: '/header.jpg',
    pos: '28% 70%',
    nl: 'Octrooi',
    en: 'House share',
  },
]

export default function HouseNav() {
  return (
    <section className="rooms">
      <Reveal className="section-head">
        <p className="eyebrow">Het huis</p>
        <Line as="h2" className="title" nl="Drie deuren." en="Three doors." />
      </Reveal>

      <Reveal className="room-grid">
        {rooms.map((room) => (
          <Link key={room.to} to={room.to} className="room">
            <img src={room.src} alt="" style={{ objectPosition: room.pos }} />
            <span className="room-veil" />
            <span className="room-meta">
              <Line nl={room.nl} en={room.en} />
            </span>
          </Link>
        ))}
      </Reveal>
    </section>
  )
}
