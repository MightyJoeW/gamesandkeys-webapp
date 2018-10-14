// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// LOCAL DEPENDENCIES
import NavTabs from './navbar-tabs';

// LOCAL VARIABLES
const styles = {
	root: {
		flexGrow: 1
	},
	siteTitle: {
		textDecoration: 'none'
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
	state = {
		auth: false,
		anchorEl: null
	};

	handleChange = (e, checked) => {
		this.setState({ auth: checked });
	};

	handleMenu = e => {
		this.setState({ anchorEl: e.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleLogout = () => {
		this.setState({ auth: false });
	};

	handleLogin = () => {
		console.log('%c Clicked login', 'color: #308e7b');

	}

	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={classes.root}>
				{process.env.NODE_ENV === 'development'
					? <FormGroup>
						<FormControlLabel
							control={
								<Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
							}
							label={auth ? 'Logout' : 'Login'}
						/>
					</FormGroup>
					: null}
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
							variant="title"
						>
							{siteTitle}
						</Typography>
						<NavTabs />
						{auth
							?
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>My Account</MenuItem>
									<MenuItem onClick={this.handleLogout}>Logout</MenuItem>
								</Menu>
							</div>
							:
							<div
							// className={classes.login}
							>
								<div>
									<Link className={classes.authLinks} to="/login">Login</Link>
									<Link className={classes.authLinks} to="/signup">Signup</Link>
								</div>

							</div>
						}
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
