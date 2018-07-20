// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import ListItems from '../components/List/ListItems';

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
        <ListItems />
      </div>
    );
  }
}

export default Dashboard;
