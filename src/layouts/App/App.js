// External Dependencies
import React, { Component } from 'react';
import router from '../../router';
import './App.css';

// Internal Dependencies
import Navbar from '../../components/Navbar/Navbar';

// Local Variables
const styles = {
  fontFamily: 'ariel',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '1fr 8fr 2fr'
}

// Component Definition
class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Navbar />
        {router}
      </div>
    );
  }
}

export default App;
