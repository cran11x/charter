import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/charter.css'
import App from './App.tsx'
import Start from './pages/Start.tsx'
import Desk from './pages/Desk.tsx'
import Charter from './pages/Charter.tsx'
import Manifest from './pages/Manifest.tsx'
import Deed from './pages/Deed.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Start />} />
          <Route path="desk" element={<Desk />} />
          <Route path="charter" element={<Charter />} />
          <Route path="manifest" element={<Manifest />} />
          <Route path="manifest/:lot" element={<Deed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
