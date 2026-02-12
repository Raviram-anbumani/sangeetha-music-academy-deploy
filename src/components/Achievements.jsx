function Achievements() {
  const achievements = [
    {
      icon: "🏅",
      title: "International Recognition",
      description:
        "World record holder with national and international recognition for excellence in music education and live performance.",
    },
    {
      icon: "🎤",
      title: "Live Performances",
      description:
        "Over 1000+ live stage performances, preparing students for concerts, ensembles, and professional shows.",
    },
    {
      icon: "📜",
      title: "Certified Excellence",
      description:
        "Structured training aligned with Trinity College London and ABRSM standards for strong musical foundations.",
    },
    {
      icon: "🌐",
      title: "Global Alumni",
      description:
        "Students performing and teaching across India and internationally, contributing to concerts and cultural platforms.",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header section-header-light">
          <span className="section-label section-label-light">Recognition</span>
          <h2 className="section-title section-title-light">
            Our Achievements
          </h2>
          <p className="section-description section-description-light">
            A tradition of excellence recognized globally
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
