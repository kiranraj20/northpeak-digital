const TIERS = [
  {
    name: 'Starter',
    price: '$3k',
    desc: 'For early teams validating an idea.',
    features: ['1 active project', 'Design or development', 'Weekly check-ins', '48-hour response time'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$7k',
    desc: 'For products ready to move fast.',
    features: ['2 active projects', 'Design and development', 'Dedicated strategist', 'Same-day response time'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$14k',
    desc: 'For teams shipping at full speed.',
    features: ['Unlimited backlog', 'Full cross-functional squad', 'Quarterly roadmap planning', 'Priority support & SLAs'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Simple pricing</p>
          <h2 id="pricing-title">Plans that scale with you</h2>
          <p className="section-lead">Fixed monthly engagements. No lock-in, cancel any time.</p>
        </header>

        <div className="pricing-grid">
          {TIERS.map((tier) => (
            <div className={tier.featured ? 'card tier tier-featured' : 'card tier'} key={tier.name}>
              {tier.featured && <p className="tier-badge">Most popular</p>}
              <h3 className="tier-name">{tier.name}</h3>
              <p className="tier-price">
                <span className="amount">{tier.price}</span> <span className="per">/ month</span>
              </p>
              <p className="tier-desc">{tier.desc}</p>
              <ul className="tier-features" role="list">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className={tier.featured ? 'btn btn-primary tier-cta' : 'btn btn-ghost tier-cta'}
                href="#contact"
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
