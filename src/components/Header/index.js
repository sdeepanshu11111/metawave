import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.scss";
import Burger from "../../assets/icons/burger.svg";
import Logo from "../../assets/logo/METAWAVE COLOR.svg";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleBtn = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log("hello");
  };

  const [lan, setlan] = React.useState("");

  const handleChange = (event) => {
    setlan(event.target.value);
  };

  return (
    <header>
      <div className="header-bottom">
        <div className="img">
          <img src={Logo} alt="" />
          <h2>Metawave Studios</h2>
        </div>

        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>

          <li>
            <a href="/">What we do</a>
          </li>

          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>

        <div className="burger" onClick={toggleBtn}>
          <img src={Burger} alt="" />
        </div>
      </div>

      <div className="ulList">
        <ul className="links-mobile">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">About</a>
          </li>

          <li>
            <a href="/">What we do</a>
          </li>

          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
