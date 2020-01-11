import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { navigate } from '@reach/router';


const useStyles = makeStyles(theme => ({
	card: {
		width: '70vw',
		margin: '0 auto 45px auto',
		padding: 15,
		[theme.breakpoints.down('sm')]: {
			width: '90vw'
		},
	},
	image: {
		borderRadius: '50%',
		width: 30
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function BlogCard(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<Card className={classes.card} onClick={() => navigate(props.route)} >
				<CardContent>
					<Typography variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" component="p">
						{props.preview}
					</Typography>
				</CardContent>
				<CardActions>
					<img className={classes.image} src="https://lh3.googleusercontent.com/a-/AAuE7mAcrGE_SCjrxH5UM3AZyuTnA4f2K-VUJQi_9IBkJME=s88-c-k-c0x00ffffff-no-rj-mo" />
					<a href="#" className={classes.author}>Joe Warren</a>
					<span>on {props.date}</span>
				</CardActions>
			</Card >
		</Fragment>
	);
}
