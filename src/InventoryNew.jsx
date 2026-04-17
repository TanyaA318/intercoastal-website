import React from "react";
import Header from "./Header";

const mowers = [
  {
    name: "Bad Boy Maverick HD 54”",
    image: "/mower1.jpg",
    price: "Call for Price",
  },
  {
    name: "Bad Boy Maverick 60”",
    image: "/mower1.jpg",
    price: "Call for Price",
  },
  {
];

export default function InventoryNew() {
  return (
    <>
      <Header />

      <div className="inventory-list-page">
        <h1>New Equipment</h1>

        <div className="inventory-list-grid">
          {mowers.map((mower) => (
            <div className="inventory-list-card" key={mower.name}>
              <img src={mower.image} alt={mower.name} />
              <h3>{mower.name}</h3>
              <p className="price">{mower.price}</p>
              <a href="/contact" className="inventory-button">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
