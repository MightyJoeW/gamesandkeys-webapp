// COMPONENT DEFINITION
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// LOCAL VARIABLES
const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

// COMPONENT DEFINITION
const CircularIndeterminate = (props) => {
	const { classes } = props;
	return (
		<div>
			<CircularProgress className={classes.progress} />
		</div>
	);
};

CircularIndeterminate.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);