import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { ferrisData, mowerData } from "./mowerData";

export default function Inventory() {
  const mowers = Object.entries(mowerData);
  const ferrisMowers = Object.entries(ferrisData);

  return (
    <>
      <Header />

      <div className="inventory-page">
        <section className="inventory-hero">
          <div className="inventory-hero-content">
            <p className="inventory-kicker">Intercoastal Outdoor Equipment</p>
            <h1>Outdoor Equipment Inventory</h1>
            <p>
              Shop Bad Boy and Ferris mowers and outdoor equipment in Camden, NC. We’re
              here to help you find the right fit for your property, budget, and
              workload.
            </p>
          </div>
        </section>

        <section className="inventory-overview-section">
          <div className="container">
            <div className="inventory-intro">
              <h2>New Bad Boy Mowers</h2>
              <p>
                Browse our current lineup of Bad Boy mowers. Whether you are
                maintaining a small property or tackling larger acreage, we’re
                here to help you choose the right equipment for the job.
              </p>
            </div>

            <div className="inventory-list-grid">
              {mowers.map(([slug, mower]) => (
                <div className="inventory-list-card" key={slug}>
                  <Link
  to={`/inventory/new/${slug}`}
  className="inventory-card-link"
>
  <div className="inventory-list-card-image-wrap">
    <img src={mower.images?.[0]} alt={mower.name} />
  </div>

  <p className="inventory-tag">BAD BOY MOWERS</p>

  <h3>{mower.name}</h3>
  <p className="price">View model details and availability</p>
</Link>

                  <Link
                    to={`/inventory/new/${slug}`}
                    className="inventory-button"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            <div className="inventory-intro ferris-inventory-intro">
              <p className="section-kicker">Authorized Ferris Dealer</p>
              <h2>New Ferris Mowers</h2>
              <p>
                Explore the Ferris zero-turn, stand-on, and walk-behind models
                available through Intercoastal Outdoor Equipment.
              </p>
            </div>

            <div className="inventory-list-grid ferris-inventory-grid">
              {ferrisMowers.map(([slug, mower]) => (
                <div className="inventory-list-card" key={slug}>
                  <Link
                    to={`/inventory/new/${slug}`}
                    className="inventory-card-link"
                  >
                    <div className="inventory-list-card-image-wrap">
                      <img src={mower.images?.[0]} alt={mower.name} />
                    </div>

                    <p className="inventory-tag ferris-tag">FERRIS MOWERS</p>
                    <h3>{mower.name}</h3>
                    <p className="price">View model details and availability</p>
                  </Link>

                  <Link
                    to={`/inventory/new/${slug}`}
                    className="inventory-button ferris-inventory-button"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>

            <div className="echo-section">
              <h2>ECHO Handheld Equipment</h2>
              <p>
                We also carry ECHO handheld equipment, including trimmers,
                blowers, and other outdoor power equipment. Contact us for
                current availability and help choosing the right fit.
              </p>

              <div className="echo-actions">
                <Link to="/contact" className="button button-primary">
                  Contact Us About ECHO
                </Link>

                <a href="tel:+12522216069" className="echo-phone">
                  Or call (252) 221-6069
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
