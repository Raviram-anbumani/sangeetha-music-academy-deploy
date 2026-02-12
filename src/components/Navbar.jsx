import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-icon">♪</span>
          <span className="logo-text">
            <span className="logo-main">Sangeetha</span>
            <span className="logo-sub">Music Academy</span>
          </span>
        </a>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#courses" className="nav-link" onClick={closeMobileMenu}>
            Courses
          </a>
          <a href="#achievements" className="nav-link" onClick={closeMobileMenu}>
            Achievements
          </a>
          <a href="#faculty" className="nav-link" onClick={closeMobileMenu}>
            People
          </a>
          <a href="#gallery" className="nav-link" onClick={closeMobileMenu}>
            Gallery
          </a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="navbar-cta">
          Enroll Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;