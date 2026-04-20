import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mowerData } from "./mowerData";

export default function MowerDetail() {
  const { slug } = useParams();
  const mower = mowerData[slug];
  const images = mower?.images || [];
  const [mainImage, setMainImage] = useState(images[0] || "");

  useEffect(() => {
    setMainImage(images[0] || "");
  }, [slug, images]);

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

          {images.length > 0 && (
            <div className="mower-detail-thumbnails">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={`mower-detail-thumbnail-button ${
                    mainImage === image ? "is-active" : ""
                  }`}
                  onClick={() => setMainImage(image)}
                  aria-label={`${mower.name} view ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${mower.name} view ${index + 1}`}
                    className="mower-detail-thumbnail-image"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mower-detail-content">
          <p className="mower-detail-kicker">BAD BOY MOWERS</p>
          <h1 className="mower-detail-title">{mower.name}</h1>

          <p className="mower-detail-description">{mower.description}</p>

          {mower.highlights?.length > 0 && (
            <div className="mower-bullets">
              <ul className="specs-list">
                {mower.highlights.map((item, index) => (
                  <li key={`highlight-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {mower.features?.length > 0 && (
            <div className="mower-bullets">
              <h3 className="mower-detail-subheading">Key Features</h3>
              <ul className="specs-list">
                {mower.features.map((item, index) => (
                  <li key={`feature-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <Link
  to={`/contact?model=${encodeURIComponent(mower.name)}&type=Inventory%20Question`}
  className="availability-button"
>
  Check Availability
</Link>
 <p className="call-note">
  Or call{" "}
  <a href="tel:+12522216069" className="phone-link">
    (252) 221-6069
  </a>
</p>         
        </div>
      </div>
    </section>
  );
}
