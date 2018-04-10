// External Dependencies
import React, { Component } from 'react';
import './Dashboard.css';

// Internal Dependencies
import List from '../../components/List/List';

// Component Definition
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='dashboard-wrapper'>
          <List />
        </div>
      </div>
    );
  }
}

export default Dashboard;
