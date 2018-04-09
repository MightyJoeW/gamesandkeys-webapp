// External Dependencies
import React, { Component } from 'react';
import router from '../../router';
import './App.css';

// Internal Dependencies
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Local Variables
const styles = {
  fontFamily: 'arial',
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
        <Footer />
      </div>
    );
  }
}

export default App;
