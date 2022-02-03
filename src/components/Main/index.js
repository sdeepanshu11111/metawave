import React, { useState, useEffect } from "react";
import { Fade, Slide, bounce, flash, rubberBand } from "react-awesome-reveal";
import TypeAnimation from 'react-type-animation';
import "./style.scss";

const Main = () => {
  return (
    <div className="main">
      <Fade cascade>
        <h1>  <TypeAnimation
          cursor={false}
          sequence={['WELCOME TO', 1000]}
        /></h1>
        <h2> <TypeAnimation
          cursor={false}
          sequence={['METAWAVE STUDIOS', 2000]}
        /></h2>
        <div className="left">
          <div className="line"></div>
          <h1>

            <TypeAnimation
              cursor={false}
              sequence={['A Web 3.0 based studio working on building & delivering infrastructure for the next internet', 5000]}
            />
          </h1>

          <h2>
            <TypeAnimation
              cursor={false}
              sequence={[' Our mission is to fabricate pioneering Web 3.0 based solutions, products & applications', 5000]}
            />

          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default Main;
//
