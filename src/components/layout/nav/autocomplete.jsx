/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';

const useStyles = makeStyles(theme => ({
	comboBox: {
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 300,
		},
	},
}));

export default function ComboBox() {
	const classes = useStyles();
	const [value, setValue] = useState(null);

	return (
		<Autocomplete
			autoComplete={true}
			className={classes.comboBox}
			id="combo-box"
			options={tutorialList}
			getOptionLabel={option => option.title}
			renderInput={params => (
				<TextField {...params} variant="outlined" fullWidth placeholder="Search..." />
			)}
			onChange={(event, newValue) => {
				setValue(newValue);
				navigate(newValue.route);
				setValue(null);
			}}
			value={value}
		/>
	);
}

const tutorialList = [
	{ title: '1001 Spikes Main Theme', game: '1001 Spikes', route: '/1001-spikes-main-theme' },
	{ title: 'Beyond E3 Trailer', game: 'Beyond Two Souls', route: '/beyond-e3-trailer' },
	{ title: 'Beyond Two Souls: Main Theme', game: 'Beyond Two Souls', route: '/beyond' },
	{ title: 'Childhood Memories', game: 'Beyond Two Souls', route: '/childhood-memories' },
	{ title: 'My Imaginary Friend', game: 'Beyond Two Souls', route: '/my-imaginary-friend' },
	{ title: 'Oil Spill', game: 'Bob\'s Burgers', route: 'oil-spill' },
	{ title: 'Winged Hope ', game: 'Brothers: A Tale of Two Sons', route: '/brothers-main-theme' },
	{ title: 'Stray Sheep', game: 'Catherine', route: '/stray-sheep' },
	{ title: 'Chroma: Announce Trailer Theme', game: 'Chroma', route: '/chroma-trailer-theme' },
	{ title: 'Trailer Theme (Odgens Nut Gone Flake)', game: 'Grand Theft Auto V', route: '/grand-theft-auto-v-trailer-theme' },
	{ title: 'Second Son (trailer theme)', game: 'inFAMOUS Second Son', route: '/second-son' },
	{ title: 'Piano Fire', game: 'Life is Strange', route: '/piano-fire' },
	{ title: 'Dead Voxel', game: 'Minecraft', route: '/dead-voxel' },
	{ title: 'Ki', game: 'Minecraft', route: '/ki' },
	{ title: 'Moog City 2', game: 'Minecraft', route: '/moog-city-2' },
	{ title: 'Ride Wit Me', game: 'NBA Street', route: '/ride-wit-me' },
	{ title: 'Perfect Day', game: 'Playstation Commercial', route: '/playstation-commercials' },
	{ title: 'Pokemon League Theme', game: 'Pokemon X and Y', route: '/pokemon-league' },
	{ title: 'Resident Evil 0 Safe Haven', game: 'Resident Evil', route: '/resident-evil-0-safe-haven' },
	{ title: 'Resident Evil Revelations Menu Theme', game: 'Resident Evil Revelations', route: '/resident-evil-revelations-menu-theme' },
	{ title: 'Previous Story', game: 'Resident Evil Revelations', route: '/resident-evil-revelations-previous-story' },
	{ title: 'All Gone (Aftermath)', game: 'The Last of Us', route: '/all-gone-aftermath' },
	{ title: 'All Gone (No Escape)', game: 'The Last of Us', route: '/all-gone-no-escape' },
	{ title: 'Fleeting', game: 'The Last of Us', route: '/fleeting' },
	{ title: 'Home', game: 'The Last of Us', route: '/home' },
	{ title: 'Left Behind', game: 'The Last of Us', route: '/left-behind' },
	{ title: 'Left Behind (Together)', game: 'The Last of Us', route: '/left-behind-together' },
	{ title: 'Salt Of The Earth', game: 'The Last of Us', route: '/salt-of-the-earth' },
	{ title: 'The Choice', game: 'The Last of Us', route: '/the-choice' },
	{ title: 'The Last of Us (Goodnight)', game: 'The Last of Us', route: '/the-last-of-us-goodnight' },
	{ title: 'The Last of Us Main Theme', game: 'The Last of Us', route: '/the-last-of-us-theme' },
	{ title: 'The Path (A New Beginning)', game: 'The Last of Us', route: '/the-path-a-new-beginning' },
	{ title: 'The Way It Was', game: 'The Last of Us', route: '/the-way-it-was' },
	{ title: 'Vanishing Grace (Innocence)', game: 'The Last of Us', route: '/vanishing-grace-innocence' },
	{ title: 'The Walking Dead Game - Main Theme', game: 'The Walking Dead Game', route: '/the-walking-dead-game-main-theme' },
	{ title: 'Reveal Trailer Theme (In The Water)', game: 'The Walking Dead Season 2', route: '/the-walking-dead-game-season-2-reveal-trailer' },
	{ title: 'Where Are You', game: 'Thomas Was Alone', route: '/where-are-you' },
	{ title: 'Old Friends', game: 'Transistor', route: '/old-friends' },
	{ title: 'Drake\'s Return', game: 'Uncharted', route: '/drakes-return' },
	{ title: 'Museum Bust', game: 'Uncharted', route: '/museum-bust' },
	{ title: 'Small Beginnings', game: 'Uncharted', route: '/small-beginnings' },
	{ title: 'The Last of Uncharted', game: 'Video Game Mashups', route: '/the-last-of-uncharted' }
];
