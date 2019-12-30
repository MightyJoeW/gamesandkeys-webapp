// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// INTERNAL DEPENDENCIES
import App from './app';

ReactDOM.render(
	<Fragment>
		<App />
	</Fragment>,
	document.getElementById('root')
);
registerServiceWorker();
