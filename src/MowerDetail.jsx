import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { mowerData } from "./mowerData";

export default function MowerDetail() {
  const { slug } = useParams();
  const mower = mowerData[slug];

  const [mainImage, setMainImage] = useState(
    mower?.images?.[0] || ""
  );

  if (!mower) {
    return (
      <>
        <Header />
        <div className="mower-detail-page">
          <p>Mower not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="mower-detail-page">
        <div className="mower-detail-layout">

          {/* LEFT: IMAGES */}
          <div className="mower-detail-gallery">
            <img
              src={mainImage}
              alt={mower.name}
              className="mower-detail-main-image"
            />

            <div className="mower-detail-thumbs">
              {mower.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${mower.name} view ${index + 1}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="mower-detail-content">
            <p className="mower-detail-kicker">BAD BOY MOWERS</p>
            <h1>{mower.name}</h1>

            <p>{mower.description}</p>

            <ul className="mower-specs">
              <li><strong>Deck:</strong> {mower.specs.deck}</li>
              <li><strong>Engine:</strong> {mower.specs.engine}</li>
              <li><strong>Fuel:</strong> {mower.specs.fuel}</li>
              <li><strong>Use:</strong> {mower.specs.use}</li>
            </ul>

            <a href="/contact" className="inventory-button">
              Check Availability
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
