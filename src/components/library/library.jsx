// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

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
		width: '60%',
	},
});

const listItemStyles = {
	color: 'red',
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

	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button divider component="a" href="/1001-spikes" onClick={() => trackEvent(('1001-spikes'))}>
					<ListItemText style={listItemStyles} primary="1001 Spikes" />
				</ListItem>
				<ListItem button divider component="a" href="/beyond-two-souls" onClick={() => trackEvent(('beyond-two-souls'))}>
					<ListItemText primary="Beyond Two Souls" />
				</ListItem>
				<ListItem button divider component="a" href="/brothers" onClick={() => trackEvent(('brothers'))}>
					<ListItemText primary="Brothers: A Tale of Two Sons" />
				</ListItem>
				<ListItem button divider component="a" href="/catherine" onClick={() => trackEvent(('catherine'))}>
					<ListItemText primary="Catherine" />
				</ListItem>
				<ListItem button divider component="a" href="/chroma" onClick={() => trackEvent(('chroma'))}>
					<ListItemText primary="Chroma" />
				</ListItem>
				<ListItem button divider component="a" href="/grand-theft-auto" onClick={() => trackEvent(('grand-theft-auto'))}>
					<ListItemText primary="Grand Theft Auto" />
				</ListItem>
				<ListItem button divider component="a" href="/infamous" onClick={() => trackEvent(('infamous'))}>
					<ListItemText primary="inFAMOUS" />
				</ListItem>
				<ListItem button divider component="a" href="/life-is-strange" onClick={() => trackEvent(('life-is-strange'))}>
					<ListItemText primary="Life Is Strange" />
				</ListItem>
				<ListItem button divider component="a" href="/minecraft" onClick={() => trackEvent(('minecraft'))}>
					<ListItemText primary="Minecraft" />
				</ListItem>
				<ListItem button divider component="a" href="/nba-street" onClick={() => trackEvent(('nba-street'))}>
					<ListItemText primary="NBA Street" />
				</ListItem>
				<ListItem button divider component="a" href="/playstation-commercials" onClick={() => trackEvent(('playstation-commercials'))}>
					<ListItemText primary="Playstation Commercials" />
				</ListItem>
				<ListItem button divider component="a" href="/pokemon" onClick={() => trackEvent(('pokemon'))}>
					<ListItemText primary="Pokemon" />
				</ListItem>
				<ListItem button divider component="a" href="/resident-evil" onClick={() => trackEvent(('resident-evil'))}>
					<ListItemText primary="Resident Evil" />
				</ListItem>
				<ListItem button divider component="a" href="/the-last-of-us" onClick={() => trackEvent(('the-last-of-us'))}>
					<ListItemText primary="The Last of Us" />
				</ListItem>
				<ListItem button divider component="a" href="/the-walking-dead-game" onClick={() => trackEvent(('the-walking-dead-game'))}>
					<ListItemText primary="The Walking Dead Game" />
				</ListItem>
				<ListItem button divider component="a" href="/thomas-was-alone" onClick={() => trackEvent(('chrothomas-was-alonema'))}>
					<ListItemText primary="Thomas Was Alone" />
				</ListItem>
				<ListItem button divider component="a" href="/transistor" onClick={() => trackEvent(('transistor'))}>
					<ListItemText primary="Transistor" />
				</ListItem>
				<ListItem button divider component="a" href="/uncharted" onClick={() => trackEvent(('uncharted'))}>
					<ListItemText primary="Uncharted" />
				</ListItem>
				<ListItem button divider component="a" href="/mashups" onClick={() => trackEvent(('mashups'))}>
					<ListItemText primary="Video Game Piano Mashups" />
				</ListItem>
				<ListItem button divider component="a" href="/bobs-burgers" onClick={() => trackEvent(('bobs-burgers'))}>
					<ListItemText primary="Bob's Burgers" />
				</ListItem>
			</List>
		</div>
	);
};

Library.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Library);