
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import Dialog from './Dialog';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function TutorialContainer(props) {
  const { classes, videoUrl } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <VideoPlayer videoUrl={videoUrl} />
        <Dialog />
      </Paper>
    </div>
  );
}

TutorialContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorialContainer);