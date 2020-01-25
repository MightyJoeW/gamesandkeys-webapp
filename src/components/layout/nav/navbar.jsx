import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import IconButton from '@material-ui/core/IconButton';
import ComboBox from './autocomplete';
import { navigate } from '@reach/router';

const drawerWidth = 240;

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
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	toolbar: theme.mixins.toolbar,
}));

export default function Navbar(props) {
	const classes = useStyles();
	const siteTitle = 'Games and Keys';
	const [appbarPosition, setAppbarPosition] = useState('relative');

	useEffect(() => {
		// console.log(window.location.pathname);

		window.location.pathname === '/docs' ? setAppbarPosition('fixed') : setAppbarPosition('relative')
	}, [])

	const handleNavigate = route => {
		route === '/docs' ? setAppbarPosition('fixed') : setAppbarPosition('relative')
		navigate(route);
	}

	// console.log(window.location.pathname)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position={appbarPosition} className={classes.appBar}>
				<Toolbar>
					<IconButton
						aria-label="Logo"
						className={classes.logo}
						color="inherit"
						onClick={() => handleNavigate('/')}
					>
						<MusicIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap onClick={() => handleNavigate('/')}>
						{siteTitle}
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleNavigate('/docs')}>
						Docs
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleNavigate('/tutorials')}>
						Tutorials
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => handleNavigate('/blog')}>
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
