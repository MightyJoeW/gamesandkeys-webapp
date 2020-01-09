import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { navigate } from '@reach/router';
import Divider from '@material-ui/core/Divider';

const Footer = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			overflow: 'hidden',
			position: 'fixed',
			bottom: 0,
			width: '100%',
			[theme.breakpoints.down('xs')]: {
				display: 'none',
			},
		},
		footerText: {
			fontSize: '1rem',
			margin: 30
		},
		backToTop: {
			marginLeft: 'auto'
		},
	}));

	const classes = useStyles();
	const date = new Date();
	const year = date.getFullYear();
	return (
		<Fragment>
			<div className={classes.root}>
				<Divider />

				<div className={classes.footerText}>© Copyright {year} | GamesAndKeys.com </div>
				{/* <div onClick={() => navigate('/')}>Privacy · </div> */}
				{/* <div onClick={() => navigate('/')}>Terms · </div> */}
				{/* <div className={classes.backToTop} onClick={() => navigate('/')}>Back to top</div> */}
			</div>
		</Fragment>
	);
};

export default Footer;