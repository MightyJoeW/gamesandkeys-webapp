import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

//MATERIAL-UI ICON MENU
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

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
      <div className="nav-right">
        <Link to="/help" style={{ textDecoration: "none", color: "black" }}>
          Help
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/logout" style={{ textDecoration: "none", color: "black" }}>
          Logout
        </Link>
      </div>
      <IconMenu
        className="navButton"
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        targetOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <MenuItem primaryText="Downloads" />
        <MenuItem primaryText="Requests" />
        <MenuItem primaryText="About" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Logout" />
      </IconMenu>
    </div>
  </div>
);

export default Navbar;
