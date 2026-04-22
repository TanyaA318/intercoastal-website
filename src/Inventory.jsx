import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { mowerData } from "./mowerData";

export default function Inventory() {
  const mowers = Object.entries(mowerData);

  return (
    <>
      <Header />

      <div className="inventory-page">
        <section className="inventory-hero">
          <div className="inventory-hero-content">
            <p className="inventory-kicker">Intercoastal Outdoor Equipment</p>
            <h1>Outdoor Equipment Inventory</h1>
            <p>
              Shop Bad Boy mowers and outdoor equipment in Camden, NC. We’re
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

            <div className="echo-section">
              <h2>Echo Handheld Equipment</h2>
              <p>
                We also carry Echo handheld equipment, including trimmers,
                blowers, and other outdoor power equipment. Contact us for
                current availability and help choosing the right fit.
              </p>

              <div className="echo-actions">
                <Link to="/contact" className="button button-primary">
                  Contact Us About Echo
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
