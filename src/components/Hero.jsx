const STATS = [
  { label: 'Projects shipped', value: '150+' },
  { label: 'Avg. client ROI', value: '3.2×' },
  { label: 'Client retention', value: '98%' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow">Product studio · Est. 2016</p>
        <h1 id="hero-title">
          We build digital products<br />that reach the summit.
        </h1>
        <p className="hero-lead">
          NorthPeak partners with ambitious teams to design, ship and scale web
          products people actually love to use. Strategy, design and engineering
          under one roof.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Start a project</a>
          <a className="btn btn-ghost" href="#work">See the results</a>
        </div>
        <dl className="hero-stats">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
