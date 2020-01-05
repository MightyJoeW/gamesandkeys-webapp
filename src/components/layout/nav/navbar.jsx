// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MusicIcon from '@material-ui/icons/LibraryMusic';

// LOCAL DEPENDENCIES
import NavTabs from './navbar-tabs';

// LOCAL VARIABLES
const styles = {
	root: {
		flexGrow: 1
	},
	siteTitle: {
		textDecoration: 'none',
		fontSize: '1em'
	},
	logo: {
		marginLeft: -12
	},
	authLinks: {
		margin: '0 5px'
	}
};

const siteTitle = 'Games and Keys';

// COMPONENT DEFINITION
class Navbar extends Component {

	handleMenu = e => {
		this.setState({ anchorEl: e.currentTarget });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary" elevation={0}>
					<Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
						<IconButton
							aria-label="Logo"
							className={classes.logo}
							color="inherit"
							component="a"
							href="/"
						>
							<MusicIcon />
						</IconButton>
						<Typography
							className={classes.siteTitle}
							color="inherit"
							component="a"
							href="/"
							variant="h1"
						>
							<h1>{siteTitle}</h1>
						</Typography>
						<NavTabs />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
