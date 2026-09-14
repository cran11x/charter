import { useEffect, useState } from 'react'

const AMS = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Europe/Amsterdam' } as const

/** Amsterdam session clock — the desk never sleeps, even when the exchange does. */
export default function Clock() {
  const [stamp, setStamp] = useState(() =>
    new Date().toLocaleTimeString('nl-NL', AMS),
  )

  useEffect(() => {
    const id = window.setInterval(() => {
      setStamp(new Date().toLocaleTimeString('nl-NL', AMS))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <time className="clock" dateTime={stamp} title="Amsterdam">
      <span className="clock-dot" />
      {stamp}
      <span className="clock-tz">AMS</span>
    </time>
  )
}
