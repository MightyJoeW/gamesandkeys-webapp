// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import ReactGA from 'react-ga';

// INTERNAL DEPENDENCIES
import { trackingId } from '../../keys';

// LOCAL DEPENDENCIES
import './error-page.scss';

// COMPONENT DEFINITION
const ErrorPage = () => {
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
			// I also have the chrome extension with localhost/* whitelisted

		});
		ReactGA.pageview(`Error page: ${window.location.pathname + window.location.search}`);
	}, []);
	return (
		<div className="error-page">
			<p className="error-page__row error-page__row--top"> 404 </p>
			<p className="error-page__row error-page__row--second">Not Found</p>
			<p className="error-page__row error-page__row--bottom">
				The page you are looking for doesn't exist.
				<Link className="error-page__link" to="/">
					&nbsp;Return Home
				</Link>.
			</p>
		</div>

	);
};

export default ErrorPage;
