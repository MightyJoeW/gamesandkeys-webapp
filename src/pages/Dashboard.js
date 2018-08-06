// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// INTERNAL DEPENDENCIES
import ListItems from '../components/List/ListItems';

// LOCAL VARIABLES
const wrapper = {
  display: 'grid',
}

// COMPONENT DEFINITION
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
