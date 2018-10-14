//EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

//MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';

//INTERNAL DEPENDENCIES
import LibrarySongTitles from '../../library-song-titles';

//LOCAL VARIABLES
const styles = theme => ({
	root: {
		width: '100%',
		margin: '0 auto',
		maxWidth: '90%',
		backgroundColor: theme.palette.background.paper,
	},
});

const songs = [
	['1001-spikes-main-theme', 0]
];

// COMPONENT DEFINITION
function Spikes(props) {
	const { classes, name } = props;
	return (
		<div className={classes.root}>
			<div>{name}</div>
			<LibrarySongTitles songs={songs} />
		</div>
	);
}

Spikes.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spikes);