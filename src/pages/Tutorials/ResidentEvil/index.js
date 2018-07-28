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
  'resident-evil-0-safe-haven',
  'resident-evil-revelations-menu-theme',
  'resident-evil-revelations-previous-story'
];

// Component Definition
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