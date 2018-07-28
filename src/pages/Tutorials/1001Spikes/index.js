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
    '1001-spikes-main-theme',
];

// Component Definition
function Spikes(props) {
    const { classes, name } = props;
    return (
        <div className={classes.root}>
            <div>{name}</div>
            <ListDisplay songs={songs} />
        </div>
    );
}

Spikes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spikes);