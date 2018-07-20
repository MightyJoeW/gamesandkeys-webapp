// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import List from '../components/List/List';

// Local Variables
const wrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  justifyItems: 'center',
}

// Component Definition
class Dashboard extends Component {
  render() {
    return (
      <div style={wrapper}>
        <List />
      </div>
    );
  }
}

export default Dashboard;
