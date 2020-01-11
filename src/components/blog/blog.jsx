import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';

// INTERNAL DEPENDENCIES
import { trackingId } from '../../keys';
import BlogCard from './blog-card';

const useStyles = makeStyles(theme => ({
	pageTitle: {
		width: '65vw',
		margin: '45px auto',
		[theme.breakpoints.down('sm')]: {
			width: '90vw'
		},
	},
}));

const Blog = () => {
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
			<BlogCard
				title="Launch of the New Homepage"
				preview="It is with great excitement that the launch of the new homepage is finally here! What began as an entry to a Naughty Dog video content organically blossomed into a..."
				date="January 12th, 2020"
				route="/launch-of-the-new-homepage"
			/>
			<BlogCard
				title="How to Download PDF's on Mobile"
				preview="If you are using mobile..."
				date="January 10th, 2020"
				route="#"
			/>
		</Fragment >

	);
};

export default Blog;