import React from "react";

export default function Service() {
  return (
    <div className="service-page">

      {/* HERO */}
      <section className="service-hero service-hero-split">

  <div className="service-hero-copy">
    <h1>Outdoor Equipment Service & Repair</h1>
    <p>
      Professional mower and outdoor equipment service in Camden, NC and surrounding
      areas. From routine maintenance to full engine work, we keep your equipment
      running strong.
    </p>
  </div>

  <div className="service-hero-image-wrap">
    <img
      src="/techrepair.jpg"
      alt="Technician repairing outdoor equipment engine"
      className="service-hero-image"
    />
  </div>

</section>

      {/* SERVICES LIST */}
      <section className="service-section">
        <h2>Our Service Capabilities</h2>

        <div className="service-grid">
          <div className="service-item">
            <h3>Pickup & Delivery</h3>
            <p>Convenient transport options so you don’t have to haul equipment yourself.</p>
          </div>

          <div className="service-item">
            <h3>Equipment Diagnostics</h3>
            <p>Accurate troubleshooting to identify issues and recommend the right repair.</p>
          </div>

          <div className="service-item">
            <h3>Tire Repair</h3>
            <p>Flat repairs and replacements to keep your equipment working safely.</p>
          </div>

          <div className="service-item">
            <h3>Blade Sharpening</h3>
            <p>Clean, precise cuts that improve performance and extend blade life.</p>
          </div>

          <div className="service-item">
            <h3>Scheduled Maintenance</h3>
            <p>Manufacturer-recommended service intervals to protect your investment.</p>
          </div>

          <div className="service-item">
            <h3>Engine Overhauls & Installs</h3>
            <p>Major repairs, rebuilds, and accessory installs done right.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="service-section alt">
        <h2>Why Choose Intercoastal Outdoor Equipment</h2>

        <div className="service-trust">
          <div>
            <h4>Experienced Technicians</h4>
            <p>Decades of combined experience working on outdoor equipment.</p>
          </div>

          <div>
            <h4>Done Right the First Time</h4>
            <p>We focus on precision and quality work we stand behind.</p>
          </div>

          <div>
            <h4>Local & Dependable</h4>
            <p>Serving Camden, Moyock, and the surrounding Northeast North Carolina area.</p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA (SEO BOOST) */}
      <section className="service-section">
        <h2>Service Area</h2>
        <p>
          We proudly provide outdoor equipment repair and mower service for customers in
          Camden, NC, Moyock, NC, Elizabeth City, NC, and Hampton Roads.
        </p>
      </section>

      {/* FORM */}
      <section className="service-section">
        <h2>Schedule Service</h2>
        <p>Please fill out the form below and our team will contact you.</p>

        <form className="service-form">
          <div className="form-row">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email *" required />
            <input type="tel" placeholder="Phone *" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Street Address" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip Code" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Equipment Type / Make / Model" />
          </div>

          <textarea
            placeholder="Please tell us what services you are looking for..."
            rows="5"
          ></textarea>

          <button type="submit">Schedule Service</button>
        </form>
      </section>

    </div>
  );
}
