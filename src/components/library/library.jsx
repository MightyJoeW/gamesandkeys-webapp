// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { navigate } from '@reach/router';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// LOCAL VARIABLES
const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		margin: '0 auto',
		width: '100%'
	},
});

const listItemStyles = {
	textAlign: 'center',
	fontSize: 20
};

// COMPONENT DEFINITION
const Library = (props) => {
	const { classes } = props;

	// Google Analytics
	const trackingId = '43084370';

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
			action: 'Selected a Game or Show',
			label: title
		});
	};

	const handleClick = route => {
		trackEvent(route);
		navigate(`/${route}`);
	};

	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button divider onClick={() => handleClick('1001-spikes')}>
					<ListItemText style={listItemStyles} primary="1001 Spikes" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('beyond-two-souls'))}>
					<ListItemText style={listItemStyles} primary="Beyond Two Souls" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('bobs-burgers'))}>
					<ListItemText style={listItemStyles} primary="Bob's Burgers" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('brothers'))}>
					<ListItemText style={listItemStyles} primary="Brothers: A Tale of Two Sons" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('catherine'))}>
					<ListItemText style={listItemStyles} primary="Catherine" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('chroma'))}>
					<ListItemText style={listItemStyles} primary="Chroma" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('grand-theft-auto'))}>
					<ListItemText style={listItemStyles} primary="Grand Theft Auto" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('infamous'))}>
					<ListItemText style={listItemStyles} primary="inFAMOUS" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('life-is-strange'))}>
					<ListItemText style={listItemStyles} primary="Life Is Strange" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('minecraft'))}>
					<ListItemText style={listItemStyles} primary="Minecraft" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('nba-street'))}>
					<ListItemText style={listItemStyles} primary="NBA Street" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('playstation-commercials'))}>
					<ListItemText style={listItemStyles} primary="Playstation Commercials" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('pokemon'))}>
					<ListItemText style={listItemStyles} primary="Pokemon" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('resident-evil'))}>
					<ListItemText style={listItemStyles} primary="Resident Evil" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('the-last-of-us'))}>
					<ListItemText style={listItemStyles} primary="The Last of Us" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('the-walking-dead-game'))}>
					<ListItemText style={listItemStyles} primary="The Walking Dead Game" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('chrothomas-was-alonema'))}>
					<ListItemText style={listItemStyles} primary="Thomas Was Alone" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('transistor'))}>
					<ListItemText style={listItemStyles} primary="Transistor" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('uncharted'))}>
					<ListItemText style={listItemStyles} primary="Uncharted" />
				</ListItem>
				<ListItem button divider onClick={() => handleClick(('mashups'))}>
					<ListItemText style={listItemStyles} primary="Video Game Piano Mashups" />
				</ListItem>
			</List>
		</div>
	);
};

Library.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Library);