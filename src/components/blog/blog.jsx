import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';

// INTERNAL DEPENDENCIES
import { trackingId } from '../../keys';
import BlogCard from './blog-card';

const useStyles = makeStyles(theme => ({
	pageTitle: {
		width: '50vw',
		margin: '45px auto',
		[theme.breakpoints.down('sm')]: {
			width: '90vw'
		},
	},
}));

export const blogPosts = () => (
	<Fragment>
		<BlogCard
			title="Sheet Music Issue Fixed for Mobile Devices"
			preview="The long-time issue of attempting to view and download sheet music files on mobile devices has finally been resolved. The simple change..."
			date="August 15, 2020"
			route="/sheet-music-mobile-issue-fixed"
		/>
		<BlogCard
			title="Launch of the New Site"
			preview="Welcome to the new GamesAndKeys website! GamesAndKeys was not a planned resource, but developed organically overtime. It all began when..."
			date="January 25, 2020"
			route="/launch-of-the-new-site"
		/>
		<BlogCard
			title="New GameAndKeys YouTube Channel"
			preview="I have created a new channel that is dedicated 100% to videogame piano tutorials here.
			This channel is dedicated solely to..."
			date="January 25, 2020"
			route="/new-youtube-channel"
		/>
	</Fragment>
);

export const Blog = () => {
	const classes = useStyles();
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
			// I also have the chrome extension with localhost/* whitelisted

		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);


	return (
		<Fragment>
			<h1 className={classes.pageTitle}> Blog </h1 >
			{blogPosts()}
		</Fragment >

	);
};

export default Blog;