import gallery1 from "../assets/guitar-class.jpg";
import gallery2 from "../assets/orchestra.jpg";
import gallery3 from "../assets/group.jpg";
import gallery4 from "../assets/drums-class.jpg";

function Gallery() {
  const images = [
    { src: gallery1, alt: "Guitar session excellence" },
    { src: gallery2, alt: "Live musical showcase" },
    { src: gallery3, alt: "Piano masterclass" },
    { src: gallery4, alt: "Rhythm master drum session" },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Moments</span>
          <h2 className="section-title">
            Journey Through Sangeetha Music Academy
          </h2>
          <p className="section-description">
            Glimpses of performances, masterclasses, and musical moments
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
