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

   {mower.highlights && mower.highlights.length > 0 && (
  <div className="mower-bullets">
    <ul className="specs-list">
      {mower.highlights.map((item, index) => (
        <li key={`highlight-${index}`}>{item}</li>
      ))}
    </ul>
  </div>
)}

{mower.features && mower.features.length > 0 && (
  <div className="mower-bullets">
    <h3>Key Features</h3>
    <ul className="specs-list">
      {mower.features.map((item, index) => (
        <li key={`feature-${index}`}>{item}</li>
      ))}
    </ul>
  </div>
  </div>  
);
}
