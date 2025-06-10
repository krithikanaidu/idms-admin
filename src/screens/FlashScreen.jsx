import React from "react";
import "../styles/FlashScreen.css";
import logo from "../assets/logo.svg";

const FlashScreen = () => (
  <div className="flash-bg">
    <div className="flash-content">
      <img src={logo} alt="Logo" className="flash-logo" />
      {/* <div className="flash-loader"></div> */}
    </div>
  </div>
);

export default FlashScreen;
