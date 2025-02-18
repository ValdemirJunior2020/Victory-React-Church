import React from "react";
import "./About.css"; // ✅ Import the CSS file
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      {/* ✅ Navbar */}
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Church
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* ✅ Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://youtube.com/@victoryworshipcenter?si=VUiFLik8y-f-p4gV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ✅ Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/52288/52288-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ✅ About Content */}
      <div className="about-content">
        <h1>About Us</h1>

        <h2>Mission Statement</h2>
        <p>
          <strong>Colossians 3:12-14</strong><br />
          Therefore, as God's chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, patience, and love.
        </p>

        <h2>Greatest Commandment</h2>
        <p>To love the Lord thy God with all your heart, with all your soul, with all your mind, with all your strength and to love your neighbor as yourself.</p>

        <h2>What the Church Is and What We Believe</h2>
        <p>
          We are a Full Gospel church that believes in all the offices: Apostle, Prophet, Pastor, Teacher, Evangelist.<br />
          We believe in all the gifts of the Spirit and operate in them.<br />
          We are a very strong prophetic church.<br />
          We believe the Lord is coming for a pure church.<br />
          We believe He desires to run the church, not man.<br />
          We believe that a person needs to be born again and have a desire for a surrendered life in Jesus.<br />
          We believe that Jesus is our salvation and the only way to have eternal life.<br />
          We believe that Jesus is the Messiah and gave His life on the cross for us—the final sacrifice for our sins.<br />
          We believe He rose again on the third day, then ascended into heaven, and will come again.<br />
          We are a church that believes worship is powerful and ushers us into the presence of the Lord.<br />
          As the Lord shared with us: <em>"Worship is for Me and My Word is for you."</em>
        </p>

        <h2>Church Goal</h2>
        <p>
          To see the lost saved.<br />
          Encourage believers to have a desire to go deeper into their relationship with Christ.<br />
          All believers to come to know the voice of the Lord.<br />
          For believers to operate in their natural and God-ordained gifts.
        </p>
      </div>
    </div>
  );
}

export default About;
