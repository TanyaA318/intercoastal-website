import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const inventoryItems = [
  {
    name: "Bad Boy Maverick HD 54”",
    image: "/mower1.jpg",
    description:
      "Heavy-duty performance, smooth suspension, and commercial-style strength for large property owners.",
    link: "/contact",
  },
  {
    name: "Bad Boy Residential Line",
    image: "/mower-hero.jpg",
    description:
      "Built for homeowners who want power, durability, and a professional cut.",
    link: "/contact",
  },
  {
    name: "Used Equipment",
    image: "/used-equipment.jpg",
    description:
      "Ask about our available used inventory and trade-in options.",
    link: "/contact",
  },
];

export default function Inventory() {
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

        <section className="inventory-grid-section">
          <div className="inventory-grid">
            {inventoryItems.map((item) => (
              <div className="inventory-card" key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="inventory-card-image"
                />
                <div className="inventory-card-body">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <Link to={item.link} className="inventory-button">
                    Request Information
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
