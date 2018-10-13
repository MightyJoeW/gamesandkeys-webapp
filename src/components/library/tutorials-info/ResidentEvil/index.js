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
	['resident-evil-0-safe-haven', 0],
	['resident-evil-revelations-menu-theme', 1],
	['resident-evil-revelations-previous-story', 2],
];

// COMPONENT DEFINITION
function ResidentEvil(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ListDisplay songs={songs} />
		</div>
	);
}

ResidentEvil.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResidentEvil);