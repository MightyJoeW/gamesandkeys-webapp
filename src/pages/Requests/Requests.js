// External Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

//Local Variables
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
}

const INITIAL_STATE = {
  composer: '',
  name: '',
  url: '',
}

// Component Definition
class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = () => {
    console.log('Clicked Submit button');
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={paperStyle}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="song-title"
            label="Song Title"
            placeholder="Enter Song Title"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('name')}
            required
            fullWidth
          />
          <TextField
            id="song-artist"
            label="Song Artist/Composer"
            placeholder="Optional"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="song-link"
            label="Song Link"
            placeholder="Optional"
            className={classes.textField}
            margin="normal"
          />
          <Button
            color='primary'
            onClick={() => this.handleSubmit()}
            variant='raised'
            style={{ width: 100 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

Requests.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Requests);