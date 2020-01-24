import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Post0 = () => {
	const useStyles = makeStyles(theme => ({
		container: {
			width: '50vw',
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
			<h1> New GameAndKeys YouTube Channel </h1>
			<img className={classes.gif} src="static/blog-0-images/2020-01-12-gak-yt.png" alt="GamesAndKeys YouTube Channel" height="auto" width="100%" />
			<p>I have created a new channel that is dedicated 100% to videogame piano tutorials <a href="https://www.youtube.com/channel/UC4bMF2-gYaHNfVg0BIRlmtQ" target="_blank" rel="noopener noreferrer">here</a>. This channel is dedicated solely to video game piano tutorials.</p>

			<p>Previously, I utilized my <a href="https://www.youtube.com/mightyjoew" target="_blank" rel="noopener noreferrer">mightyjoew</a> channel to upload the tutorials, but I also uploaded lots of other content including remixes, performances, songs, skits, podcasts, reviews, and tech talks.</p>

			<p>I did find that fans of certain types of content enjoyed my other content, but creating a channel specficially for the video game piano tutorials will make it a faster, cleaner process for those only interested in that content.</p>

			<p>As of this post, I have reuploaded everything existing tutorial to this channel. When I create new video game piano tutorials, it will be uploaded to the <a href="https://www.youtube.com/channel/UC4bMF2-gYaHNfVg0BIRlmtQ" target="_blank" rel="noopener noreferrer">GamesAnyKeys YouTube channel</a>.</p>
		</div >
	);
};

export default Post0;