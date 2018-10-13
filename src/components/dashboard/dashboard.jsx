// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// INTERNAL DEPENDENCIES
import ListItems from '../dashboard/list-items/list-items';

// LOCAL DEPENDENCIES
import './dashboard.scss';

// COMPONENT DEFINITION
class Dashboard extends Component {
	render() {
		const title = 'Video Game Piano Tutorials';
		return (
			<div className="dashboard-container">
				<p className="dashboard-title"> {title.toUpperCase()}</p>
				<ListItems />
			</div>
		);
	}
}

export default Dashboard;
