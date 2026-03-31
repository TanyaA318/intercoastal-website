import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import "./styles.css";
import Inventory from "./Inventory";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

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

function HomePage() {
  return (
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
              <Link to="/inventory" className="button button-light">
                Browse Inventory
              </Link>
              <Link to="/service" className="button button-outline-light">
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
  <div className="container">
    <h3 className="section-title">Featured Inventory</h3>

    <div className="card-grid card-grid-three">
      <div className="info-card">
        <h4>New Bad Boy Mowers</h4>
        <p>
          Built for power, durability, and dependable performance for
          homeowners and commercial users alike.
        </p>
        <Link to="/inventory" className="button button-primary">
          Browse Inventory
        </Link>
      </div>

      <div className="info-card">
        <h4>Used & Trade-Ins</h4>
        <p>
          Reliable pre-owned equipment and trade-ins ready to get back to work.
        </p>
        <Link to="/inventory" className="button button-primary">
          View Used Equipment
        </Link>
      </div>

      <div className="info-card">
        <h4>Service & Repairs</h4>
        <p>
          Keep your equipment running strong with dependable local service and
          support.
        </p>
        <Link to="/service" className="button button-primary">
          Schedule Service
        </Link>
      </div>
    </div>
  </div>
</section>     
     
      <section className="section section-tint">
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

      <section className="section">
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
    </main>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <img
              src={logoSrc}
              className="brand-logo"
              alt="Intercoastal Outdoor Equipment logo"
            />
            <div>
              <p className="brand-kicker">Intercoastal</p>
              <h1 className="brand-title">Outdoor Equipment</h1>
            </div>
          </Link>

          <nav className="desktop-nav">
  <NavLink to="/" className="nav-link">Home</NavLink>
  <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
  <NavLink to="/service" className="nav-link">Service</NavLink>
  <NavLink to="/about" className="nav-link">About Us</NavLink>
  <NavLink to="/contact" className="nav-link">Contact</NavLink>
</nav>
          
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
