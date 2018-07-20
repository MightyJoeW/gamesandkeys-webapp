// External Dependencies
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// Internal Dependencies
import Navbar from '../../components/Navbar/Navbar';
import router from '../../router';

// Local Variables
const navbarStyles = {
  marginRight: 60
}

const styles = {
  backgroundColor: '3f3f3f',
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
        <Navbar style={navbarStyles} />
        {router}
      </div>
    );
  }
}

export default App;
