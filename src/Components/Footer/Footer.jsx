/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am a Frontend Developer based in Salem. Despite being a fresher, I
            possess fast learning skills to overcome any challenge.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img style={{ marginTop: "6px" }} src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {new Date().getFullYear()} Hari prasath. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
