// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';

// INTERNAL DEPENDENCIES
import ListItems from '../../components/List/ListItems';

// LOCAL VARIABLES
const styles = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 45,
};

const titleStyles = {
	fontWeight: 700,
	marginTop: 45,
};

// COMPONENT DEFINITION
class Dashboard extends Component {
	render() {
		const title = 'Video Game Piano Tutorials';
		return (
			<div style={styles}>
				<p style={titleStyles}> {title.toUpperCase()}</p>
				<ListItems />
			</div>
		);
	}
}

export default Dashboard;
