// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';

// INTERNAL DEPENDENCIES
import Footer from '../layout/nav/footer';
import { trackingId } from '../../keys';

// LOCAL DEPENDENCIES
import './dashboard.scss';

// COMPONENT DEFINITION
const Dashboard = () => {
	const useStyles = makeStyles(theme => ({
		gif: {
			margin: '10px auto',
			width: '40vw',

			[theme.breakpoints.up('sm')]: {
				height: '40vh',
			},
		}
	}));
	const classes = useStyles();
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
			// I also have the chrome extension with localhost/* whitelisted

		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const trackEvent = (title) => {
		ReactGA.event({
			category: 'Navigation',
			action: 'Selected Get Started',
			label: title
		});
	};

	const title = 'Play your favorite video game songs on the piano';

	const docsRoute = () => {
		if (process.env.NODE_ENV === 'development') {
			return 'http://localhost:3000/docs';
		} else {
			return 'https://www.gamesandkeys.com/docs';
		}
	};

	return (
		<div className="dashboard-container">
			<h1 className="dashboard-title"> {title}</h1>
			<p className="dashboard-subtitle">
				GamesAndKeys is a free learning resource that teaches pianists how to play songs from video games and tv shows via <strong>videos</strong>, <strong>sheet music</strong>, and <strong>midi files</strong>.
			</p>
			<img className={classes.gif} src="static/gifs/synthesia-example.gif" alt="Synthesia Piano Tutorial" />
			<Button className="dashboard-get-started-button" variant="contained" color="primary" onClick={trackEvent()} component='a' href={docsRoute()}>
				{/* Using href instead of navigate to trigger a rerender so the navbar will switch to fixed */}
				{/* Otherwise, the sidedocs will have a gap after going through the docs links, home, Get Started again */}
				Get Started
			</Button>
			<Footer />
		</div>
	);
};

export default Dashboard;