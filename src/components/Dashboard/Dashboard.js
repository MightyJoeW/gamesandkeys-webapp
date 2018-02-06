import React, { Component } from "react";
import "./Dashboard.css";

// COMPONENTS

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-wrapper">
          <section className="tutorial-wrapper">Tutorial List</section>
          <section className="info-wrapper">Info</section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
