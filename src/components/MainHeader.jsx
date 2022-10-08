import "../pages/home/Home.css";
import { Link } from "react-router-dom";
import React from "react";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100 days of workout</h4>
          <h1>Join the legends of the fitness world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            suscipit consequatur maxime laboriosam nulla ab.
          </p>
          <Link to="/plans" className="btn lg">
            Get started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MHI" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
