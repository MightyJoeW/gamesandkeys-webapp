import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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
      <List component="nav">
        <ListItem button divider>
          <Link to="/1001-spikes">1001 Spikes</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/beyond-two-souls">Beyond Two Souls</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/brothers">Brothers: A Tale of Two Sons</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/catherine">Catherine</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/chroma">Chroma</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/grand-theft-auto">Grand Theft Auto</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/infamous">inFAMOUS</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/life-is-strange'">Life Is Strange
</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/minecraft">Minecraft</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/nba-street">NBA Street</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/playstation-commercials">Playstation Commercials</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/pokemon">Pokemon</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/resident-evil">Resident Evil</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/the-last-of-us">The Last of Us</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/the-walking-dead-game">The Walking Dead Game</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/thomas-was-alone">Thomas Was Alone</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/transistor">Transistor</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/uncharted">Uncharted 3</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/mashups">Video Game Piano Mashups</Link>
        </ListItem>
        <ListItem button divider>
          <Link to="/bobs-burgers">Bob's Burgers</Link>
        </ListItem>

      </List>
    </div>
  );
}

Library.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Library);