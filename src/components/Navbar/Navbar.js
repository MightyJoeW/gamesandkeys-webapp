import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav-home">
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </Link>
      </div>
      <div className="nav-right">
        <Link
          to="/downloads"
          style={{ textDecoration: "none", color: "black" }}
        >
          Downloads
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/requests" style={{ textDecoration: "none", color: "black" }}>
          Requests
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          About
        </Link>
      </div>
      <button className="nav-button" type="button">
        Menu
      </button>
    </div>
  </div>
);

export default Navbar;
