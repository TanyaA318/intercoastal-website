import React from "react";
import Header from "./Header";

const mowers = [
  {
    name: 'Rambler 42"',
    image: "/mowers/rambler/2.png",
    price: "Call for Price",
    link: "/inventory/new/rambler-42"
  },

 {
  name: 'Magnum 48"',
  image: "/mowers/magnum/2.png",
  price: "Call for Price",
  link: "/inventory/new/magnum-48"
},
{
  name: 'Magnum 54"',
  image: "/mowers/magnum/3.png",
  price: "Call for Price",
  link: "/inventory/new/magnum-54"
},
{
  name: 'Magnum 60"',
  image: "/mowers/magnum/4.png",
  price: "Call for Price",
  link: "/inventory/new/magnum-60"
},

 {
  name: 'ZT Avenger 54"',
  image: "/mowers/avenger/4.png",
  price: "Call for Price",
  link: "/inventory/new/zt-avenger-54"
},
{
  name: 'ZT Avenger 60"',
  image: "/mowers/avenger/2.png",
  price: "Call for Price",
  link: "/inventory/new/zt-avenger-60"
},

  {
  name: 'ZT Elite 48"',
  image: "/mowers/elite/2.png",
  price: "Call for Price",
  link: "/inventory/new/zt-elite-48"
},

{
  name: 'ZT Elite 54"',
  image: "/mowers/elite/3.png",
  price: "Call for Price",
  link: "/inventory/new/zt-elite-54"
},

{
  name: 'ZT Elite 60"',
  image: "/mowers/elite/4.png",
  price: "Call for Price",
  link: "/inventory/new/zt-elite-60"
},

 {
  name: 'Maverick 54"',
  image: "/mowers/maverick/2.png",
  price: "Call for Price",
  link: "/inventory/new/maverick-54"
},

{
  name: 'Maverick 60"',
  image: "/mowers/maverick/3.png",
  price: "Call for Price",
  link: "/inventory/new/maverick-60"
},

{
  name: 'Maverick HD 54"',
  image: "/mowers/maverickhd/1.png",
  price: "Call for Price",
  link: "/inventory/new/maverick-hd-54"
},
  {
    name: 'Maverick HD 60"',
    image: "/mowers/maverickhd/1.png",
    price: "Call for Price",
    link: "/inventory/new/maverick-hd-60"
  },

{
  name: 'Revolt SD 34"',
  image: "/mowers/revoltsd/2.png",
  price: "Call for Price",
  link: "/inventory/new/revolt-sd-34"
},
{
  name: 'Revolt 48"',
  image: "/mowers/revolt/2.png",
  price: "Call for Price",
  link: "/inventory/new/revolt-48"
},
{
  name: 'Revolt 54"',
  image: "/mowers/revolt/2.png",
  price: "Call for Price",
  link: "/inventory/new/revolt-54"
},
{
  name: 'Revolt X 61"',
  image: "/mowers/revoltx/2.png",
  price: "Call for Price",
  link: "/inventory/new/revoltx-61"
},

{
  name: 'Rebel 54"',
  image: "/mowers/rebel/2.png",
  price: "Call for Price",
  link: "/inventory/new/rebel-54"
},
{
  name: 'Rebel 61"',
  image: "/mowers/rebel/2.png",
  price: "Call for Price",
  link: "/inventory/new/rebel-61"
},
{
  name: 'Rebel 72"',
  image: "/mowers/rebel/2.png",
  price: "Call for Price",
  link: "/inventory/new/rebel-72"
},

{
  name: 'Rogue 61"',
  image: "/mowers/rogue/2.png",
  price: "Call for Price",
  link: "/inventory/new/rogue-61"
},
{
  name: 'Rogue 72"',
  image: "/mowers/rogue/2.png",
  price: "Call for Price",
  link: "/inventory/new/rogue-72"
},
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
