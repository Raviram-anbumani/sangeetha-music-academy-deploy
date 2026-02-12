import aboutImage from '../assets/about-image.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Violin close-up" className="about-image" />
            <div className="about-image-accent"></div>
          </div>
          
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A Legacy of Musical Excellence</h2>
            <p className="about-text">
              For decades, Sangeetha Music Academy has been dedicated to preserving tradition while shaping confident, skilled musicians. Founded with a deep respect for the guru–shishya parampara, the academy has trained students across generations in Carnatic, Hindustani, and Western music.
            </p>
            <p className="about-text">
              With over 35 years of teaching experience, our approach combines disciplined technique, strong music theory, and regular performance exposure. Students are guided through structured curricula, including Trinity College London–aligned programs, ensuring both artistic depth and global standards.
            </p>
            <p className="about-text">
              At Sangeetha Music Academy, we believe music is not just learned — it is lived. Our mission is to nurture passionate musicians who carry forward classical values while confidently performing in the modern musical world.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">35+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Live Performances</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">450+</span>
                <span className="stat-label">Students Trained Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
