import React from 'react';
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
	root: {
		flexGrow: 1
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

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						aria-label="Logo"
						className={classes.logo}
						color="inherit"
						onClick={() => navigate('/')}
					>
						<MusicIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap onClick={() => navigate('/')}>
						{siteTitle}
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => navigate('/docs')}>
						Docs
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => navigate('/tutorials')}>
						Tutorials
					</Typography>
					<Typography className={classes.link} variant="h6" noWrap onClick={() => navigate('/blog')}>
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
