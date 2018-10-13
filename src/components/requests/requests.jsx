// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { connect } from 'react-redux';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// INTERNAL DEPENDENCIES
import { updateRequestTitle } from '../../state/reducer';

// LOCAL VARIABLES
const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
});

const paperStyle = {
	margin: '0 auto',
	width: '60%',
};

// COMPONENT DEFINITION
class Requests extends Component {

	handleChange = (title, composer, url) => e => {
		this.setState({
			[title]: e.target.value,
			[composer]: e.target.value,
			[url]: e.target.value,
		});
		console.log(e.target.value);
	};

	handleSubmit = (e) => {
		// updateRequestTitle = () => {

		// }
		this.setState({
			title: '',
			composer: '',
			url: '',
		});

		e.preventDefault(e);

		// axios.post('/requests', {
		//   name: 'Joe'
		// })
		//   .then(res => {
		//     console.log(res);
		//     console.log(res.data);
		//   })
	}

	render() {
		const { classes } = this.props;
		const {
			title,
			composer,
			url,
		} = this.props;

		return (
			<Paper style={paperStyle}>
				<form
					className={classes.container}
					noValidate
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<TextField
						id="song-title"
						label="Song Title"
						placeholder="Enter Song Title"
						className={classes.textField}
						margin="normal"
						onChange={this.handleChange('title')}
						value={title}
						required
					/>
					<TextField
						id="song-artist"
						label="Song Artist/Composer"
						placeholder="Optional"
						className={classes.textField}
						margin="normal"
						onChange={this.handleChange('composer')}
						value={composer}
					/>
					<TextField
						id="song-link"
						label="Song Link"
						placeholder="Optional"
						className={classes.textField}
						margin="normal"
						onChange={this.handleChange('url')}
						value={url}
					/>
					<Button
						color='primary'
						variant='raised'
						style={{ width: 100 }}
						type="submit"
						value="Submit"
						onClick={updateRequestTitle()}
					>
						Submit
  				</Button>
				</form>

				{/* Find way to make the requested title appear eve though I'm setting title back to '' to clear the form onSubmit */}
				{/* {title &&
          <div>
            You've requested the song {title
              .toLowerCase()
              .split(' ')
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(' ')
            }.
          </div> */}
			</Paper>
		);
	}
}

Requests.propTypes = {
	classes: PropTypes.object.isRequired,
	onUpdateRequestTitle: PropTypes.func.isRequired,
};

// Below, we are mapping state to props and dispatching
// Same layout as with mapStateToProps:
//   export default connect (state, { dispatched action })(Component)
// set onUpdateRequestTitle to updateRequestTitle for clarity in code

export default connect(state => { }, {
	onUpdateRequestTitle: updateRequestTitle,
})(withStyles(styles)(Requests));