// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
});

// COMPONENT DEFINITION
class NavTabs extends Component {
	state = {
		value: 1,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static" elevation={0}>
					<Tabs value={value} onChange={this.handleChange} centered>
						<Tab label="List" component={Link} to="/library" centerRipple />
						<Tab label="Grid" component={Link} to="/" centerRipple />
					</Tabs>
				</AppBar>
			</div>
		);
	}
}

NavTabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);