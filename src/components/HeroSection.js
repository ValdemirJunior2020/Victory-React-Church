import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  console.log("Rendering HeroSection");

  return (
    <motion.div 
      className="hero-container"
      initial={{ scale: 0.7, opacity: 0 }} // Starts more zoomed out
      animate={{ scale: 1, opacity: 1 }} // Zooms in and fades in
      transition={{ duration: 2.5, ease: "easeOut" }} // Slower effect (2.5s)
    >
      <video src="/videos/worship.mp4" autoPlay loop muted playsInline />
      <h2>Welcome to Victory Worship Center</h2>
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
    </motion.div>
  );
}

export default HeroSection;
