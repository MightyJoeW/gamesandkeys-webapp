import React, { Component } from "react";
import "./Dashboard.css";

// COMPONENTS
import List from "../../components/List/List";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-wrapper">
          <List />
          <section className="info-wrapper">Info</section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
