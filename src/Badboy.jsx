import React from "react";

export default function BadBoy() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero small-hero">
        <h1>Bad Boy Mowers</h1>
        <p>Power. Performance. Durability. Built to handle the toughest jobs.</p>
        <div className="hero-buttons">
          <button>Request Pricing</button>
          <button className="secondary">Call Now</button>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2>Authorized Bad Boy Dealer</h2>
        <p>
          Intercoastal Outdoor Equipment is proud to offer Bad Boy Mowers to
          customers in Camden, NC and surrounding areas. Whether you're a
          homeowner or a commercial operator, Bad Boy delivers unmatched
          strength, cut quality, and reliability.
        </p>
      </section>
      
      <section className="inventory">
  <div className="container">
    <h2 className="section-title">Featured Inventory</h2>

    <div className="inventory-grid">

      <div className="inventory-card">
        <h3>New Bad Boy Mowers</h3>
        <p>Explore the latest Bad Boy zero-turn mowers built for power and durability.</p>
        <button>View New Inventory</button>
      </div>

      <div className="inventory-card">
        <h3>Used & Trade-Ins</h3>
        <p>Quality pre-owned mowers and recent trade-ins ready to work.</p>
        <button>Browse Inventory</button>
      </div>

      <div className="inventory-card">
        <h3>Service & Repairs</h3>
        <p>Keep your equipment running strong with expert service and maintenance.</p>
        <button>Schedule Service</button>
      </div>

    </div>
  </div>
</section>

      {/* RESIDENTIAL */}
      <section className="section">
        <h2>Residential Mowers</h2>
        <div className="card-grid">
          <div className="card">
            <h3>MZ Magnum</h3>
            <p>Affordable, durable, and perfect for homeowners.</p>
            <button>Request Info</button>
          </div>

          <div className="card">
            <h3>ZT Elite</h3>
            <p>Step up in performance with a smoother ride and more power.</p>
            <button>Request Info</button>
          </div>

          <div className="card">
            <h3>Maverick</h3>
            <p>Premium residential mower with commercial-grade features.</p>
            <button>Request Info</button>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="section">
        <h2>Commercial Mowers</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Rebel</h3>
            <p>Built for serious work with heavy-duty construction.</p>
            <button>Request Info</button>
          </div>

          <div className="card">
            <h3>Rogue</h3>
            <p>Advanced suspension and top-tier performance.</p>
            <button>Request Info</button>
          </div>

          <div className="card">
            <h3>Renegade Diesel</h3>
            <p>Maximum power and efficiency for large properties.</p>
            <button>Request Info</button>
          </div>
        </div>
      </section>

      {/* FINANCING */}
      <section className="section highlight">
        <h2>Financing Available</h2>
        <p>
          Get the equipment you need with flexible financing options. Ask us
          about current promotions on Bad Boy mowers.
        </p>
        <button>Apply for Financing</button>
      </section>

      {/* CTA */}
      <section className="section">
        <h2>Ready to Get Started?</h2>
        <p>
          Visit us at 168 US-158 W Camden, NC or give us a call to find the
          perfect mower for your needs.
        </p>
        <button>Contact Us</button>
      </section>

    </div>
  );
}
