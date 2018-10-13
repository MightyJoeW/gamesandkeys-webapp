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
	['all-gone-aftermath', 1],
	['all-gone-no-escape', 2],
	['fleeting', 3],
	['home', 4],
	['left-behind', 5],
	['left-behind-together', 6],
	['salt-of-the-earth', 7],
	['the-choice', 8],
	['the-last-of-us-goodnight', 9],
	['the-last-of-us-theme', 10],
	['the-path-a-new-beginning', 11],
	['the-way-it-was', 12],
	['vanishing-grace-innocence', 13],
];

// COMPONENT DEFINITION
function TheLastOfUs(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ListDisplay songs={songs} />
		</div>
	);
}

TheLastOfUs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TheLastOfUs);
