// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// LOCAL DEPENDENCIES
import Downloads from './downloads-section';
import VideoPlayer from './video-player';

// LOCAL VARIABLES
const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		fontSize: '1.5em',
		fontWeight: 700,
		margin: '0 auto',
		paddingBottom: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 2,
	},
});

// COMPONENT DEFINITION
const TutorialWrapper = (props) => {
	const { classes, pdf, videoUrl } = props;

	return (
		<div>
			<Paper className={classes.root} elevation={1}>
				{props.title}
				<VideoPlayer videoUrl={videoUrl} />
				<Downloads pdf={pdf} />
			</Paper>
		</div>
	);
};

TutorialWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorialWrapper);
