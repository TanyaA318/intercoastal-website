const navItems = ['Inventory', 'Service', 'About Us', 'Contact']
const logoSrc = '/Intercoastal.jpg'

const inventoryCategories = [
  {
    title: 'New Inventory',
    text: 'Shop dependable new outdoor equipment selected for performance, durability, and long days in the field.',
  },
  {
    title: 'Used Inventory',
    text: 'Browse quality pre-owned equipment that delivers value, reliability, and practical performance.',
  },
  {
    title: 'Service & Repair',
    text: 'Keep your equipment working hard with routine maintenance, repairs, and responsive local support.',
  },
]

const strengths = [
  'New and used equipment options',
  'Service support you can count on',
  'Veteran-owned leadership',
  '30+ years of equipment experience',
]

const aboutCards = [
  {
    title: 'Veteran-Owned Leadership',
    text: 'One of our owners is a Navy veteran, bringing discipline, integrity, and commitment to how we serve customers.',
  },
  {
    title: 'Decades of Experience',
    text: 'With 30+ years of equipment experience behind the business, we help customers make smart, practical decisions.',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img src={logoSrc} alt="Intercoastal Outdoor Equipment logo" className="brand-logo" />
            <div>
              <p className="brand-kicker">Intercoastal</p>
              <h1 className="brand-title">Outdoor Equipment</h1>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button-primary header-cta">
            Contact Us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="section-kicker hero-kicker">New • Used • Service</p>
              <h2 className="hero-title">Built for hard work, backed by coastal grit.</h2>
              <p className="hero-text">
                Intercoastal Outdoor Equipment offers new and used inventory, trusted service, and practical guidance for homeowners, landowners, and commercial customers across northeastern North Carolina.
              </p>
              <div className="hero-actions">
                <a href="#inventory" className="button button-light">
                  Browse Inventory
                </a>
                <a href="#service" className="button button-outline-light">
                  Schedule Service
                </a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card-outer">
                <div className="hero-card-inner">
                  <div className="hero-card-heading">
                    <img src={logoSrc} alt="Intercoastal badge" className="hero-card-logo" />
                    <div>
                      <p className="card-kicker">Intercoastal Outdoor Equipment</p>
                      <h3 className="hero-card-title">Clean. Coastal. Strong.</h3>
                    </div>
                  </div>

                  <div className="hero-feature-grid">
                    <div className="hero-feature hero-feature-dark">
                      <p className="feature-label feature-label-light">Veteran-Owned</p>
                      <p className="feature-text feature-text-light">
                        Leadership shaped by service, integrity, and follow-through.
                      </p>
                    </div>
                    <div className="hero-feature hero-feature-light">
                      <p className="feature-label">30+ Years Experience</p>
                      <p className="feature-text">
                        Real equipment knowledge that helps customers make confident decisions.
                      </p>
                    </div>
                    <div className="hero-feature hero-feature-light hero-feature-wide">
                      <p className="feature-label">Local Service</p>
                      <p className="feature-text">
                        Sales, service, and support from a team that understands how equipment needs to perform in the real world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inventory" className="section">
          <div className="container">
            <div className="section-intro max-copy">
              <p className="section-kicker">Inventory</p>
              <h3 className="section-title">New and used equipment you can count on</h3>
              <p className="section-text">
                Whether you are upgrading your property equipment or looking for dependable value in used machinery, we make it easier to find the right fit for your needs and budget.
              </p>
            </div>

            <div className="card-grid card-grid-three">
              {inventoryCategories.map((item) => (
                <div key={item.title} className="info-card">
                  <div className="icon-placeholder" />
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="section section-tint">
          <div className="container split-grid">
            <div>
              <p className="section-kicker">Service</p>
              <h3 className="section-title">Service support that keeps you moving</h3>
              <p className="section-text">
                From routine maintenance to repairs, our service team helps protect your investment and reduce downtime when the work still needs to get done.
              </p>
              <ul className="strength-list">
                {strengths.map((item) => (
                  <li key={item} className="strength-item">
                    <span className="strength-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-panel">
              <p className="service-kicker">Request Service</p>
              <div className="service-form">
                <input className="form-field" placeholder="Name" />
                <input className="form-field" placeholder="Phone or Email" />
                <input className="form-field" placeholder="Equipment Type" />
                <textarea className="form-field form-textarea" placeholder="Tell us what you need" />
                <button className="button button-light form-button">Submit Request</button>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="section">
          <div className="container">
            <div className="section-intro max-copy-wide">
              <p className="section-kicker">About Us</p>
              <h3 className="section-title">A practical team built on service and experience</h3>
              <p className="section-text">
                Intercoastal Outdoor Equipment is built around dependable equipment, straightforward service, and helping customers make smart decisions without the runaround. We serve homeowners, landowners, and businesses that need equipment ready to work.
              </p>
            </div>

            <div className="card-grid card-grid-two">
              {aboutCards.map((card) => (
                <div key={card.title} className="info-card info-card-large">
                  <p className="card-kicker">Intercoastal Difference</p>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-text card-text-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-dark">
          <div className="container split-grid contact-grid">
            <div>
              <p className="section-kicker section-kicker-light">Contact</p>
              <h3 className="section-title section-title-light">Ready to find your next piece of equipment?</h3>
              <p className="section-text section-text-light">
                Reach out for current inventory, service scheduling, or general questions. We are here to help you get the right equipment and support.
              </p>
            </div>
            <div className="contact-card">
              <div>
                <p className="contact-label">Address</p>
                <p className="contact-value">168 US-158 W Camden, NC 27921</p>
              </div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">(000) 000-0000</p>
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">info@intercoastaloutdoorequipment.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
