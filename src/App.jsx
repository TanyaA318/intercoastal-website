import React from "react";
import "./styles.css";

const logoSrc = "/logo.jpg";

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
            <img
              src={logoSrc}
              className="brand-logo"
              alt="Intercoastal Outdoor Equipment logo"
            />
            <div>
              <p className="brand-kicker">Intercoastal</p>
              <h1 className="brand-title">Outdoor Equipment</h1>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#service" className="nav-link">Service</a>
            <a href="#about-us" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact</a>
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
                <a href="#contact" className="button button-light">
                  Contact Us
                </a>
                <a href="#service" className="button button-outline-light">
                  Schedule Service
                </a>
              </div>
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
