import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import DownloadIcon from '@material-ui/icons/SaveAlt';
import preload from '../services/db.json';

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
  },
});

function Library(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {preload.games.map(game => (
        <List component="nav">
          <ListItem button onClick={() => alert(game.name)}>
            {/*<ListItemIcon>
              <DownloadIcon />
            </ListItemIcon>*/}
            <ListItemText primary={game.name} />
          </ListItem>
          <Divider />
        </List>
      ))}
    </div>
  );
}

Library.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Library);