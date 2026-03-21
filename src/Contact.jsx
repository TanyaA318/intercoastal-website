export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <div className="contact-intro">
          <p className="section-kicker">CONTACT</p>
          <h1 className="section-title">Get In Touch</h1>
          <p className="contact-text">
            Reach out with questions about inventory, service, financing, or upcoming availability.
            We would love to hear from you.
          </p>
        </div>

        <div className="contact-page contact-page-structured">
          <div className="contact-info-panel">
            <div className="contact-info-block">
              <h3>Address</h3>
              <p>168 US-158 W Camden, NC</p>
            </div>

            <div className="contact-info-block">
              <h3>Phone</h3>
              <p>(add your number here)</p>
            </div>

            <div className="contact-info-block">
              <h3>Email</h3>
              <p>(add your email here)</p>
            </div>

            <div className="contact-info-block">
              <h3>Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                Phone
                <input type="tel" placeholder="Your phone number" />
              </label>

              <label>
                Email
                <input type="email" placeholder="Your email address" />
              </label>

              <label>
                Message
                <textarea rows="6" placeholder="How can we help you?"></textarea>
              </label>

              <button type="submit" className="button button-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="map-card">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <p>Map coming soon</p>
            <p>168 US-158 W Camden, NC</p>
          </div>
        </div>
      </div>
    </main>
  );
}
