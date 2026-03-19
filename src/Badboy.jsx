import React from "react";

export default function Badboy() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-intro max-copy">
            <p className="section-kicker">Bad Boy Inventory</p>
            <h2 className="section-title">Featured Bad Boy Mowers</h2>
            <p className="section-text">
              Explore durable zero-turn mowers built for homeowners, landowners,
              and commercial crews who need dependable performance.
            </p>
          </div>

          <div className="card-grid card-grid-three">
            <div className="info-card">
              <h4 className="card-title">MZ Magnum</h4>
              <p className="card-text">
                Affordable, durable, and a strong fit for homeowners who want
                dependable performance.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>

            <div className="info-card">
              <h4 className="card-title">ZT Elite</h4>
              <p className="card-text">
                More power, more comfort, and a smoother ride for larger
                properties.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>

            <div className="info-card">
              <h4 className="card-title">Maverick</h4>
              <p className="card-text">
                Premium residential performance with commercial-grade features.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-intro max-copy">
            <p className="section-kicker">Commercial Equipment</p>
            <h3 className="section-title">Built for serious work</h3>
            <p className="section-text">
              Heavy-duty commercial mowers designed for long hours, demanding
              properties, and consistent results.
            </p>
          </div>

          <div className="card-grid card-grid-three">
            <div className="info-card">
              <h4 className="card-title">Rebel</h4>
              <p className="card-text">
                Heavy-duty construction and dependable power for demanding jobs.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>

            <div className="info-card">
              <h4 className="card-title">Rogue</h4>
              <p className="card-text">
                Premium suspension and performance for crews that need comfort
                and productivity.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>

            <div className="info-card">
              <h4 className="card-title">Renegade Diesel</h4>
              <p className="card-text">
                Maximum strength and efficiency for large properties and
                commercial operators.
              </p>
              <a href="#contact" className="button button-secondary">
                Request Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro max-copy">
            <p className="section-kicker">Financing</p>
            <h3 className="section-title">Flexible financing available</h3>
            <p className="section-text">
              Get the equipment you need with financing options designed to help
              you get to work sooner. Ask about current Bad Boy promotions and
              available offers.
            </p>
            <a href="#contact" className="button button-primary">
              Apply for Financing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
