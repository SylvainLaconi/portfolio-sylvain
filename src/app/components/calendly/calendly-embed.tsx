'use client'

import { useEffect } from 'react'

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="h-auto w-full">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/sylvain-laconi-pro/30min?primary_color=1a1a1a"
        style={{
          minWidth: '320px',
          height: '800px',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  )
}
