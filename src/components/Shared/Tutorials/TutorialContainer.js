// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// INTERNAL DEPENDENCIES
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

// LOCAL DEPENDENCIES
import Downloads from './Downloads';

// LOCAL VARIABLES
const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		fontSize: '1.5em',
		fontWeight: 700,
		margin: '0 auto',
		minWidth: 450,
		paddingBottom: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 2,
		width: '50%',
	},
});

// COMPONENT DEFINITION
const TutorialContainer = (props) => {
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

TutorialContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorialContainer);
