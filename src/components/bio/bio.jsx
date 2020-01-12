import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';
import { blogPosts } from '../blog/blog';

const Bio = () => {
	const useStyles = makeStyles(theme => ({
		image: {
			borderRadius: '50%',
			width: 60,
			marginTop: 30
		},
		bio: {
			width: '70vw',
			margin: '0 auto 45px auto',
			padding: 15,
			textAlign: 'center',
			[theme.breakpoints.down('sm')]: {
				width: '90vw'
			},
		},
	}));
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.bio}>
			<img
				className={classes.image}
				src="https://lh3.googleusercontent.com/a-/AAuE7mAcrGE_SCjrxH5UM3AZyuTnA4f2K-VUJQi_9IBkJME=s88-c-k-c0x00ffffff-no-rj-mo"
				alt="Joe Warren Vector"
			/>
			<h1>Joe Warren</h1>
			<p>Musician turned software developer - <a href="http://mightyjoetech.com/" target="_blank" rel="noopener noreferrer">mightyjoetech.com</a></p>
			<p><a href="https://twitter.com/MightyJoeW" target="_blank" rel="noopener noreferrer">@mightyjoew</a></p>
			{blogPosts()}
		</div>
	);
};

export default Bio;