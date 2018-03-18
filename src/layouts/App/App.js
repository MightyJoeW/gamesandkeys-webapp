import React, { Component } from "react";
import router from "../../router";
// import SideNav from "../SideNav/SideNav";
import "./App.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Navbar />
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
