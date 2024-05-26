/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/image.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="{profile_img}" alt="" />
      <h1>
        <span>I&apos;m John,</span> frontend developer from California.
      </h1>
      <p>
        I am a skilled Front-End Developer and a continuous learner. I&apos;m
        capable of creating innovative web solutions and contributing
        effectively to projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="AnchorLink" offset={25} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
