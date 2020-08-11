// EXTERNAL DEPENDENCIES
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

// MATERIAL-UI DEPENDENCIES
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';

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
	}
});


// COMPONENT DEFINITION
const App = () => {
	const classes = useStyles();
	const [mode, setMode] = useState(
		localStorage.getItem('cachedMode') || ''
	);

	useEffect(() => {
		localStorage.setItem('cachedMode', mode)
		// console.log(mode)
	}, [mode])

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			ReactGA.event({
				category: 'Settings',
				action: 'Turn on dark mode',
				label: 'Dark Mode'
			});
		} else {
			setMode('light');
			ReactGA.event({
				category: 'Settings',
				action: 'Turned on Light Mode',
				label: 'Light Mode'
			});
		}

	};

	const theme = createMuiTheme({
		palette: {
			primary: blue,
			type: `${mode === 'light' ? 'light' : 'dark'}`,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<CssBaseline />
				<Navbar
					mode={mode}
					toggleMode={toggleMode}
				/>
				{routes}
				<BottomNav />
			</div>
		</ThemeProvider>
	);
};

export default App;
