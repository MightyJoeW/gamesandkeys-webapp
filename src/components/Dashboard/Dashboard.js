import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div class="nav-wrapper">
              <div>Logo</div>
              <div className="nav-right">About</div>
              <div>Downloads</div>
              <div>Requests</div>
            </div>
          </header>
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
