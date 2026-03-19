import React from "react";
import "./styles.css";

const navItems = ["Inventory", "Service", "About Us", "Contact"];
const logoSrc = "/logo.jpg";

const inventoryCategories = [
  {
    title: "New Bad Boy Mowers",
    text: "Built for power, durability, and performance for homeowners and commercial users alike.",
    button: "View Models",
    link: "#contact",
  },
  {
    title: "Used & Trade-Ins",
    text: "Reliable trade-ins and pre-owned equipment ready to get back to work.",
    button: "Browse Inventory",
    link: "#contact",
  },
  {
    title: "Service & Repairs",
    text: "Keep your mower and equipment running strong with dependable local service.",
    button: "Schedule Service",
    link: "#service",
  },
];

const strengths = [
  "New and used equipment options",
  "Service support you can count on",
  "Veteran-owned leadership",
  "30+ years of equipment experience",
];

const aboutCards = [
  {
    title: "Veteran-Owned Leadership",
    text: "One of our owners is a Navy veteran, bringing discipline, integrity, and commitment to how we serve customers.",
  },
  {
    title: "Decades of Experience",
    text: "With 30+ years of equipment experience behind the business, we help customers make smart, practical decisions.",
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img src={logoSrc} className="brand-logo" alt="Intercoastal Outdoor Equipment logo" />
            <div>
              <p className="brand-kicker">Intercoastal</p>
              <h1 className="brand-title">Outdoor Equipment</h1>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button-primary">
            Contact Us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">AUTHORIZED BAD BOY DEALER</p>
              <h2 className="hero-title">
                Built for hard work, backed by coastal grit.
              </h2>
              <p className="hero-text">
                Intercoastal Outdoor Equipment offers new and used inventory,
                trusted service, and practical guidance across northeastern NC.
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
          </div>
        </section>

        <section id="inventory" className="section">
          <div className="container">
            <div className="card-grid card-grid-three">
              {inventoryCategories.map((item) => (
                <div key={item.title} className="info-card">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.text}</p>
                  <a href={item.link} className="button button-secondary">
                    {item.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="section section-tint">
          <div className="container split-grid">
            <div>
              <h3 className="section-title">
                Service support that keeps you moving
              </h3>
              <ul className="strength-list">
  {strengths.map((item) => (
    <li key={item} className="strength-item">
      <span className="strength-dot"></span>
      <span>{item}</span>
    </li>
  ))}
</ul>
            </div>
          </div>
        </section>

        <section id="about-us" className="section">
          <div className="container">
            <div className="card-grid card-grid-two">
              {aboutCards.map((card) => (
                <div key={card.title} className="info-card">
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-dark">
          <div className="container">
            <h3>Contact Us</h3>
            <p>168 US-158 W Camden, NC</p>
          </div>
        </section>
      </main>
    </div>
  );
}
