import React from "react";
import Header from "./Header";

export default function About() {
  return (
  <>
      <Header />
    <main className="section">
      <div className="container">

        {/* HERO */}
        <div className="about-hero">
          <p className="section-kicker">ABOUT US</p>
          <h1 className="section-title">
            Built on Experience. Driven by Service.
          </h1>
          <p className="about-lead">
            Authorized Bad Boy and Echo dealer in Camden, NC, offering new and used
            equipment, service, and repairs for customers across Northeastern
            North Carolina and the Hampton Roads area.
          </p>
        </div>

        {/* GRID */}
        <section className="about-grid">
          <div className="about-card">
            <h2>Who We Are</h2>
            <p>
              We are a local outdoor equipment dealership providing new Bad Boy
              mowers, used equipment, and professional service. Whether you are
              maintaining a residential property or managing commercial work, we
              help match you with equipment that performs and holds up over time.
            </p>
          </div>

          <div className="about-card">
            <h2>Veteran-Owned Leadership</h2>
            <p>
              Our business is proudly backed by veteran-owned leadership. That
              foundation brings discipline, commitment, and pride into the way we
              serve our customers and operate every part of the business.
            </p>
          </div>

          <div className="about-card">
            <h2>Decades of Experience</h2>
            <p>
              With more than 30 years of equipment experience, we understand what
              matters most to customers: quality equipment, knowledgeable
              guidance, and service you can trust long after the sale.
            </p>
          </div>

          <div className="about-card">
            <h2>What We Offer</h2>
            <ul className="about-list">
  <li>New Bad Boy zero-turn mowers</li>
  <li>Echo handheld outdoor power equipment</li>
  <li>Outdoor equipment service and repairs</li>
  <li>Pickup and delivery options</li>
  <li>Support for residential and commercial customers</li>
</ul>
          </div>
        </section>

        {/* STORY */}
        <section className="about-story">
          <div className="about-story-content">
            <p className="section-kicker">OUR APPROACH</p>
            <h2>Local Service with a Personal Approach</h2>
            <p>
              We believe buying and maintaining outdoor equipment should feel
              straightforward. That means taking time to answer questions,
              helping customers compare options, and standing behind the work we
              do.
            </p>
            <p>
              Whether you are looking for your next mower, exploring used
              equipment, or scheduling service, we want you to feel confident
              working with our team.
            </p>
          </div>
        </section>

        {/* LOCATION (SEO BOOST) */}
        <section className="about-location">
          <h2>Serving Camden, NC and Surrounding Areas</h2>
          <p>
            Located in Camden, North Carolina, we proudly serve customers across
            Elizabeth City, Currituck, and the greater Northeastern North
            Carolina region, as well as nearby areas of Virginia. Customers trust
            us for reliable equipment, knowledgeable support, and service they
            can count on.
          </p>
        </section>

        <section className="about-cta">
  <h2>Ready to Get Started?</h2>
  <p>
    Browse our inventory or reach out to our team with any questions about
    equipment, service, or availability.
  </p>
  <div className="about-cta-buttons">
    <a href="/inventory" className="btn-primary">View Inventory</a>
    <a href="/contact" className="btn-secondary">Contact Our Team</a>
  </div>
</section>
      </div>
    </main>
    </>
  );
}
