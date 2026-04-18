import { useParams } from "react-router-dom";
import { useState } from "react";
import { mowerData } from "./mowerData";

export default function MowerDetail() {
  const { slug } = useParams();
  const mower = mowerData[slug];
  const [mainImage, setMainImage] = useState(mower?.images?.[0] || "");

  if (!mower) {
    return <div className="container">Mower not found.</div>;
  }

  return (
    <section className="mower-detail">
      <div className="container mower-detail-layout">
        <div className="mower-detail-gallery">
          <div className="mower-detail-main-image">
            <img src={mainImage} alt={mower.name} />
          </div>

          <div className="mower-detail-thumbnails">
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
          )}

          <button className="availability-button">Check Availability</button>
        </div>
      </div>
    </section>
  );
}
