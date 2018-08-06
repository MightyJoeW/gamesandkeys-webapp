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
  'resident-evil-0-safe-haven',
  'resident-evil-revelations-menu-theme',
  'resident-evil-revelations-previous-story'
];

// COMPONENT DEFINITION
function ResidentEvil(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ListDisplay songs={songs} />
    </div>
  );
}

ResidentEvil.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResidentEvil);