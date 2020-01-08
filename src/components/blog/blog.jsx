import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';

// INTERNAL DEPENDENCIES
import { trackingId } from '../../keys';

import BlogSideDrawer from './blog-side-drawer';

const Blog = () => {
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
			// I also have the chrome extension with localhost/* whitelisted

		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<Fragment>
			<BlogSideDrawer />
		</Fragment>

	);
};

export default Blog;