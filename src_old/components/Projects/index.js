import React, { useState, useEffect } from "react";
import { Fade, Slide, bounce, flash, rubberBand } from "react-awesome-reveal";
import TypeAnimation from 'react-type-animation';
import "./style.scss";

const Projects = () => {
    return (
        <div className="projects">

            <div className="text">
                <Fade cascade>


                    <h1>Projects</h1>
                    <h2>SOME DATA</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not random </p>
                    <p>Lorem Ipsum is simply dummy text of printing.</p>
                </Fade>

            </div>

            <div className="cards">
                <Fade cascade>
                    <div className="card">
                        <div className="img-container one"> </div>
                        <div className="side-text right" >
                            <div className="line"></div>
                            <div className="btn">Coming soon</div>
                            <h2>Why & do</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not random </p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="img-container two"> </div>
                        <div className="side-text right" >
                            <div className="line"></div>
                            <div className="btn">Coming soon</div>
                            <h2>Why & do</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not random </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-container three"> </div>
                        <div className="side-text right" >
                            <div className="line"></div>
                            <div className="btn">Coming soon</div>
                            <h2>Why & do</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not random </p>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    );
};

export default Projects;
//
