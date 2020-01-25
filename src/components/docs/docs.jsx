import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';

// INTERNAL DEPENDENCIES
import { trackingId } from '../../keys';

import DocsSideDrawer from './docs-side-drawer';

const Docs = () => {
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
			// I also have the chrome extension with localhost/* whitelisted

		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<Fragment>
			<DocsSideDrawer />
		</Fragment>

	);
};

export default Docs;