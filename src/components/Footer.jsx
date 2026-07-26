const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="NorthPeak Digital home">
            <svg className="brand-mark" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M2 20 L9 6 L13 14 L16 9 L22 20 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span>NorthPeak</span>
          </a>
          <p className="footer-tagline">Product studio for ambitious brands.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {LINKS.map((l) => (
            <a href={l.href} key={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 NorthPeak Digital. A fictional agency.</p>
        <p>
          <a href="https://digitalheroesco.com" target="_blank" rel="noreferrer">
            Built for Digital Heroes Training Task
          </a>
        </p>
      </div>
    </footer>
  )
}
