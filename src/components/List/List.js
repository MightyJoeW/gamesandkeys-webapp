//External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MusicIcon from '@material-ui/icons/MusicNote';

// Local Dependencies
import ListItems from './ListItems.js'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

// Component Definition
class List extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label="1001 Spikes" icon={<MusicIcon/>}/>
                        <Tab label="Beyond Two Souls" icon={<MusicIcon />} />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>Item One</TabContainer>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Four</TabContainer>}
                {value === 4 && <TabContainer>Item Five</TabContainer>}
                {value === 5 && <TabContainer>Item Six</TabContainer>}
                {value === 6 && <TabContainer>Item Seven</TabContainer>}
            </div>
        );
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);