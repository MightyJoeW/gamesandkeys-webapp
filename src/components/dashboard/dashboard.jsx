// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';

// LOCAL DEPENDENCIES
import './dashboard.scss';

// COMPONENT DEFINITION
export default class Dashboard extends Component {
	render() {
		const title = 'Learn how to play your favorite video game songs on the piano';
		return (
			<div className="dashboard-container">
				<h1 className="dashboard-title"> {title}</h1>
				<p className="dashboard-subtitle">GamesAndKeys is a free learning resource that teaches pianists how to play songs from video games and tv shows via video instruction, sheet music, and midi files.</p>
				<Button className="dashboard-get-started-button" variant="contained" color="primary" onClick={() => navigate('/docs')}>
					Get Started
				</Button>
			</div>
		);
	}
}
