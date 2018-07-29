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
  title: '',
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

  handleChange = (title, composer, url) => e => {
    this.setState({
      [title]: e.target.value,
      [composer]: e.target.value,
      [url]: e.target.value,
    });
    console.log(e.target.value)
  };

  handleSubmit(e) {
    this.setState({
      title: this.state.title,
      composer: this.state.composer,
      url: this.state.url,
    })
    e.preventDefault(e);
    console.log(`Title: ${this.state.title}`);
    console.log(`Composer: ${this.state.composer}`);
    console.log(`Url: ${this.state.url}`);
  }

  render() {
    const { classes } = this.props;

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
            required
          />
          <TextField
            id="song-artist"
            label="Song Artist/Composer"
            placeholder="Optional"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('composer')}
          />
          <TextField
            id="song-link"
            label="Song Link"
            placeholder="Optional"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('url')}
          />
          <Button
            color='primary'
            variant='raised'
            style={{ width: 100 }}
            type="submit"
            value="Submit"
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