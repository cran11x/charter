import { NavLink, Outlet } from 'react-router-dom'
import Clock from './components/Clock'
import Cursor from './components/Cursor'

const nav = [
  { to: '/desk', label: 'Comptoir', title: 'Desk' },
  { to: '/manifest', label: 'Manifest', title: 'Ten deeds' },
  { to: '/charter', label: 'Octrooi', title: 'House share' },
]

export default function App() {
  return (
    <>
      <Cursor />
      <header className="topbar">
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
