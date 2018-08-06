//External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';

//Internal Dependencies
import ListDisplay from '../../../components/Shared/Tutorials/ListDisplay';

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
  'beyond-e3-trailer',
  'beyond',
  'childhood-memories',
  'my-imaginary-friend',
];

// Component Definition
function BeyondTwoSouls(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ListDisplay songs={songs} />
    </div>
  );
}

BeyondTwoSouls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeyondTwoSouls);