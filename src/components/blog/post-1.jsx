import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Post1 = () => {
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
			<h1> Launch of the new Site </h1>
			<p>Welcome to the new GamesAndKeys website!  </p>
			<p>GamesAndKeys was not a planned resource, but developed organically overtime. It all began when I entered Naughty Dog's
			Firefly Pendant Contest back in 2013. The content was to create a The Last of Us themed video for a chance to get your name
			in the game. For my entry, I dressed up as one of theh characters from the trailer and played the main theme on the piano.
			</p>
			<p>I was named one of the winners, so my name was added to the game! This was an incredible honor as The Last of Us is 
			one of my favorite games of all times. Now, you can find my name on a pendant after defeating one of the bloaters. 
			After the video started getting attention on YouTube, I had a few people asking how to play the song. This lef me to creating
			a synthesia video showing the notes that I played in my entry.</p>
			<p>This video led to requests for more songs. I started doing more and more tutorials, and the videos were becoming 
			quite popular.</p>
			<p>At this point, I was starting to get requests for sheet music and midi files. This added many extra steps to the process,
			but I was happy to provide useful content to other music and game enthusiast. The problems arose, though, when trying to 
			find a free option for offering downloadable files in bulk. This led to my initial site on Blogspot. My workaround was
			to create pages for each tutorial with links to a Google Drive folder that had all of the downloadable content. 
			</p>
			<p>This worked well until I hit the limit. So I created a second folder which worked well until it also hit its limit. 
			This clearly wasn't a viable long-term option. Fast-forward a 4 years and I stubmbled upon a new passion for coding.
			I went all in and actually made a career transition into software development which brought me back to GamesAndKeys.
			I had picked up many skills that would allow me to build out a new site from scratch to offer these resources.</p>
			<p>The site is still a work in progress, but the most important part of the site is available, and that's the downloadable
			sheet music and midi files.</p>
			<p>I hope the content is helpful, and I look forward to making improvements to continue facilitating the learning of video game
			music!</p>
		</div>
	);
};

export default Post1;