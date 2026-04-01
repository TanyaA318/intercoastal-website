import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import "./styles.css";
import Inventory from "./Inventory";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

const logoSrc = "/logo.jpg";

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
    <div className="inventory-header">
  <h2>Equipment Inventory</h2>
  <p>
    New Bad Boy mowers, quality trade-ins, and equipment ready to go.
  </p>
</div>

    <div className="inventory-card-grid">

      {/* Card 1 */}
      <div className="inventory-card">
        <Link to="/inventory" className="inventory-card-link">
          <img src="/mower1.jpg" className="inventory-card-image" />
          <div className="inventory-card-overlay">
            <p className="inventory-card-kicker">Inventory</p>
            <h3 className="inventory-card-title">New Bad Boy Mowers</h3>
            <p className="inventory-card-text">
              Built for power, durability, and real work.
            </p>
          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="inventory-card">
        <Link to="/inventory" className="inventory-card-link">
          <img src="/used-equipment.jpg" className="inventory-card-image" />
          <div className="inventory-card-overlay">
            <p className="inventory-card-kicker">Used Equipment</p>
            <h3 className="inventory-card-title">Used & Trade-Ins</h3>
            <p className="inventory-card-text">
              Reliable equipment at a great value.
            </p>
          </div>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="inventory-card">
        <Link to="/service" className="inventory-card-link">
          <img src="/service-repair.jpg" className="inventory-card-image" />
          <div className="inventory-card-overlay">
            <p className="inventory-card-kicker">Service</p>
            <h3 className="inventory-card-title">Service & Repairs</h3>
            <p className="inventory-card-text">
              Keep your equipment running strong.
            </p>
          </div>
        </Link>
      </div>

    </div>
  </div>
</section>

     <section className="section section-tint why-buy-section">
  <div className="container">
    <div className="why-buy-intro">
      <p className="section-kicker">Why Buy From Intercoastal</p>
      <h2 className="section-title">Real knowledge. Real support. A dealership you can count on.</h2>
      <p className="section-text why-buy-text">
        We help you choose the right equipment, keep it running the way it should, 
and support you long after the sale.
      </p>
    </div>

    <div className="card-grid card-grid-three why-buy-grid">
      <div className="info-card why-buy-card">
        <p className="card-kicker">Leadership</p>
        <h3 className="card-title">Veteran-Owned. Built on Integrity.</h3>
        <p className="card-text">
         We believe in doing business the right way. Honest advice, straight answers, and service you can trust.
        </p>
      </div>

      <div className="info-card why-buy-card">
        <p className="card-kicker">Experience</p>
        <h3 className="card-title">30+ Years of Hands-On Experience</h3>
        <p className="card-text">
          Decades of real-world experience helping homeowners, landowners, and crews choose the right equipment.
        </p>
      </div>

      <div className="info-card why-buy-card">
        <p className="card-kicker">Support</p>
        <h3 className="card-title">Sales. Service. Long-Term Support.</h3>
        <p className="card-text">
          From your first purchase to ongoing maintenance, we’re here to support your equipment for the long haul.
        </p>
      </div>
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
