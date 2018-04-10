import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SearchIcon from '@material-ui/icons/Search';
import QuestionIcon from '@material-ui/icons/QuestionAnswer';

import NavTabs from './NavTabs';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const iconStyles = {
  padding: '0 8px',
  cursor: 'pointer'
}

const navTabStyles = {
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ cursor: 'pointer' }}
            variant="title"
            color="inherit"
            className={classes.flex}
          >
            Games and Keys
          </Typography>
          <NavTabs style={navTabStyles} />
          <QuestionIcon style={iconStyles} />
          <SearchIcon style={iconStyles} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);