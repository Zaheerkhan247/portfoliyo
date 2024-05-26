/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/image.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="{profile_img}" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a Front-End Developer, I specialize in HTML, CSS, JavaScript,
              React, and Tailwind CSS. My skill set allows me to create
              engaging, responsive web interfaces.
            </p>
            <p>
              Although I&apos;m a fresher, my passion for continuous learning
              drives me to stay current with industry trends and emerging
              technologies, ensuring effective contributions to projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "53%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>8+</h1>
          <p>months of continous learning</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Happy clints</p>
        </div>
      </div>
    </div>
  );
};

export default About;
