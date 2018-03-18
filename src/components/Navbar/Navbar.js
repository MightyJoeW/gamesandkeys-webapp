// External Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Internal Dependencies
import "./Navbar.css";
import IconButton from "material-ui/IconButton";
import GametitleAutosuggest from "../SearchFields/GameTitle"

//MATERIAL-UI ICON MENU
// import IconMenu from "material-ui/IconMenu";
// import MenuItem from "material-ui/MenuItem";
// import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

// Component Definition
const Navbar = () => (
  <div className="nav-wrapper">
    <div className="nav">
      <div className="nav__item nav__item--home">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </Link>
      </div>
      <GametitleAutosuggest />
      <div className="nav__item nav__item--right">
        <Link
          to="/downloads"
          style={{ textDecoration: "none", color: "black" }}
        >
          Downloads
        </Link>
      </div>
      <div className="nav__item nav__item--right">
        <Link to="/requests" style={{ textDecoration: "none", color: "black" }}>
          Requests
        </Link>
      </div>
      <div className="nav__item nav__item--right">
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          About
        </Link>
      </div>
      <div className="nav__item nav__item--right">
        <Link to="/help" style={{ textDecoration: "none", color: "black" }}>
          Help
        </Link>
      </div>
      <div className="nav__item nav__item--right">Logout</div>
      {/*<IconMenu
        className="button button__icon"
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
      </IconMenu>*/}
    </div>
  </div>
);

export default Navbar;