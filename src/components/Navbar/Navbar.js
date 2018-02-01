import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav-home">Home</div>
      <div className="nav-right">Downloads</div>
      <div className="nav-right">Requests</div>
      <div className="nav-right">About</div>
      <button className="nav-button" type="button">
        Menu
      </button>
    </div>
  </div>
);

export default Navbar;
