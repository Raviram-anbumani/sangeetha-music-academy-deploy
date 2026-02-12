import heroBg from '../assets/hero-bg.jpg';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-tagline">Since 2000</span>
        {/* Add data-text attribute for the rhythmic glow effect */}
        <h2 className="hero-title" data-text="From Foundation to Performance Excellence">
          From Foundation to Performance Excellence
        </h2>
        <p className="hero-description">
          Experience disciplined, performance-oriented music education rooted in tradition and refined through decades of teaching excellence. At Sangeetha Music Academy, students of all ages receive structured training in Carnatic, Hindustani, and Western music, guided by proven pedagogy and real stage exposure.
        </p>
        <div className="hero-buttons">
          <a href="#courses" className="btn btn-primary">Explore Courses</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
