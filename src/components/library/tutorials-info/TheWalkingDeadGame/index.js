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
		backgroundColor: theme.palette.background.paper,
	},
});

const songs = [
	['the-walking-dead-game-main-theme', 0],
	['the-walking-dead-game-season-2-reveal-trailer', 1]
];

// COMPONENT DEFINITION
function TheWalkingDead(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<LibrarySongTitles songs={songs} />
		</div>
	);
}

TheWalkingDead.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TheWalkingDead);
