import React, { useState, useEffect } from "react";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import "./style.scss";
import TypeAnimation from 'react-type-animation';


const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>ABOUT US</h1>
      <div className="wraper">
        <div className="left">
          <Fade cascade>
            <div className="line"></div>
            <h1>
              SOME DATA ABOUT US SOME POINTS SOME DATA ABOUT US SOME POINTS

            </h1>

            <h3>
              Will write some content for web abd other things Will write some content for web abd other things.
              Will write some content for web abd other things Will write some content for web abd other things.
            </h3>

            <h4>Know more</h4>
          </Fade>
        </div>
        <Bounce >


          <div className="right"></div>
        </Bounce>

      </div>
    </div>
  );
};

export default AboutUs;
//
