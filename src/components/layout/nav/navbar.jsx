import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ComboBox from './autocomplete';
import { navigate } from '@reach/router';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		textDecoration: 'none',
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		marginRight: 15,
		cursor: 'pointer'
	},
	logo: {
		margin: '0 10px'
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
		cursor: 'pointer'
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

export default function Navbar(props) {
	const classes = useStyles();
	const siteTitle = 'Games and Keys';
	const [newRender, triggerNewRender] = useState(false);

	const handleClick = (route) => {
		triggerNewRender(!newRender); // creates a render to toggle the fixed navbar
		navigate(route);
	};

	return (
		// setting navbar to fixed when using side drawer to eliminate gap on mobile horizontal
		<div className={window.location.pathname === '/docs'
			? props.navbarFixed
			: props.navbar
		}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						aria-label="Logo"
						className={classes.logo}
						color="inherit"
						onClick={() => handleClick('/')}
					>
						<MusicIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap onClick={() => handleClick('/')}>
						{siteTitle}
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleClick('/docs')}>
						Docs
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleClick('/tutorials')}>
						Tutorials
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleClick('/blog')}>
						Blog
					</Typography>
					<div className={classes.search}>
						<ComboBox />
					</div>
					<IconButton
						aria-label="Logo"
						className={classes.logo}
						color="inherit"
						onClick={props.toggleMode}
					>
						{props.mode === 'light' ? <Brightness3Icon /> : <WbSunnyIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
