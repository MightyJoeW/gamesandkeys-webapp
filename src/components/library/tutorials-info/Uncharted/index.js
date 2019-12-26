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
	['drakes-return', 0],
	['museum-bust', 1],
	['small-beginnings', 2],
];

// COMPONENT DEFINITION
function Uncharted(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<LibrarySongTitles songs={songs} />
		</div>
	);
}

Uncharted.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Uncharted);
