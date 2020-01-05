// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// INTERNAL DEPENDENCIES
import DashboardCards from './dashboard-cards/dashboard-cards';

// LOCAL DEPENDENCIES
import './dashboard.scss';

// COMPONENT DEFINITION
export default class Dashboard extends Component {
	render() {
		const title = 'Video Game Piano Tutorials';
		return (
			<div className="dashboard-container">
				<p className="dashboard-title"> {title.toUpperCase()}</p>
				<p>Landing Page</p>
				{/*<DashboardCards />*/}
			</div>
		);
	}
}
