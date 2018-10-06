//EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

//MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import DownloadIcon from '@material-ui/icons/CloudDownload';

//LOCAL VARIABLES
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
	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem button divider component="a" href="/1001-spikes">
					{/* <ListItemIcon>
            <DownloadIcon />
        </ListItemIcon> */}
					<ListItemText style={listItemStyles} primary="1001 Spikes" />
				</ListItem>
				<ListItem button divider component="a" href="/beyond-two-souls">
					<ListItemText primary="Beyond Two Souls" />
				</ListItem>
				<ListItem button divider component="a" href="/brothers">
					<ListItemText primary="Brothers: A Tale of Two Sons" />
				</ListItem>
				<ListItem button divider component="a" href="/catherine">
					<ListItemText primary="Catherine" />
				</ListItem>
				<ListItem button divider component="a" href="/chroma">
					<ListItemText primary="Chroma" />
				</ListItem>
				<ListItem button divider component="a" href="/grand-theft-auto">
					<ListItemText primary="Grand Theft Auto" />
				</ListItem>
				<ListItem button divider component="a" href="/infamous">
					<ListItemText primary="inFAMOUS" />
				</ListItem>
				<ListItem button divider component="a" href="/life-is-strange">
					<ListItemText primary="Life Is Strange" />
				</ListItem>
				<ListItem button divider component="a" href="/minecraft">
					<ListItemText primary="Minecraft" />
				</ListItem>
				<ListItem button divider component="a" href="/nba-street">
					<ListItemText primary="NBA Street" />
				</ListItem>
				<ListItem button divider component="a" href="/playstation-commercials">
					<ListItemText primary="Playstation Commercials" />
				</ListItem>
				<ListItem button divider component="a" href="/pokemon">
					<ListItemText primary="Pokemon" />
				</ListItem>
				<ListItem button divider component="a" href="/resident-evil">
					<ListItemText primary="Resident Evil" />
				</ListItem>
				<ListItem button divider component="a" href="/the-last-of-us">
					<ListItemText primary="The Last of Us" />
				</ListItem>
				<ListItem button divider component="a" href="/the-walking-dead-game">
					<ListItemText primary="The Walking Dead Game" />
				</ListItem>
				<ListItem button divider component="a" href="/thomas-was-alone">
					<ListItemText primary="Thomas Was Alone" />
				</ListItem>
				<ListItem button divider component="a" href="/transistor">
					<ListItemText primary="Transistor" />
				</ListItem>
				<ListItem button divider component="a" href="/uncharted">
					<ListItemText primary="Uncharted" />
				</ListItem>
				<ListItem button divider component="a" href="/mashups">
					<ListItemText primary="Video Game Piano Mashups" />
				</ListItem>
				<ListItem button divider component="a" href="/bobs-burgers">
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