//External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';

//Internal Dependencies
import ListDisplay from '../../../components/shared/Tutorials/ListDisplay';

//Local Variables
const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
  },
});

const songs = [
  'all-gone-aftermath',
  'all-gone-no-escape',
  'fleeting',
  'home',
  'left-behind',
  'left-behind-together',
  'salt-of-the-earth',
  'the-choice',
  'the-last-of-us-goodnight',
  'the-last-of-us-theme',
  'the-path-a-new-beginning',
  'the-way-it-was',
  'vanishing-grace-innocence',
];

// Component Definition
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
