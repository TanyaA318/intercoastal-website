import React, { useState } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./styles.css";
import Inventory from "./Inventory";
import InventoryNew from "./InventoryNew";
import MaverickHD60 from "./MaverickHD60";
import MowerDetail from "./MowerDetail";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero-section">
          <div className="hero-mower-pair" aria-hidden="true">
            <div className="hero-mower-panel hero-mower-panel-badboy">
              <span className="hero-mower-brand">BAD BOY</span>
              <img
                src="/mower-hero.jpg"
                className="hero-mower-image hero-mower-image-badboy"
                alt=""
              />
            </div>
            <div className="hero-mower-panel hero-mower-panel-ferris">
              <span className="hero-mower-brand">FERRIS</span>
              <img
                src="/mowers/ferris/isx3300-scenic.jpg"
                className="hero-mower-image hero-mower-image-ferris"
                alt=""
              />
            </div>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">AUTHORIZED BAD BOY, FERRIS &amp; ECHO DEALER</p>
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
              <h2>Equipment & Service</h2>
              <p>
                New Bad Boy and Ferris mowers, quality trade-ins, and dependable service to keep you running.
              </p>
            </div>

            <div className="inventory-card-grid">
              <div className="inventory-card">
                <Link to="/inventory" className="inventory-card-link">
                  <img src="/mower1.jpg" className="inventory-card-image" alt="New zero-turn mower" />
                  <div className="inventory-card-overlay">
                    <p className="inventory-card-kicker">Inventory</p>
                    <h3 className="inventory-card-title">New Bad Boy &amp; Ferris Mowers</h3>
                    <p className="inventory-card-text">
                      Built for power, durability, and real work.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="inventory-card">
                <Link to="/inventory" className="inventory-card-link">
                  <img src="/used-equipment.jpg" className="inventory-card-image" alt="Used equipment" />
                  <div className="inventory-card-overlay">
                    <p className="inventory-card-kicker">Used Equipment</p>
                    <h3 className="inventory-card-title">Used & Trade-Ins</h3>
                    <p className="inventory-card-text">
                      Reliable equipment at a great value.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="inventory-card">
                <Link to="/service" className="inventory-card-link">
                  <img src="/service-repair.jpg" className="inventory-card-image" alt="Service and repair" />
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

        <section className="section agri-sure-section" aria-labelledby="agri-sure-heading">
          <div className="container">
            <div className="agri-sure-intro">
              <img
                src="https://portal.agri-sure.com/hs-fs/hubfs/agri-sure-logo.jpg?height=615&name=agri-sure-logo.jpg&width=1000"
                alt="Agri-Sure – America's Best Equipment Coverage"
                className="agri-sure-brand-image"
                loading="lazy"
              />
              <div>
                <p className="section-kicker">Agri-Sure Lifetime Protection</p>
                <h2 id="agri-sure-heading" className="section-title">
                  Built to work. Built to last. Backed for life.
                </h2>
                <p className="section-text">
                  Every new mower we sell includes Agri-Sure Standard Lifetime
                  Powertrain Protection, with the option to upgrade to Premium
                  Lifetime Coverage. Both plans offer unlimited hours and unlimited
                  seasons, with nationwide protection for covered equipment.
                </p>
              </div>
            </div>

            <div className="agri-sure-plan-grid">
              <article className="agri-sure-plan">
                <p className="section-kicker">Standard Lifetime</p>
                <h3>Included with every new mower we sell</h3>
                <ul>
                  <li>Lifetime coverage for covered powertrain components</li>
                  <li>Unlimited hours and unlimited seasons</li>
                  <li><strong>$500 deductible</strong> per covered occurrence</li>
                  <li>Nontransferable; coverage lasts while the original owner owns the machine</li>
                  <li>Nationwide protection</li>
                </ul>
              </article>
              <article className="agri-sure-plan agri-sure-plan-premium">
                <p className="section-kicker">Premium Lifetime</p>
                <h3>Optional upgrade for enhanced protection</h3>
                <ul>
                  <li>Lifetime coverage for covered powertrain components</li>
                  <li>Unlimited hours and unlimited seasons</li>
                  <li><strong>$0 deductible</strong> for covered occurrences</li>
                  <li>Transferable with two years of coverage for a second owner, subject to plan terms</li>
                  <li>50% more coverage than Standard Lifetime</li>
                  <li>Nationwide protection</li>
                </ul>
              </article>
            </div>
            <p className="agri-sure-disclaimer">
              Agri-Sure coverage applies only to eligible equipment. Coverage,
              transfer rules, exclusions and limitations are subject to the written
              agreement. Ask our team for full details before purchasing.
            </p>
            <div className="agri-sure-actions">
              <Link to="/contact" className="button button-primary">
                Ask Us About Agri-Sure Coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-tint why-buy-section">
          <div className="container">
            <div className="why-buy-intro">
              <p className="section-kicker">Why Buy From Intercoastal</p>
              <h2 className="section-title">
                Real knowledge. Real support. A dealership you can count on.
              </h2>
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
    </>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/new" element={<InventoryNew />} />
        <Route path="/inventory/new/maverick-hd-60" element={<MaverickHD60 />} />
        <Route path="/inventory/new/:slug" element={<MowerDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
