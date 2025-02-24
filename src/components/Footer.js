import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com/groups/56003018318" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/@VictoryWorshipCenter" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Victory Worship Center © 2025</small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
