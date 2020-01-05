import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HelpIcon from '@material-ui/icons/Help';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Docs" icon={<FolderIcon />} />
      <BottomNavigationAction label="Tutorials" icon={<HelpIcon />} />
      <BottomNavigationAction label="Blog" icon={<ComputerIcon />} />
    </BottomNavigation>
  );
}
