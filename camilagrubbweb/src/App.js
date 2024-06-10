import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Collage from './components/Collage/Collage';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <div className="App">

      <div className='header-section' style={{ opacity: headerOpacity }}>
      <Header></Header>
      </div>

      <div className='bio-section'>
        <div className='conatiner'>

        <div className='row'>
          <div className='col' id='profile'>
          <Bio></Bio>
          </div>
          <div className='col' id='bio'>
            <Collage></Collage>
          </div>
        </div>

        <div className='row'>
          <div className='col' id='projects'>
          <Projects></Projects>
          </div>
        </div>

        <div className='row'>
          <div className='col' id='gallery'>
          <Gallery></Gallery>
          </div>
        </div>

        </div>
      </div>

    </div>
  );
}

export default App;
