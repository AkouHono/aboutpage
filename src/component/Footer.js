import React from 'react';
import './Footer.css'; // Import your styles
import LOGO from "./assets/logo.png";

const Footer = () => {
  const onHome = () => {
    window.location.href = '/'; // Navigate to Home
  };

  const onSkills = () => {
    window.location.href = '/skills'; // Navigate to Skills
  };

  const onAbout = () => {
    window.location.href = 'http://localhost:3000/about'; // Navigate to About (React page)
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section ">
        <a>
          <span> <img
            src={LOGO}
            alt="Profile"
            className="profile-image"
          /></span>
        </a>
          <p>
            Creating engaging digital experiences with a passion for front-end
            and back-end development. Let's build something great together!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="http://localhost:4200/portfolio-website/home">Home</a>
          </li>
          <li>
            <a  href="http://localhost:4200/portfolio-website/skill-details">Skills</a>
          </li>
          <li>
            <a href="http://localhost:3000" target="_self">
              About
            </a>
          </li>
        </ul>
    
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Phone: +91 9037990722</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/honorine-gbadabizo-7ba3a2248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AkouHono"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:akouvigbadabizo@gmail.com">Email</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Honoyemi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
