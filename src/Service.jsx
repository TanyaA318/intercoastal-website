export default function Service() {
  return (
    <main className="section">
      <div className="container">
        <div className="service-intro">
          <p className="section-kicker">SERVICE</p>
          <h1 className="section-title">Service & Repairs You Can Count On</h1>
          <p className="service-text">
            From routine maintenance to major repairs, we provide quality work you
            can trust. Every job is done with attention to detail and backed by
            experience.
          </p>
        </div>

        <section className="service-section">
          <h2>Services We Offer</h2>
          <div className="service-grid">
            <div className="service-card">Equipment Diagnostics</div>
            <div className="service-card">Blade Sharpening</div>
            <div className="service-card">Tire Repair</div>
            <div className="service-card">Engine Overhauls & Accessory Installs</div>
            <div className="service-card">Manufacturer-Recommended Maintenance</div>
            <div className="service-card">Pickup & Delivery</div>
          </div>
          <p className="service-note">
            Don’t see your issue listed? Reach out. We’re happy to take a look.
          </p>
        </section>

        <section className="service-section trust-section">
          <h2>Quality Work. Done Right.</h2>
          <p>
            With over 30 years of experience, we take pride in doing the job right
            the first time. Whether it’s a small fix or a major repair, you can
            expect honest service, clear communication, and work we stand behind.
          </p>
        </section>

        <section className="service-section service-form-section">
          <h2>Schedule Service</h2>
          <p>
            Have a question or need to schedule service? Fill out the form below
            and we’ll get back to you as soon as possible.
          </p>

          <form className="service-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="streetAddress">Street Address</label>
              <input type="text" id="streetAddress" name="streetAddress" />
            </div>

            <div className="form-group">
              <label htmlFor="cityStateZip">City, State, Zip Code</label>
              <input type="text" id="cityStateZip" name="cityStateZip" />
            </div>

            <div className="form-group">
              <label htmlFor="unitInfo">Unit Type / Make / Model</label>
              <input type="text" id="unitInfo" name="unitInfo" />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Please tell us what service you need or what issue you're experiencing
              </label>
              <textarea id="message" name="message" rows="6"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Schedule Service
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
