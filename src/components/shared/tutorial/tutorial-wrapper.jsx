// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';
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
		minWidth: 450,
		paddingBottom: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 2,
		width: '50%',
	},
});

// COMPONENT DEFINITION
const TutorialWrapper = (props) => {
	const {
		classes,
		midiRoute,
		sheetRoute,
		sheetRoute2,
		sheetRoute3,
		sheetRoute2Title,
		sheetRoute3Title,
		videoUrl
	} = props;

	return (
		<Fragment>
			<Paper className={classes.root} elevation={1}>
				{props.title}
				<VideoPlayer videoUrl={videoUrl} />
				<Downloads
					midiRoute={midiRoute}
					sheetRoute={sheetRoute}
					sheetRoute2={sheetRoute2}
					sheetRoute2Title={sheetRoute2Title}
					sheetRoute3={sheetRoute3}
					sheetRoute3Title={sheetRoute3Title}

				/>
			</Paper>
		</Fragment>
	);
};

TutorialWrapper.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorialWrapper);
