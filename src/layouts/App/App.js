// External Dependencies
import React, { Component } from 'react';

// Material-UI Dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import { grey } from '@material-ui/core/colors';

// Internal Dependencies
import Navbar from '../../components/Navbar/Navbar';
import router from '../../router';

// Local Variables
const navbarStyles = {
  marginRight: 60
}

const styles = {
  backgroundColor: grey['100'],
  fontFamily: 'ariel',
  display: 'grid',
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
