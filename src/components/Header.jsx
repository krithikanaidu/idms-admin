import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg"; // Assuming you have a logo image in this path
import { FiPower } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-left">
          <img className="navbar-icon" src={logo} alt="IDMS Infotech" />
        </div>
        <div className="navbar-right">
          <span className="navbar-user">Welcome - Functional Support</span>
          <button className="logout-button">
            <FiPower className="icon" size={17} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
