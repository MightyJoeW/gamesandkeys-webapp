// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// MATERIAL-UI DEPENDENCIES
import CssBaseline from '@material-ui/core/CssBaseline';
import { grey } from '@material-ui/core/colors';

// INTERNAL DEPENDENCIES
import Navbar from './components/Navbar/Navbar';
import routes from './routes';

// LOCAL VARIABLES
const navbarStyles = {
	marginRight: 60
};

const styles = {
	backgroundColor: grey['100'],
	fontFamily: 'ariel',
	display: 'grid',
};

// COMPONENT DEFINITION
class App extends Component {
	render() {
		return (
			<div style={styles}>
				<CssBaseline />
				<Navbar style={navbarStyles} />
				{routes}
			</div>
		);
	}
}

export default App;
