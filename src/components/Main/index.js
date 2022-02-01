import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./style.scss";

const Main = () => {
  return (
    <div className="main">
      <Fade cascade>
        <h1>WELCOME TO</h1>
        <h2>METAVERSE STUDIOS</h2>
        <div className="left">
          <div className="line"></div>
          <h1>
            A Web3 based studio working on building & delivering infrastructure
            for the next iteration.
          </h1>

          <h2>
            Our mission is to fabricate pioneering Web3 based solutions,
            products & applications
          </h2>
          {/* <h2>
            which incorporate decentralization without relying on authentication
            systems or a third party and to make Web3 accessible to everyone.
          </h2> */}
        </div>
      </Fade>
    </div>
  );
};

export default Main;
//
