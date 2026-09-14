import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Clock from './components/Clock'
import Cursor from './components/Cursor'

const nav = [
  { to: '/desk', label: 'Comptoir', title: 'Desk' },
  { to: '/manifest', label: 'Manifest', title: 'Ten deeds' },
  { to: '/charter', label: 'Octrooi', title: 'House share' },
]

export default function App() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Cursor />
      <header
        className={`topbar${home ? ' is-home' : ''}${scrolled || !home ? ' is-solid' : ''}`}
      >
        <NavLink to="/" end className="brand">
          CHARTER
        </NavLink>
        <Clock />
        <nav>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.title}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <span>CHARTER — een koopmanshuis. A merchant house.</span>
        <span>Stock Tokens zijn geen aandelen. Stock Tokens are not shares.</span>
        <span>$CHARTER is geen effect. $CHARTER is not a security.</span>
      </footer>
    </>
  )
}
