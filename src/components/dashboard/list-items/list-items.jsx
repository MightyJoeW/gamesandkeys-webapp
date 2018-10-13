// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// LOCAL VARIABLES
const styles = {
	button: {
		margin: '0 auto',
		marginBottom: 15,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		// justifyContent: 'center',
		maxWidth: 2000,
	},
	card: {
		margin: '15px 5px',
		maxHeight: 325,
		minWidth: 275,
		textAlign: 'center',
		textDecoration: 'none',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	thumbnail: {
		width: 227,
		height: 170,
	}
};


// COMPONENT DEFINITION
class ListItems extends Component {
	state = {
		games: []
	}

	componentDidMount() {
		axios.get('https://raw.githubusercontent.com/MightyJoeW/gamesandkeys-webapp/master/src/services/db.json').then(res => {
			console.log('res.data', res.data);
			this.setState({
				games: res.data.games
			});
		});
	};

	render() {
		const { classes } = this.props;
		const { games } = this.state;
		// console.log({ games });
		return (
			<div style={styles.container}>
				{games.map(game => (
					<Card
						className={classes.card}
						component="a"
						game={game}
						href={game.url}
						key={game.name}
					>
						<CardContent>
							<img
								alt={game.name}
								className={classes.thumbnail}
								src={game.backgroundImageURL}
							/>
							<Typography variant="headline" component="h2" style={{ fontWeight: 700 }}>
								{/* To prevent titles from using two lines, only allow 16 characters followed by ... */}
								{game.name.length > 16 ? `${game.name.slice(0, 16)}...` : game.name}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								className={classes.button}
								color="primary"
								size="small"
								variant="raised"
							>
								Downloads
							</Button>
						</CardActions>
					</Card>
				))
				}
			</div>
		);
	}
}

ListItems.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItems);