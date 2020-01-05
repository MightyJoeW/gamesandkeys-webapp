// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';

// MATERIAL-UI DEPENDENCIES
import CssBaseline from '@material-ui/core/CssBaseline';

// INTERNAL DEPENDENCIES
import routes from './routes';
import Navbar from './components/layout/nav/navbar';

// COMPONENT DEFINITION
const App = () => (
	<Fragment>
		<CssBaseline />
		<Navbar />
		{routes}
	</Fragment>
);

export default App;
