import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import your CSS styles here
import LOGO from "./assets/logo.png";

const Navbar = () => {
  const handleHome = () => {
    // Logic for navigating to Home
    console.log("Navigating to Home");
  };

  const handleSkills = () => {
    // Logic for navigating to Skills
    console.log("Navigating to Skills");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="#home">
          <span> <img
            src={LOGO}
            alt="Profile"
            className="profile-image"
          /></span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="nav_links">
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

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/honorine-gbadabizo-7ba3a2248/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
        </a>
        <a
          href="https://github.com/AkouHono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
        </a>
        <a href="mailto:akouvigbadabizo@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
