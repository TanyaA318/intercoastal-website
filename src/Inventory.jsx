import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const inventoryItems = [
  {
    name: "New Equipment",
    image: "/mower-hero.jpg",
    description:
      "Browse all new Bad Boy mowers and outdoor equipment available at our Camden, NC location.",
   link: "/inventory/new"
  },
  {
    name: "Used Equipment",
    image: "/used-equipment.jpg",
    description:
      "Explore our current used inventory and trade-in options. Availability changes often.",
    link: "/inventory/used",
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
