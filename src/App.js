import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Collage from './components/Collage/Collage';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const windowHeight = window.innerHeight;
          const offset = windowHeight / 3; 

          const opacity = Math.min(1, Math.max(0, (scrollY + windowHeight - sectionTop - offset) / 300));

          section.style.opacity = opacity;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const headerOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <div className="App">
      <div className="header-section" style={{ opacity: headerOpacity }}>
        <Header />
      </div>

      <div
        className="bio-section fade-in-section"
        ref={(el) => (sectionsRef.current[0] = el)}
        style={{ opacity: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col" id="profile">
              <Bio />
            </div>
            <div className="col" id="bio">
              <Collage />
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects-section fade-in-section"
        ref={(el) => (sectionsRef.current[1] = el)}
        style={{ opacity: 0 }}
      >
        <div className="container">
        <div className="row">
        <div className="col" id="projects">
        <Projects />
            </div>
            </div>
        </div>
      </div>

      <div
        className="gallery-section fade-in-section"
        ref={(el) => (sectionsRef.current[2] = el)}
        style={{ opacity: 0 }}
      >
        <div className="container">
        <div className="row">
        <div className="col" id="projects"></div>
        <Gallery />
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
