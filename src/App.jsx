import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FacultySection from './components/FacultySection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Achievements />
        <FacultySection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
