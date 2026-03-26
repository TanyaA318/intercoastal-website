import React from "react";
import "./styles.css";

const categories = [
  {
    title: "Residential",
    text: "Bad Boy mowers built for homeowners, landowners, and properties that need dependable performance, comfort, and a clean cut.",
  },
  {
    title: "Commercial",
    text: "Heavy-duty Bad Boy equipment designed for crews, large properties, and demanding mowing schedules where durability and productivity matter.",
  },
  {
    title: "Used & Trade-Ins",
    text: "Pre-owned equipment and trade-in opportunities will be added here as inventory becomes available.",
  },
];

export default function Inventory() {
  return (
    <div className="page-shell">
      <main>
        <section className="section inventory-page-section">
          <div className="container">
            <p className="section-kicker">Inventory</p>

            <h2 className="section-title">Inventory Coming Soon</h2>

            <p className="section-text">
              We are preparing for our May 1, 2026 opening. Inventory listings
              will be available soon.
            </p>

            <div className="inventory-card-grid">
              {categories.map((item) => (
                <div key={item.title} className="info-card">
                  <h3 className="card-title">{item.title}</h3>
                    {item.title}
                  </h3>
                  <p className="card-text">{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a href="/#contact" className="button button-primary">
                Contact Us About Availability
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
