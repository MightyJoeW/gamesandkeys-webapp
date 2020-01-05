import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';

const useStyles = makeStyles(theme => ({
	root: {
		overflow: 'hidden',
		position: 'fixed',
		bottom: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

export default function BottomNav() {
	const classes = useStyles();
	const [value, setValue] = useState('docs');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction label="Docs" value="docs" icon={<FolderIcon />} />
			<BottomNavigationAction label="Tutorials" value="tutorials" icon={<MusicNoteIcon />} />
			<BottomNavigationAction label="Blog" value="blog" icon={<ComputerIcon />} />
		</BottomNavigation>
	);
}
