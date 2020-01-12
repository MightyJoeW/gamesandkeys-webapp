import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Post0 = () => {
	const useStyles = makeStyles(theme => ({
		container: {
			width: '70vw',
			margin: '0 auto 45px auto',
			padding: 15,
			[theme.breakpoints.down('sm')]: {
				width: '90vw'
			},
		}
	}));
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<h1> New YouTube Channel for Tutorials </h1>
			<p></p>
		</div>
	);
};

export default Post0;