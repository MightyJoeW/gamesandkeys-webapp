//EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

//MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';

//INTERNAL DEPENDENCIES
import ListDisplay from '../../list-display';

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
	['pokemon-league', 0]
];

// COMPONENT DEFINITION
function Pokemon(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ListDisplay songs={songs} />
		</div>
	);
}

Pokemon.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pokemon);