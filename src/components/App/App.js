import React, { Component } from "react";
import router from "../../router";
// import SideNav from "../SideNav/SideNav";
import "./App.css";

import Navbar from "../Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {router}
      </div>
    );
  }
}

export default App;
