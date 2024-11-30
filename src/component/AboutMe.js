import React from "react";
import "./AboutMe.css";
import CV from './assets/cv.pdf';
import IMAGE from './assets/image.jpg';



const AboutMe = () => {
  return (
  <div className="about-me-container"  >
      <div className="about-me-content">
        
        <p>
        Passionate about technology since a young age, I like to create attractive pages
        </p>
        <div className="profile-section">
          <img
            src={IMAGE}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h3>Hello, I am Yémima Akouvi</h3>
            <div className="stats">
              
            </div>
            <p>
            After the baccalaureate I had the passion to go into computer science at the same time but I couldn't. The objective not having changed, I took a scientific course which is maths. 
            During my course I had to do personal work on certain areas of IT. In the final year of my degree I had the opportunity 
            to work with the GDSC (Google Developer Students Clubs) team at my University as a Web Designer. After my degree I applied 
            for the ICCR scholarship which gave me the opportunity to continue my master's degree in Computer Science.
            </p>
            <div className="skills">
              <div className="skill">
                <p>Front-end Developper</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Back-end Developper</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Figma & Illustrator</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </div>
    
            </div>
            <a
        href={CV}
        download="cv.pdf" // Name of the downloaded file
        className="download-button" // Optional class for custom styling
      >
        Download My CV
      </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
