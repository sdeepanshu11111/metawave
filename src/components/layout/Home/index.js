import React from "react";
// import mainImg from "../../../assets/logo/main.svg"
import "./style.scss";
import Mainimg from "../../../assets/logo/main.svg";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="img">
          <img src={Mainimg} alt="" />
          <h1>METAWAVE</h1>
          <h1>STUDIOS</h1>
        </div>

        <div className="h2-div">
          <h2>
            A Web3 based studio working on building & delivering infrastructure
            for the next internet
          </h2>
        </div>

        {/* <div className="btn-div">
          <a href="">About Metawave</a>
          <a href="">About Action</a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
