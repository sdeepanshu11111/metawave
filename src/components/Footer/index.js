import React from "react";
import twitter from "../../assets/icons/twitter.png";
import linkdin from "../../assets/icons/linkdin.png";
import logo from "../../assets/logo/flat.png";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="foot-div">
        <div className="ul-div2">
          <ul className="social">
            <li>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </li>
            <li>
              <a href="/">Term & Services</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="/">
            <img src={twitter} alt="" />
          </a>
          <a className="linkdin" href="/">
            <img src={linkdin} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
