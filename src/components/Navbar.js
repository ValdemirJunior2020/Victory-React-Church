import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Import React Icons
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo (Modify this if needed) */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="Victory Worship Logo" className="logo-image" />
        </Link>

        {/* ✅ Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        {/* ✅ Navbar Menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/prayer-group" className="nav-links" onClick={closeMobileMenu}>
              Prayer Group
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://docs.google.com/forms/d/1MPDs0hocvY4agYSrW9LkDsbEibmlzkhKx6DGCwz3Hkg/preview"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              New Member
            </a>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-links" onClick={closeMobileMenu}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
