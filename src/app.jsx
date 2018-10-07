// EXTERNAL DEPENDENCIES
import React, { Component, Fragment } from 'react';

// MATERIAL-UI DEPENDENCIES
import CssBaseline from '@material-ui/core/CssBaseline';

// INTERNAL DEPENDENCIES
import Navbar from './components/Navbar/Navbar';
import routes from './routes';

// COMPONENT DEFINITION
export default class App extends Component {
	render() {
		return (
			<Fragment>
				<CssBaseline />
				<Navbar />
				{routes}
			</Fragment>
		);
	}
}
