// External Dependencies
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// Internal Dependencies
import Navbar from '../../components/Navbar/Navbar';
import router from '../../router';

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
        <CssBaseline />
        <Navbar />
        {router}
      </div>
    );
  }
}

export default App;
