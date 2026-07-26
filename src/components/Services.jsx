const SERVICES = [
  {
    title: 'Brand & Strategy',
    desc: 'Positioning, messaging and identity that make you impossible to ignore.',
    icon: <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  },
  {
    title: 'Product Design',
    desc: 'Interfaces that are beautiful, usable and built on real research.',
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M3 8 H21" stroke="currentColor" strokeWidth="1.6" /></>,
  },
  {
    title: 'Engineering',
    desc: 'Fast, accessible, maintainable front-ends and robust back-ends.',
    icon: <path d="M8 6 L3 12 L8 18 M16 6 L21 12 L16 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'SEO & Growth',
    desc: 'Technical SEO and experiments that compound traffic over time.',
    icon: <><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M16 16 L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
  },
  {
    title: 'Analytics',
    desc: 'Dashboards and instrumentation so every decision has evidence.',
    icon: <path d="M4 20 V10 M10 20 V4 M16 20 V13 M22 20 H2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    title: 'Content',
    desc: 'Words and visuals that carry your voice across every channel.',
    icon: <path d="M12 3 C7 8 7 13 12 21 C17 13 17 8 12 3 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  },
]

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">Six ways we help you climb</h2>
          <p className="section-lead">
            A full-stack studio — everything you need to take a product from
            first sketch to a scaling business.
          </p>
        </header>

        <ul className="services-grid" role="list">
          {SERVICES.map((service) => (
            <li className="card service" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  {service.icon}
                </svg>
              </span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
