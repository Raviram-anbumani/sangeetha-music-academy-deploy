import coursePiano from '../assets/course-piano.jpg';
import courseMusic from '../assets/music-theory.jpg';
import courseGuitar from '../assets/course-guitar.jpg';
import courseDrums from '../assets/course-drums.jpg';
import courseVocal from '../assets/vocal.jpg';

function Courses() {
  const courses = [
    {
      image: coursePiano,
      title: 'Piano Mastery',
      description: 'Structured piano training across Carnatic, Western, and Cine music, focusing on technique, harmony, accompaniment, and performance skills.',
      duration: '4 sessions per month',
      level: 'Online/In-person Session'
    },
    {
      image: courseGuitar,
      title: 'Classical Guitar',
      description: 'Professional guitar instruction covering Western and Cine styles, with strong emphasis on rhythm, chords, lead playing, and stage-oriented performance.',
      duration: '4 sessions per month',
      level: 'Online/In-person Session'
    },
    {
      image: courseVocal,
      title: 'Vocal Excellence',
      description: 'In-depth vocal training in Carnatic, Hindustani, Western, and Cine music, emphasizing voice culture, raga and melody development, improvisation, and confident stage presentation.',
      duration: '4 sessions per month',
      level: 'Online/In-person Session'
    },
    {
      image: courseDrums,
      title: 'Drums',
      description: 'Comprehensive drum training exploring world beats, grooves, and fills, with practical focus on timing, coordination, and live band performance.',
      duration: '4 sessions per month',
      level: 'In-person Session only'
    },
    {
      image: courseMusic,
      title: 'Music Theory',
      description: 'Internationally structured music theory programs aligned with Trinity College London and ABRSM syllabi, building strong foundations in notation, harmony, rhythm, and analytical listening for practical application.',
      duration: '4 sessions per month',
      level: 'Online/In-person Session'
    }
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Programs</span>
          <h2 className="section-title">Our Courses</h2>
          <p className="section-description">
            Comprehensive programs designed to develop technical mastery and artistic expression
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course, index) => (
            <article key={index} className="course-card">
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span className="course-duration">{course.duration}</span>
                  <span className="course-level">{course.level}</span>
                </div>
                <a href="#contact" className="course-link">Learn More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
