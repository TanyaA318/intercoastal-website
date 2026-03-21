export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <div className="contact-intro">
          <p className="section-kicker">CONTACT</p>
          <h1 className="section-title">Get In Touch</h1>
          <p className="contact-text">
            Have a question about inventory, service, financing, parts, or upcoming availability?
            Reach out and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-page contact-page-structured">
          <div className="contact-info-panel">
            <div className="contact-info-block contact-info-block-compact">
              <h3>Address</h3>
              <p>168 US-158 W Camden, NC</p>
            </div>

            <div className="contact-info-block contact-info-block-compact">
              <h3>Phone</h3>
              <p>Business phone coming soon</p>
            </div>

            <div className="contact-info-block contact-info-block-compact">
           <h3>Email</h3>
<p>Please use the contact form above for all inquiries</p>
            </div>

            <div className="contact-info-block contact-info-block-compact">
              <h3>Hours</h3>
              <p>Business hours coming soon</p>
              <p>Opening May 1, 2026</p>
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
                Inquiry Type
                <select>
                  <option>Inventory Question</option>
                  <option>Service Request</option>
                  <option>Financing Question</option>
                  <option>Parts Question</option>
                  <option>General Inquiry</option>
                </select>
              </label>

              <label>
                Message
                <textarea rows="6" placeholder="How can we help you?"></textarea>
              </label>

              <button type="submit" className="button button-primary">
                Contact Our Team
              </button>

              <p className="form-note">
                We’ll respond as soon as possible during normal business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
