function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-icon">🎻</span>
              <span className="logo-text">🎻Sangeetha Music Academy</span>
            </a>
            <p className="footer-tagline">
              Nurturing musical excellence since 2000
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/sangeethamusicacademy/" className="social-link" target="_blank" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/sangeethamusicacademy_official/" className="social-link" target="_blank" aria-label="Instagram">in</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about">About Us</a>
              <a href="#courses">Programs</a>
              <a href="#achievements">Achievements</a>
              <a href="#gallery">Gallery</a>
            </nav>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Our Services</h4>
            <nav className="footer-nav">
              <a href="#contact">In-Person & Online lessons</a>
              <a href="#contact">Home Tutor sessions</a>
              <a href="#contact">Light Music Performances</a>
              <a href="#contact">DJ Shows</a>
            </nav>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p>No. 10, Bajanai Kovil Street, Bharadhidasan Nagar</p>
              <p>Avadi, Chennai - 600071</p>
              <a href="tel:+919841313010"><p>+91 9841313010</p></a>
              <a href="tel:+919841157411"><p>+91 9841157411</p></a>
              <a href="mailto:sangeethamusicacademyofficial@gmail.com"><p>sangeethamusicacademyofficial@gmail.com</p></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Sangeetha Music Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
