/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  
  return (
    <div className="navbar">
      <h2>Portfo<span>lio.</span></h2>
      <img src={menu_open} onClick={openMenu} className="nav-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-close"
        />
        <li>
          <AnchorLink className="AnchorLink" offset={20} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="AnchorLink" offset={25} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="AnchorLink" offset={25} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="AnchorLink" offset={25} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="AnchorLink" offset={25} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="AnchorLink" offset={25} href="#contact">
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
