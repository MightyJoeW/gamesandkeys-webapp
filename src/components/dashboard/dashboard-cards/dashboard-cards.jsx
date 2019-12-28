// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		marginBottom: 15
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: 2000
	},
	card: {
		margin: '15px 5px',
		maxHeight: 325,
		minWidth: 275,
		textAlign: 'center',
		textDecoration: 'none'
	},
	title: {
		marginBottom: 16,
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	thumbnail: {
		width: 227,
		height: 170
	}
};

// COMPONENT DEFINITION
class DashboardCards extends Component {
	state = {
		games: [
			{
				'name': '1001 Spikes',
				'url': '1001-spikes',
				'id': 1,
				'backgroundImageURL': 'https://i.ytimg.com/vi/hX0L_VG9K68/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'Tadd Nuznov; Misoka Panipum',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Beyond Two Souls',
				'url': 'beyond-two-souls',
				'id': 2,
				'backgroundImageURL': 'https://i.ytimg.com/vi/B_jnltymaTg/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'Lorne Balfe',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Brothers: A Tale of Two Sons',
				'url': 'brothers',
				'id': 3,
				'backgroundImageURL': 'https://i.ytimg.com/vi/VzKSLGtN09I/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'Gustaf Grefberg',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Catherine',
				'url': 'catherine',
				'id': 4,
				'backgroundImageURL': 'https://i.ytimg.com/vi/zfYB0tzjOyk/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'Shoji Meguro',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Chroma',
				'url': 'chroma',
				'id': 5,
				'backgroundImageURL': 'https://lh3.googleusercontent.com/proxy/TbfYpU1F-BDZZNKZ5Nx_Std5tvqS7qQJ8zfXEooF9DPiTqOR5ii-5XrrUdKgaPVHckWCfKE_Zwqs5gY6oEPzMszLjFY=w1200-h630-n-k-no-nu',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Grand Theft Auto V',
				'url': 'grand-theft-auto',
				'id': 6,
				'backgroundImageURL': 'https://i.ytimg.com/vi/xDAtuAotJuo/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'The Small Faces',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'inFAMOUS Second Son',
				'url': 'infamous',
				'id': 7,
				'backgroundImageURL': 'https://i.ytimg.com/vi/HsMitMHRHos/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'Marc Canham, Nathan Johnson and Brain',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Life Is Strange',
				'url': 'life-is-strange',
				'id': 8,
				'backgroundImageURL': 'https://i.ytimg.com/vi/kPzFk_mytr0/maxresdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Minecraft',
				'url': 'minecraft',
				'id': 9,
				'backgroundImageURL': 'https://i.ytimg.com/vi/Xoaor-shCps/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'NBA Street Vol. 2',
				'url': 'nba-street',
				'id': 10,
				'backgroundImageURL': 'https://i.ytimg.com/vi/ModmUekQRvg/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Playstation Commercials',
				'url': 'playstation-commercials',
				'id': 11,
				'backgroundImageURL': 'https://i.ytimg.com/vi/5lOQZbicoN4/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Pokemon',
				'url': 'pokemon',
				'id': 12,
				'backgroundImageURL': 'https://i.ytimg.com/vi/LJvCmaAHKcE/maxresdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Resident Evil',
				'url': 'resident-evil',
				'id': 13,
				'backgroundImageURL': 'https://i.ytimg.com/vi/r9p2FxjKy0k/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'The Last of Us',
				'url': 'the-last-of-us',
				'id': 14,
				'backgroundImageURL': 'https://i.ytimg.com/vi/j6X1QR0xgHY/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'The Walking Dead Game',
				'url': 'the-walking-dead-game',
				'id': 15,
				'backgroundImageURL': 'https://i.ytimg.com/vi/Y5gpXe4WV7k/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Thomas Was Alone',
				'url': 'thomas-was-alone',
				'id': 16,
				'backgroundImageURL': 'https://i.ytimg.com/vi/spDdgUqgxBo/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Transistor',
				'url': 'transistor',
				'id': 17,
				'backgroundImageURL': 'https://i.ytimg.com/vi/Hr8Xs0AlLdI/maxresdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Uncharted 3',
				'url': 'uncharted',
				'id': 18,
				'backgroundImageURL': 'https://i.ytimg.com/vi/VCKXbo42CZ8/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			},
			{
				'name': 'Video Game Piano Mashups',
				'url': 'mashups',
				'id': 19,
				'backgroundImageURL': 'https://i.ytimg.com/vi/EfawmKPbi-E/hqdefault.jpg',
				'category': 'Games',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			}
		],
		'shows': [
			{
				'name': 'Bob\'s Burgers',
				'url': 'bobs-burgers',
				'id': 20,
				'backgroundImageURL': 'https://i.ytimg.com/vi/0bNEkJ5JBvc/hqdefault.jpg',
				'category': 'Shows',
				'info': {
					'originalComposer': 'xyz',
					'transcriber': 'Joe Warren',
					'twitter': 'xyz'
				}
			}
		]
	};

	render() {
		const { classes } = this.props;
		const { games } = this.state;
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
							<Typography
								variant="headline"
								component="h2"
								style={{ fontWeight: 700 }}
							>
								{/* To prevent titles from using two lines, only allow 16 characters followed by ... */}
								{game.name.length > 16
									? `${game.name.slice(0, 16)}...`
									: game.name}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								className={classes.button}
								color="primary"
								size="small"
								variant="contained"
							>
								Downloads
  						</Button>
						</CardActions>
					</Card>
				))}
			</div>
		);
	}
}

DashboardCards.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardCards);
