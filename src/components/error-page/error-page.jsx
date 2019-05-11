// EXTERNAL DEPENDENCIES
import React from 'react';
import { Link } from '@reach/router';

// LOCAL DEPENDENCIES
import './error-page.scss';

// COMPONENT DEFINITION
const ErrorPage = () => (
	<div className="error-page">
		<p className="error-page__row error-page__row--top"> 404 </p>
		<p className="error-page__row error-page__row--second">Not Found</p>
		<div
			className="error-page__img"
		/>
		<p className="error-page__row error-page__row--bottom">
			The page you are looking for doesn't exist.
			<Link className="error-page__link" to="/">
				&nbsp;Return Home
			</Link>.
		</p>
	</div>
);

export default ErrorPage;
