import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Camila Grubb {new Date().getFullYear()} </p>
        <div className="footer-links">
          <a href="#bio">About</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
