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
