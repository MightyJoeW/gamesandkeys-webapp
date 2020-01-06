// EXTERNAL DEPENDENCIES
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MATERIAL-UI DEPENDENCIES
import CssBaseline from '@material-ui/core/CssBaseline';

// INTERNAL DEPENDENCIES
import routes from './routes';
import Navbar from './components/layout/nav/navbar';
import BottomNav from './components/layout/nav/bottom-nav';

const useStyles = makeStyles({
	root: {
		minHeight: '100%',
		display: 'block',
		position: 'relative',
		paddingBottom: 56 // height of the footer
	},
});

// COMPONENT DEFINITION
const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Navbar />
			{routes}
			<BottomNav />
		</div>
	);
};

export default App;
