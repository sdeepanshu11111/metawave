import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./style.scss";
import Logo from "./../assets/Icons/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar">
      <Fade cascade>
        <img src={Logo} height="100%" alt="" />
      </Fade>

      <div className="list">
        <Fade cascade>
          <div className="under projects">Projects</div>
          <div className="under about-us">About Us</div>
          <div className="under contact-us">Contact Us</div>
        </Fade>
      </div>

      <div className="hamburger" onClick={() => setNav(!nav)}>
        <div className="ham1"></div>
        <div className="ham2"></div>
        <div className="ham3"></div>
      </div>

      <div className={`sider ${nav ? "show-sider" : null}`}>
        <Fade>
          <div className="sider-logo">
            <img src={Logo} height="100%" alt="" />
            <h1 onClick={() => setNav(!nav)}>X</h1>
          </div>
        </Fade>

        <div className="sider-list">
          <Slide delay={0.5}>
            <div className=" projects">Projects</div>
          </Slide>

          <Slide delay={1000}>
            <div className=" about-us">About Us</div>
          </Slide>

          <Slide delay={1500}>
            <div className=" contact-us">Contact Us</div>
          </Slide>
        </div>
      </div>

      {/* <img src={MainBg} alt="" /> */}
    </div>
  );
};

export default Navbar;
//
