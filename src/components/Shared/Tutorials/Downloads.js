// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SheetMusicIcon from '@material-ui/icons/InsertDriveFile';
import MidiIcon from '@material-ui/icons/MusicNote';

// LOCAL VARIABLES
const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        margin: '0 auto',
        maxWidth: 360,
        width: '100%',
    },
});

// COMPONENT DEFINITION
const Downloads = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <SheetMusicIcon />
                    </ListItemIcon>
                    <ListItemText
                        onClick={() => console.log('clicked sheet music')}
                        primary="Sheet Music"
                        secondary="Click to download"
                    />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MidiIcon />
                    </ListItemIcon>
                    <ListItemText
                        onClick={() => console.log('clicked midi file')}
                        primary="Midi File"
                        secondary="Click to download"
                    />
                </ListItem>
            </List>
            <Divider />
        </div>
    );
}

Downloads.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Downloads);