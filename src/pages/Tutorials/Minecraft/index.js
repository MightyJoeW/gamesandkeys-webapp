//EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

//MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';

//INTERNAL DEPENDENCIES
import ListDisplay from '../../../components/Shared/Tutorials/ListDisplay';

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
	['dead-voxel', 0],
	['ki', 1],
	['moog-city-2', 2],
];

// COMPONENT DEFINITION
function Minecraft(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ListDisplay songs={songs} />
		</div>
	);
}

Minecraft.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Minecraft);