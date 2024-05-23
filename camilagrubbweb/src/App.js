import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';

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
          <div className='col'>
          <Bio></Bio>
          </div>
          <div className='col'>
            <p>placeholder</p>
          </div>
        </div>

        </div>
      </div>

    </div>
  );
}

export default App;
