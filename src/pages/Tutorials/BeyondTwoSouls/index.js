//External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Local Variables
const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
  },
});

function BeyondTwoSouls(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button divider component="a" href="/beyond">
          <ListItemText primary="Beyond" />
        </ListItem>
        <ListItem button divider component="a" href="/childhood-memories">
          <ListItemText primary="Childhood Memories" />
        </ListItem>
        <ListItem button divider component="a" href="/beyond-e3-trailer">
          <ListItemText primary="E3 Trailer (End Piano Theme)" />
        </ListItem>
        <ListItem button divider component="a" href="/my-imaginary-friend">
          <ListItemText primary="My Imaginary Friend" />
        </ListItem>
      </List>
    </div>
  );
}

BeyondTwoSouls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeyondTwoSouls);