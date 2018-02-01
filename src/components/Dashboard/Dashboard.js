import React, { Component } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <content>Tutorial List</content>
          <section>Info</section>
          <footer>
            <div>Footer</div>
            <div>Footer Col 2</div>
            <div>Footer Col 3</div>
            <div>Footer Col 4</div>
            <div>Footer Col 5</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Dashboard;
