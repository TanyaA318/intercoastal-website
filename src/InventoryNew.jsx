import React from "react";
import Header from "./Header";

const mowers = [
  { name: 'Rambler 42"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Magnum 48"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Magnum 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Magnum 60"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'ZT Avenger 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'ZT Avenger 60"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'ZT Elite 48"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'ZT Elite 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'ZT Elite 60"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Maverick 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Maverick 60"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Maverick HD 54"', image: "/mower1.jpg", price: "Call for Price" },
  { 
   name: 'Maverick HD 60"', 
  image: "/mowers/maverickhd/2.png",
  price: "Call for Price",
  link: "/inventory/new/maverick-hd-60"
}, 
  { name: 'Revolt SD 34"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Revolt 48"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Revolt 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Revolt X 61"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Rebel 54"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Rebel 61"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Rebel 72"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Rogue 61"', image: "/mower1.jpg", price: "Call for Price" },
  { name: 'Rogue 72"', image: "/mower1.jpg", price: "Call for Price" },
];

export default function InventoryNew() {
  return (
    <>
      <Header />

      <div className="inventory-list-page">
        <h1>New Equipment</h1>

        <p className="inventory-note">
          Engine options vary by model. Ask us about current Kawasaki and Kohler availability.
        </p>

<div className="inventory-list-grid">        
       {mowers.map((mower) => (
  <div className="inventory-list-card" key={mower.name}>
    <a href={mower.link || "/contact"} className="inventory-card-link">
      <img src={mower.image} alt={mower.name} />

      <p className="inventory-tag">BAD BOY MOWERS</p>

      <h3>{mower.name}</h3>
      <p className="price">View model details and availability</p>
    </a>

    <a href={mower.link || "/contact"} className="inventory-button">
      View Details
    </a>
  </div>
))}
  </div>
  </div>
    </>
  );
}
