import { useState } from 'react'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="NorthPeak Digital home">
          <svg className="brand-mark" width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M2 20 L9 6 L13 14 L16 9 L22 20 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span>NorthPeak</span>
        </a>

        <nav className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-toggle-bar" aria-hidden="true"></span>
            <span className="visually-hidden">Menu</span>
          </button>
          <ul
            className="nav-menu"
            id="nav-menu"
            onClick={(e) => {
              if (e.target.closest('a')) setOpen(false)
            }}
          >
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn-primary header-cta" href="#contact">Start a project</a>
      </div>
    </header>
  )
}
