//External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

//Internal Dependencies
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

// Local Dependencies
import Downloads from './Downloads';

// Local Variables
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

// Component Definition
function TutorialContainer(props) {
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
}

TutorialContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorialContainer);
