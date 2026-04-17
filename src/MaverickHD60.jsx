import React, { useState } from "react";
import Header from "./Header";

const galleryImages = [
  "/mowers/maverickhd60/1.png",
  "/mowers/maverickhd60/2.png",
  "/mowers/maverickhd60/3.png",
  "/mowers/maverickhd60/4.png",
];

export default function MaverickHD60() {
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <>
      <Header />

      <div className="mower-detail-page">
        <div className="mower-detail-layout">
          <div className="mower-detail-gallery">
            <img
              src={mainImage}
              alt='Bad Boy Maverick HD 60" mower'
              className="mower-detail-main-image"
            />

            <div className="mower-detail-thumbs">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Maverick HD 60 view ${index + 1}`}
                  className="mower-detail-thumb"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="mower-detail-info">
            <p className="inventory-tag">BAD BOY MOWERS</p>
            <h1>Bad Boy Maverick HD 60"</h1>

            <p className="mower-detail-copy">
              The Bad Boy Maverick HD 60&quot; is built for serious cutting power,
              durability, and comfort. It is a strong fit for property owners and
              operators who want commercial-grade performance with a smooth ride.
            </p>

            <p className="mower-detail-copy">
              Engine options and availability may vary by model. Contact us for
              current inventory, configuration details, and pricing.
            </p>

            <a href="/contact" className="inventory-button">
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
