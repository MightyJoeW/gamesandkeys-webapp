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

function Minecraft(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button divider component="a" href="/ki">
          <ListItemText primary="Ki" />
        </ListItem>
        <ListItem button divider component="a" href="/dead-voxel">
          <ListItemText primary="Dead Voxel" />
        </ListItem>
        <ListItem button divider component="a" href="/moog-city-2">
          <ListItemText primary="Moog City 2" />
        </ListItem>
      </List>
    </div>
  );
}

Minecraft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Minecraft);