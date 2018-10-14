// EXTERNAL DEPENDENCIES
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// INTERNAL DEPENDENCIES

// LOCAL VARIABLES
const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		marginTop: 15
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	button: {
		margin: '15px 0',
		width: 100
	}
});

const paperStyle = {
	margin: '0 auto',
	width: '60%'
};

// COMPONENT DEFINITION
class Login extends Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = (email, password) => e => {
		this.setState({
			[email]: e.target.value,
			[password]: e.target.value,
		});
		console.log('%c e.target.value:', 'color: #308e7b', e.target.value);
	};

	handleSubmit = (e) => {
		console.log('%c this.state:', 'color: ##378cfc', this.state);
		e.preventDefault(e);
	}

	render() {
		const { classes } = this.props;
		const {
			email,
			password
		} = this.state;

		return (

			<Fragment>
				<h1> Login </h1>
				<Paper style={paperStyle}>
					<form
						className={classes.container}
						noValidate
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<TextField
							id="email"
							label="Email"
							placeholder="Enter Your Email"
							className={classes.textField}
							fullWidth
							margin="normal"
							onChange={this.handleChange('email')}
							value={email}
							required
						/>
						<TextField
							id="password"
							label="Password"
							placeholder="Enter Your Password"
							className={classes.textField}
							type="password"
							fullWidth
							margin="normal"
							autoComplete="current-password"
							onChange={this.handleChange('password')}
							value={password}
						/>
						<Button
							color='primary'
							className={classes.button}
							variant='raised'
							type="submit"
							value="Submit"
							onClick={this.handleSubmit}
							required
						>
							Login
  				</Button>
					</form>
				</Paper>
			</Fragment>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Login));