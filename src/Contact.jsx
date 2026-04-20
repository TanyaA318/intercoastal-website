import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
     <>
    <Header /> 
    <main className="section">
      <div className="container">
        <div className="contact-intro">
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
            <p>
               <a href="tel:2522216069" className="phone-link">
                 (252) 221-6069
           </a>
         </p>
            </div>

            <div className="contact-info-block contact-info-block-compact">
              <h3>Hours</h3>
              <p className="opening-note">Opening May 1, 2026</p>

              <ul className="hours-list">
                <li><span>Monday</span><span>8:00 AM - 5:00 PM</span></li>
                <li><span>Tuesday</span><span>8:00 AM - 5:00 PM</span></li>
                <li><span>Wednesday</span><span>8:00 AM - 5:00 PM</span></li>
                <li><span>Thursday</span><span>8:00 AM - 5:00 PM</span></li>
                <li><span>Friday</span><span>8:00 AM - 5:00 PM</span></li>
                <li><span>Saturday</span><span>8:00 AM - 2:00 PM</span></li>
                <li><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>

            <div className="map-card">
              <h3>Find Us</h3>

              <iframe
                src="https://www.google.com/maps?q=168+US-158+W+Camden+NC&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                title="Intercoastal Outdoor Equipment location map"
              />

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=168+US-158+W+Camden+NC"
                target="_blank"
                rel="noreferrer"
                className="button button-primary map-button"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

<form
  className="contact-form"
  action="https://formspree.io/f/mnjlnvvb"
  method="POST"
>
              <label>
                Name
               <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" placeholder="Your phone number" />
              </label>

              <label>
                Email
                <input type="email" name="email" placeholder="Your email address" required />
              </label>

              <label>
                Inquiry Type
              <select name="inquiryType">
                  <option>Inventory Question</option>
                  <option>Service Request</option>
                  <option>Financing Question</option>
                  <option>Parts Question</option>
                  <option>General Inquiry</option>
                </select>
              </label>

              <label>
                Message
               <textarea
                 name="message"
                 rows="6"
                 placeholder="How can we help you?"
                 required
               />
              </label>

  <input
  type="hidden"
  name="_subject"
  value="New Intercoastal Outdoor Equipment Inquiry"
/>
<input type="text" name="_gotcha" style={{ display: "none" }} />

              <button type="submit" className="button button-primary">
                Contact Our Team
              </button>

              <p className="form-note">
                We’ll respond as soon as possible during normal business hours.
              </p>
            </form>
          </div>
        </div>

        <div className="contact-socials">
          <p className="social-text">Prefer to reach out another way?</p>

          <a
          href="https://www.facebook.com/profile.php?id=61574432903782"
            target="_blank"
          rel="noopener noreferrer"
            className="social-btn"
          >
            Message Us on Facebook
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn-outline"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
        </main>
    </>
  );
}
