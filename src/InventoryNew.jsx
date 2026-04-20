import React from "react";
import Header from "./Header";
import { mowerData } from "./mowerData";
import { Link } from "react-router-dom";

export default function InventoryNew() {
  const mowers = Object.entries(mowerData);

  return (
    <>
      <Header />

      <div className="inventory-list-page">
        <h1>New Equipment</h1>

        <p className="inventory-note">
          Engine options vary by model. Ask us about current Kawasaki and Kohler availability.
        </p>

        <div className="inventory-list-grid">
          {mowers.map(([slug, mower]) => (
            <div className="inventory-list-card" key={slug}>
              
              <Link to={`/inventory/new/${slug}`} className="inventory-card-link">
                <img src={mower.images?.[0]} alt={mower.name} />

                <p className="inventory-tag">BAD BOY MOWERS</p>

                <h3>{mower.name}</h3>
                <p className="price">View model details and availability</p>
              </Link>

              <Link to={`/inventory/new/${slug}`} className="inventory-button">
                View Details
              </Link>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
