import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { navigate } from '@reach/router';
import ReactGA from 'react-ga';

import { Introduction, QuickStart, Synthesia, Downloading } from './docs-config';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		marginTop: 64
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	doc: {
		[theme.breakpoints.up('sm')]: {
			width: '50vw',
			margin: '0 auto'
		}
	}
}));

function DocsSideDrawer(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentDoc, setCurrentDoc] = useState('Introduction');

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleClickForward = doc => {
		if (currentDoc !== 'Synthesia') {
			ReactGA.event({
				category: 'Docs',
				action: `Clicked ${doc} link`,
				label: `${doc} link`
			});
			return setCurrentDoc(doc);
		} else if (currentDoc === 'Synthesia') {
			ReactGA.event({
				category: 'Docs',
				action: `Clicked Tutorials link from docs`,
				label: `${doc} link`
			});
			return navigate('/tutorials');
		} else {
			return null;
		}
	};

	const handleClickBack = doc => {
		ReactGA.event({
			category: 'Docs',
			action: `Clicked ${doc} link`,
			label: `${doc} link`
		});
		return setCurrentDoc(doc);
	};

	const drawer = (
		<div>
			<List>
				{['Introduction', 'Quick Start', 'Downloading', 'Synthesia'].map(text => (
					<ListItem button key={text} onClick={() => handleClickForward(text)}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />

			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography paragraph className={classes.doc}>

					{/* cleanup in refactor */}
					{currentDoc === 'Introduction' ? <Introduction />
						: currentDoc === 'Quick Start' ? <QuickStart />
							: currentDoc === 'Downloading' ? <Downloading />
								: currentDoc === 'Synthesia' ? <Synthesia />
									: null
					}
				</Typography>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p style={{ textAlign: 'left', fontWeight: 700, color: '#2196f3', cursor: 'pointer' }} onClick={() => handleClickBack(currentDoc === 'Introduction' ? null
						: currentDoc === 'Quick Start' ? 'Introduction'
							: currentDoc === 'Downloading' ? 'Quick Start'
								: currentDoc === 'Synthesia' ? 'Downloading'
									: null)}>
						{
							currentDoc === 'Introduction' ? null
								: currentDoc === 'Quick Start' ? '<- Introduction'
									: currentDoc === 'Downloading' ? '<- Quick Start'
										: currentDoc === 'Synthesia' ? '<- Downloading'
											: null
						}
					</p>

					<p style={{ textAlign: 'right', fontWeight: 700, color: '#2196f3', cursor: 'pointer' }} onClick={() => handleClickForward(currentDoc === 'Introduction' ? 'Quick Start'
						: currentDoc === 'Quick Start' ? 'Downloading'
							: currentDoc === 'Downloading' ? 'Synthesia'
								: currentDoc === 'Synthesia' ? 'Tutorials'
									: null)}>
						{
							currentDoc === 'Introduction' ? 'Quick Start ->'
								: currentDoc === 'Quick Start' ? 'Downloading ->'
									: currentDoc === 'Downloading' ? 'Synthesia ->'
										: currentDoc === 'Synthesia' ? 'Tutorials ->'
											: null
						}
					</p>
				</div>

			</main>
		</div>
	);
}

DocsSideDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default DocsSideDrawer;
