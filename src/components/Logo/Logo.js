import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png"
import "./logo.css";

const Logo = () => {
  return (
    <div className="ma5 mt0 flex justify-start">
      <Tilt perspective={1000}>
        <div className="tilt shadow-2 br4">
          <img className="logo" src={brain} alt="brain logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
