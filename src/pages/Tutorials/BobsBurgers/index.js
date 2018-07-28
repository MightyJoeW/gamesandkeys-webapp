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
    'oil-spill',
];

// Component Definition
function BobsBurgers(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ListDisplay songs={songs} />
        </div>
    );
}

BobsBurgers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BobsBurgers);