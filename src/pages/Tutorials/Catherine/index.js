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

function Catherine(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button divider component="a" href="/stray-sheep">
                    <ListItemText primary="Stray Sheep" />
                </ListItem>
            </List>
        </div>
    );
}

Catherine.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Catherine);