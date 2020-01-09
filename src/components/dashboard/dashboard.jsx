// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import ReactGA from 'react-ga';

// INTERNAL DEPENDENCIES
import Footer from '../layout/nav/footer';
import { trackingId } from '../../keys';

// LOCAL DEPENDENCIES
import './dashboard.scss';

// COMPONENT DEFINITION
const Dashboard = () => {
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

	const handleClick = route => {
		trackEvent(route);
		navigate(`/${route}`);
	};

	const title = 'Play your favorite video game songs on the piano';

	return (
		<div className="dashboard-container">
			<h1 className="dashboard-title"> {title}</h1>
			<p className="dashboard-subtitle">
				GamesAndKeys is a free learning resource that teaches pianists how to play songs from video games and tv <br />
				shows via <strong>video instruction</strong>, <strong>sheet music</strong>, and <strong>midi files</strong>.
			</p>
			<Button className="dashboard-get-started-button" variant="contained" color="primary" onClick={(route) => handleClick('docs')}>
				Get Started
			</Button>
			<Footer />
		</div>
	);
};

export default Dashboard;