/* eslint-disable no-unused-vars */
import React from "react";
import "./MyProjects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects from "../../assets/mywork_data.js";

const MyProjects = () => {
  return (
    <div id="portfolio" className="myprojects">
      <div className="myprojects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myproject-container">
        {myprojects.map((project, i) => (
          <img height={220} key={i} src={project.w_img} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
