export default function Contact() {
  return (
    <main className="section">
      <div className="container contact-page">
        <div className="contact-info">
          <p className="hero-kicker">CONTACT</p>
          <h1 className="section-title">Contact Intercoastal Outdoor Equipment</h1>
          <p className="contact-text">
            Reach out with questions about inventory, service, financing, or upcoming availability.
          </p>

          <div className="contact-details">
            <p><strong>Phone:</strong> (add your number here)</p>
            <p><strong>Address:</strong> 168 US-158 W Camden, NC</p>
            <p><strong>Email:</strong> (add your email here)</p>
            <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="Your email address" />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="How can we help you?"
              ></textarea>
            </label>

            <button type="submit" className="button button-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
