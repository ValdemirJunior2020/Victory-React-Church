import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/worship.mp4" autoPlay loop muted playsInline />
      <h1>Welcome to Victory Worship  Center</h1>
      <p>Come visit us!</p>
      <div className="hero-icons">
        <a 
          href="https://www.facebook.com/groups/56003018318" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon facebook-icon"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://www.youtube.com/@VictoryWorshipCenter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon youtube-icon"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
