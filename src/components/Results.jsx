const RESULTS = [
  { figure: '+218%', label: 'organic revenue for a fintech app in 9 months' },
  { figure: '1.4s', label: 'largest contentful paint after our rebuild' },
  { figure: '4.9★', label: 'average store rating across launched products' },
]

const TESTIMONIALS = [
  {
    quote:
      'NorthPeak felt like part of our team. They shipped faster than our in-house crew and the quality was unreal.',
    name: 'Maya Rowe',
    role: 'VP Product, Ledgerly',
    initials: 'MR',
  },
  {
    quote:
      'Our conversion doubled within a quarter. They obsess over the details most agencies skip right past.',
    name: 'Daniel Cho',
    role: 'Founder, Northwind',
    initials: 'DC',
  },
]

export default function Results() {
  return (
    <section className="section section-alt" id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Proof, not promises</p>
          <h2 id="work-title">Results our partners feel</h2>
        </header>

        <div className="results-band">
          {RESULTS.map((r) => (
            <div className="result" key={r.figure}>
              <p className="result-figure">{r.figure}</p>
              <p className="result-label">{r.label}</p>
            </div>
          ))}
        </div>

        <ul className="testimonials" role="list">
          {TESTIMONIALS.map((t) => (
            <li className="card testimonial" key={t.name}>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="who">
                <span className="who-avatar" aria-hidden="true">{t.initials}</span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="who-role">{t.role}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
