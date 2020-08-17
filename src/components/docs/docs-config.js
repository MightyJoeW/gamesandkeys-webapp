import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

export const Introduction = () => (
	<Fragment>
		<Typography style={{ fontSize: '3rem' }} variant="h1" gutterBottom>Introduction</Typography>
		<Typography paragraph>
			GamesAndKeys is a learning platform with the primary goal of teaching musicians how to
			play video game songs on the piano. The video content uses <a style={{ color: '#b17acc', textDecoration: 'none' }} href="https://synthesiagame.com/" target="_blank" rel="noopener noreferrer"><em>Synthesia Game</em></a>, piano keyboard trainer.
			Synthesia includes many useful features such as notes that light up and tempo adjustments.
		</Typography>

		<figure>
			<img src="static/docs/synthesia.png" alt="Synthesia User Interface" height="auto" width="100%" />
			<figcaption>Fig.1 - Synthesia Game Songs Screen</figcaption>

		</figure>

		<Typography paragraph>
			In addition to the Synthesia videos, you can also download sheet music and midi files for each
			song. Each sheet is a pdf that can be saved or printed. Each midi file can also be downloaded
			and opened up in any digital audio workstation (music software).
		</Typography>
		<figure>
			<img src="static/docs/tlou-gb.png" alt="Synthesia User Interface" height="auto" width="100%" caption="GB" />
			<figcaption>Fig.2 - Midi File in Garage Band</figcaption>
		</figure>

	</Fragment>
);

export const QuickStart = () => (
	<Fragment>
		<Typography style={{ fontSize: '3rem' }} variant="h1" gutterBottom>Quick Start</Typography>
		<Typography paragraph>
			To begin learning, use the Search bar to search for your tutorial. To see a full list of
			available tutorials, click the <em>Tutorials</em> link. Click the game title followed by the song title
			to navigate to its downloads page.
		</Typography>
		<Typography paragraph>
			On the downloads page, you can watch the piano tutorial, download the sheet music, and download the midi file.
		</Typography>
	</Fragment>
);

export const Downloading = () => (
	<Fragment>
		<Typography style={{ fontSize: '3rem' }} variant="h1" gutterBottom>Downloading</Typography>
		<Typography paragraph>
			On desktop, simply click on the Sheet Music button or the Midi File button on the download
			page to save the file on your computer.
		</Typography>
		<Typography paragraph>
			On mobile devices, click on Sheet Music button and use any method to save (take a screenshot, save to files, share to a device, etc.). For midi files, click on the Midi File button to bring up the save option.
		</Typography>
	</Fragment>
);

export const Synthesia = () => (
	<Fragment>
		<Typography style={{ fontSize: '3rem' }} variant="h1" gutterBottom>Synthesia</Typography>
		<Typography paragraph>
			Synthesia utilizes midi files to create visual tutorials. If you download the Synthesia
         software from <a style={{ color: '#b17acc', textDecoration: 'none' }} href="https://synthesiagame.com/" target="_blank" rel="noopener noreferrer"><em>Synthesia Game</em></a>, you can open the midi file and utilize features such as slowing down
the tempo for easier learning.
		</Typography>
		<Typography paragraph>
			You can also open the midi file in any other music program such as Garage Band, Logic Pro, Pro Tools, FL Studio, etc. Doing
			so allows you to have complete control over the midi file. You can move notes around, add notes,
			use the chords to create other music, etc.
		</Typography>
	</Fragment>
);