/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [popup, setPopup] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "141a6651-4c42-4737-8926-a10c0f59e7da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopup(true);
      setFormMsg(res.message);
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>
            I&apos;m currently available to talk on new projects, so feel free
            to send a message about any thing you want me to wprk on. You can
            contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detial">
              <img src={mail_icon} alt="" />
              <p>hariprasathk2023@gmail.com</p>
            </div>
            <div className="contact-detial">
              <img src={call_icon} alt="" />
              <p>+91 9786437079</p>
            </div>
            <div className="contact-detial">
              <img src={location_icon} alt="" />
              <p>Karipatti, Salem</p>
            </div>
          </div>
        </div>
        {popup ? (
          <>
            <div className="popup-bg"></div>
            <div className="popup-msg">
              <p>{formMsg}</p>
              <button
                onClick={() => setPopup(false)}
                className="contact-submit"
              >
                Ok
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <form onSubmit={onSubmit} className="contact-right">
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Write Your message here:</label>
            <textarea
              id="text"
              name="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
