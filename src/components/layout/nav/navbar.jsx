import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		textDecoration: 'none',
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		marginRight: 15
	},
	link: {
		textDecoration: 'none',
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		textAlign: 'center',
		margin: '0 10px',
		fontSize: '1rem',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: 'auto',
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
}));


export default function Navbar() {
	const classes = useStyles();
	const siteTitle = 'Games and Keys';
	const [term, setTerm] = useState('N/A');
	const onInputChange = term => {
		setTerm(term);
		console.log(term);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						aria-label="Logo"
						className={classes.logo}
						color="inherit"
						component="a"
						href="/"
					>
						<MusicIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap component="a" href="/">
						{siteTitle}
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap component="a" href="/docs">
						Docs
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap component="a" href="/library">
						Tutorials
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap component="a" href="/blog">
						Blog
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
							onChange={e => onInputChange(e.target.value)}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
