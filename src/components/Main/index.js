import React, { useState, useEffect } from "react";
import { Fade, Slide, bounce, flash, rubberBand } from "react-awesome-reveal";

import "./style.scss";

const Main = () => {
  return (
    <div className="main">
      <Fade cascade>
        <h1>WELCOME TO</h1>
        <h2>METAWAVE STUDIOS</h2>
        <div className="left">
          <div className="line"></div>
          <h1>
            A Web 3.0 based studio working on building & delivering
            infrastructure for the next internet
          </h1>

          <h2>
            Our mission is to fabricate pioneering Web 3.0 based solutions,
            products & applications
          </h2>
        </div>
      </Fade>
    </div>
  );
};

export default Main;
//
