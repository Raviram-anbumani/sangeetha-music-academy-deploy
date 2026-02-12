// FacultySection.jsx
import { useState } from "react";
import arr from "../assets/Profile.jpg";
import anbu from "../assets/anbu.jpeg";
import sangeetha from "../assets/sangeetha.jpg";

const facultyData = [
  {
    name: "Anbumani K",
    specialization: "Founder and Chief Mentor",
    experience: "Piano | Guitar | Music Theory | Vocal",
    shortDescription:
      "Veteran music educator and stage performer with over 35 years of experience across classical, contemporary, and cine music.",
    description:
      "Anbumani K is the Founder and Chief Mentor of Sangeetha Music Academy, with over 35 years of experience in the world of music education and stage performance. A seasoned musician and dedicated teacher, he has spent decades shaping young talents through disciplined training, strong fundamentals, and performance-oriented learning. \n\nHe is a Trinity College London certified music teacher and has extensive expertise across Piano, Guitar, Music Theory, and Vocal music, including Carnatic, Hindustani, Western, and Cine music. His deep understanding of both classical traditions and contemporary styles allows students to receive a truly well-rounded musical education. Alongside teaching, Anbumani K has been an active stage singer for over three decades, performing continuously across numerous platforms and collaborating with a wide range of musicians and ensembles. \n\nHis vast performance experience brings real-world musical insight into the classroom, helping students understand not just how to learn music, but how to perform it with confidence. Over the years, he has personally trained more than 100 students, many of whom have gone on to perform on stage, pursue advanced music studies, and build long-term musical journeys. He also played a key leadership role in organizing a 60-hour non-stop manual orchestra performance, a historic world record event recognized at the national level, reflecting his exceptional organizational and musical capabilities.",
    image: anbu,
  },
  {
    name: "Raviram Anbumani",
    specialization: "Lead Faculty – Drums & Keyboard",
    experience: "Professional Drummer | Stage Performer | World Record Holder",
    shortDescription:
      "Recognized drummer with notable world record achievements in rhythm performance.",
    description:
      "Raviram Anbumani is a highly accomplished musician and educator with over a decade of professional experience in music performance and teaching. Based in Chennai, he brings a powerful combination of rhythmic excellence, keyboard proficiency, and structured pedagogy to Sangeetha Music Academy. He is a Grade 8 certified musician from Trinity College London and has earned international recognition for his outstanding contributions to rhythm and percussion. \n\nAlongside his expertise in drumming, Raviram is also an experienced keyboard instructor, guiding students in both practical skills and music theory fundamentals. From an early age, his exceptional musical talent led to multiple world record achievements, including long-duration drumming performances recognized by the India Book of Records and Asia Book of Records. In recognition of his contributions to music and performance, he was also conferred an Honorary Doctorate by a reputed World Record University.",
    image: arr,
  },
  {
    name: "Sangeetha A",
    specialization: "Lead Vocalist & Vocal Pedagogy",
    experience:
      "Professional Stage Performer | World Record Holder",
    shortDescription:
      "Lead vocalist and vocal teacher known for record-breaking endurance singing and strong classical foundations.",
    description:
      "Sangeetha A is a distinguished lead vocalist and dedicated vocal teacher recognized for her exceptional artistry, discipline, and commitment to the craft of singing. With a strong foundation in classical Carnatic music, she brings depth, precision, and emotional richness to every performance and lesson. Her musical journey is marked by rigorous training, consistent stage exposure, and a passion for sharing knowledge with aspiring singers.\n\nShe is a two-time singing record holder, having achieved the remarkable feats of 16 hours and 24 hours of non-stop singing. These accomplishments reflect not only her vocal stamina but also her mental focus, breath control, and deep understanding of vocal technique. Such milestones highlight her ability to maintain pitch accuracy, tonal quality, and expressive delivery over extended durations—skills that inspire her students to build both technique and resilience.\n",
    image: sangeetha,
  },
];

function FacultySection() {
  const [activeFaculty, setActiveFaculty] = useState(null);

  return (
    <div id="faculty" className="faculty-container">
      <section className="faculty-section">
        <div className="section-header">
          <span className="section-label">People</span>
          <h2 className="section-title">Our Faculty</h2>
          <p className="section-description">
            Glimpses of performances, masterclasses, and musical moments
          </p>
        </div>
        <div className="container faculty-grid">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="faculty-list-card"
              onClick={() => setActiveFaculty(faculty)}
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="faculty-list-image"
              />
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-specialization">{faculty.specialization}</p>
              <p className="faculty-experience">{faculty.experience}</p>
              <p className="faculty-short">{faculty.shortDescription}</p>
            </div>
          ))}
        </div>

        {activeFaculty && (
          <div 
            className="faculty-modal-overlay"
            onClick={(e) => {
              // Close modal when clicking on overlay
              if (e.target.className === 'faculty-modal-overlay') {
                setActiveFaculty(null);
              }
            }}
          >
            <div className="faculty-modal">
              <button
                className="faculty-modal-close"
                onClick={() => setActiveFaculty(null)}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="faculty-modal-grid">
                <div className="faculty-image-wrapper">
                  <img
                    src={activeFaculty.image}
                    alt={activeFaculty.name}
                    className="faculty-image"
                  />
                </div>

                <div className="faculty-content">
                  <h3 className="faculty-name">{activeFaculty.name}</h3>
                  <p className="faculty-specialization">
                    {activeFaculty.specialization}
                  </p>
                  <p className="faculty-experience">
                    {activeFaculty.experience}
                  </p>
                  <p className="faculty-description">
                    {activeFaculty.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default FacultySection;